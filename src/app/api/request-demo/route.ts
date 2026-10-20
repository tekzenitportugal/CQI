import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const SECTORS: Record<string, string> = {
  telecom: 'Telecom',
  airlines: 'Airlines',
  banking: 'Banking',
  insurance: 'Insurance',
  'utilities-energy': 'Utilities & energy',
  'consumer-electronics': 'Consumer electronics',
  other: 'Other',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value: unknown, max = 200) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Basic per-IP throttle so a script can't flood the inbox. In-memory, so it is per server instance.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  if (recentRequests.size > 1000) {
    for (const [key, times] of recentRequests) {
      if (times.every((time) => now - time > RATE_WINDOW_MS)) recentRequests.delete(key);
    }
  }
  const times = (recentRequests.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  times.push(now);
  recentRequests.set(ip, times);
  return times.length > RATE_LIMIT;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.headers.get('x-real-ip');
  if (ip && isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name);
  const workEmail = clean(body.workEmail, 254);
  const organisation = clean(body.organisation);
  const role = clean(body.role);
  const sector = clean(body.sector);
  const country = clean(body.country);
  const message = clean(body.message, 2000);

  if (!name || !organisation || !role || !country) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(workEmail)) {
    return NextResponse.json({ error: 'Please enter a valid business email.' }, { status: 400 });
  }
  if (!SECTORS[sector]) {
    return NextResponse.json({ error: 'Please select an industry.' }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.DEMO_REQUEST_TO;
  const from = process.env.SMTP_FROM || user;

  if (!host || !user || !pass || !to || !from) {
    console.error('request-demo: SMTP_HOST, SMTP_USER, SMTP_PASS or DEMO_REQUEST_TO is not set.');
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Business email', workEmail],
    ['Company', organisation],
    ['Job title', role],
    ['Industry', SECTORS[sector]],
    ['Country/Region', country],
    ['Areas of interest', message || '—'],
  ];

  const html = `
    <h2>New demo request</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join('')}
    </table>`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: { user, pass },
    // Fail fast instead of nodemailer's multi-minute defaults, so "Sending…" never hangs.
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
  });

  // Wait for delivery so the visitor only sees the thank-you once the email has actually been sent.
  try {
    await transporter.sendMail({
      from,
      to: to.split(',').map((address) => address.trim()),
      replyTo: workEmail,
      subject: `Demo request${organisation ? ` — ${organisation}` : ''}`,
      html,
      text,
    });
  } catch (error) {
    console.error('request-demo: SMTP error', error);
    return NextResponse.json(
      {
        error:
          'Sorry, we couldn’t send your request just now. Please try again in a moment, or email us at marketing@cqisense.com.',
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

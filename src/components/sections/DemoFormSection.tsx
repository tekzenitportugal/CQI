'use client';

import { useState, type FormEvent } from 'react';
import { Container } from '@/components/ui/Container';
import styles from './DemoFormSection.module.scss';

export type DemoFormSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
};

type DemoFormSectionProps = {
  data: DemoFormSectionData;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

/** Figma "Tell us where to start" (6079:31685–31730). Submits to /api/request-demo. */
export function DemoFormSection({ data }: DemoFormSectionProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setErrorMessage('');

    let response: Response;
    try {
      response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
    } catch {
      // The request never reached the server (offline, dropped connection).
      setErrorMessage(
        'We couldn’t reach our server. Please check your internet connection and try again.',
      );
      setStatus('error');
      return;
    }

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      setErrorMessage(
        result.error ||
          'Sorry, we couldn’t send your request just now. Please try again in a moment, or email us at marketing@cqisense.com.',
      );
      setStatus('error');
      return;
    }

    form.reset();
    setStatus('success');
  }

  return (
    <section className={styles.section}>
      <Container className={styles.layout}>
        <div className={styles.heading}>
          <div className={styles.headingTitle}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <p className={styles.title}>{data.title}</p>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className={styles.honeypot}
          />
          <div className={styles.fields}>
            <label className={styles.field}>
              <span className={styles.label}>Name*</span>
              <input type="text" name="name" required className={styles.input} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Business Email*</span>
              <input type="email" name="workEmail" required className={styles.input} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Company*</span>
              <input type="text" name="organisation" required className={styles.input} />
            </label>

            <div className={styles.fieldRow}>
              <label className={styles.field}>
                <span className={styles.label}>Job title*</span>
                <input type="text" name="role" required className={styles.input} />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Industry*</span>
                <span className={styles.selectWrapper}>
                  <select name="sector" defaultValue="" required className={styles.select}>
                    <option value="" disabled hidden>
                      Select
                    </option>
                    <option value="telecom">Telecom</option>
                    <option value="airlines">Airlines</option>
                    <option value="banking">Banking</option>
                    <option value="insurance">Insurance</option>
                    <option value="utilities-energy">Utilities &amp; energy</option>
                    <option value="consumer-electronics">Consumer electronics</option>
                    <option value="other">Other</option>
                  </select>
                  <img
                    src="/images/shared/common/chevron-up-lg.svg"
                    alt=""
                    width={18}
                    height={18}
                    className={styles.selectIcon}
                    aria-hidden="true"
                  />
                </span>
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Country/ Region*</span>
              <input type="text" name="country" required className={styles.input} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>
                Areas of interest and anything specific you’d like us to cover in the demo.
              </span>
              <textarea name="message" className={styles.textarea} />
            </label>

            <div className={styles.note}>
              <p>Required fields are marked with *</p>
              <p>
                Never share sensitive information (credit card numbers, social security numbers,
                passwords) through this form.
              </p>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : data.submitLabel}
            </button>
            {status === 'success' && (
              <p className={styles.success} role="status">
                Thank you — we&apos;ve received your request and will be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.error} role="alert">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}

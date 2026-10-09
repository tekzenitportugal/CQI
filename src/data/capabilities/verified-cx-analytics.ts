import { capabilityCta, capabilityPagerLinks, capabilityRoutes } from './shared';
import type { CapabilityPageData } from './types';

// Figma 6079:31848 "Verified CX Analytics - CQI"
export const verifiedCxAnalytics: CapabilityPageData = {
  slug: 'verified-cx-analytics',
  metaTitle: 'Verified CX Analytics — CQI',
  metaDescription:
    'Connects what customers say with operational events to produce a single, trusted read on CX health, continuously, not monthly.',
  hero: {
    title: 'Conversations, checked against what the systems actually did',
    titleHighlight: ['what the systems actually did'],
    eyebrow: 'Verified CX analytics',
    description:
      'Connects what customer say with operational events to produce a single, trusted read on CX health, continuously, not monthly.',
    cta: { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' },
  },
  heroImage: '/images/product/verified-cx/hero-banner-verifedcx.png',
  heroImageAspectRatio: '2412 / 2226',
  heroImageUnoptimized: true,
  heroMockup: true,
  features: {
    eyebrow: 'What it does',
    title:
      'Every CX platform can tell you what a customer said. Verified CX Analytics tells you whether the operation agreed.',
    titleHighlight: ['whether the operation agreed.'],
    titleMaxWidth: 708,
    cards: [
      {
        title: 'Complete Coverage',
        description:
          '100% of interactions across voice, chat, bot, email and app are transcribed, classified into a topic and subtopic taxonomy, and tagged with behavioural signals, not a 2% sample scored on a form.',
      },
      {
        title: 'Operational Correlation',
        description:
          'Each interaction is matched against the events around it: billing adjustments, order status, network and provisioning records, field visits, refunds and CRM state.',
      },
      {
        title: 'Misalignment as the metric',
        description:
          'Where the conversation and the systems disagree, CQI produces a verified friction record with volume, cost and revenue at risk attached.',
      },
      {
        title: 'Continuous, not periodic',
        description:
          'The read updates as events occur. There is no reporting cycle to wait for and no survey field period to close.',
      },
    ],
    image: {
      src: '/images/product/capabilities/verified-cx-analytics/what-it-does.png',
      inset: { top: 98, left: 0, width: 587, height: 354 },
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'Inside the capability',
    rows: [
      {
        label: 'Inputs',
        description:
          'Interaction content and metadata, plus structured operational and transactional feeds from the systems of record.',
      },
      {
        label: 'classification',
        description:
          'Auto-classification into reasons and subreasons, with behavioural tags: churn intent, broken promise, advocacy, exit risk, refund demand.',
      },
      {
        label: 'verification',
        description:
          'The derived claim from the conversation is tested against the executing system. Agreement closes it; disagreement raises it.',
      },
      {
        label: 'Priorisation',
        description:
          'Friction is ranked on volume × effort × satisfaction, so the biggest recoverable cost surfaces first.',
      },
      {
        label: 'outputs',
        description:
          'CX health view, journey health, friction library, and the evidence layer every other capability reads from.',
      },
    ],
  },
  spacing: { afterFeatures: 200, afterHowItWorks: 200 },
  pager: {
    links: capabilityPagerLinks,
    prev: { label: 'End-to-end orchestration', href: capabilityRoutes.endToEndOrchestration },
    next: { label: 'Customer Quality Index', href: capabilityRoutes.customerQualityIndex },
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'About Verified CX analytics',
    items: [
      {
        question: 'Does this replace our speech analytics platform?',
        answer:
          'Not necessarily. CQI can consume the output of an existing interaction analytics platform as one input, and add the operational verification layer above it.',
      },
      {
        question: 'What if our transcripts are poor quality?',
        answer:
          'Data quality is monitored as part of ingestion and reported back. The proof of concept establishes whether the available transcript quality supports the friction classification you need, before any commitment.',
      },
    ],
  },
  cta: capabilityCta,
};

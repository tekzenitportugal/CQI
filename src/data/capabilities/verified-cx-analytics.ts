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
    // No cutout image, so the copy keeps Figma's 587px column below 1600px too.
    copyFitWidth: 587,
    // Figma mobile 6759:38635: 10px between the eyebrow and the description.
    mobileIntroGap: 10,
  },
  // Figma 6733:63861 + 6759:38626: gradient card with the iMac mockup on the right.
  heroMockup: true,
  // Figma 6759:38626: 619px-wide iMac, 210px below the card top and 108px in from its right edge.
  heroDesktopFigure: {
    src: '/images/product/capabilities/verified-cx-analytics/3_VERIFIED_CX_ANALYTICS_IMG1.png',
    width: 2848,
    height: 2301,
    top: 210,
    right: 108,
    displayWidth: 619,
  },
  // Figma 6759:38630: 309px-wide iMac, 28px in from the card's left edge and 596px down; the copy starts 108px
  // below the card top (6759:38631).
  heroMobileFigure: {
    src: '/images/product/capabilities/verified-cx-analytics/3_VERIFIED_CX_ANALYTICS_IMG1.png',
    width: 2848,
    height: 2301,
    top: 596,
    left: 28,
    displayWidth: 309,
    copyTop: 108,
  },
  features: {
    eyebrow: 'What it does',
    title:
      'Every CX platform can tell you what a customer said. Verified CX Analytics tells you whether the operation agreed.',
    titleHighlight: ['whether the operation agreed.'],
    // Figma 6733:63861 / animation 6733:64668: labels sit inside the half-disc, one per animation state.
    steps: [
      {
        label: 'Complete\ncoverage',
        description:
          '100% of interactions across voice, chat, bot, email and app are transcribed, classified into a topic and subtopic taxonomy, and tagged with behavioural signals, not a 2% sample scored on a form.',
      },
      {
        label: 'Operational\ncorrelation',
        description:
          'Each interaction is matched against the events around it: billing adjustments, order status, network and provisioning records, field visits, refunds and CRM state.',
      },
      {
        label: 'Misalignment\nas the metric',
        description:
          'Where the conversation and the systems disagree, CQI produces a verified friction record with volume, cost and revenue at risk attached.',
      },
      {
        label: 'Continuous,\nnot periodic',
        description:
          'The read updates as events occur. There is no reporting cycle to wait for and no survey field period to close.',
      },
    ],
  },
  // Figma 6733:63942
  screens: {
    images: [
      { src: '/images/product/capabilities/verified-cx-analytics/3_VERIFIED_CX_ANALYTICS_IMG2.png', alt: 'CQI interactions table, grouped by reason and subreason', framed: true },
      { src: '/images/product/capabilities/verified-cx-analytics/3_VERIFIED_CX_ANALYTICS_IMG3.png', alt: 'CQI Prevent CX Frictions screen listing customers at risk with their promise, SLA and verification status' },
      { src: '/images/product/capabilities/verified-cx-analytics/3_VERIFIED_CX_ANALYTICS_IMG4.png', alt: 'CQI Prevent CX Frictions screen with one customer expanded to show the detail' },
    ],
  },
  howItWorks: {
    // Figma 6733:63898: descriptions are Noto Sans Medium.
    descriptionWeight: 500,
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
  // Figma: 100px between "How it works" and the grey pager band, desktop and mobile.
  spacing: { afterFeatures: 200, afterHowItWorks: 100, mobileAfterHowItWorks: 100 },
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

import { capabilityCta, capabilityPagerLinks, capabilityRoutes } from './shared';
import type { CapabilityPageData } from './types';

// Figma 6079:31932 "Customer Quality index - CQI"
export const customerQualityIndex: CapabilityPageData = {
  slug: 'customer-quality-index',
  metaTitle: 'Customer Quality Index — CQI',
  metaDescription:
    'A per-customer lifecycle score built from every event, experience and interaction across the journey.',
  hero: {
    title: 'A continuous state per customer, not a survey score',
    titleHighlight: ['continuous state per customer'],
    titleMaxWidth: 693,
    eyebrow: 'Customer Quality index',
    description:
      'A per-customer lifecycle score built from every event, experience and interaction across the journey.',
    descriptionMaxWidth: 510,
    cta: { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' },
  },
  heroImage: '/images/product/capabilities/customer-quality-index/4_CUSTOMER_QUALITY_INDEX_IMG1.png',
  heroImageAspectRatio: '3212 / 3392',
  // Mobile: the PNG has ~20% transparent margin under the laptop; trimmed so the 60px gap starts at the laptop.
  heroMobileImageTrim: 20.3,
  heroImageUnoptimized: true,
  heroMockup: true,
  // Animated "What it does" (steps) + screenshot carousel (screens), Figma 6733:63976 – 6733:64334.
  features: {
    eyebrow: 'What it does',
    title:
      'A survey score describes a moment for the few who answered. The Customer Quality Index describes a lifecycle for everyone.',
    titleHighlight: ['a lifecycle for everyone'],
    steps: [
      {
        label: 'Built from\nevents,\nnot answers',
        description:
          'Bookings, deliveries, delays, billing, calls, visits and the silent signals in between all move the score. No response rate to manage.',
      },
      {
        label: 'A state, not a number',
        description:
          'Healthy, friction, eroding, imminent, silent. Each state carries why (root cause), what (next action) and when (urgency).',
      },
      {
        label: 'Real time',
        description:
          'The colour updates the moment a signal occurs. Every event produces a new score, a new colour and a new action.',
      },
      {
        label: 'Comparable across the base',
        description:
          'The same index runs per customer, per journey and per cohort, so a board-level number and a worklist come from the same source.',
      },
    ],
  },
  screens: {
    images: [
      { src: '/images/product/capabilities/customer-quality-index/4_CUSTOMER_QUALITY_INDEX_IMG2.png', alt: 'CQI interactions table grouped by reason and subreason' },
      { src: '/images/product/capabilities/customer-quality-index/4_CUSTOMER_QUALITY_INDEX_IMG3.png', alt: 'CQI Customers screen with the customer directory and channel integrity scores' },
      { src: '/images/product/capabilities/customer-quality-index/4_CUSTOMER_QUALITY_INDEX_IMG4.png', alt: 'CQI interactions screen with signal distributions and resolution by reason and subreason' },
    ],
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'Inside the capability',
    descriptionOffset: 3,
    rows: [
      {
        label: 'Signals',
        description:
          'Operational events, interaction content, commitment outcomes and channel behaviour, weighted per journey.',
      },
      {
        label: 'Scoring',
        description: 'Continuous per-customer scoring, with dynamic KPI weights configured to the journeys in scope.',
      },
      {
        label: 'States',
        description:
          'Five lifecycle states rather than a single scalar, because different states demand different treatment.',
      },
      {
        label: 'Migration',
        description: 'Movement between risk bands over time is the reported outcome, not a single-point score.',
      },
      {
        label: 'Use',
        description: 'Feeds the health view, the prioritised worklist, routing treatment and executive reporting.',
      },
    ],
  },
  // What 1064 + 733 → How 1997; How 1997 + 655 → pager 2765
  spacing: { afterFeatures: 200, afterHowItWorks: 113 },
  pager: {
    links: capabilityPagerLinks,
    prev: { label: 'Verified CX Analytics', href: capabilityRoutes.verifiedCxAnalytics },
    next: { label: 'Root cause & recovery', href: capabilityRoutes.rootCauseRecovery },
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'About Customer Quality Index',
    items: [
      {
        question: 'Can we keep reporting NPS as well?',
        answer:
          'Yes, and most clients do. The index sits beside NPS and CSAT inside the same journey step, and CQI can consume survey responses as one of its inputs.',
      },
      {
        question: 'How long before a score is meaningful?',
        answer:
          'The proof of concept baselines the index on roughly one month of interaction history. Scores are directional from the first processing run and stabilise as event history deepens.',
      },
    ],
  },
  cta: capabilityCta,
};

import { capabilityCta, capabilityPagerLinks, capabilityRoutes } from './shared';
import type { CapabilityPageData } from './types';

// Figma 6079:32180 "Cross-channel integrity - CQI"
export const crossChannelIntegrity: CapabilityPageData = {
  slug: 'cross-channel-integrity',
  metaTitle: 'Cross-Channel Integrity — CQI',
  metaDescription:
    'A commitment ledger spanning channels, with containment, continuity and repetition scored separately.',
  hero: {
    title: 'Every promise tracked to kept or broken',
    titleHighlight: ['kept or broken'],
    eyebrow: 'Cross-channel integrity',
    description:
      'A commitment ledger spanning channels, with containment, continuity and repetition scored separately.',
    cta: { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' },
  },
  heroImage: '/images/product/capabilities/cross-channel-integrity/hero.png',
  heroImageMobile: '/images/product/capabilities/cross-channel-integrity/hero-mobile.png',
  heroImageAspectRatio: '1520 / 849',
  features: {
    eyebrow: 'What it does',
    title:
      'Cross-channel journeys do not break in a channel. They break in the gap between two of them.',
    titleHighlight: ['the gap between two of them'],
    titleMaxWidth: 774,
    cards: [
      {
        title: 'The commitment ledger',
        description:
          'Every promise made to a customer (by an agent or by policy) tracked through to kept or broken, spanning every channel it touches.',
      },
      {
        title: 'Strictly met versus met but late',
        description:
          'A commitment delivered outside the promised window counts as met in most reporting. The customer experienced a failure. CQI keeps them apart.',
      },
      {
        title: 'Promise versus SLA',
        description:
          'Agent promise and company SLA are separated, with time-to-SLA-remaining as the operative field, so a missed window can be caught in the hours that are left.',
      },
      {
        title: 'The conflict, not the score',
        description:
          'An integrity score decomposes into the actual conflicts behind it, each scored on containment, continuity and repetition friction.',
      },
    ],
    image: {
      src: '/images/product/capabilities/cross-channel-integrity/commitment-ledger.png',
      inset: { top: 98, left: 0, width: 587, height: 354 },
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'Inside the capability',
    rows: [
      {
        label: 'Capture',
        description:
          'Commitments are extracted at the moment they are made, with channel, agent and timestamp attached.',
      },
      {
        label: 'Reconciliation',
        description:
          'Each commitment is reconciled against the system that must execute it: billing, order, dispatch, CRM.',
      },
      {
        label: 'States',
        description:
          'Pending, strictly met, met but late, and broken, reported separately rather than collapsed into a compliance percentage.',
      },
      {
        label: 'Continuity',
        description:
          'Context transfer between channels is scored, so a repeat explanation registers as friction rather than as a new contact.',
      },
      {
        label: 'Governance',
        description:
          'Breached-SLA flags carry system evidence, giving auditable proof of commitment-keeping.',
      },
    ],
  },
  // What 1064 + 733 → How 1997; How 1997 + 640 → pager 2765
  spacing: { afterFeatures: 200, afterHowItWorks: 128 },
  pager: {
    links: capabilityPagerLinks,
    prev: { label: 'Predictive Churn & Recontact', href: capabilityRoutes.predictiveChurnRecontact },
    next: { label: 'End-to-end orchestration', href: capabilityRoutes.endToEndOrchestration },
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'About Cross-channel integrity',
    items: [
      {
        question: 'We already measure SLA compliance. Why is this different?',
        answer:
          'SLA compliance measures the company’s formal commitment. The ledger also captures what an agent actually promised on the call, which is what the customer remembers and what most reporting never records.',
      },
      {
        question: 'Does this work across partners as well as channels?',
        answer:
          'Yes, and only the derived signal is shared rather than raw data, so each party keeps its own systems and commercial independence.',
        // No dedicated case-study route exists yet; same placeholder pattern used elsewhere (e.g. partnerships.ts).
        link: { label: 'See the interline example', href: '#' },
      },
    ],
  },
  cta: capabilityCta,
};

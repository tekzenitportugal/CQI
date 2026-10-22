import { capabilityCta, capabilityPagerLinks, capabilityRoutes } from './shared';
import type { CapabilityPageData } from './types';

// Figma 6079:32097 "Predictive Churn & Recontact - CQI"
export const predictiveChurnRecontact: CapabilityPageData = {
  slug: 'predictive-churn-recontact',
  metaTitle: 'Predictive Churn & Recontact — CQI',
  metaDescription:
    'Real-time customer risk assessment across every customer, including the ones who never complain.',
  hero: {
    title: 'Silent churn, technical churn and the next repeat call',
    titleHighlight: ['Silent churn, technical churn'],
    titleMaxWidth: 693,
    eyebrow: 'Predictive churn & recontact',
    description:
      'Real-time customer risk assessment across every customer, including the ones who never complain.',
    cta: { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' },
  },
  heroImage: '/images/product/capabilities/predictive-churn-recontact/hero.webp',
  heroImageMobile: '/images/product/capabilities/predictive-churn-recontact/hero-mobile.png',
  heroImageAspectRatio: '1520 / 849',
  // Animated "What it does" (steps) + screenshot carousel (screens), Figma 6733:63976 – 6733:64334.
  features: {
    eyebrow: 'What it does',
    title:
      'The dangerous churn is the churn nobody reported. Most measurement systems are built to miss it.',
    titleHighlight: ['nobody reported'],
    steps: [
      {
        label: 'Silent churn',
        description:
          'Customers who reduce spend or leave without ever complaining, scored from behaviour and operational events rather than from what they said.',
      },
      {
        label: 'Technical churn',
        description:
          'Churn driven by unresolved technical conditions — outages, faults, provisioning failures — that never surfaced as a diagnosable ticket.',
      },
      {
        label: 'Explainable risk',
        description:
          'A red status decomposes into frequency, variety and combination of friction, each benchmarked against a threshold, with the exact tipping date.',
      },
      {
        label: 'Recontact risk',
        description:
          'Repeat-contact likelihood surfaced at 4-hour, 24-hour and 7-day windows — the clearest proxy for friction still unresolved.',
      },
    ],
  },
  screens: {
    images: [
      { src: '/images/product/capabilities/predictive-churn-recontact/6_PREDICTIVE_CHURN_AND_RECONTACT_IMG1.png', alt: 'CQI interactions table grouped by reason and subreason', framed: true },
      { src: '/images/product/capabilities/predictive-churn-recontact/6_PREDICTIVE_CHURN_AND_RECONTACT_IMG2.png', alt: 'CQI Interactions screen with the top 10 interaction types and calls by topic' },
      { src: '/images/product/capabilities/predictive-churn-recontact/6_PREDICTIVE_CHURN_AND_RECONTACT_IMG3.png', alt: 'CQI friction interactions list' },
    ],
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'Inside the capability',
    rows: [
      {
        label: 'Model inputs',
        description:
          'Friction frequency and variety, commitment outcomes, channel switching, operational event history and interaction signals.',
      },
      {
        label: 'Explainability',
        description:
          'Three transparent factors plus a voiced-versus-silent split, rather than a single opaque propensity score.',
      },
      {
        label: 'Tipping date',
        description: 'The exact date the pattern crossed into risk, so intervention can be timed and audited.',
      },
      {
        label: 'Attribution',
        description:
          'CQI credits its own interventions separately, so platform effect is distinguishable from market movement.',
      },
      {
        label: 'Action',
        description: 'Risk states drive routing, recovery and next-best-action rather than sitting in a churn report.',
      },
    ],
  },
  // What 1064 + 733 → How at 1997; How 1997 + 640 → pager at 2765
  spacing: { afterFeatures: 200, afterHowItWorks: 128 },
  pager: {
    links: capabilityPagerLinks,
    prev: { label: 'Root cause & recovery', href: capabilityRoutes.rootCauseRecovery },
    next: { label: 'Cross-channel integrity', href: capabilityRoutes.crossChannelIntegrity },
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'About Predictive Churn & Recontact',
    items: [
      {
        question: 'Is this a propensity model we have to trust blindly?',
        answer:
          'No. Every red status decomposes into benchmarked factors with a tipping date, and the rule graph behind automated decisions is exportable as an auditable record.',
      },
      {
        question: 'How do you prove the reduction is real?',
        answer:
          'Every treatment group is created alongside a control group, and risk-band migration is the reported outcome.',
        link: { label: 'How we prove it?', href: '/products/how-we-prove-it' },
      },
    ],
  },
  // Same copy as the shared capability CTA, but Figma uses the tablet photo (uncropped cover) here.
  cta: capabilityCta,
};

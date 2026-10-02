import { capabilityCta, capabilityPagerLinks, capabilityRoutes } from './shared';
import type { CapabilityPageData } from './types';

// Figma 6079:32014 "Root cause & recovery - CQI"
export const rootCauseRecovery: CapabilityPageData = {
  slug: 'root-cause-recovery',
  metaTitle: 'Root Cause & Recovery — CQI',
  metaDescription:
    'Shows what is broken, who is responsible and how to fix it (people, process or data) with a UI to track, measure and close.',
  hero: {
    title: 'Name the cause, assign the owner, close on evidence',
    titleHighlight: ['assign the owner, close on evidence'],
    titleMaxWidth: 693,
    eyebrow: 'Root cause & recovery',
    description:
      'Shows what is broken, who is responsible and how to fix it (people, process or data) with a UI to track, measure and close.',
    cta: { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' },
  },
  heroImage: '/images/product/capabilities/root-cause-recovery/hero.png',
  features: {
    eyebrow: 'What it does',
    title:
      'A dashboard that shows a spike\nwithout a cause creates a meeting. \nA cause with an owner creates a fix.',
    titleHighlight: ['A cause with an owner creates a fix.'],
    titleMaxWidth: 774,
    cards: [
      {
        title: 'Three causes, three owners',
        description:
          'Friction resolves to workforce, process or data. Each has an owner and a fix, which is the point of naming it.',
      },
      {
        title: 'Evidence travels with the case',
        description:
          'The customer’s own words, the exact promise and who made it, the SLA clock, the system record, the AI-assigned cause and the churn correlation.',
      },
      {
        title: 'Routed, not reported',
        description:
          'Cases route to a named owner inside existing workflows rather than accumulating in a report nobody owns.',
      },
      {
        title: 'Closed on proof',
        description:
          'A case closes when the source system evidences the promised action. Action without verification is hope.',
      },
    ],
    image: {
      src: '/images/product/capabilities/root-cause-recovery/what-it-does.png',
      inset: { top: 98, left: 0, width: 587, height: 354 },
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'Inside the capability',
    rows: [
      {
        label: 'Extraction',
        description: 'Friction is extracted from conversations in context: channel, journey stage, product, region, segment.',
      },
      {
        label: 'Attribution',
        description: 'Root cause analytics drives each friction pattern towards a workforce, process or data inconsistency.',
      },
      {
        label: 'Library',
        description: 'A reusable friction sub-cause library, so the delta can be measured after a fix ships.',
      },
      {
        label: 'Recovery',
        description:
          'Recovery cases carry a pre-approved remedy where one exists, and a verification requirement in every case.',
      },
      {
        label: 'KPI link',
        description: 'Attrition, satisfaction and recontact are attributed back to the root cause that drives them.',
      },
    ],
  },
  // What it does is 733px tall (1064 → 1797); How it works is 640px (1997 → 2637)
  spacing: { afterFeatures: 200, afterHowItWorks: 128 },
  pager: {
    links: capabilityPagerLinks,
    prev: { label: 'Customer Quality Index', href: capabilityRoutes.customerQualityIndex },
    next: { label: 'Predictive churn & recontact', href: capabilityRoutes.predictiveChurnRecontact },
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'About Root cause & recovery',
    items: [
      {
        question: 'Does this blame agents?',
        answer:
          'The opposite, more often than not. Separating data and process causes from workforce causes is what stops a systemic billing gap being coached as an agent behaviour.',
      },
      {
        question: 'What if the fix sits outside CX?',
        answer:
          'That is the common case, billing, field operations, IT. The case routes to the owning function with the evidence attached, which is usually what unlocks the fix.',
      },
    ],
  },
  // Same copy as the shared capability CTA, but this frame uses the tablet photo (cover crop).
  cta: {
    ...capabilityCta,
    image: '/images/product/capabilities/root-cause-recovery/cta-tablet.jpg',
    imagePosition: undefined,
  },
};

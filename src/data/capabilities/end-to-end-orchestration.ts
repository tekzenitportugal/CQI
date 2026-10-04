import { capabilityCta, capabilityPagerLinks, capabilityRoutes } from './shared';
import type { CapabilityPageData } from './types';

// Figma 6079:32263 (frame named "Predictive Churn & Recontact - CQI"; content is End-to-end orchestration)
export const endToEndOrchestration: CapabilityPageData = {
  slug: 'end-to-end-orchestration',
  metaTitle: 'End-to-end Orchestration — CQI',
  metaDescription:
    'Configurable workflows connected to queue, route, IVR, chat and comms, with control groups and A/B testing built in.',
  hero: {
    title: 'From a detected state to an action inside your contact centre',
    titleHighlight: ['an action inside your contact centre'],
    eyebrow: 'End-to-end orchestration',
    description:
      'Configurable workflows connected to queue, route, IVR, chat and comms, with control groups and A/B testing built in.',
    cta: { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' },
  },
  heroImage: '/images/product/capabilities/end-to-end-orchestration/hero.png',
  heroImageMobile: '/images/product/capabilities/end-to-end-orchestration/hero-mobile.png',
  heroImageAspectRatio: '1520 / 849',
  features: {
    eyebrow: 'What it does',
    title: 'An insight that does not change what happens next is a cost, not an asset.',
    titleHighlight: ['a cost, not an asset'],
    titleMaxWidth: 774,
    cards: [
      {
        title: 'Treatment by state',
        description:
          'Routing moves beyond static criteria: a healthy customer is contained, an eroding one meets a senior agent with the broken promise already surfaced.',
      },
      {
        title: 'No-code workflows',
        description:
          'A task and workflow builder with a reactive/proactive toggle, turning a detected signal into an announcement, message, queue, transfer, escalation or export.',
      },
      {
        title: 'Control group by default',
        description:
          'Every treatment group is created alongside an immediate control group, so any KPI can be benchmarked automatically.',
      },
      {
        title: 'Owned by CX, not IT',
        description:
          'CX operators build and iterate the automation themselves rather than queueing development work.',
      },
    ],
    image: {
      src: '/images/product/capabilities/end-to-end-orchestration/what-it-does.png',
      inset: { top: 98, left: 0, width: 587, height: 354 },
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'Inside the capability',
    rows: [
      {
        label: 'Triggers',
        description:
          'Customer state, commitment state, SLA remaining, friction pattern, or a live rule under experimentation.',
      },
      {
        label: 'Actions',
        description:
          'Alert, route, prioritise, escalate, credit, dispatch, inform, inside the CCaaS, CRM and comms systems already in place.',
      },
      {
        label: 'Experimentation',
        description: 'A/B testing across the entire process chain, with configurable KPIs per treatment.',
      },
      {
        label: 'Verification',
        description: 'Closure conditions require system evidence, not a case status change.',
      },
      {
        label: 'Audit',
        description:
          'The rule graph is visual, savable and exportable, a record of how automated decisions were made.',
      },
    ],
  },
  // What 1064 + 690 → How at 1997; How 1997 + 622 → pager at 2765
  spacing: { afterFeatures: 243, afterHowItWorks: 146 },
  pager: {
    links: capabilityPagerLinks,
    prev: { label: 'Cross-channel integrity', href: capabilityRoutes.crossChannelIntegrity },
    next: { label: 'Verified CX Analytics', href: capabilityRoutes.verifiedCxAnalytics },
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'About End-to-end orchestration',
    items: [
      {
        question: 'Does CQI take control of our contact centre?',
        answer:
          'No. CQI triggers actions through the platforms you already run, using their own APIs and events. The CCaaS stays the system of engagement.',
      },
      {
        question: 'Can we start read-only?',
        answer:
          'Yes. Most deployments run analysis and alerting first, and enable orchestration once the friction map and the owners are agreed.',
      },
    ],
  },
  // Same copy as the shared capability CTA, but this frame uses the tablet photo (uncropped).
  cta: capabilityCta,
};

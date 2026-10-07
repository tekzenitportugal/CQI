import type {
  CapabilityCard,
  CtaLink,
  FiveStage,
  IndustryTab,
  OutcomeMetric,
  StackLayer,
  StatCard,
} from '@/types/content';

export const homepageData = {
  hero: {
    title: 'CQI builds a live, governed picture of every customer.',
    titleHighlight: ['live, governed picture'],
    eyebrow: 'Verified CX · Operational experience intelligence',
    subtitle:
      'Their goal, what you promised, where it broke,\nand the one action that fixes it.',
    description:
      "Know what your customer is trying to do. And what's stopping them. Most CX platforms report how customers felt. CQI shows what they were trying to do, what you promised them, where that promise broke down, and the action that closes the gap.",
    cta: { label: 'See it live', href: '/resources/see-it-live', variant: 'text' as const },
    image: '/images/shared/home/hero-banner.png',
    imageWidth: 779,
    imageHeight: 732,
  },

  gap: {
    title: "Your systems say the promise was kept, but your customer says it wasn't.",
    titleHighlight: ['promise'],
    eyebrow: 'The gap',
    description:
      'Nothing in the CX stack is looking at that gap.\nIt is where churn starts.',
    image: '/images/shared/home/gap-cqi-sense-recovery.png',
    imageWidth: 587,
    imageHeight: 341,
  },

  stats: {
    title: "You can't see it because customers who leave are the ones who never told you.",
    titleHighlight: ['customers who leave'],
    items: [
      { value: '96%', label: 'of unhappy customers never complain' },
      { value: '91%', label: 'of those who stay silent never return' },
      { value: '5-10%', label: 'is a typical\nsurvey\nresponse rate' },
    ] satisfies StatCard[],
    footnote:
      'Published industry research, not CQI results.\nSources: TARP / White House Office of Consumer Affairs; TARP / Lee Resource; industry survey benchmarks.',
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'Five stages, running continuously.',
    stages: [
      {
        id: 1,
        title: 'detect',
        description: 'Every interaction, read against every operational event.',
      },
      {
        id: 2,
        title: 'diagnose',
        description: 'The root cause (people, process or data) with an owner.',
      },
      {
        id: 3,
        title: 'decide',
        description: 'Ranked by revenue at risk,\nnot by who complained.',
      },
      {
        id: 4,
        title: 'act',
        description: 'Triggered inside the systems\nyou already run.',
      },
      {
        id: 5,
        title: 'verify',
        description: 'Closed only on evidence\nfrom the system of record.',
      },
    ] satisfies FiveStage[],
  },

  fullBleedImage: {
    videoSrc: '/videos/home/cqi_home.mp4',
    width: 3840,
    height: 2160,
  },

  capabilities: {
    title: 'Six capabilities on one verified signal, all in one product.',
    titleHighlight: ['Six capabilities', 'verified', 'product'],
    items: [
      {
        title: 'Verified CX Analytics',
        description: 'Conversations, checked against what the systems did.',
        href: '/products/verified-cx-analytics',
        icon: '/images/shared/capabilities/verified-cx-analytics.svg',
      },
      {
        title: 'Customer Quality Index',
        description: 'A continuos state per customer, not a survey score.',
        href: '/products/customer-quality-index',
        icon: '/images/shared/capabilities/customer-quality-index.svg',
      },
      {
        title: 'Root Cause Resolution',
        description: 'Name the cause. Assign the owner. Close on evidence.',
        href: '/products/root-cause-recovery',
        icon: '/images/shared/capabilities/root-cause-resolution.svg',
      },
      {
        title: 'Predictive Recontact & Churn',
        description: 'Silent churn, technical churn, and the next repeat call.',
        href: '/products/predictive-churn-recontact',
        titleWeight: 400,
        icon: '/images/shared/capabilities/predictive-recontact.svg',
      },
      {
        title: 'Cross-Channel Integrity',
        description: 'Every promise tracked to kept, broken, or met but late.',
        href: '/products/cross-channel-integrity',
        icon: '/images/shared/capabilities/cross-channel-integrity.svg',
      },
      {
        title: 'End-to-end Orchestration',
        description: 'From a detected state to an action, with a control group.',
        href: '/products/end-to-end-orchestration',
        icon: '/images/shared/capabilities/end-to-end-orchestration.svg',
      },
    ] satisfies CapabilityCard[],
  },

  outcomeRange: {
    title: 'See the outcome range of what programmes have been scoped to deliver.',
    titleHighlight: ['outcome range', 'deliver'],
    ctas: [
      { label: 'Model your own range', href: '/resources/roi-calculator', variant: 'primary' as const },
      { label: 'How we prove it', href: '/products/how-we-prove-it', variant: 'secondary' as const },
    ] satisfies CtaLink[],
    eyebrow: 'Get up to',
    metrics: [
      { value: '25', suffix: '%', label: 'Churn reduction' },
      { value: '30', suffix: '%', label: 'Cost-to-serve reduction' },
      { value: '30', suffix: '%', label: 'FCR improvement' },
      { value: '15', suffix: '%', label: 'AHT reduction' },
    ] satisfies OutcomeMetric[],
    footnote:
      'Ceilings from CQI programme material for this sector, not averages, and not portable between sectors.',
    image: '/images/shared/home/outcome-chart.jpg',
  },

  industries: {
    title: 'Where the promise depends on an operation.',
    titleHighlight: ['promise', 'operation'],
    linkLabel: 'Explore',
    defaultIndustry: 'telecom',
    items: [
      {
        id: 'telecom',
        label: 'Telecom',
        headline: 'Where the promise depends on an operation.',
        description:
          'Provisioning, billing and network faults the systems call healthy.',
        descriptionHighlight: ['Provisioning', 'billing', 'network'],
        href: '/solutions/telecom',
        image: '/images/shared/industries/telecom.jpg',
      },
      {
        id: 'airlines',
        label: 'Airlines',
        headline: 'Where the promise depends on an operation.',
        description: 'Disruption, downgrades and the handoff between carriers.',
        descriptionHighlight: ['downgrades', 'handoff between carriers'],
        href: '/solutions/airlines',
        image: '/images/shared/industries/airlines.jpg',
      },
      {
        id: 'banking',
        label: 'Banking',
        headline: 'Where the promise depends on an operation.',
        description: 'Approvals, travel flags and promises four systems must execute.',
        descriptionHighlight: ['Approvals, travel flags', 'promises'],
        href: '/solutions/banking',
        image: '/images/shared/industries/banking.jpg',
        imageObjectPosition: 'center 95%',
        imageFlipX: true,
      },
      {
        id: 'insurance',
        label: 'Insurance',
        headline: 'Where the promise depends on an operation.',
        description: 'Claims delays and commitments underwriting never allowed.',
        descriptionHighlight: ['Claims delays'],
        href: '/solutions/insurance',
        image: '/images/shared/industries/insurance.jpg',
      },
      {
        id: 'utilities',
        label: 'Utilities & Energy',
        headline: 'Where the promise depends on an operation.',
        description: 'Billing anomalies, failed meter reads, missed field windows.',
        descriptionHighlight: ['anomalies'],
        href: '/solutions/utilities-energy',
        image: '/images/shared/industries/utilities-energy.jpg',
        imageObjectPosition: 'center 81%',
      },
      {
        id: 'consumer-electronics',
        label: 'Consumer electronics',
        headline: 'Where the promise depends on an operation.',
        description: 'Firmware, warranty and the batch behind the failure rate.',
        descriptionHighlight: ['Firmware, warranty', 'batch'],
        href: '/solutions/consumer-electronics',
        image: '/images/shared/industries/consumer-electronics.jpg',
        imageObjectPosition: 'center 13%',
      },
    ] satisfies IndustryTab[],
  },

  whereCqiFits: {
    eyebrow: 'Where cqi fits',
    title: 'A layer above the stack you already bought',
    description:
      'CCaaS, CRM, VoC and WFO stay exactly where they are. CQI verifies across them.',
    ctas: [
      { label: 'See the architecture', href: '/products/integrations', variant: 'primary' as const },
      { label: 'Compare with your stack', href: '/resources/compare-cqi', variant: 'secondary' as const },
    ] satisfies CtaLink[],
  },

  stackLayers: [
    {
      title: 'Your channels',
      tag: 'CCaaS',
      description: 'Voice, chat, bot, app, IVR, branch, field',
    },
    {
      title: 'CQI - Verified CX',
      tag: 'This layer',
      tagHighlight: true,
      description: 'Verification, root cause, risk, orchestration',
    },
    {
      title: 'Your RECORD systems',
      tag: 'Unchanged',
      description: 'Billing, CRM, OSS/BSS, WFO, VoC',
    },
  ] satisfies StackLayer[],

  cta: {
    title: 'See friction before your customers do',
    titleHighlight: ['before'],
    description:
      'A two-week non-intrusive proof of value, on your own interactions, with your own baseline.',
    image: '/images/shared/home/cta-tablet.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' as const },
      { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' as const },
    ] satisfies CtaLink[],
  },

  footer: {
    headline: ['Act before', 'the noise.'],
    poc: {
      title: 'Start with a 2-week,\nnon-intrusive Proof\nof Concept.',
      description:
        "No integration required. Your data,\nour platform and verified insight into friction you can't see today.",
    },
    cta: { label: 'Talk to our team', href: '/contact' },
    address: 'Calle Juan de Mena, 10 - 1º- Izda\nC.P. 28014 Madrid, Spain',
    email: 'marketing@cqisense.com',
    copyright: '© 2026 CQI. All rights reserved.',
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
};

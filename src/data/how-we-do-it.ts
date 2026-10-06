import type {
  CtaBannerData,
  PageHeroData,
  RuledRow,
  SentimentStage,
  VerificationLayer,
} from '@/types/content';

export const howWeDoItData = {
  hero: {
    title: 'Verified CX: the AI brain that connects three layers',
    titleHighlight: ['connects three layers'],
    titleMaxWidth: 632,
    eyebrow: 'How we do it',
    description:
      'CQI’s verification algorithm connects what customers say, how your teams respond, and what your data records, then surfaces the misalignments between them and points at the root cause.',
    image: '/images/product/how-we-do-it/hero.png',
    mobileImage: '/images/product/how-we-do-it/hero-mobile.png',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  verificationIntro: {
    title: 'The verification algorithm reads three layers against each other',
    titleHighlight: ['three layers'],
    aside:
      'The moment delivery drifts from commitment (explicit or implicit) churn is already in motion. It begins in provisioning, underwriting, claims, billing, field operations and handoffs, and it compounds quietly across systems until only the damage is visible.',
    layers: [
      {
        icon: '/images/product/how-we-do-it/layer-cx-signals.svg',
        title: 'CX signals',
        description:
          'What your customers speak. Calls, chats, bot sessions, emails and feedback, read in full, not sampled.',
      },
      {
        icon: '/images/product/how-we-do-it/layer-actions.svg',
        title: 'Actions',
        description:
          'How your agents and teams respond and act. Promises made, cases opened, routes taken, SLAs committed.',
      },
      {
        icon: '/images/product/how-we-do-it/layer-events.svg',
        title: 'Events',
        description:
          'What your data tells you. Billing, orders, network, provisioning, field visits, refunds, CRM state.',
      },
      {
        icon: '/images/product/how-we-do-it/layer-verification.svg',
        title: 'Verification',
        description:
          'CQI connects all three layers, surfacing misalignments and pointing to the root causes',
        tags: ['People', 'Process', 'Data'],
        variant: 'verification' as const,
      },
    ] satisfies VerificationLayer[],
  },

  rootCause: {
    eyebrow: 'Root cause analytics',
    title: 'Friction, traced to what actually caused it',
    description:
      'Friction is extracted from customer conversations in different contexts, then driven through root cause analytics towards workforce, process or data inconsistencies.',
    rows: [
      {
        label: 'Context',
        description:
          'Where the friction was expressed — channel, journey stage, product, region, segment.',
      },
      {
        label: 'Reasons & subreasons',
        description:
          'An auto-classified taxonomy applied to 100% of interactions, with behavioural signals tagged: churn intent, broken promise, exit risk, advocacy, refund demand.',
      },
      {
        label: 'Signals',
        description:
          'The verified misalignment between what was said, what was done and what the systems record.',
      },
      {
        label: 'Root causes',
        description:
          'Workforce, process or data. Each one has an owner and a fix, which is the point of naming it.',
      },
      {
        label: 'KPI impact',
        description:
          'Attrition, satisfaction and recontact, attributed back to the root cause that drives them.',
      },
    ] satisfies RuledRow[],
  },

  customerPulse: {
    eyebrow: 'Customer pulse',
    title: 'A state, not a score',
    description:
      'CQI continuously monitors customer lifecycle health, visualising risk through intuitive colour coding to enable early intervention.',
    sentimentStages: [
      {
        label: 'Healthy',
        icon: '/images/product/five-stages/face-very-satisfied.svg',
        color: '#36a782',
      },
      {
        label: 'Friction',
        icon: '/images/product/five-stages/face-satisfied.svg',
        color: '#6bc95d',
      },
      {
        label: 'Eroding',
        icon: '/images/product/five-stages/face-neutral.svg',
        color: '#ffd21d',
      },
      {
        label: 'Imminent',
        icon: '/images/product/five-stages/face-dissatisfied.svg',
        color: '#ffa620',
      },
      {
        label: 'Silent',
        icon: '/images/product/five-stages/face-very-dissatisfied.svg',
        color: '#ff563f',
      },
    ] satisfies SentimentStage[],
    features: [
      {
        title: 'Reflects the journey',
        description: 'Every event, experience and interaction across the lifecycle',
      },
      {
        title: 'Continuous and real time',
        description: 'The colour updates the moment a signal occurs',
      },
      {
        title: 'Multidimensional',
        description: 'each colour carries why, what and when',
      },
    ],
    featuresFootnote:
      'Next actions run your own playbook first: predefined marketing and customer-success guidance.\nAI recommendations layer on top once the platform has learned what works.',
    image: '/images/product/how-we-do-it/customer-brain.png',
    imageWidth: 587,
    imageHeight: 341,
  },

  riskEngine: {
    title: 'Why this customer is red,\nand the day it tipped',
    titleHighlight: ['the day it tipped'],
    paragraph:
      'A risk engine that cannot be interrogated cannot be governed. CQI decomposes every red status into transparent, threshold-benchmarked factors, and credits its own interventions separately so you can see what the platform changed.',
    footnote:
      'The rule graph behind automated decisions is visual, savable and exportable, an auditable record of how decisions were made.',
  },

  riskDecomposition: {
    title: 'Risk decomposition',
    cards: [
      {
        title: 'KPI impact',
        description:
          'Attrition, satisfaction and recontact, attributed back to the root cause that drives them.',
      },
      {
        title: 'Variety',
        description: 'How many distinct kinds of friction are stacking up.',
      },
      {
        title: 'Combination',
        description: 'Which patterns are compounding, one bad day never turns a customer red.',
      },
      {
        title: 'Voiced vs silent',
        description:
          'Whether the customer said anything. The silent ones are the dangerous, invisible churn drivers.',
      },
      {
        title: 'Tipping date',
        description: 'The exact date the pattern crossed into risk.',
      },
    ],
  },

  colourToAction: {
    title: 'From color to action,\ninside your contact centre',
    titleHighlight: ['color to action'],
    description:
      'Routing moves beyond static criteria: treatment is driven by customer state,\nwith a built-in control group so every intervention is measurable.',
    routingCards: [
      {
        title: 'Healthy',
        description: 'Self-service and IVR containment. Nothing to spend here.',
        icon: '/images/product/five-stages/face-very-satisfied.svg',
        color: '#36a782',
      },
      {
        title: 'Friction',
        description: 'Standard queue, with the friction context loaded for the agent.',
        icon: '/images/product/five-stages/face-satisfied.svg',
        color: '#6bc95d',
      },
      {
        title: 'Eroding',
        description: 'Senior agent, full history and the broken promise already surfaced.',
        icon: '/images/product/five-stages/face-neutral.svg',
        color: '#ffd21d',
      },
      {
        title: 'Imminent',
        description:
          'Recovery specialist with a pre-approved remedy, then verified follow-through.',
        icon: '/images/product/five-stages/face-dissatisfied.svg',
        color: '#ffa620',
      },
    ],
    list: [
      'Create treatment groups with an immediate control group for benchmarking against configurable KPIs.',
      'Simple A/B testing across the entire process chain to identify what works best.',
      'Track customer evolution afterwards, and measure team ROI and KPIs per journey.',
      'Benchmark any KPI automatically.',
    ],
  },

  cta: {
    title: 'Action without verification\nis hope',
    titleHighlight: ['hope'],
    description: 'CQI verifies the recovery.\nSee what that looks like on your own interactions.',
    image: '/images/product/how-we-do-it/cta-photo.png',
    imageWidth: 579,
    imageHeight: 289,
    imagePosition: '54.57% 31.76%',
    imageMobileZoom: 1.4,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' as const },
      {
        label: 'Core functionalities',
        href: '/products/core-functionalities',
        variant: 'secondary' as const,
      },
    ],
  } satisfies CtaBannerData,
};

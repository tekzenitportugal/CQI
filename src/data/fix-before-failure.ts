import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type {
  CtaBannerData,
  IconFeatureCard,
  ResearchStatItem,
  SentimentStage,
  TimelineEntry,
} from '@/types/content';

export const fixBeforeFailureData = {
  hero: {
    title: 'Prevent failure before customers feel it',
    titleHighlight: ['Prevent failure'],
    eyebrow: 'Fix before failure happens',
    description:
      'CQI prevents friction before it becomes a complaint, so customers don’t feel the impact, trust does not erode, and relationships do not deteriorate.',
  } satisfies HeroCopyData,

  frictionTrust: {
    title: 'Friction breaks trust long before customers complain',
    titleHighlight: ['Friction breaks trust'],
    eyebrow: 'CONTEXT',
    description:
      'The moment delivery drifts from commitment (explicit or implicit) churn is already in motion. It begins in provisioning, underwriting, claims, billing, field operations and handoffs, and it compounds quietly across systems until only the damage is visible.',
    image: '/images/product/fix-before-failure-happens/friction-customer-lifecycle.png',
    imageWidth: 587,
    imageHeight: 341,
    sentimentStages: [
      {
        label: 'HEALTHY',
        icon: '/images/product/five-stages/face-very-satisfied.svg',
        color: '#36a782',
      },
      {
        label: 'FRICTION',
        icon: '/images/product/five-stages/face-satisfied.svg',
        color: '#6bc95d',
      },
      {
        label: 'ERODING',
        icon: '/images/product/five-stages/face-neutral.svg',
        color: '#ffd21d',
      },
      {
        label: 'IMMINENT',
        icon: '/images/product/five-stages/face-dissatisfied.svg',
        color: '#ffa620',
      },
      {
        label: 'SILENT',
        icon: '/images/product/five-stages/face-very-dissatisfied.svg',
        color: '#ff563f',
      },
    ] satisfies SentimentStage[],
    sentimentNote:
      'The lifecycle states CQI tracks. Complaint, if it comes at all, arrives near the right-hand end.',
  },

  blindSpots: {
    eyebrow: 'Five blind spots',
    title: 'Why the friction stays invisible',
    description:
      'Each of these is a reason conventional CX measurement misses the problem while it is still cheap to fix.',
    cards: [
      {
        icon: '/images/product/fix-before-failure-happens/silent-experience.svg',
        title: 'Silent experience',
        description:
          'Most customers never say anything. They simply stop. The dangerous friction is the friction nobody reports.',
      },
      {
        icon: '/images/product/fix-before-failure-happens/latency-to-insight.svg',
        title: 'Latency to insight',
        description:
          'Monthly reporting cycles surface a problem weeks after the moment it could have been fixed.',
      },
      {
        icon: '/images/product/fix-before-failure-happens/subjectivity-emotion.svg',
        title: 'Subjectivity and emotion',
        description:
          'Customers express friction in many different ways. Sentiment alone cannot separate irritation from intent to leave.',
      },
      {
        icon: '/images/product/fix-before-failure-happens/no-verified-context.svg',
        title: 'No verified context',
        description:
          'Without operational truth beside the conversation, an agent’s “I don’t see anything in the systems” ends the investigation.',
      },
      {
        icon: '/images/product/fix-before-failure-happens/fragmented-data.svg',
        title: 'Fragmented data',
        description:
          'Conversation, billing, network and field records live apart, so the misalignment between them is nobody’s job to find.',
      },
      {
        icon: '/images/product/fix-before-failure-happens/consequence.svg',
        title: 'The consequence',
        description:
          'Root causes stay unknown, the same issue recurs, and the cost shows up as recontact, cost-to-serve and churn rather than as a defect anyone owns.',
        variant: 'accent',
      },
    ] satisfies IconFeatureCard[],
  },

  brokenPromise: {
    eyebrow: 'Anatomy of a broken promise',
    title: 'One price change,\nfour systems, no owner',
    titleHighlight: ['four systems, no owner'],
    aside:
      'A worked example of how a solvable request becomes churn risk, and where CQI interrupts it.',
    before: {
      tag: 'Before CQI',
      entries: [
        {
          heading: 'March',
          body: 'Customer calls to negotiate a lower price. Agent 1 promises a reduction from €45 to €35.',
          indent:
            'The billing update is never processed or synchronised in the system.',
        },
        {
          heading: 'April',
          body: '“My bill is wrong. I was promised €35.” Agent 2 answers: “I don’t see anything in the systems.”',
          indent: 'A four-day process begins to validate the customer’s claim.',
        },
        {
          heading: 'IMPACT',
          body: 'Customer frustration, increased recontact rate, higher cost per resolution, and a churn signal nobody logged.',
        },
      ] satisfies TimelineEntry[],
    },
    withCqi: {
      tag: 'With CQI',
      points: [
        'The commitment is extracted from the conversation the moment it is made, with the agent who made it attached.',
        'CQI verifies it against billing. The promise exists; the execution does not. That misalignment is the alert.',
        'Operations is notified while the SLA clock is still running — before the customer calls a second time.',
        'The root cause is classified as a data gap, not agent error, so the fix lands in the right place.',
        'Closure requires system evidence that the adjustment was actually applied.',
      ],
    },
  },

  research: {
    eyebrow: 'The cost of waiting',
    title: 'What published research says about silence',
    titleHighlight: ['research says'],
    items: [
      {
        value: '96%',
        label: 'of unhappy customers\nnever complain',
        source: 'Sources: TARP / White House',
      },
      {
        value: '5-10%',
        label: 'typical NPS response rate in airlines',
        source: 'Sources: Industry benchmarks',
      },
      {
        value: '91%',
        label: 'of silent unhappy customers\nnever return',
        source: 'Sources: TARP / White House',
      },
      {
        value: '32%',
        label: 'leave a loved brand after\none bad experience',
        source: 'Sources: PwC, 2018',
      },
    ] satisfies ResearchStatItem[],
    footnote:
      'Published industry research, not CQI results. No visibility. No proactivity. No second chance.',
  },

  cta: {
    title: 'See friction before your customers do',
    titleHighlight: ['before'],
    description: 'Two weeks, non-intrusive, on your own interactions.',
    image: '/images/product/fix-before-failure-happens/cta-tablet.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' as const },
      { label: 'How we do it', href: '/products/how-we-do-it', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

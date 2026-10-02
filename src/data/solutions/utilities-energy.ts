import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type { IndustrySolutionData } from '@/types/content';
import {
  industryCtaBanner,
  industryPlugIn,
  mapFriction,
  mapScenarios,
  mapThreeThings,
} from '@/data/solutions/shared';

const outcomeFootnote =
  'Ceilings from CQI programme material for this sector, not averages, and not portable between sectors.';

export const utilitiesEnergySolutionData = {
  slug: 'utilities-energy',
  metaTitle: 'Utilities & Energy — CQI Verified CX',
  metaDescription:
    'Catch unfulfilled commitments in retail energy while the SLA clock is still running.',
  hero: {
    title: 'Trust is the real meter, and no one is reading it',
    titleHighlight: ['Trust is the real meter'],
    eyebrow: 'utilities & energy',
    description:
      'In retail energy, friction starts with billing anomalies, failed meter reads and uncoordinated field work. CQI catches the unfulfilled commitment while the SLA clock is still running.',
    titleMaxWidth: 587,
    descriptionMaxWidth: 587,
    copyMaxWidth: 587,
    cta: {
      label: 'Model the range',
      href: '/resources/roi-calculator',
      variant: 'secondary',
    },
  } satisfies HeroCopyData,
  friction: mapFriction({
    title: 'In retail energy, friction rarely starts in the contact centre.',
    titleHighlight: ['rarely', 'starts in the contact centre.'],
    description:
      'It starts with billing anomalies, delayed connections, failed meter reads, broken promises, outages or uncoordinated field operations. These disruptions escalate silently across systems, long before complaints spike or regulatory scrutiny increases. By the time it becomes visible, the relationship is already at risk.',
    tagGroups: [
      {
        label: 'What stays invisible',
        tags: [
          'Billing anomalies',
          'Delayed connections',
          'Failed meter reads',
          'Broken promises',
          'Outages',
          'Uncoordinated field operations',
        ],
      },
      {
        label: 'Signals CQI reads',
        tags: ['Calls', 'Chat', 'Billing', 'Network events', 'Field visits', 'Refunds'],
      },
      {
        label: 'CQI GOALS',
        tags: ['Contact centre optimisation', 'Predictive recontact & churn'],
      },
    ],
  }),
  threeThings: mapThreeThings({
    title: 'Three things the verification layer adds in this sector.',
    titleHighlight: 'the verification layer adds',
    items: [
      {
        step: 1,
        title: 'Unfulfilled commitments\ncaught in time',
        description:
          'The promised comparison report or payment plan that was never created, flagged before the customer calls again.',
      },
      {
        step: 2,
        title: 'Billing anomalies verified,\nnot argued',
        description:
          'What the customer reports checked against meter, tariff and billing data.',
      },
      {
        step: 3,
        title: 'Field work coordinated\nwith the promise',
        description:
          'Missed technician windows surfaced as a live SLA breach with hours remaining, not a post-hoc complaint.',
      },
    ],
  }),
  scenarios: mapScenarios({
    title: 'Two scenarios from utilities & energy programmes',
    titleHighlight: 'scenarios',
    items: [
      {
        title: 'Addressing billing discrepancies',
        description:
          'A customer questions a bill significantly higher than normal. The agent promises a comparison report and a payment plan, but these are never executed in the system. CQI detects this unfulfilled commitment immediately and alerts operations to act.',
        outcome:
          'Prevents repeat calls, avoids regulatory complaints and protects revenue collection.',
        image: '/images/solutions/utilities-energy/scenario-1.jpg',
        imagePosition: 'center',
        imageOverlay: 0.5,
        imageBlend: 'color',
      },
      {
        title: 'Preventing outage frustration',
        description:
          'Customers experience ongoing uncoordinated field operations and outages without clear communication. CQI correlates interaction signals with network events to surface systemic friction, allowing teams to proactively inform customers and fix the grid.',
        outcome:
          'Reduces reputational risk, strengthens consumer trust and lowers overall cost-to-serve.',
        image: '/images/solutions/utilities-energy/scenario-2.jpg',
        imagePosition: 'center',
      },
    ],
  }),
  outcomeRange: {
    title:
      'See the outcome range of what programmes have been scoped to deliver in this sector.',
    titleHighlight: ['outcome range', 'deliver in this sector'],
    cta: {
      label: 'How we prove it',
      href: '/products/how-we-prove-it',
      variant: 'primary',
    },
    eyebrow: 'Get up to',
    metricsColumnCount: 3,
    metrics: [
      { value: '35%', label: 'Fewer repeat contacts' },
      { value: '20%', label: 'Churn reduction' },
      { value: '30%', label: 'OPEX improvement' },
    ],
    footnote: outcomeFootnote,
  },
  plugIn: industryPlugIn,
  cta: industryCtaBanner(
    'utilities & energy friction',
    'utilities & energy friction',
    '/images/solutions/utilities-energy/cta-photo.jpg',
    'center',
  ),
} satisfies IndustrySolutionData;

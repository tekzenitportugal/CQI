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

export const bankingSolutionData = {
  slug: 'banking',
  metaTitle: 'Banking — CQI Verified CX',
  metaDescription:
    'CQI verifies what was promised against what was executed across bots, agents, and core systems.',
  hero: {
    title: 'CQI verifies what was promised against what was executed',
    titleHighlight: ['was promised', 'was executed'],
    eyebrow: 'banking',
    description:
      'Across bots, agents, and core systems, CQI closes the gap before the customer feels it.\n\nBanks can prove the transaction. Not the promise.',
    titleMaxWidth: 586,
    descriptionMaxWidth: 586,
    copyMaxWidth: 587,
    cta: {
      label: 'Model the range',
      href: '/resources/roi-calculator',
      variant: 'secondary',
    },
  } satisfies HeroCopyData,
  friction: mapFriction({
    title: 'Friction rarely begins in the branch or the app.',
    titleHighlight: ['rarely', 'begins in the branch'],
    description:
      'It originates in underwriting inconsistencies, delayed approvals, broken handoffs and unresolved service commitments. These operational gaps accumulate quietly, long before customers close accounts or escalate publicly. By the time churn is measured, the relationship has already deteriorated.',
    tagGroups: [
      {
        label: 'What stays invisible',
        tags: [
          'Underwriting inconsistencies',
          'Delayed approvals',
          'Broken handoffs',
          'Unresolved commitments',
        ],
      },
      {
        label: 'Signals CQI reads',
        tags: ['Calls', 'Chat', 'Transactions', 'Orders', 'Billing', 'Refunds'],
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
        title: 'Commitments verified\nacross systems',
        description:
          'A travel flag, a fee waiver or a rate promise checked against the systems that must execute it.',
      },
      {
        step: 2,
        title: 'Handoffs that keep\ntheir context',
        description:
          'Branch to app to contact centre to back office, tracked as one journey rather than four records.',
      },
      {
        step: 3,
        title: 'Buying signals surfaced\nfrom conversations',
        description:
          'Intent and contextual need extracted from interactions and routed as a cross-sell action.',
      },
    ],
  }),
  scenarios: mapScenarios({
    title: 'Two scenarios from banking programmes',
    titleHighlight: 'scenarios',
    items: [
      {
        title: 'Travel flag friction',
        description:
          'A customer travels abroad and finds their card blocked. The agent issues virtual cards but fails to properly update travel flags across all systems. CQI detects this misalignment in real time and automatically alerts the team to correct it before the customer tries to pay again.',
        outcome:
          "Prevents repeat contacts, ensures customer access to funds and protects the bank's lifetime value.",
        image: '/images/solutions/banking/scenario-1.jpg',
        imagePosition: 'center',
      },
      {
        title: 'Wallet share growth',
        description:
          'Banks often miss cross-sell opportunities as customer intent signals remain buried inside conversations. CQI extracts buying signals and contextual needs from interactions, allowing banks to trigger relevant cross-sell and upsell actions.',
        outcome:
          'Increased wallet share, higher product penetration and improved CLV profitability.',
        image: '/images/solutions/banking/scenario-2.jpg',
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
    metrics: [
      { value: '35%', label: 'Less friction' },
      { value: '25%', label: 'Less revenue erosion' },
      { value: '20%', label: 'Fewer repeated calls' },
      { value: '30%', label: 'OPEX improvement' },
    ],
    footnote: outcomeFootnote,
  },
  plugIn: industryPlugIn,
  cta: industryCtaBanner(
    'banking friction',
    'banking friction',
    '/images/solutions/banking/cta-photo.jpg',
    'center',
  ),
} satisfies IndustrySolutionData;

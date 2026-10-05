import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type { IndustrySolutionData } from '@/types/content';
import { industryCtaBanner, industryPlugIn } from '@/data/solutions/shared';

export const telecomSolutionData = {
  slug: 'telecom',
  metaTitle: 'Telecom — CQI Verified CX',
  metaDescription:
    'Telecom CX intelligence that reads the network, not just the call — connecting interactions with provisioning, billing and network events.',
  hero: {
    title:
      'Telecom CX intelligence\nthat reads the network,\nnot just the call',
    titleHighlight: ['reads the network'],
    eyebrow: 'telecom',
    description:
      'CQI connects call and chat content with provisioning, billing and network events, so the friction that never becomes a ticket is visible while it is still cheap to fix.',
    titleMaxWidth: 702,
    descriptionMaxWidth: 653,
    copyMaxWidth: 708,
    cta: {
      label: 'Model the range',
      href: '/resources/roi-calculator',
      variant: 'secondary',
    },
  } satisfies HeroCopyData,
  heroImage: '/images/solutions/telecom/hero.png',
  heroImageAspectRatio: '2430 / 2544',
  heroMockup: true,

  friction: {
    title:
      'Friction rarely begins in the contact centre or digital channels.',
    titleHighlight: ['rarely', 'begins in the contact centre'],
    description:
      'It starts with provisioning delays, SLA gaps, roaming inconsistencies, billing discrepancies and fragmented field operations. These issues compound silently across systems and touchpoints, long before NPS drops or customers escalate. By the time it becomes visible, loyalty has already eroded.',
    image: '/images/solutions/telecom/prevent-cx-frictions.png',
    imageAspect: '587 / 341',
    imageOverlay: 0,
    imageFramed: true,
    tagGroups: [
      {
        label: 'What stays invisible',
        variant: 'invisible',
        tags: [
          'Provisioning delays',
          'SLA gaps',
          'Roaming inconsistencies',
          'Billing discrepancies',
          'Outages',
          'Fragmented operations',
        ],
      },
      {
        label: 'Signals CQI reads',
        variant: 'signals',
        tags: ['Calls', 'Chat', 'Billing', 'Network events', 'Field visits', 'Refunds'],
      },
      {
        label: 'CQI goals',
        variant: 'goals',
        tags: ['Contact centre optimisation', 'Predictive recontact & churn'],
      },
    ],
  },

  threeThings: {
    title: 'Three things the verification layer adds in this sector.',
    titleHighlight: ['the verification layer adds'],
    items: [
      {
        step: 1,
        title: 'One view across\nevery channel',
        description:
          'Voice, chat, bot, app and field records read together, so a repeat contact in another channel is not counted as a new issue.',
      },
      {
        step: 2,
        title: 'Network faults found\nfrom conversations',
        description:
          'Interaction signals correlated with OSS and network events surface localised faults the systems report as healthy.',
      },
      {
        step: 3,
        title: 'Billing disputes traced\nto the data',
        description:
          'Misalignment between what the customer reports and what billing shows becomes an operational alert, not a four-day investigation.',
      },
    ],
  },

  scenarios: {
    title: 'Two scenarios from telecom programmes',
    titleHighlight: ['scenarios'],
    scenarios: [
      {
        title: 'Proactive network outage resolution',
        description:
          "A customer experiences intermittent internet drops but standard agent troubleshooting reveals no issues. CQI correlates the customer's interaction directly with backend network events, revealing a localised infrastructure fault.",
        outcome:
          'Eliminates repeat troubleshooting calls, increases first contact resolution and prevents technical churn.',
        image: '/images/solutions/telecom/scenario-1.png',
      },
      {
        title: 'Correcting billing errors',
        description:
          'Discrepancies in billing generate high call volumes and severe friction. CQI detects misalignment between what customers report and what billing systems show, orchestrating real-time alerts to the operations team to fix the underlying data error.',
        outcome:
          'Lowers operational expenditure, reduces overall call volumes and restores customer confidence quickly.',
      },
    ],
  },

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
      { value: '30%', label: 'OPEX reduction' },
      { value: '30%', label: 'FCR increase' },
      { value: '25%', label: 'Churn reduction' },
      { value: '15%', label: 'AHT reduction' },
    ],
    footnote:
      'Ceilings from CQI programme material for this sector, not averages, and not portable between sectors.',
  },

  plugIn: industryPlugIn,
  cta: industryCtaBanner('telecom friction', 'telecom friction', '/images/solutions/telecom/cta-tower.png', 'center', {
    top: -92,
    left: 0,
    width: 579,
    height: 471,
  }),
} satisfies IndustrySolutionData;

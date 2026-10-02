import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type { SolutionsHubData } from '@/types/content';

export const solutionsHubData = {
  metaTitle: 'Solutions by Industry — CQI Verified CX',
  metaDescription:
    'Industry solutions where verified CX connects customer interactions with operational events.',
  hero: {
    title: 'The friction is sector-specific.\nSo are the signals.',
    titleHighlight: ['sector-specific.', 'signals.'],
    eyebrow: 'solutions',
    description:
      'CQI works where the promise and its delivery depend on operations: telecom, airlines, banking, insurance, utilities and consumer electronics. Each sector hides friction in a different place, and each exposes it through different data.',
    copyMaxWidth: 708,
  } satisfies HeroCopyData,

  sixSectors: {
    title: 'Six sectors, six places friction hides',
    titleHighlight: ['six places friction hides'],
    tabs: [
      {
        id: 'telecom',
        label: 'Telecom',
        headline: 'Friction rarely begins in the contact centre or digital channels.',
        headlineHighlight: ['rarely begins in the contact centre'],
        tags: ['Calls', 'Chat', 'Billing'],
        href: '/solutions/telecom',
        image: '/images/shared/industries/telecom.jpg',
      },
      {
        id: 'airlines',
        label: 'Airlines',
        headline: 'Airlines manage CX on the opinion of a small, late-responding minority.',
        headlineHighlight: ['manage CX', 'late-responding minority.'],
        tags: ['PSS & flight ops', 'Loyalty / FFP', 'App & web'],
        href: '/solutions/airlines',
        image: '/images/shared/industries/airlines.jpg',
      },
      {
        id: 'banking',
        label: 'Banking',
        headline: 'Friction rarely begins in the branch or the app.',
        headlineHighlight: ['rarely begins in the branch'],
        tags: ['Calls', 'Chat', 'Transactions'],
        href: '/solutions/banking',
        image: '/images/shared/industries/banking.jpg',
        imageObjectPosition: 'center 95%',
        imageFlipX: true,
      },
      {
        id: 'insurance',
        label: 'Insurance',
        headline: 'Friction rarely begins at renewal.',
        headlineHighlight: ['rarely begins at renewal.'],
        tags: ['Calls', 'Chat', 'Claims'],
        href: '/solutions/insurance',
        image: '/images/shared/industries/insurance.jpg',
      },
      {
        id: 'utilities-energy',
        label: 'Utilities & Energy',
        headline: 'In retail energy, friction rarely starts in the contact centre.',
        headlineHighlight: ['rarely starts in the contact centre.'],
        tags: ['Calls', 'Chat', 'Billing'],
        href: '/solutions/utilities-energy',
        image: '/images/shared/industries/utilities-energy.jpg',
        imageObjectPosition: 'center 81%',
      },
      {
        id: 'consumer-electronics',
        label: 'Consumer eletronics',
        headline: 'In consumer electronics, friction rarely starts with a return.',
        headlineHighlight: ['rarely starts with a return.'],
        tags: ['Calls', 'Chat', 'Orders'],
        href: '/solutions/consumer-electronics',
        image: '/images/shared/industries/consumer-electronics.jpg',
        imageObjectPosition: 'center 13%',
      },
    ],
  },

  crossSectorPatterns: {
    eyebrow: 'Cross-sector patterns',
    title: 'The four shapes underneath',
    titleHighlight: ['four shapes'],
    description:
      'Different sectors, same four failure modes. Recognising which one you have determines who owns the fix.',
    cards: [
      {
        title: 'Broken promise',
        description:
          'Something was committed in a conversation and never executed in a system. The most common, the cheapest to fix, and almost never measured.',
        align: 'bottom',
      },
      {
        title: 'Unseen technical issue',
        description:
          'The systems report healthy; the customer’s experience is not. Correlating the interaction with backend events exposes the fault.',
        align: 'top',
      },
      {
        title: 'Broken handoff',
        description:
          'Context fails to travel between channels, teams or partners, so the customer repeats themselves and the second responder starts from zero.',
        align: 'bottom',
      },
      {
        title: 'Silent erosion',
        description:
          'No complaint, no ticket, declining engagement. Visible only as a pattern across events, which is exactly what the lifecycle score is for.',
        align: 'top',
      },
    ],
  },

  cta: {
    title: 'Which of these is costing you most?',
    titleHighlight: ['costing you most?'],
    description:
      'A two-week proof of value ranks them on your own data, by volume, effort and revenue at risk.',
    image: '/images/solutions/hub/cta-photo.jpg',
    imageWidth: 579,
    imageHeight: 289,
    imagePosition: 'center',
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
      { label: 'Not listed?', href: '/solutions/not-listed', variant: 'secondary' },
    ],
  },
} satisfies SolutionsHubData;

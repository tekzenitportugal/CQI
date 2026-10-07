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

export const consumerElectronicsSolutionData = {
  slug: 'consumer-electronics',
  metaTitle: 'Consumer Electronics — CQI Verified CX',
  metaDescription:
    'Link service signals and IoT telemetry to batches, suppliers and field capacity before reviews turn.',
  hero: {
    title: 'By the time it shows up in a review, loyalty has already shifted',
    titleHighlight: ['loyalty has already shifted'],
    eyebrow: 'Consumer electronics',
    description:
      'Firmware faults, delivery delays and warranty gaps accumulate before a single review turns negative. CQI links service signals and IoT telemetry back to batches, suppliers and field capacity.',
    titleMaxWidth: 587,
    descriptionMaxWidth: 587,
    copyMaxWidth: 587,
    cta: {
      label: 'Model the range',
      href: '/resources/roi-calculator',
      variant: 'secondary',
    },
  } satisfies HeroCopyData,
  heroImage: '/images/solutions/consumer-electronics/hero.webp',
  heroImageMobile: '/images/solutions/consumer-electronics/hero-mobile.webp',
  friction: mapFriction({
    title: 'In consumer electronics, friction rarely starts with a return.',
    titleHighlight: ['rarely starts with a return.'],
    titleMaxWidth: 600,
    description:
      'It begins with product inconsistencies, firmware failures, delivery delays, warranty gaps and disconnected support channels. These breakdowns accumulate silently, long before reviews turn negative or customers abandon the brand. By the time it surfaces publicly, loyalty has already shifted.',
    tagGroups: [
      {
        label: 'What stays invisible',
        tags: [
          'Product inconsistencies',
          'Firmware failures',
          'Delivery delays',
          'Warranty gaps',
          'Disconnected support',
        ],
      },
      {
        label: 'Signals CQI reads',
        tags: ['Calls', 'Chat', 'Orders', 'IoT telemetry', 'Billing', 'Refunds'],
      },
      {
        label: 'CQI GOALS',
        tags: ['Service network optimisation', 'Proactive maintenance'],
      },
    ],
    imageAspect: '587 / 341',
    imageOverlay: 0,
    imageFramed: true,
  }, '/images/solutions/consumer-electronics/dashboard.png'),
  threeThings: mapThreeThings({
    roomyFirstStep: true,
    title: 'Three things the verification layer adds in this sector.',
    titleHighlight: 'the verification layer adds',
    items: [
      {
        step: 1,
        title: 'Failures anticipated\nfrom telemetry',
        description:
          'Minor error codes the customer ignores become a scheduled maintenance visit instead of an emergency repair.',
      },
      {
        step: 2,
        title: 'Quality traced to\nmanufacturing',
        description:
          'Service requests and error codes correlated with production batches, so the defect is corrected on the line.',
      },
      {
        step: 3,
        title: 'Warranty cost attributed\nto cause',
        description:
          'Repeat repairs and goodwill spend attached to the model, batch or firmware release behind them.',
      },
    ],
  }),
  scenarios: mapScenarios({
    title: 'Two scenarios from consumer eletronics programmes',
    titleHighlight: 'scenarios',
    items: [
      {
        title: 'IoT-driven proactive maintenance',
        description:
          'Smart appliances trigger minor error codes that the customer ignores until a major breakdown occurs. CQI uses this IoT telemetry to anticipate the technical failure and schedule proactive maintenance before the appliance completely fails.',
        outcome:
          'Reduces costly emergency repair visits, extends product lifespan and optimises field technician utilisation.',
        image: '/images/solutions/consumer-electronics/scenario-1.webp',
        imagePosition: 'center bottom',
      },
      {
        title: 'Linking quality to manufacturing',
        description:
          'A specific appliance model shows a high field failure rate. CQI correlates these service requests and IoT error codes with specific manufacturing batches, allowing operations to instantly correct the defect on the production line.',
        outcome:
          'Decreases warranty costs per unit, improves overall equipment effectiveness and protects brand reputation.',
        image: '/images/solutions/consumer-electronics/scenario-2.webp',
        imagePosition: 'center',
        imageOverlay: 0.6,
        imageBlend: 'color',
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
      { value: '30%', label: 'OPEX reduction' },
      { value: '30%', label: 'FCR increase' },
      { value: '15%', label: 'AHT reduction' },
    ],
    footnote: outcomeFootnote,
  },
  plugIn: industryPlugIn,
  cta: industryCtaBanner(
    'consumer eletronics friction',
    'consumer eletronics friction',
    '/images/solutions/consumer-electronics/cta-photo.jpg',
    'center',
    { top: -49, left: 0, width: 579, height: 386 },
  ),
} satisfies IndustrySolutionData;

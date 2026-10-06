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

export const insuranceSolutionData = {
  slug: 'insurance',
  metaTitle: 'Insurance — CQI Verified CX',
  metaDescription:
    'Verify what was said against policy and pricing rules before trust fractures at renewal.',
  hero: {
    title: 'Fix friction before it costs you the customer',
    titleHighlight: ['Fix friction'],
    eyebrow: 'insurance',
    description:
      'Claims delays, policy misinterpretation and promises underwriting never allowed fracture trust long before renewal. CQI verifies what was said against what the policy and pricing rules permit.',
    titleMaxWidth: 587,
    descriptionMaxWidth: 653,
    copyMaxWidth: 587,
    cta: {
      label: 'Model the range',
      href: '/resources/roi-calculator',
      variant: 'secondary',
    },
  } satisfies HeroCopyData,
  heroImage: '/images/solutions/insurance/hero.png',
  heroImageMobile: '/images/solutions/insurance/hero-mobile.png',
  friction: mapFriction({
    title: 'Friction rarely begins at renewal.',
    titleHighlight: ['rarely', 'begins at renewal.'],
    description:
      'It starts with claims handling delays, policy misinterpretations, underwriting inconsistencies and unfulfilled service promises. These issues escalate silently across the customer lifecycle, long before retention metrics decline. By the time it becomes measurable, trust has already fractured.',
    tagGroups: [
      {
        label: 'What stays invisible',
        tags: [
          'Claims handling delays',
          'Policy misinterpretations',
          'Underwriting inconsistencies',
          'Unfulfilled promises',
          'Technical issues',
        ],
      },
      {
        label: 'Signals CQI reads',
        tags: ['Calls', 'Chat', 'Claims', 'Underwriting', 'Billing', 'Refunds'],
      },
      {
        label: 'CQI GOALS',
        tags: ['Claims process optimisation', 'Predictive recontact & churn'],
      },
    ],
    imageAspect: '587 / 341',
    imageOverlay: 0,
    imageFramed: true,
  }, '/images/solutions/insurance/dashboard.png'),
  threeThings: mapThreeThings({
    roomyFirstStep: true,
    title: 'Three things the verification layer adds in this sector.',
    titleHighlight: 'the verification layer adds',
    items: [
      {
        step: 1,
        title: 'Discount and price\ngovernance',
        description:
          'Commitments checked in real time against underwriting and pricing rules before they become revenue leakage.',
      },
      {
        step: 2,
        title: 'Mis-selling detected\nin the conversation',
        description:
          'Coverage explanations compared with policy terms, so compliance risk surfaces the same day.',
      },
      {
        step: 3,
        title: 'Claims friction traced\nto the stage',
        description:
          'Delay, documentation and assessment friction attributed to the step and the owner that caused it.',
      },
    ],
  }),
  scenarios: mapScenarios({
    title: 'Two scenarios from insurance programmes',
    titleHighlight: 'scenarios',
    items: [
      {
        title: 'Discount & price governance',
        description:
          "Agents promise discounts or special conditions that underwriting rules don't allow. CQI verifies pricing and discount commitments in real time against underwriting and pricing rules.",
        outcome:
          'Prevents revenue leakage, protects underwriting discipline and ensures pricing compliance.',
        image: '/images/solutions/insurance/scenario-1.jpg',
        imagePosition: 'center 43.63%',
        imageOverlay: 0.5,
        imageBlend: 'color',
      },
      {
        title: 'Sales & coverage compliance',
        description:
          'Coverage explanations during sales calls often differ from policy terms. CQI detects mis-selling signals in conversations and verifies promises against policy conditions.',
        outcome:
          'Reduces complaints and regulatory exposure, protects customer trust and improves sales quality.',
        image: '/images/solutions/insurance/scenario-2.png',
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
      { value: '25%', label: 'Churn reduction' },
      { value: '25%', label: 'ARPU risk reduction' },
      { value: '20%', label: 'Fewer repeated calls' },
      { value: '30%', label: 'OPEX improvement' },
    ],
    footnote: outcomeFootnote,
  },
  plugIn: industryPlugIn,
  cta: industryCtaBanner(
    'insurance friction',
    'insurance friction',
    '/images/solutions/insurance/cta-photo.jpg',
    'center 64.51%',
  ),
} satisfies IndustrySolutionData;

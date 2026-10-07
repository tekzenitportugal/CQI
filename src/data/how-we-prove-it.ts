import type { CtaBannerData, CtaLink, IndustryThreeThingsData, RuledRow } from '@/types/content';
import type { HeroCopyData } from '@/components/ui/HeroCopy';

/** Local to this page: the small pill-tag + title + text row used in the second
 * "How the KPI curve typically moves" block (Figma: Group 960 / Frame 1000003114 etc.).
 * Visually distinct from IndustryThreeThingsData's numbered-circle variant. */
export type TaggedInsightItem = {
  tag: string;
  title: string;
  description: string;
};

export type TaggedInsightsRowData = {
  title: string;
  items: TaggedInsightItem[];
};

/** Local to this page: the image-left/copy-right "Risk-band migration" row (Figma: Group 959). */
export type RiskBandMigrationData = {
  title: string;
  titleHighlight?: string[];
  eyebrow: string;
  description: string;
  footnote: string;
  image: string;
};

export type OutcomeScopeMetric = {
  value: string;
  suffix?: string;
  label: string;
};

/** Local to this page: header (title + description, no CTA) above the outcome-range card
 * (Figma: Frame 1000003501 / "Outcome Range" instance). */
export type OutcomeScopeData = {
  title: string;
  titleHighlight?: string[];
  description: string;
  image: string;
  eyebrow: string;
  metrics: OutcomeScopeMetric[];
  footnote: string;
};

/** Local to this page: "Where these ranges apply" title + button + label-less ruled list
 * (Figma: Frame 1000003295). */
export type WhereRangesApplyData = {
  title: string;
  cta: CtaLink;
  rows: RuledRow[];
};

export const howWeProveItData = {
  hero: {
    title: 'Verified outcomes, not attributed ones',
    titleHighlight: ['Verified outcomes'],
    eyebrow: 'How we prove it',
    description:
      'Most CX business cases are built on correlation: the programme ran, the number moved, the credit was claimed. CQI ships the measurement apparatus with the platform, so improvement is demonstrated against a control rather than asserted.',
  } satisfies HeroCopyData,

  timeToValueEyebrow: 'Time to value',

  threeThings: {
    title: 'How the KPI curve typically moves',
    titleHighlight: ['KPI curve'],
    items: [
      {
        step: 1,
        title: 'Baseline on your data',
        description:
          'The proof of concept establishes your friction map, recontact ratios and promise-breach rates from your own interactions, before any target is agreed.',
      },
      {
        step: 2,
        title: 'Control group by default',
        description:
          'Every treatment group is created alongside an immediate control group. Any KPI can be benchmarked automatically, and A/B tests run across the whole process chain.',
      },
      {
        step: 3,
        title: 'Verification, then attribution',
        description:
          'A case closes only on system evidence that the promised action occurred. Risk-band migration over time is what gets reported, and CQI’s own interventions are credited separately.',
      },
    ],
  } satisfies IndustryThreeThingsData,

  riskBand: {
    title: 'Risk-band migration,\nnot a single score',
    titleHighlight: ['not a single score'],
    eyebrow: 'Compliance',
    description:
      'The number a CQI programme reports is the movement of customers between lifecycle states over time, measured against a control group. It answers the question a board actually asks: how much of the base got better, and how do we know it was us?',
    footnote:
      'The illustration shows the shape of that report. Percentages are an example of the reporting format, not a client result.',
    image: '/images/product/how-we-prove-it/customer-health.webp',
  } satisfies RiskBandMigrationData,

  outcomeScope: {
    title: 'The outcome range scoped for each programme',
    titleHighlight: ['outcome range'],
    description:
      'These are ceilings from CQI programme material, not averages, and they are not portable between sectors. The number that matters is the one your proof of concept produces.',
    image: '/images/product/how-we-prove-it/outcome-range-photo.jpg',
    eyebrow: 'Get up to',
    metrics: [
      { value: '25', suffix: '%', label: 'Churn reduction' },
      { value: '30', suffix: '%', label: 'Cost-to-serve reduction' },
      { value: '30', suffix: '%', label: 'FCR improvement' },
      { value: '15', suffix: '%', label: 'AHT reduction' },
    ],
    footnote:
      'Ceilings from CQI programme material for this sector, not averages, and not portable between sectors.',
  } satisfies OutcomeScopeData,

  whereRangesApply: {
    title: 'Where these ranges apply',
    cta: { label: 'Solutions per-sector', href: '/solutions/all-industry', variant: 'primary' },
    rows: [
      {
        description:
          'Churn reduction scoped at up to 25% in telecom and insurance, and up to 20% in utilities',
      },
      {
        description:
          'FCR improvement of up to 30% in telecom, insurance and consumer electronics',
      },
      { description: 'AHT reduction of up to 15% in telecom and consumer electronics' },
      {
        description:
          'Repeat-contact reduction of up to 35% in utilities; up to 20% fewer repeated calls in banking and insurance',
      },
    ] satisfies RuledRow[],
  } satisfies WhereRangesApplyData,

  kpiMovement: {
    title: 'How the KPI curve typically moves',
    items: [
      {
        tag: 'First 15 days',
        title: 'Recontact falls',
        description:
          'Reduce recontact from conversational insight alone. The friction map goes live.',
      },
      {
        tag: 'From 30 days',
        title: 'Root causes named',
        description: 'Surface the root causes of churn with Verified CX. Fixes assigned to owners.',
      },
      {
        tag: 'From 60 days',
        title: 'Silent churn exposed',
        description: 'Uncover silent and technical churn across the full lifecycle.',
      },
    ],
  } satisfies TaggedInsightsRowData,

  cta: {
    title: 'Build the business case\non your own numbers',
    titleHighlight: ['your own numbers'],
    description: 'Start with the calculator, then validate it in a two-week proof of value.',
    image: '/images/product/how-we-prove-it/cta-tablet.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'ROI calculator', href: '/resources/roi-calculator', variant: 'primary' },
      { label: 'Request a demo', href: '/request-a-demo', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};

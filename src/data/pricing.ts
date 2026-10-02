import type { AccordionItem } from '@/components/ui/Accordion';
import type { FaqSectionData } from '@/components/sections/FaqSection';
import type { CtaBannerData, CtaLink, RuledRow } from '@/types/content';

export type PricingHeroData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  titleMaxWidth?: number;
  description: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  buttons: CtaLink[];
};

export type PricingStepItem = {
  tag: string;
  title: string;
  description: string;
};

export type PricingStepsData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description: string;
  items: PricingStepItem[];
};

export type PricingVariableCard = {
  title: string;
  description: string;
};

export type PricingVariablesData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  cards: PricingVariableCard[];
};

export type PricingComparisonRow = {
  factor: string;
  question: string;
  withCqi: string;
};

export type PricingComparisonData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description: string;
  headers: [string, string, string];
  rows: PricingComparisonRow[];
  footnote: string;
  link: CtaLink;
};

export type PricingIncludedData = {
  eyebrow: string;
  title: string;
  leftRows: RuledRow[];
  rightRows: RuledRow[];
};

export const pricingData = {
  hero: {
    eyebrow: 'Pricing',
    title: 'Priced to the scope, proven before you commit',
    titleHighlight: ['proven before you commit'],
    titleMaxWidth: 642,
    description:
      'CQI is an enterprise SaaS platform priced against the journeys, channels and interaction volumes in scope. Every engagement starts with a proof of concept, so the business case is built on your data rather than a benchmark.',
    // Figma's own hero photo box (Rectangle 85) is an off-canvas placeholder with no
    // reachable image asset (same gradient-only box as "Rectangle 86", both pasted at
    // x=1536, outside the visible frame). Reusing the same office photo the sibling
    // PoC Approach page's hero uses for the same PageHeroBanner-style treatment.
    image: '/images/pricing/product-hero-office.jpg',
    imageWidth: 1520,
    imageHeight: 848,
    buttons: [
      { label: 'Get a scoped proposal', href: '/contact', variant: 'primary' as const },
      { label: 'ROI calculator', href: '/resources/roi-calculator', variant: 'secondary' as const },
    ],
  } satisfies PricingHeroData,

  steps: {
    eyebrow: 'How pricing works',
    title: 'Three steps, in this order',
    titleHighlight: ['Three steps'],
    description:
      'The sequence matters: nobody signs a platform subscription before their own friction map exists.',
    items: [
      {
        tag: 'Step 1',
        title: 'Proof of concept',
        description:
          'Roughly four weeks from data receipt, on interactions alone. Fixed scope, fixed effort, a friction map and a go/no-go. No backend integration.',
      },
      {
        tag: 'Step 2',
        title: 'Platform subscription',
        description:
          'Annual subscription scoped to journeys in production, channels ingested, interaction volume and user seats. Includes the intelligence engine, dashboards and workflows.',
      },
      {
        tag: 'Step 3',
        title: 'Expansion',
        description:
          'Additional journeys, connectors and screens by horizon, plus optional services for build and adoption on a time-and-materials basis.',
      },
    ] satisfies PricingStepItem[],
  } satisfies PricingStepsData,

  variables: {
    eyebrow: 'What drives the number',
    title: 'Four variables, no hidden ones',
    titleHighlight: ['Four variables'],
    cards: [
      {
        title: 'Journeys in production',
        description:
          'How many customer journeys are scored, monitored and orchestrated, billing, activation, claims, disruption.',
      },
      {
        title: 'Channels ingested',
        description:
          'Which interaction sources are read: voice, chat, bot, email, app, survey, and the operational feeds behind them.',
      },
      {
        title: 'Interaction volume',
        description:
          'Annual interactions processed. Volume scales the platform, not the headcount needed to run it.',
      },
      {
        title: 'Users',
        description: 'Seats for the teams who work the health view, the worklist and the recovery loop.',
      },
    ] satisfies PricingVariableCard[],
  } satisfies PricingVariablesData,

  comparison: {
    eyebrow: 'Total cost of ownership',
    title: 'Where the cost of the alternative actually sits',
    titleHighlight: ['cost of the alternative'],
    description:
      'A comparison of operating models, not of vendors: the sampled-QA and survey-led model most enterprises run today, against a verification layer. Category characteristics, not a claim about any specific product.',
    headers: ['Factor', 'The question it answers', 'With CQI'],
    rows: [
      {
        factor: 'Coverage',
        question: 'Usually none, because there is nothing to verify against',
        withCqi: '100% of interactions, plus the operational events around them',
      },
      {
        factor: 'Headcount to scale coverage',
        question: 'A sample of interactions, plus survey responders',
        withCqi: 'Volume scales the platform, not the team',
      },
      {
        factor: 'Time to first insight',
        question: 'Grows with volume, more evaluators, more analysts',
        withCqi: 'Two weeks non-intrusive; about four weeks for the structured PoC',
      },
      {
        factor: 'Integration to start',
        question: 'A reporting cycle, typically monthly',
        withCqi: 'None for the PoC; backend verification added once the friction map is validated',
      },
      {
        factor: 'Silent customers',
        question: 'Invisible',
        withCqi: 'Scored from behaviour and events',
      },
      {
        factor: 'Attribution of improvement',
        question: 'Correlation, the programme ran, the number moved',
        withCqi: 'Control group by default, with risk-band migration reported',
      },
      {
        factor: 'Cost of the miss',
        question: 'Recontact, cost-to-serve and churn, unattributed',
        withCqi: 'Priced against the friction pattern that caused it',
      },
    ] satisfies PricingComparisonRow[],
    footnote:
      'Comparison of operating models. CQI is designed to sit alongside existing QA, VoC and analytics investments rather than replace them.',
    link: { label: 'See the category comparisons', href: '/resources/compare-cqi' },
  } satisfies PricingComparisonData,

  included: {
    eyebrow: 'What is included',
    title: 'Every subscription',
    leftRows: [
      { description: 'Ingestion pipelines, connectors and adapters for the sources in scope' },
      {
        description:
          'The intelligence engine: classification, root cause analysis, risk scoring, next-best-action',
      },
      {
        description:
          'CX health dashboards, journey health, interactions analytics and the customer directory',
      },
      { description: 'No-code workflow builder with built-in control groups and A/B testing' },
    ] satisfies RuledRow[],
    rightRows: [
      { description: 'Explainable risk model with exportable decision records' },
      {
        description: 'Single-tenant segregation, RBAC, PII redaction and your preferred hosting region',
      },
      { description: 'REST API alongside the UI, with scheduled exports and event triggers' },
      {
        description: 'Onboarding, training and adoption support; a named account manager through the PoC',
      },
    ] satisfies RuledRow[],
  } satisfies PricingIncludedData,

  faq: {
    eyebrow: 'Frequently asked',
    title: 'Pricing questions',
    items: [
      {
        question: 'Is pricing per seat?',
        answer:
          'No. The subscription is scoped to journeys, channels, interaction volume and users, so coverage does not depend on how many evaluators or analysts you employ. Exact packaging is confirmed at scoping.',
      },
      {
        question: 'Do we pay for the proof of concept?',
        answer:
          // Figma's own text ends without a trailing period here — replicated verbatim.
          'Engagements start with either a non-intrusive proof of value or a paid, scoped proof of concept, depending on the data and journeys involved. Commercial terms are agreed before extraction',
        link: { label: 'PoC approach', href: '/products/poc-approach' },
      },
      {
        question: 'What is not included?',
        answer:
          'Optional build and adoption services beyond onboarding, and additional journeys, connectors or screens added in later horizons, are scoped separately.',
      },
      {
        question: 'Can we start with one journey?',
        answer:
          'Yes, and it is the recommended path: one journey, one segment, one region, then expand once the operating model is proven.',
      },
    ] satisfies AccordionItem[],
  } satisfies FaqSectionData,

  cta: {
    title: 'See friction before your customers do',
    titleHighlight: ['before'],
    description:
      'A two-week non-intrusive proof of value, on your own interactions, with your own baseline.',
    image: '/images/pricing/cta-tablet.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' as const },
      { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

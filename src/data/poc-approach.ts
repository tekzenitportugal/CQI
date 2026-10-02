import type {
  CtaBannerData,
  CtaLink,
  ExpandableBandItem,
  IndustryThreeThingsItem,
} from '@/types/content';
import type { AccordionItem } from '@/components/ui/Accordion';
import type { FaqSectionData } from '@/components/sections/FaqSection';

export type PocHeroData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description: string;
  buttons: CtaLink[];
};

export type PocPhase = {
  tag: string;
  description: string;
};

export type PocPhasesData = {
  title: string;
  titleHighlight?: string[];
  phases: PocPhase[];
  steps: IndustryThreeThingsItem[];
};

export type PocRequirementsData = {
  items: ExpandableBandItem[];
  colors: string[];
  footnote: string;
};

export const pocApproachData = {
  hero: {
    eyebrow: 'PoC approach',
    title: 'Five steps, about four weeks, one decision',
    titleHighlight: ['one decision'],
    description:
      'From data discovery to a go/no-go on production deployment. The proof of concept runs on interaction content and contact metadata alone (no backend integration required) and produces your friction map on your own data.',
    buttons: [
      // Figma's hero button literally reads "Start a Poc" (lowercase c); normalized to match
      // the "Start a PoC" used everywhere else in this same file (CTA banner, nav, etc.).
      { label: 'Start a PoC', href: '/contact', variant: 'primary' },
      { label: 'How pricing works', href: '/pricing', variant: 'secondary' },
    ],
  } satisfies PocHeroData,

  phases: {
    title: 'The engagement takes shape over four weeks, across three phases',
    titleHighlight: ['four weeks, across three phases'],
    phases: [
      { tag: 'Preparation | ~1 week', description: 'Data discovery and extraction.' },
      { tag: 'Setup | ~3 weeks', description: 'Processing, dashboards, refinement.' },
      {
        tag: 'Evaluation | ~1 week',
        description: 'Validation against your benchmarks, then the decision.',
      },
    ],
    steps: [
      {
        step: 1,
        title: 'Discovery',
        description:
          'Identify relevant data sources, build a business understanding of the data, and confirm formats including metadata.',
      },
      {
        step: 2,
        title: 'Extraction',
        description:
          'You provide a sample of transcripts, CDR and messaging sessions; on CQI validation, the full export lands in a secured CQI environment.',
      },
      {
        step: 3,
        title: 'Dashboards',
        description:
          'CQI ingests and processes the interaction and contact data, then releases the first dashboards and views for review.',
      },
      {
        step: 4,
        title: 'Feedback',
        description:
          'Your team reviews the insights and shares requests. CQI refines models and reprocesses. You validate results against internal benchmarks.',
      },
      {
        step: 5,
        title: 'Decision',
        description:
          'Success criteria met: agree target scope and deployment phases. Partial validation: refine scope and extend the window.',
      },
    ],
  } satisfies PocPhasesData,

  requirements: {
    items: [
      {
        title: 'What we need from you',
        rows: [
          {
            description:
              'Call transcripts, chat and chatbot sessions, one month is typically enough to start',
          },
          { description: 'Interaction metadata: channel, agent, customer reference, outcome' },
          { description: 'Aggregated KPI feeds for the journeys in scope, where they exist' },
          // Figma repeats this row verbatim; kept as-is rather than "fixed".
          { description: 'Aggregated KPI feeds for the journeys in scope, where they exist' },
        ],
      },
      {
        title: 'What you get back',
        rows: [
          { description: 'A friction map of your own interactions, classified by reason and subreason' },
          { description: 'Promise-breach and repeat-contact rates, with the root causes behind them' },
          { description: 'Live dashboards you can interrogate, not a slide deck of findings' },
          { description: 'A ranked list of what to fix first, sized by volume, effort and revenue at risk' },
        ],
      },
      {
        title: 'Who needs to be involved',
        rows: [
          { description: 'A business sponsor and a small group of key stakeholders' },
          { description: 'A team able to provide the data extracts' },
          { description: 'The people who will review the results in the UI' },
          { description: 'On the CQI side, a named account manager drives the PoC end to end' },
        ],
      },
      {
        title: 'Clearances to line up early',
        rows: [
          { description: 'Data classification confirmed for every source in scope' },
          {
            description:
              'Security and infosec sign-off on the cloud data types, with CQI supplying technical input',
          },
          { description: 'Data handling and retention assumptions agreed in writing' },
          { description: 'Connectivity: a private landing zone, open ports and a data bridge' },
        ],
      },
    ] satisfies ExpandableBandItem[],
    colors: ['#edf2ff', '#ccdaff', '#b2c7ff', '#9eb8ff'],
    footnote:
      'Prove it small, prove it fast. One journey, one segment, one region, then scale once the model is proven. Timeframes are indicative and confirmed jointly at scoping.',
  } satisfies PocRequirementsData,

  faq: {
    eyebrow: 'Frequently asked',
    title: 'About the proof of concept',
    items: [
      {
        question: 'Is the PoC paid?',
        answer:
          'Engagements start with either a non-intrusive proof of value or a paid, scoped proof of concept, depending on the data and the journeys in play. Commercial terms are agreed at scoping.',
        link: { label: 'How pricing works', href: '/pricing' },
      },
      {
        question: 'What happens to our data afterwards?',
        answer:
          'Data handling and retention assumptions are agreed in writing before extraction, and CQI operates as a data processor under GDPR Article 28 obligations.',
        link: { label: 'Security & trust', href: '/products/security-trust' },
      },
      {
        question: 'Can we run it on one journey only?',
        answer:
          'That is the recommended approach. One journey, one segment, one region, then scale once the model is proven.',
      },
    ] satisfies AccordionItem[],
  } satisfies FaqSectionData,

  cta: {
    title: 'Start with two weeks\nand no integration',
    titleHighlight: ['two weeks\nand no integration'],
    description:
      'A non-intrusive proof of value surfaces broken promises before any backend work begins.',
    image: '/images/product/poc-approach/cta-tablet.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Start a PoC', href: '/contact', variant: 'primary' as const },
      { label: 'Talk to our team', href: '/contact', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

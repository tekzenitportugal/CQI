import type { CtaBannerData } from '@/types/content';
import type { HeroCopyData } from '@/components/ui/HeroCopy';

export type CompareDetailRow = {
  dimension: string;
  competitor: string;
  cqi: string;
};

export type CompareDetailPage = {
  slug: string;
  /** Label of the "CQI vs …" link on the other three detail pages. */
  linkLabel: string;
  metaTitle: string;
  metaDescription: string;
  hero: HeroCopyData;
  category: {
    title: string;
    titleHighlight: string[];
    /** Figma heading box width (px). */
    titleWidth: number;
    strength: string;
    limit: string;
    addition: string;
  };
  sideBySide: {
    /** Column header for the compared category. */
    competitorLabel: string;
    rows: CompareDetailRow[];
  };
};

const heroDefaults = {
  eyebrow: 'Comparison',
  titleMaxWidth: 700,
  mobileInlineDescription: true,
  mobileIntroGap: 10,
  mobileMinHeight: 880,
  mobilePaddingTop: 57,
} satisfies Partial<HeroCopyData>;

export const compareDetailPages: CompareDetailPage[] = [
  {
    slug: 'ccaas-contact-centre-reporting',
    linkLabel: 'CQI vs CCaaS & contact centre reporting',
    metaTitle: 'CQI and CCaaS & contact centre reporting — CQI Verified CX',
    metaDescription:
      'Your CCaaS is the system of engagement. See what it does well, where it stops, and what CQI adds on top of it.',
    hero: {
      ...heroDefaults,
      title: 'CQI and CCaaS\n& contact centre reporting',
      titleHighlight: ['CCaaS\n& contact centre reporting'],
      description:
        'Your CCaaS is the system of engagement.\nIt routes, records and reports on interactions with precision, handled, contained, transferred, abandoned, within SLA.',
      tags: ['NICE', 'Genesys', 'Amazon Connect', 'Five9'],
    },
    category: {
      title: 'CCaaS platforms\noptimise how interactions are handled',
      titleHighlight: ['optimise how interactions are handled'],
      titleWidth: 587,
      strength: 'Routing, containment, occupancy, SLA adherence and channel operations at scale. Nothing replaces it.',
      limit:
        'It reports on the interaction, not the outcome. An SLA can be met while the promise inside the call was never executed, and the record still reads as a success.',
      addition:
        'A single interaction view becomes an end-to-end journey view: the promise extracted from the conversation, checked against billing, CRM and network, and routed back into the same CCaaS as a treatment.',
    },
    sideBySide: {
      competitorLabel: 'CCaaS & contact centre reporting',
      rows: [
        {
          dimension: 'Unit of measurement',
          competitor: 'The interaction',
          cqi: 'The customer lifecycle',
        },
        {
          dimension: 'Coverage',
          competitor: 'Every interaction handled',
          cqi: 'Every interaction read and classified, plus the operational events around it',
        },
        {
          dimension: 'Definition of success',
          competitor: 'Handled within SLA',
          cqi: 'The commitment verified in the system of record',
        },
        {
          dimension: 'Repeat contact',
          competitor: 'Counted',
          cqi: 'Attributed to a root cause and an owner',
        },
        {
          dimension: 'Relationship',
          competitor: 'System of engagement',
          cqi: 'Verification layer above it, reroutes, prioritises and escalates inside it',
        },
      ],
    },
  },
  {
    slug: 'interaction-speech-analytics',
    linkLabel: 'CQI vs Interaction & speech analytics',
    metaTitle: 'CQI and Interaction & speech analytics — CQI Verified CX',
    metaDescription:
      'Interaction analytics reads conversations at scale. See what it does well, where it stops, and what CQI adds on top of it.',
    hero: {
      ...heroDefaults,
      title: 'CQI and Interaction\n& speech analytics',
      titleHighlight: ['Interaction\n& speech analytics'],
      description:
        'Interaction analytics reads conversations at scale: topics, sentiment, compliance phrases, silence, talk-over. It is the closest category to CQI, and the difference is verification.',
      tags: ['Verint', 'CallMiner', 'Observe.AI', 'Quantum Metric'],
    },
    category: {
      title: 'Interaction analytics explains what happens during interactions',
      titleHighlight: ['explains what happens during interactions'],
      titleWidth: 708,
      strength:
        'Transcription, topic and sentiment modelling, category rules and agent behaviour analysis across large conversation volumes.',
      limit:
        'Everything it knows comes from the conversation. When a customer says a promise was broken and the agent says the systems look fine, conversation analytics can only record the disagreement.',
      addition:
        'The operational half. CQI verifies the conversation against billing, CRM, network and field records, so a reported problem becomes a confirmed misalignment with an owner, an SLA clock and a fix.',
    },
    sideBySide: {
      competitorLabel: 'Interaction & speech analytics',
      rows: [
        {
          dimension: 'Primary input',
          competitor: 'The interaction',
          cqi: 'Conversation content plus operational and transactional events',
        },
        {
          dimension: 'Output',
          competitor: 'Every interaction handled',
          cqi: 'Verified friction, root cause, per-customer state, next action',
        },
        {
          dimension: 'Promise handling',
          competitor: 'Detected as a phrase',
          cqi: 'Tracked to kept or broken against the executing system',
        },
        {
          dimension: 'Explainability',
          competitor: 'Category rules and model scores',
          cqi: 'Risk decomposed into frequency, variety and combination, with the tipping date',
        },
        {
          dimension: 'Relationship',
          competitor: 'Complementary: CQI can consume its output',
          cqi: 'Verification and action layer above analytics',
        },
      ],
    },
  },
  {
    slug: 'voc-cxm-platforms',
    linkLabel: 'CQI vs VoC & CXM platforms',
    metaTitle: 'CQI and VoC & CXM platforms — CQI Verified CX',
    metaDescription:
      'Voice-of-the-customer programmes measure declared sentiment. See what they do well, where they stop, and what CQI adds.',
    hero: {
      ...heroDefaults,
      title: 'CQI and VoC\n& CXM platforms',
      titleHighlight: ['VoC\n& CXM platforms'],
      description:
        'Voice-of-the-customer programmes measure declared sentiment from customers who choose to answer. CQI measures experienced friction for everyone, including the majority who say nothing.',
      tags: ['Qualtrics', 'Medallia', 'InMoment', 'Forsta'],
    },
    category: {
      title: 'VoC platforms measure how customers feel about experiences',
      titleHighlight: ['measure how customers feel about experiences'],
      titleWidth: 619,
      strength:
        'Structured, comparable, board-recognised measurement of stated satisfaction, with benchmarking and closed-loop follow-up on responders.',
      limit:
        'Coverage and latency. Response rates in complex service industries run in the single digits, arriving weeks after the moment, from a self-selecting minority.',
      addition:
        'Continuous coverage of 100% of customers, scored from events rather than answers, and the ability to verify a declared score against what the operation actually delivered.',
    },
    sideBySide: {
      competitorLabel: 'VoC & CXM platforms',
      rows: [
        {
          dimension: 'Population',
          competitor: 'Survey responders',
          cqi: 'Every customer',
        },
        {
          dimension: 'Latency',
          competitor: 'Days to weeks after the experience',
          cqi: 'Continuous, as events occur',
        },
        {
          dimension: 'Silent customers',
          competitor: 'Invisible',
          cqi: 'Scored from behaviour and operational events',
        },
        {
          dimension: 'Why the score moved',
          competitor: 'Inferred from comments',
          cqi: 'Decomposed into friction, root cause and tipping date',
        },
        {
          dimension: 'Relationship',
          competitor: 'Complementary: VoC is one CQI input',
          cqi: 'Verifies and extends VoC rather than replacing it',
        },
      ],
    },
  },
  {
    slug: 'qa-quality-management',
    linkLabel: 'CQI vs QA & quality management',
    metaTitle: 'CQI and QA & quality management — CQI Verified CX',
    metaDescription:
      'Traditional QA scores a sample of conversations against a form. See what it does well, where it stops, and what CQI adds.',
    hero: {
      ...heroDefaults,
      title: 'CQI and QA\n& quality management',
      titleHighlight: ['QA\n& quality management'],
      description:
        'Traditional QA scores a sample of conversations against a form. CQI measures promise-keeping across every conversation, and points at the reason the promise failed.',
      tags: ['Sample scorecards', 'Speech-driven auto-QA', 'Workforce optimisation suites'],
    },
    category: {
      title: 'QA programmes assure how well interactions were handled',
      titleHighlight: ['assure how well interactions were handled'],
      titleWidth: 619,
      strength:
        'Consistent evaluation against a defined standard, calibration across evaluators, and a defensible record for regulated conversations.',
      limit:
        'Sampling and scope. A few conversations per agent per month, scored on form adherence, cannot see whether the commitment made in the call was executed downstream.',
      addition:
        'Promise-keeping as a measurable skill on 100% of interactions, promises made versus pending, strictly met, and met but late, with the root cause separated into topic, channel, tooling or knowledge gap.',
    },
    sideBySide: {
      competitorLabel: 'QA & quality management',
      rows: [
        {
          dimension: 'Coverage',
          competitor: 'A sample per agent',
          cqi: '100% of interactions',
        },
        {
          dimension: 'What is scored',
          competitor: 'Adherence to the QA form',
          cqi: 'Whether the commitment was kept, and why not',
        },
        {
          dimension: 'Root cause',
          competitor: 'Attributed to the agent',
          cqi: 'Separated into people, process, data and tooling',
        },
        {
          dimension: 'Coaching input',
          competitor: 'Scorecard feedback',
          cqi: 'Benchmarked metric plus the AI-identified cause',
        },
        {
          dimension: 'Relationship',
          competitor: 'Complementary: CQI feeds QA and coaching',
          cqi: 'Extends QA from adherence to outcome',
        },
      ],
    },
  },
];

export const compareDetailSlugs = compareDetailPages.map((page) => page.slug);

export function getCompareDetailPage(slug: string): CompareDetailPage | undefined {
  return compareDetailPages.find((page) => page.slug === slug);
}

/** Shared by all four pages: section heading above the table. */
export const compareDetailCopy = {
  category: { eyebrow: 'The category' },
  sideBySide: {
    eyebrow: 'Side by side',
    title: 'How the two differ',
    description: 'Most CQI deployments run alongside a platform from this category rather than instead of one.',
    dimensionHeader: 'Dimension',
    cqiHeader: 'CQI',
  },
  labels: { strength: 'Strength', limit: 'Limit', addition: 'Addition' },
  cardTitles: { strength: 'What it does well', limit: 'Where it stops', addition: 'What CQI adds' },
  allCategories: { label: 'All four categories', href: '/resources/compare-cqi' },
};

export const compareDetailCta = {
  title: 'See what verification adds to what you already run',
  titleHighlight: ['verification adds'],
  description: 'A 45-minute session mapping CQI against your current platforms, including where it should not go.',
  image: '/images/resources/compare-cqi/cta-verification.jpg',
  mobileImage: '/images/resources/compare-cqi/cta-verification-mobile.jpg',
  imageWidth: 579,
  imageHeight: 289,
  buttons: [
    { label: 'Talk to our team', href: '/contact', variant: 'primary' },
    { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' },
  ],
} satisfies CtaBannerData;

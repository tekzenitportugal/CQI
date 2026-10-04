import type {
  CtaBannerData,
  CtaLink,
  IndustryTagGroup,
  PageHeroData,
  RuledRow,
} from '@/types/content';

/** Figma "Frame 999": one node of the "What an engagement includes" connected diagram. */
export type EngagementNode = {
  /** `\n` renders as a line break, matching the Figma two-line node titles. */
  title: string;
  description: string;
};

export type EngagementData = {
  eyebrow: string;
  title: string;
  nodes: [EngagementNode, EngagementNode, EngagementNode, EngagementNode];
};

/** Figma "Frame 1000003313": one of the two "Growth partners / Value partners" columns. */
export type PartnershipTypeColumn = {
  tag: string;
  /** Reuses TagPill's existing variants: `goals` renders the blue-text chip, `signals` the dark-text one. */
  tagVariant: IndustryTagGroup['variant'];
  title: string;
  description: string;
  cqiProvides: string;
  youGain: string;
};

export type PartnershipTypesData = {
  eyebrow: string;
  title: string;
  titleHighlight: string[];
  description: string;
  columns: [PartnershipTypeColumn, PartnershipTypeColumn];
};

/**
 * Figma "Frame 1000003188" + button, shared shape for "Why partners choose CQI" and
 * "Opt-in infrastructure, not a vendor relationship" — same left-column pattern as
 * GovernanceSection's title + sub-eyebrow block + button.
 */
export type SplitCtaCopy = {
  title: string;
  titleHighlight: string[];
  subLabel: string;
  subDescription: string;
  button: CtaLink;
};

export type WhyChooseData = SplitCtaCopy & {
  rows: RuledRow[];
};

export type AllianceData = SplitCtaCopy & {
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export const partnershipsData = {
  hero: {
    title: 'A selective partner ecosystem, built on shared outcomes',
    titleHighlight: ['shared outcomes'],
    eyebrow: 'Partnerships',
    description:
      'CQI operates a focused, outcome-led partner model. Partners add a verified, outcome-driven intelligence layer to their existing CX, CRM and contact-centre offerings.',
    image: '/images/company/partnerships/hero.png',
    mobileImage: '/images/company/partnerships/hero-mobile.png',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  engagement: {
    eyebrow: 'How we work',
    title: 'What an engagement includes',
    nodes: [
      {
        title: 'Joint value\nalignment',
        description:
          'Agreeing the use cases and the outcome each side is selling, before either of us is in front of a client.',
      },
      {
        title: 'Co-sell\nsupport',
        description:
          'Joint qualification, joint strategic targets, and CQI subject-matter experts in the room for partner-led and CQI-led opportunities alike.',
      },
      {
        title: 'Technical\nenablement',
        description:
          'Integration guidance, accreditation for sales and pre-sales, and certification for architects, developers and practitioners.',
      },
      {
        title: 'Lifecycle collaboration',
        description:
          'Ongoing collaboration through delivery, adoption and expansion, where the recurring value actually sits.',
      },
    ],
  } satisfies EngagementData,

  partnershipTypes: {
    eyebrow: 'Partnership types',
    title: 'Growth partners and value partners',
    titleHighlight: ['Growth', 'value'],
    description:
      'Two tracks, depending on whether you are extending your reach or building a practice on the platform.',
    columns: [
      {
        tag: 'Growth partners',
        tagVariant: 'goals',
        title: 'Referral and reseller',
        description:
          'Refer opportunities, or bulk-buy CQI licences and resell them into your customer base, white label, or as part of an existing offering.',
        cqiProvides:
          'Subject-matter experts across application areas, plus accreditation for sales, pre-sales and marketing professionals',
        youGain: 'A differentiated offer, licence economics and expanded business with CQI',
      },
      {
        tag: 'Value partners',
        tagVariant: 'signals',
        title: 'Delivery and joint go-to-market',
        description:
          'Build accredited solutions and accelerators on the CQI platform stack, which CQI reviews and certifies, or co-invest with us in new offerings and markets.',
        cqiProvides:
          'Technical certification for architects and practitioners, technology assessment, and R&D into new areas',
        youGain:
          'Recognition for certified solutions, lead time on new offerings, and exclusivity by region, industry or segment where agreed',
      },
    ],
  } satisfies PartnershipTypesData,

  whyChoose: {
    title: 'Why partners choose CQI',
    titleHighlight: ['partners choose'],
    subLabel: 'Joint value',
    subDescription:
      'Together with CQI, partners detect friction before it becomes visible noise, verify CX issues using operational truth, and prioritise fixes based on impact.',
    button: { label: 'Become a partner', href: '/contact' },
    rows: [
      { description: 'Adds a verified, outcome-driven intelligence layer to existing offerings' },
      { description: 'Enables proactive CX strategies instead of reactive remediation' },
      { description: 'Strengthens executive-level value conversations' },
      { description: 'Delivers fast time-to-value with lightweight integration' },
      { description: 'Creates ongoing optimisation and expansion opportunities' },
    ],
  } satisfies WhyChooseData,

  alliance: {
    title: 'Opt-in infrastructure, not a vendor relationship',
    titleHighlight: ['not a vendor relationship'],
    subLabel: 'Alliances & consortia',
    subDescription:
      'For alliances and consortia, CQI can sit as infrastructure the alliance offers its members. Only the derived signal is shared, never raw data, so each member keeps its own systems and commercial independence.',
    // No dedicated case-study route exists yet; same placeholder pattern used elsewhere (e.g. integrations.ts).
    button: { label: 'See the interline example', href: '#' },
    image: '/images/company/partnerships/alliance.jpg',
    imageWidth: 1100,
    imageHeight: 1953,
  } satisfies AllianceData,

  cta: {
    title: 'Help your customers move from reactive CX to proactive performance',
    titleHighlight: ['reactive CX to proactive performance'],
    description: "Let's talk about where CQI fits in your practice.",
    image: '/images/company/partnerships/cta.jpg',
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' },
      { label: 'Product overview', href: '/products', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};

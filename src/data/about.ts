import type { CtaBannerData, PageHeroData, RuledRow } from '@/types/content';

/** Local to this page: Figma "Frame 1000003308" — copy + 2 buttons on the left, a 5-row ruled list on the right. */
export type AboutPurposeData = {
  title: string;
  titleHighlight?: string[];
  eyebrow: string;
  lead: string;
  support: string;
  buttons: { label: string; href: string; variant: 'primary' | 'secondary' }[];
  rows: RuledRow[];
};

/** Local to this page: one of the 4 dark cards in the "category defining" band. */
export type CategoryFrontierCard = {
  tag: string;
  title: string;
  description: string;
  /** The last card (CQI) renders solid navy instead of the dark gradient. */
  highlight?: boolean;
};

/** Local to this page: Figma "Frame 1000003506" full-bleed band. */
export type CategoryFrontierData = {
  title: string;
  titleHighlight?: string[];
  description: string;
  cards: CategoryFrontierCard[];
  note: string;
  link: { label: string; href: string };
};

/** Local to this page: one of the 4 light "How we work" cards. */
export type ValueCard = {
  icon: string;
  title: string;
  description: string;
};

/** Local to this page: Figma "Frame 1000003031" — centered heading + 4 light icon cards. */
export type ValuesInPracticeData = {
  eyebrow: string;
  title: string;
  cards: ValueCard[];
};

export const aboutData = {
  hero: {
    title: 'Built by people who ran the operations they now instrument',
    titleHighlight: ['ran the operations'],
    eyebrow: 'ABOUT US',
    description:
      'CQI exists to close the gap between what customers experience and what enterprises can see. CQI Sense is the verification and action layer of the CX stack, deployed with enterprise operators worldwide.',
    titleMaxWidth: 767,
    image: '/images/company/about/hero.webp',
    mobileImage: '/images/company/about/hero-mobile.webp',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  purpose: {
    title: 'Improve churn, ARPU and OPEX with an AI platform that anticipates customer behaviour',
    titleHighlight: ['AI platform', 'anticipates customer behaviour'],
    eyebrow: 'PURPOSE',
    lead: 'We time every action for maximum impact and allocate resources where they matter most, turning insight into outcomes rather than into another dashboard.',
    support:
      'The brand concept behind CQI is absence: when the platform works, the customer never has to deal with the problem. Friction may arise, but they never perceive it. It never gets to happen.',
    buttons: [
      { label: 'Our history', href: '/company/history', variant: 'primary' },
      { label: 'The team', href: '/company/team', variant: 'secondary' },
    ],
    rows: [
      {
        label: 'Category',
        description:
          'Operational experience intelligence, the verification and action layer above CCaaS, analytics and VoC',
      },
      {
        label: 'Industries',
        description: 'Telecom, Airlines, Banking, Insurance, Utilities & Energy, Consumer electronics',
      },
      {
        label: 'Regions',
        description: 'CQI operates worldwide',
      },
      {
        label: 'Team',
        description: 'Deep operational and technical expertise across operations, data, AI and customer experience',
      },
      {
        label: 'Contact',
        description: 'marketing@cqisense.com',
      },
    ] satisfies RuledRow[],
  } satisfies AboutPurposeData,

  categoryFrontier: {
    title: 'The category defining \na new competitive frontier',
    titleHighlight: ['a new competitive frontier'],
    description:
      'Companies no longer win by handling interactions faster, measuring satisfaction better, or launching new digital products. They win through reliable execution of the experience they promised.',
    cards: [
      {
        tag: 'CCaaS',
        title: 'Interaction Handling',
        description: 'Optimise how interactions are handled.',
      },
      {
        tag: 'Interaction analytics',
        title: 'Experience insight',
        description: 'Understand what happens during interactions and journeys.',
      },
      {
        tag: 'Interaction analytics',
        title: 'Experience measurement',
        description: 'Measure how customers feel about experiences.',
      },
      {
        tag: 'CQI',
        title: 'Execution reliability',
        description: 'Prevent failure and ensure customer promises were actually fulfilled and executed.',
        highlight: true,
      },
    ] satisfies CategoryFrontierCard[],
    note: 'CQI does not replace VoC or analytics. It links experience to execution to enable earlier action, the drift early-detection radar and operational-experience verification layer.',
    link: { label: 'Category comparisons', href: '/resources/compare-cqi' },
  } satisfies CategoryFrontierData,

  valuesInPractice: {
    eyebrow: 'Values in practice',
    title: 'How we work',
    cards: [
      {
        icon: '/images/company/about/verify-dont-assume.svg',
        title: 'Verify, don’t assume',
        description:
          'An unverified insight is a hypothesis. We close cases on system evidence, and we hold ourselves to the same standard in the business case.',
      },
      {
        icon: '/images/company/about/prove-it-small.svg',
        title: 'Prove it small,\nprove it fast',
        description:
          'One journey, one segment, one region. A friction map on your data beats a benchmark from someone else’s.',
      },
      {
        icon: '/images/company/about/explainable-by-default.svg',
        title: 'Explainable by default',
        description:
          'If a platform makes decisions about customers, someone will have to explain one. We build so that explanation exists as an artefact.',
      },
      {
        icon: '/images/company/about/enrich-dont-replace.svg',
        title: 'Enrich, don’t replace',
        description: 'Nobody needs another rip-and-replace programme. We add a layer and leave the estate standing.',
      },
    ] satisfies ValueCard[],
  } satisfies ValuesInPracticeData,

  cta: {
    title: 'Work with us',
    titleHighlight: ['Work'],
    description: 'Whether you are buying, partnering or joining, the conversation starts the same way.',
    image: '/images/company/about/cta-work-with-us.webp',
    imageWidth: 579,
    imageHeight: 289,
    // Figma: tall portrait photo, 868px tall inside the 289px frame, top-cropped by 256px
    imageInset: { top: -256, left: 0, width: 579, height: 868 },
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' as const },
      { label: 'Partnerships', href: '/company/partnerships', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

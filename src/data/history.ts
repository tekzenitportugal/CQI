import type { CtaBannerData, PageHeroData } from '@/types/content';

/** Figma "tag" instance variant reused from TagPill: 'goals' = light-blue pill, blue text. */
export type MilestoneItem = {
  tag: string;
  title: string;
  description: string;
};

export type QuoteCard = {
  /** TagPill variant: 'invisible' = coral (the problem), 'goals' = blue (the answer). */
  tagVariant: 'invisible' | 'goals';
  tag: string;
  quote: string;
  description: string;
};

export const historyData = {
  hero: {
    title: 'From operator problem to platform',
    titleHighlight: ['platform'],
    eyebrow: 'OUR HISTORY',
    description:
      'CQI began with a problem its founders had lived: CX programmes that measure complaints instead of preventing them.',
    image: '/images/company/history/hero.png',
    mobileImage: '/images/company/history/hero-mobile.png',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  milestones: {
    eyebrow: 'Milestones',
    title: 'How the product got here',
    titleHighlight: ['product got here'],
    items: [
      {
        tag: '2021',
        title: 'Founded',
        description:
          'CQI Sense is established to attack a problem its founders had lived: CX programmes that measure complaints instead of preventing them.',
      },
      {
        tag: 'Telco first',
        title: 'Proven in the hardest environment',
        description:
          'High volumes, fragmented systems and operational dependencies, the conditions that make friction invisible.',
      },
      {
        tag: 'Verified CX',
        title: 'The verification layer',
        description:
          'The core insight hardens into a product: conversations are only trustworthy when checked against operational truth.',
      },
      {
        tag: 'Expansion',
        title: 'Beyond telecom',
        description:
          'The same pattern holds in airlines, banking, insurance, utilities and consumer electronics, each with its own signals.',
      },
      {
        tag: 'Today',
        title: 'Enterprise programmes',
        description:
          'Deployed with enterprise operators worldwide, with a partner ecosystem extending delivery.',
      },
    ] satisfies MilestoneItem[],
  },

  whyItExists: {
    eyebrow: 'Why it exists',
    title: 'The insight that started it',
    cards: [
      {
        tagVariant: 'invisible',
        tag: 'The problem',
        quote: '“I don’t see anything in the systems”',
        description:
          'A customer describes a promise that was made and never kept. The agent looks at four systems, finds no record, and the investigation ends. The customer is right, the systems are silent, and nobody owns the gap between them.',
      },
      {
        tagVariant: 'goals',
        tag: 'The answer',
        quote: 'Verify, don’t assume',
        description:
          'If the promise is extracted when it is made and reconciled against the system that must execute it, the gap becomes an alert with an owner and a clock — instead of a four-day investigation and a churn signal nobody logged.',
      },
    ] satisfies QuoteCard[],
  },

  cta: {
    title: 'See where the idea ended up',
    titleHighlight: ['idea'],
    description: 'The same argument, running on a worked example. No form to fill in.',
    image: '/images/company/history/cta-idea.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'See it live', href: '/resources/see-it-live', variant: 'primary' as const },
      { label: 'About us', href: '/company/about', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

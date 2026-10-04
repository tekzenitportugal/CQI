import type { CtaBannerData, PageHeroData } from '@/types/content';

export type TeamGroupCard = {
  icon: string;
  title: string;
  description: string;
};

export type TeamCultureCard = {
  title: string;
  description: string;
};

export const teamData = {
  hero: {
    title: 'Operations, data, AI and CX in the same room',
    titleHighlight: ['CX in the same room'],
    eyebrow: 'cqi team',
    description:
      'The team pairs people who have run contact centres and operations with the data and AI engineers who instrument them. That combination is why the product talks about promises and root causes rather than sentiment scores.',
    image: '/images/company/team/hero.png',
    mobileImage: '/images/company/team/hero-mobile.png',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  groups: {
    eyebrow: 'How the team is organised',
    title: 'Four groups, one delivery model',
    titleHighlight: ['one delivery model'],
    cards: [
      {
        icon: '/images/company/team/leadership.svg',
        title: 'Leadership',
        description: 'Company direction, category and enterprise relationships',
      },
      {
        icon: '/images/company/team/data-ai.svg',
        title: 'Data & AI',
        description: 'Intelligence engine, models, explainability and governance',
      },
      {
        icon: '/images/company/team/delivery-cx.svg',
        title: 'Delivery & CX practice',
        description: 'PoCs, implementation, adoption and the operating model',
      },
      {
        icon: '/images/company/team/partnerships.svg',
        title: 'Partnerships',
        description: 'Growth and value partners, accreditation and joint offerings',
      },
    ] satisfies TeamGroupCard[],
  },

  culture: {
    eyebrow: 'Working at CQI',
    title: 'What the team is built around',
    titleHighlight: ['built around'],
    button: { label: 'Open roles', href: '/company/careers' },
    cards: [
      {
        title: 'How the team is organised',
        description:
          'People who have carried a contact-centre P&L design differently from people who have only reported on one.',
      },
      {
        title: 'Evidence over opinion',
        description:
          'The product closes cases on system evidence. The company argues the same way internally.',
      },
      {
        title: 'Enterprise pace, direct ownership',
        description:
          'Named ownership through a PoC, and enough autonomy to change the product when a client teaches us something.',
      },
    ] satisfies TeamCultureCard[],
  },

  cta: {
    title: 'Talk to the people who would run your programme',
    titleHighlight: ['Talk to the people'],
    description: 'A named account manager drives every proof of concept end to end.',
    image: '/images/company/team/cta.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' as const },
      { label: 'PoC approach', href: '/products/poc-approach', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

import type { CtaBannerData, CtaLink, PageHeroData } from '@/types/content';

export type DisciplineCard = {
  title: string;
  description: string;
  image: string;
};

export type CareersDisciplinesData = {
  eyebrow: string;
  title: string;
  cta: CtaLink;
  cards: DisciplineCard[];
};

export type CareersPageData = {
  hero: PageHeroData;
  disciplines: CareersDisciplinesData;
  cta: CtaBannerData;
};

export const careersData: CareersPageData = {
  hero: {
    title: 'Build the layer that stops failure before it lands',
    titleHighlight: ['stops failure before it lands'],
    eyebrow: 'Careers',
    // Figma title text box is 737px wide (2 lines), wider than the 587px column.
    titleMaxWidth: 737,
    description:
      'CQI is an enterprise software company solving a problem most of its market has not yet named. The work is close to real operations, and the feedback loop is a client’s own data.',
    image: '/images/company/careers/hero.png',
    mobileImage: '/images/company/careers/hero-mobile.png',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  disciplines: {
    eyebrow: 'Where we hire',
    title: 'Four disciplines',
    cta: { label: 'Send a speculative application', href: '/contact' },
    cards: [
      {
        title: 'Data & AI engineering',
        description:
          'Ingestion pipelines, classification, root cause analytics, explainable risk modelling and multilingual NLP.',
        image: '/images/company/careers/discipline-data-ai-engineering.jpg',
      },
      {
        title: 'CX delivery & consulting',
        description:
          'Running proofs of concept, building the operating model with clients, and turning a friction map into adoption.',
        image: '/images/company/careers/discipline-cx-delivery-consulting.jpg',
      },
      {
        title: 'Enterprise sales',
        description:
          'Complex service industries, long buying committees, and a category that has to be explained before it is sold.',
        image: '/images/company/careers/discipline-enterprise-sales.jpg',
      },
      {
        title: 'Product & design',
        description:
          'Making verification legible: health views, worklists, ledgers and workflows that an operator can own.',
        image: '/images/company/careers/discipline-product-design.jpg',
      },
    ],
  },

  cta: {
    title: 'See what you would be working on',
    titleHighlight: ['working on'],
    description: 'The product, end to end, before you decide whether to apply.',
    image: '/images/company/careers/cta-portfolio.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'See it live', href: '/resources/see-it-live', variant: 'primary' },
      { label: 'About us', href: '/company/about', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};

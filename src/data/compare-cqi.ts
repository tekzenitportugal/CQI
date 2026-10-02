import type { CtaBannerData } from '@/types/content';
import type { CompareCategoriesSectionData } from '@/components/sections/CompareCategoriesSection';
import type { DistinctionTableSectionData } from '@/components/sections/DistinctionTableSection';
import type { FaqSectionData } from '@/components/sections/FaqSection';
import type { HeroCopyData } from '@/components/ui/HeroCopy';

export const compareCqiData = {
  metaTitle: 'Compare CQI — CQI Verified CX',
  metaDescription:
    'CQI is not an alternative to your contact centre, your analytics platform or your VoC programme. It is the layer above them. These pages set out what each category does well, where it stops, and what verification adds.',
  hero: {
    title: 'Where CQI sits in a stack\nyou have already bought',
    titleHighlight: ['Where CQI sits'],
    copyMaxWidth: 708,
    eyebrow: 'Compare CQI',
    description:
      'CQI is not an alternative to your contact centre, your analytics platform or your VoC programme. It is the layer above them. These pages set out what each category does well, where it stops, and what verification adds.',
  } satisfies HeroCopyData,

  categories: {
    title: 'Four categories, four different jobs',
    titleHighlight: ['Four categories'],
    intro:
      'Interaction handling, then experience insight, then experience measurement, and now execution reliability. Each layer answers a question the one before it could not.',
    disclaimer:
      'Named platforms are listed as examples of each category, as they appear in CQI market material. These are category comparisons, not product-by-product benchmarks.',
    items: [
      {
        title: 'CQI vs CCaaS &\ncontact centre reporting',
        description: 'CCaaS platforms optimise how interactions are handled.',
        tags: ['NICE', 'Genesys', 'Amazon Connect', 'Five9'],
        href: '#',
      },
      {
        title: 'CQI vs Interaction &\nspeech analytics',
        description: 'Interaction analytics explains what happens during interactions.',
        tags: ['Verint', 'CallMiner', 'Observe.AI', 'Quantum Metric'],
        href: '#',
      },
      {
        title: 'CQI vs VoC &\nCXM platforms',
        description: 'VoC platforms measure how customers feel about experiences.',
        tags: ['Qualtrics', 'Medallia', 'InMoment', 'Forsta'],
        href: '#',
      },
      {
        title: 'CQI vs QA &\nquality management',
        description: 'QA programmes assure how well interactions were handled.',
        tags: ['Sample scorecards', 'Speech-driven auto-QA', 'Workforce optimisation suites'],
        href: '#',
      },
    ],
  } satisfies CompareCategoriesSectionData,

  distinction: {
    eyebrow: 'In one line',
    title: 'The distinction that matters',
    headers: {
      category: 'Category',
      question: 'The question it answers',
      blindSpot: 'What it cannot see',
    },
    rows: [
      {
        category: 'CCaaS',
        question: 'How well was the interaction handled?',
        blindSpot: 'Whether the commitment inside it was executed',
      },
      {
        // "Interactio" is a typo baked into the Figma text itself — kept verbatim.
        category: 'Interactio Analytics',
        question: 'What happened during the conversation?',
        blindSpot: 'What the systems did afterwards',
      },
      {
        category: 'VoC / CXM',
        question: 'How do customers say they feel?',
        blindSpot: 'The majority who never answer',
      },
      {
        category: 'QA & Quality Management',
        question: 'Did the agent follow the standard?',
        blindSpot: 'Whether the promise was kept downstream',
      },
      {
        category: 'CQI',
        question: 'Was the experience we promised actually delivered?',
        blindSpot: 'Designed to consume the four above rather\nthan replace them',
        highlight: true,
      },
    ],
  } satisfies DistinctionTableSectionData,

  faq: {
    eyebrow: 'Frequently asked',
    title: 'About this calculator',
    items: [
      {
        question: 'Where do the percentages come from?',
        answer:
          'They are the outcome ceilings published in CQI programme material: up to 30% cost-to-serve reduction, up to 30% FCR improvement, up to 15% AHT reduction and up to 25% churn reduction. They are ceilings for programmes where friction is identified and resolved before it compounds — not averages, and not portable between sectors.',
        link: { label: 'How we prove it', href: '/products/how-we-prove-it' },
      },
      {
        question: 'Is this a quote?',
        answer: 'Answer to follow.',
      },
      {
        question: 'How would we validate these numbers?',
        answer: 'Answer to follow.',
      },
    ],
  } satisfies FaqSectionData,

  conversationCta: {
    title: 'Bring your current stack\nto the conversation',
    titleHighlight: ['current stack'],
    description: 'We will map where CQI sits relative to what you already run, and where it should not go.',
    image: '/images/resources/compare-cqi/cta-photo.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' },
      { label: 'Product overview', href: '/products', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};

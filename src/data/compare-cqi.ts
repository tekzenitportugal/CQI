import type { CtaBannerData } from '@/types/content';
import type { CompareCategoriesSectionData } from '@/components/sections/CompareCategoriesSection';
import type { DistinctionTableSectionData } from '@/components/sections/DistinctionTableSection';
import type { HeroCopyData } from '@/components/ui/HeroCopy';

export const compareCqiData = {
  metaTitle: 'Compare CQI — CQI Verified CX',
  metaDescription:
    'CQI is not an alternative to your contact centre, your analytics platform or your VoC programme. It is the layer above them. These pages set out what each category does well, where it stops, and what verification adds.',
  hero: {
    title: 'Where CQI sits in a stack\nyou have already bought',
    titleHighlight: ['Where CQI sits'],
    copyMaxWidth: 708,
    mobileInlineTitle: true,
    mobileMinHeight: 880,
    mobilePaddingTop: 57,
    eyebrow: 'Compare CQI',
    description:
      'CQI is not an alternative to your contact centre, your analytics platform or your VoC programme. It is the layer above them. These pages set out what each category does well, where it stops, and what verification adds.',
  } satisfies HeroCopyData,

  // Figma 6225:40836: linear-gradient(76.91deg, #668fff 147.05%, #edf2ff 100%) rendered flipped
  // horizontally → 283.09deg; first stop is -147.05% per the site's gradient-sign rule.
  heroGradient: 'linear-gradient(283.09deg, #668fff -147.05%, #edf2ff 100%)',

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
        mobileTitle: 'CQI vs CCaaS\n& contact centre reporting',
        mobileDescription: 'What your customers speak. Calls, chats, bot sessions, emails and feedback, read in full, not sampled.',
        tags: ['NICE', 'Genesys', 'Amazon Connect', 'Five9'],
        tagsWidth: 237,
        href: '#',
      },
      {
        title: 'CQI vs Interaction &\nspeech analytics',
        description: 'Interaction analytics explains what happens during interactions.',
        mobileTitle: 'CQI vs Interaction\n& speech analytics',
        tags: ['Verint', 'CallMiner', 'Observe.AI', 'Quantum Metric'],
        tagsWidth: 217,
        href: '#',
      },
      {
        title: 'CQI vs VoC &\nCXM platforms',
        description: 'VoC platforms measure how customers feel about experiences.',
        mobileTitle: 'CQI vs VoC\n& CXM platforms',
        tags: ['Qualtrics', 'Medallia', 'InMoment', 'Forsta'],
        tagsWidth: 181,
        href: '#',
      },
      {
        title: 'CQI vs QA &\nquality management',
        description: 'QA programmes assure how well interactions were handled.',
        mobileTitle: 'CQI vs QA &\nquality management',
        tags: ['Sample scorecards', 'Speech-driven auto-QA', 'Workforce optimisation suites'],
        tagsWidth: 310,
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
        category: 'Interaction Analytics',
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

  conversationCta: {
    title: 'Bring your current stack\nto the conversation',
    titleHighlight: ['current stack'],
    description: 'We will map where CQI sits relative to what you already run, and where it should not go.',
    image: '/images/resources/compare-cqi/cta-photo.jpg',
    mobileImage: '/images/resources/compare-cqi/cta-photo-mobile.jpg',
    mobileInlineTitle: true,
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' },
      { label: 'Product overview', href: '/products', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};

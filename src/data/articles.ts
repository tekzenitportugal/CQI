import type { CtaBannerData, PageHeroData } from '@/types/content';
import type { PublishedPiecesSectionData } from '@/components/sections/PublishedPiecesSection';

export const articlesData = {
  metaTitle: 'Articles & Blogs — CQI Verified CX',
  metaDescription:
    'Point of view and practitioner pieces on measuring what customers actually experience, and acting on it while it still matters.',
  hero: {
    title: 'Verified CX, in practice',
    titleHighlight: ['Verified CX,'],
    eyebrow: 'Articles & blogs',
    mobilePaddingTop: 328,
    mobileIntroGap: 10,
    description:
      'Point of view and practitioner pieces on measuring what customers actually experience, and acting on it while it still matters.',
  } satisfies PageHeroData,

  published: {
    title: 'Published pieces,\nand what is on the way',
    titleHighlight: ['Published pieces,'],
    items: [
      {
        tags: ['Point of view'],
        title: 'Why your NPS is dropping, and your dashboard isn’t',
        description:
          'The gap between survey response rates and lifecycle reality, and what closes it',
        readTime: '7 min read',
        href: '#',
      },
      {
        tags: ['Point of view'],
        title: 'Strictly met, or met but late?',
        // Same description text as the first card — as given; flag if that was meant to differ.
        description:
          'The gap between survey response rates and lifecycle reality, and what closes it',
        readTime: '7 min read',
        href: '#',
      },
      {
        tags: ['Delivery'],
        title: 'From PoC to horizon three',
        description:
          'Sequencing a CX intelligence programme without a big-bang replacement.',
        readTime: '2 min read',
        href: '#',
      },
    ],
  } satisfies PublishedPiecesSectionData,

  conversationCta: {
    title: 'Prefer a conversation to a blog post?',
    titleHighlight: ['conversation'],
    description: 'We will bring the sector view instead of the reading list.',
    image: '/images/resources/articles/cta-conversation.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
      { label: 'Glossary', href: '/resources/glossary', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};

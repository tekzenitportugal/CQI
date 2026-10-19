import type { CtaBannerData, PageHeroData } from '@/types/content';
import { articleHref, articlePosts } from '@/data/article-posts';
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
    // Cards come from the posts in article-posts.ts; the section switches layout by count (1 wide card, 2 columns, 3+ grid, "Load more" past 9).
    items: articlePosts.map((post) => ({
      image: post.card.image,
      title: post.hero.title.replace('\n', ' '),
      description: post.card.description,
      readTime: post.card.readTime,
      href: articleHref(post.slug),
    })),
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

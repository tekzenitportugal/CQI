import type { PageHeroData } from '@/types/content';

/** One piece of article body copy. `highlight` phrases render in blue. */
export type ArticleBlock =
  | { type: 'paragraph'; text: string; highlight?: string[] }
  | { type: 'image'; src: string; alt: string }
  | { type: 'quote'; text: string; highlight?: string[] }
  | { type: 'link'; label: string; href: string };

export type ArticleSection = {
  /** Anchor id; also what the sidebar contents list scrolls to. */
  id: string;
  /** Omit for the opening section (no heading, not listed in the contents). */
  title?: string;
  titleHighlight?: string[];
  /** Label in the sidebar contents list; defaults to `title`. */
  tocLabel?: string;
  blocks: ArticleBlock[];
};

export type ArticlePost = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: PageHeroData;
  sections: ArticleSection[];
  /** Full-width photo row under the last section (wide photo + narrow photo). */
  gallery?: { src: string; alt: string }[];
  /** Landing-page card. */
  card: {
    image: string;
    description: string;
    readTime: string;
  };
};

const IMG = '/images/resources/articles';

export const articlePosts: ArticlePost[] = [
  {
    slug: 'cqi-at-world-aviation-festival-2026',
    metaTitle: 'CQI at World Aviation Festival 2026: Recap — CQI Verified CX',
    metaDescription:
      'CQI, an AI platform that scores the live experience of 100% of passengers and tells every team whom to recover, why, and what to do, was exhibited at World Aviation Festival 2026 (13–15 October, FIL Lisbon).',
    hero: {
      // Figma breaks the title after "Aviation"; the highlight is split so it survives the break.
      title: 'CQI at World Aviation\nFestival 2026: Recap',
      titleHighlight: ['World Aviation', 'Festival 2026'],
      mobileInlineTitle: true,
      eyebrow: 'Press release',
      description: 'October 20, 2026 | Lisbon, Portugal',
      descriptionMeta: true,
      backLink: { label: 'Back to all articles', href: '/resources/articles' },
      image: `${IMG}/waf-2026-hero.jpg`,
      mobileImage: `${IMG}/waf-2026-hero.jpg`,
      imageUnoptimized: true,
      mobilePhotoHeight: 56,
      desktopImageFrame: { left: 21.05, top: -11.06, width: 100, height: 122.11, aspect: 1600 / 1090 },
    },
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'CQI, an AI platform that scores the live experience of 100% of passengers and tells every team whom to recover, why, and what to do, was exhibited at World Aviation Festival 2026 (13–15 October, FIL Lisbon). Max Blumberg, CEO and Founder, and the team met with airline executives and press to discuss how AI is helping airlines move from reacting to passenger complaints to preventing them.',
          },
          {
            type: 'image',
            src: `${IMG}/waf-2026-recap.png`,
            alt: 'The CQI team at the CQI stand, World Aviation Festival 2026',
          },
        ],
      },
      {
        id: 'remove-friction',
        title: 'Remove friction before the flight',
        titleHighlight: ['Remove friction'],
        blocks: [
          {
            type: 'paragraph',
            text: 'CQI is an AI CX platform that, instead of waiting for a complaint to reach a contact centre, identifies gaps between what airlines promise and what passengers experience, flagging friction early enough to act before it turns into churn, lost loyalty, or repeat contacts.',
          },
          { type: 'paragraph', text: 'In Max Blumberg’s words:' },
          {
            type: 'quote',
            text: '85% off customers who suffer a problem during the flight or before the flight never complain. We called it “silent majority”. They don’t complain; they just leave!',
            highlight: ['85% off customers', 'never complain.'],
          },
          {
            type: 'paragraph',
            text: 'For CQI this is an “opportunity to understand what they are going through”.',
          },
          { type: 'link', label: 'View the full content here', href: '#' },
        ],
      },
      {
        id: 'highlights',
        title: 'Show highlights',
        titleHighlight: ['highlights'],
        tocLabel: 'Highlights',
        blocks: [
          {
            type: 'paragraph',
            text: 'CQI exhibited at stand 2-176 throughout World Aviation Festival 2026. Over the three days, the team held XXX meetings with airline and airport executives and press interviews. Best thing said at the stand, from those that visited us: "CQI is the only thing new at the event!".',
            highlight: ['XXX'],
          },
        ],
      },
    ],
    gallery: [
      { src: `${IMG}/waf-2026-highlight-1.jpg`, alt: 'CQI team members presenting the platform at the stand' },
      { src: `${IMG}/waf-2026-highlight-2.jpg`, alt: 'Max Blumberg speaking on the World Aviation Festival stage' },
    ],
    card: {
      image: `${IMG}/waf-2026-recap.png`,
      description:
        'CQI, an AI platform that scores the live experience of 100% of passengers and tells every team whom to recover, why, and what to do, was exhibited at World Aviation Festival 2026 (13–15 October, FIL Lisbon).',
      readTime: '7 min read',
    },
  },
];

export const articleSlugs = articlePosts.map((post) => post.slug);

export function getArticlePost(slug: string) {
  return articlePosts.find((post) => post.slug === slug);
}

export function articleHref(slug: string) {
  return `/resources/articles/${slug}`;
}

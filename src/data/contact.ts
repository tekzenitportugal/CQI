import type { CtaBannerData, PageHeroData } from '@/types/content';

export type ContactChannel = {
  title: string;
  description: string;
  email?: string;
  link?: { label: string; href: string };
};

/** Figma "GET IN TOUCH" (6079:30515). */
export const contactData = {
  hero: {
    title: 'Talk to our team',
    titleHighlight: ['Talk'],
    eyebrow: 'Get in touch',
    description:
      'Whether you are buying, partnering, joining or writing about CQI, the conversation starts in the same place.',
    image: '/images/shared/contact/hero.png',
    mobileImage: '/images/shared/contact/hero-mobile.png',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  channels: {
    eyebrow: 'Where to write',
    title: 'Pick the conversation you need',
    // Figma "Frame 1000003115" (6079:30517): 6 light, bordered rows, each with an
    // optional mailto email and an optional trailing link/button.
    rows: [
      {
        title: 'Sales & proof of concept',
        description: 'Scoping a PoC, a demo for your buying committee, or a scoped proposal.',
        email: 'marketing@cqisense.com',
        link: { label: 'Request a demo', href: '/request-a-demo' },
      },
      {
        title: 'Partnerships',
        description: 'Referral, reseller, delivery and joint go-to-market conversations.',
        email: 'marketing@cqisense.com',
        link: { label: 'Partnership model', href: '/company/partnerships' },
      },
      {
        title: 'Security & procurement',
        description: 'Questionnaires, evidence packs and infosec review.',
        email: 'marketing@cqisense.com',
        link: { label: 'Security & Trust', href: '/products/security-trust' },
      },
      {
        title: 'Media & analysts',
        description: 'Briefings, commentary and press enquiries.',
        email: 'marketing@cqisense.com',
      },
      {
        title: 'Careers',
        description: 'Operations, data, AI and CX delivery roles.',
        link: { label: 'Open roles', href: '/company/careers' },
      },
      {
        title: 'Company',
        description:
          'CQI operates worldwide, with sector programmes across Telecom, Airlines, Banking, Insurance, Utilities & Energy and Consumer electronics.',
      },
    ] satisfies ContactChannel[],
  },

  cta: {
    title: 'Or start with the walkthrough',
    titleHighlight: ['walkthrough'],
    description: 'Five stages, one broken promise, no form to fill in.',
    image: '/images/shared/contact/cta-walkthrough.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'See it live', href: '/resources/see-it-live', variant: 'primary' as const },
      { label: 'Request a demo', href: '/request-a-demo', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

import type { PageHeroData } from '@/types/content';
import type { DemoCoverageSectionData } from '@/components/sections/DemoCoverageSection';
import type { DemoFormSectionData } from '@/components/sections/DemoFormSection';

export const requestADemoData = {
  metaTitle: 'Request a Demo — CQI Verified CX',
  metaDescription:
    'A 45-minute session on your operation: where friction is likely hiding, what verification would expose, and how a two-week non-intrusive proof of value would run.',
  hero: {
    title: 'See friction before your customers do',
    titleHighlight: ['See friction before'],
    eyebrow: 'Request a demo',
    description:
      'A 45-minute session on your operation: where friction is likely hiding, what verification would expose, and how a two-week non-intrusive proof of value would run.',
    image: '/images/shared/request-a-demo/hero.png',
    mobileImage: '/images/shared/request-a-demo/hero-mobile.png',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  form: {
    eyebrow: 'Book a session',
    title: 'Tell us where to start',
    submitLabel: 'Request a demo',
  } satisfies DemoFormSectionData,

  coverage: {
    coverageTitle: 'What we will cover',
    coverageItems: [
      'The friction most likely hiding in your journeys, by sector pattern',
      'A live walkthrough of the health view, root cause screening and the recovery loop',
      'What a two-week non-intrusive proof of value needs from you',
      'Architecture, data residency and the security evidence pack',
      'Creates ongoing optimisation and expansion opportunities',
    ],
    options: [
      {
        title: 'Prefer to look around first?',
        description:
          'The self-guided walkthrough follows one broken promise through all five stages, with no form to fill in.',
        linkLabel: 'See it live',
        linkHref: '/resources/see-it-live',
      },
      {
        title: 'Prefer to start smaller?',
        description:
          'A non-intrusive proof of value runs on interaction content and contact metadata alone, no backend integration required — and still surfaces broken promises.',
        linkLabel: 'The five PoC steps',
        linkHref: '/products/poc-approach',
        highlight: true,
      },
    ],
  } satisfies DemoCoverageSectionData,
};

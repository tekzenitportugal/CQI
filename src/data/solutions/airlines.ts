import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type { IndustrySolutionData } from '@/types/content';
import {
  industryCtaBanner,
  industryPlugIn,
  mapFriction,
  mapScenarios,
  mapThreeThings,
} from '@/data/solutions/shared';

export const airlinesSolutionData = {
  slug: 'airlines',
  metaTitle: 'Airlines — CQI Verified CX',
  metaDescription:
    'Score every passenger lifecycle from operational events — not the 5% who answer surveys.',
  hero: {
    title: '100% of passengers, not the 5% who answer surveys',
    titleHighlight: ['100% of passengers'],
    eyebrow: 'airlines',
    description:
      "Airlines manage CX on the opinion of a small, late-responding minority. CQI scores every passenger's lifecycle from operational events, live, and routes recovery before the next booking decision.",
    mobileInlineTitle: true,
    mobileIntroGap: 10,
    titleMaxWidth: 708,
    descriptionMaxWidth: 653,
    copyMaxWidth: 708,
    cta: {
      label: 'Model the range',
      href: '/resources/roi-calculator',
      variant: 'secondary',
    },
  } satisfies HeroCopyData,
  heroImage: '/images/solutions/airlines/hero.webp',
  heroImageMobile: '/images/solutions/airlines/hero-mobile.webp',
  heroImageAspectRatio: '2433 / 2544',
  heroMockup: true,
  friction: mapFriction({
    // U+2060 after the hyphen keeps "late-responding" on one line when the title wraps (Figma mobile).
    title: 'Airlines manage CX on the opinion of a small, late-\u2060responding minority.',
    titleHighlight: ['manage CX', 'late-\u2060responding minority.'],
    description:
      'Every day, high-value passengers have experiences across multiple touchpoints that your teams never see, cannot connect to and cannot act on. CQI delivers personal, actionable intelligence for 100% of passengers, live, from operations, not surveys.',
    tagGroups: [
      {
        label: 'What stays invisible',
        tags: [
          'Delays and misconnects',
          'Seat and cabin downgrades',
          'Lounge refusals',
          'Baggage failures',
          'Wi-Fi and IFE faults',
          'Interline handoffs',
        ],
      },
      {
        label: 'Signals CQI reads',
        tags: [
          'PSS & flight ops',
          'Loyalty / FFP',
          'App & web',
          'IVR & bot',
          'Gate scans',
          'Lounge & cabin',
        ],
      },
      {
        label: 'CQI GOALS',
        tags: ['Passenger lifecycle score', 'Service recovery orchestration'],
      },
    ],
    imageAspect: '587 / 340',
    imageOverlay: 0,
    imagePosition: 'center top',
    imageFramed: true,
  }, '/images/solutions/airlines/dashboard.webp'),
  threeThings: mapThreeThings({
    title: 'Three things the verification layer adds in this sector.',
    titleHighlight: 'the verification layer adds',
    items: [
      {
        step: 1,
        title: 'A score per passenger,\nnot per survey',
        description:
          "Every event, delay, downgrade, lounge refusal, baggage failure, moves a passenger's lifecycle state in real time.",
      },
      {
        step: 2,
        title: 'Recovery before\nthe next booking',
        description:
          'A tailored action routed to a named owner while the passenger is still in the journey, not weeks later in a survey report.',
      },
      {
        step: 3,
        title: 'Context that survives\nthe handoff',
        description:
          'A delay or lost bag on leg one travels with the passenger to leg two, even across carriers, as a derived signal rather than raw data.',
      },
    ],
  }),
  scenarios: mapScenarios({
    title: 'Two scenarios from airlines programmes',
    titleHighlight: 'scenarios',
    items: [
      {
        title: 'Recover the passenger, not the complaint',
        description:
          'A passenger is refused the lounge, sits through a 60-minute delay, finds the Wi-Fi down and misses a connection, and files nothing. CQI scores the lifecycle from operational events, flags the erosion and routes a tailored recovery action to the right person.',
        outcome:
          'Retention recovered before the next booking decision, with the action verified in billing or loyalty rather than assumed.',
        image: '/images/solutions/airlines/scenario-1.webp',
      },
      {
        title: 'Turn on the light at the handoff',
        description:
          'A delay, a downgrade or a lost bag on leg one never travels with the passenger onto leg two, even inside the same alliance. The second carrier sees a confirmed seat and treats a frustrated flyer as new.',
        outcome:
          'Only the derived signal is shared, never raw data, so each carrier keeps its own systems and commercial independence.',
        image: '/images/solutions/airlines/scenario-2.png',
      },
    ],
  }),
  researchMetrics: {
    eyebrow: "Why today's metrics fail",
    title: 'Managing CX on the opinion of a late-responding minority',
    titleHighlight: ['Managing CX', 'late-responding minority'],
    metrics: [
      {
        value: '85%',
        label: 'of passengers with\na problem, never complain during travel',
        source: 'Sources: caa 2023',
      },
      {
        value: '38%',
        label: 'will fly and spend less after one bad experience',
        source: 'Sources: qualtrics XM Institute, 2025',
      },
      {
        value: '5-10%',
        label: 'typical NPS response rate in airlines',
        source: 'Sources: Industry benchmarks',
      },
      {
        value: '16%',
        label: 'will never book again after one bad experience',
        source: 'Sources: qualtrics XM Institute, 2025',
      },
    ],
    footnote:
      'Published industry research, not CQI results. No visibility. No proactivity. No second chance.',
  },
  plugIn: industryPlugIn,
  cta: industryCtaBanner(
    'airlines friction',
    'airlines friction',
    '/images/solutions/airlines/cta-photo.jpg',
    'center',
  ),
} satisfies IndustrySolutionData;

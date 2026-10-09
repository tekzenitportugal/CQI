import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type { FaqSectionData } from '@/components/sections/FaqSection';
import type { CtaBannerData } from '@/types/content';
import { airlinesSolutionData } from '@/data/solutions/airlines';

/** Seat state codes: H healthy · F friction · E eroding · R imminent risk · S silent. */
export type SeatState = 'H' | 'F' | 'E' | 'R' | 'S';

export type AirlinesSeatBlock = {
  /** Design-px position inside the 1350 × 1435 plane graphic. */
  left: number;
  top: number;
  /** Three rows of eleven seats. */
  rows: [string, string, string];
};

export type AirlinesStep = {
  label: string;
  headline: string;
  description: string;
  icon: string;
  /** Figma mobile shows the step's phone/card mockup (exported at the frame's rendered size). */
  mobileImage: string;
  mobileImageSize: { width: number; height: number };
  mood: 'friction' | 'eroding' | 'risk';
};

/** Airlines page (Figma AIRLINES 6544:38038) — content that exists only on this page. */
export const airlinesPageData = {
  slug: airlinesSolutionData.slug,
  metaTitle: airlinesSolutionData.metaTitle,
  metaDescription: airlinesSolutionData.metaDescription,

  hero: {
    title: 'Your next lost passenger\nmay never complain',
    titleHighlight: ['complain'],
    eyebrow: 'airlines',
    description:
      'A delay. A broken promise. Another reason to fly elsewhere. CQI helps you see trust eroding and act while you can still keep the passenger.',
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
  heroImage: '/images/solutions/airlines/hero-banner.png',
  heroMobileBanner: { src: '/images/solutions/airlines/hero-banner-mobile.png', width: 1194, height: 975 },
  heroImageAspectRatio: '2433 / 2544',

  why: {
    title: 'The flight is tracked.\nThe feeling is missed.',
    titleHighlight: ['The feeling is missed.'],
    eyebrow: 'Why airlines need CQI',
    paragraphs: [
      'Airlines run on promises: on-time departures, reliable baggage, the seat a passenger chose. When those promises break, your systems may record the event without showing what it means for that customer.',
      'A delay, a lounge refusal and failed Wi-Fi can look like separate incidents. To the passenger, they are one experience, and a reason to switch carriers.',
      'By the time they stop booking, the chance to recover their trust may already be gone.',
    ],
    image: '/images/solutions/airlines/flight-journey.png',
    imageAlt: 'CQI Flight Journey dashboard',
  },

  pulse: {
    eyebrow: 'Customer Pulse',
    title: 'Every seat has a story.\nNow your team can see it.',
    description:
      'A color for each passenger, built from their journey and updated as new signals arrive. See whose trust needs attention before the next booking is lost.',
    legend: [
      { state: 'H', label: 'Healthy' },
      { state: 'F', label: 'Friction' },
      { state: 'E', label: 'Eroding' },
      { state: 'R', label: 'Imminent risk' },
      { state: 'S', label: 'Silent' },
    ] satisfies { state: SeatState; label: string }[],
    legendNote: 'Each state carries the context and next action, not just a color.',
    // Sampled seat by seat from the Figma cabin view.
    seatBlocks: [
      { left: 335.86, top: 621.98, rows: ['HHSFFHHHHHH', 'HFHHHESHHHH', 'HHHHHHEHHHH'] },
      { left: 680.88, top: 621.98, rows: ['HRFEHHHFHHH', 'FHFRERHHHHH', 'HRFHHHHFHHF'] },
      { left: 335.86, top: 743.998, rows: ['HFHHFHEHFHE', 'HFHHHHHHHFH', 'HHRHFHHHHHF'] },
      { left: 680.88, top: 743.998, rows: ['EHHHHHHFHHH', 'HEHFHFHHRHF', 'HHRHHHHSFFH'] },
    ] satisfies AirlinesSeatBlock[],
    /** Mobile shows a 6 × 3 close-up of the cabin instead of the plane (Figma mobile 6561:39363). */
    mobileSeats: ['RHEHHH', 'HFHERH', 'RFHSHH'],
    mobileSelectedSeat: { row: 1, col: 4 },
    mobileNote: 'This is a representation of the airplane seating layout.',
    /** Highlighted seat (block index, row, column) — the one the state card describes. */
    selectedSeat: { block: 3, row: 2, col: 2 },
    card: {
      seat: 'Seat 14A',
      mobileSeat: 'Seat 5B',
      passenger: 'Maria Silva',
      tag: 'Imminent Risk',
      signalsLabel: 'Signals',
      signals: 'Seat reassigned on her last flight · Bag delayed last week',
      actionLabel: 'Next action',
      action: 'Lock her preferred seat at booking and acknowledge the delay at check-in',
      link: { label: 'Follow recovery journey', href: '#cqi-in-action' },
    },
  },

  contributes: {
    eyebrow: 'What CQI contributes',
    title: 'See the risk. Give your team a chance to change the outcome.',
    titleHighlight: ['change the outcome'],
    description:
      'CQI connects signals across the passenger lifecycle, so your teams can understand the experience, recognize eroding loyalty and respond with context.',
    slides: [
      {
        tag: '1. Sense',
        title: 'Connect the experience',
        description:
          'Bring together what happens across booking, check-in, the gate, onboard and beyond. See the friction that a survey can miss.',
        image: '/images/solutions/airlines/contribute-sense.png',
      },
      // Slides 2 and 3 are the scenarios the page already carried.
      {
        tag: '2. Recover',
        title: 'Recover the passenger, not the complaint',
        description:
          'A passenger is refused the lounge, sits through a 60-minute delay, finds the Wi-Fi down and misses a connection, and files nothing. CQI scores the lifecycle from operational events, flags the erosion and routes a tailored recovery action to the right person.',
        outcome:
          'Retention recovered before the next booking decision, with the action verified in billing or loyalty rather than assumed.',
        image: '/images/solutions/airlines/scenario-1.webp',
      },
      {
        tag: '3. Hand off',
        title: 'Turn on the light at the handoff',
        description:
          'A delay, a downgrade or a lost bag on leg one never travels with the passenger onto leg two, even inside the same alliance. The second carrier sees a confirmed seat and treats a frustrated flyer as new.',
        outcome:
          'Only the derived signal is shared, never raw data, so each carrier keeps its own systems and commercial independence.',
        image: '/images/solutions/airlines/scenario-2.png',
      },
    ],
  },

  journey: {
    eyebrow: 'CQI in action',
    title: 'Turn a difficult journey into\na reason to stay',
    titleHighlight: ['a reason to stay'],
    description: 'Carry the passenger’s history into every moment of care.',
    steps: [
      {
        label: '1. Ticket order',
        headline: 'Seat reassigned last time: preferred seat locked for today.',
        description: 'The problem from the last trip is not repeated on this one.',
        icon: '/images/solutions/airlines/step-1.svg',
        mobileImage: '/images/solutions/airlines/step-mobile-1.png',
        mobileImageSize: { width: 400, height: 400 },
        mood: 'risk',
      },
      {
        label: '2. Check-in',
        headline: 'Free lounge access.',
        description:
          'Acknowledge the earlier disruption and offer the lounge before the passenger has to ask.',
        icon: '/images/solutions/airlines/step-2.svg',
        mobileImage: '/images/solutions/airlines/step-mobile-2.png',
        mobileImageSize: { width: 400, height: 398 },
        mood: 'eroding',
      },
      {
        label: '3. Boarding & gate',
        headline: 'Priority boarding.',
        description: 'The gate team knows the passenger’s situation before they arrive.',
        icon: '/images/solutions/airlines/step-3.svg',
        mobileImage: '/images/solutions/airlines/step-mobile-3.png',
        mobileImageSize: { width: 400, height: 242 },
        mood: 'eroding',
      },
      {
        label: '4. Flight',
        headline: 'Crew fully updated for proactive care.',
        description:
          'Recommended actions are ready onboard, and the crew can report events related to passengers.',
        icon: '/images/solutions/airlines/step-4.svg',
        mobileImage: '/images/solutions/airlines/step-mobile-4.png',
        mobileImageSize: { width: 374, height: 400 },
        mood: 'eroding',
      },
      {
        label: '5. Contact centre',
        headline: 'Route the passenger at risk with context.',
        description: 'The agent sees the full history and can respond with understanding.',
        icon: '/images/solutions/airlines/step-5.svg',
        mobileImage: '/images/solutions/airlines/step-mobile-5.png',
        mobileImageSize: { width: 400, height: 249 },
        mood: 'friction',
      },
    ] satisfies AirlinesStep[],
  },

  faq: {
    eyebrow: 'Before you start',
    title: 'Questions airline teams ask',
    items: [
      {
        question: 'What data does CQI use?',
        answer:
          'Your airline’s own operational and customer records, not surveys alone: bookings and PNRs, flown segments, delays, cancellations and diversions, baggage incidents, contact centre and written interactions, complaints and compensation, loyalty activity, lounge visits and cabin-condition faults. Survey and NPS responses are added where they exist.',
      },
      {
        question: 'How does it connect to our systems?',
        answer:
          'CQI favours a lightweight integration. A library of connectors, adapters and pre-defined pipelines reads the systems you already run, and outbound connectors push verified action back into the systems that own it.',
        link: { label: 'Integrations', href: '/products/integrations' },
      },
      {
        question: 'How is passenger data protected?',
        answer:
          'CQI operates as a data processor. Data is processed inside CQI’s own cloud and is anonymised before any model runs, so no PII reaches the AI layer. Hosting region, residency and retention are agreed at scoping.',
        link: { label: 'Security & trust', href: '/products/security-trust' },
      },
      {
        question: 'How do we start?',
        answer:
          'With one cabin and one segment. A non-intrusive proof of value takes two weeks, and 90 days from data integration gets you to your first live color map.',
        link: { label: 'How the PoC runs', href: '/products/poc-approach' },
      },
    ],
  } satisfies FaqSectionData,

  cta: {
    title: 'Start with one route.',
    titleHighlight: ['one route.'],
    description: 'One cabin, one segment. 90 days\nfrom data integration to your first live\ncolor map.',
    image: '/images/solutions/airlines/cta-photo.png',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
      { label: 'See it live', href: '/resources/see-it-live', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};

import type { FaqSectionData } from '@/components/sections/FaqSection';
import type { CtaBannerData, PageHeroData } from '@/types/content';
import { airlinesSolutionData } from '@/data/solutions/airlines';

/** Seat state codes: H healthy · F friction · E eroding · R imminent risk · S silent. */
export type SeatState = 'H' | 'F' | 'E' | 'R' | 'S';

export type AirlinesSeatBlock = {
  /** Design-px position inside the 1331 × 1501 plane graphic. */
  left: number;
  top: number;
  /** Number of the block's first column (seats are numbered 1–22 along the cabin). */
  firstCol: number;
  /** Row letters, top to bottom — F is the top row of the plane, A the bottom (see airlines-seat-cards.ts). */
  letters: [string, string, string];
};

export type AirlinesStep = {
  label: string;
  headline: string;
  description: string;
  icon: string;
  /** Figma mobile shows the step's phone/card mockup (exported at the frame's rendered size). */
  /** Desktop art (Figma exports include a soft shadow, so they are larger than the 464px frame). */
  desktopImage: string;
  desktopImageSize: { width: number; height: number };
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
    mobileSoftFade: true,
    titleMaxWidth: 587,
    descriptionMaxWidth: 653,
    copyMaxWidth: 587,
  } satisfies PageHeroData,
  heroImage: '/images/solutions/airlines/hero-banner-v2.jpg',
  heroImageMobile: '/images/solutions/airlines/hero-banner-mobile-v2.jpg',

  /** Figma "Group 906": the "They don't complain" stat band right under the hero. */
  stat: {
    id: 'outcome-range',
    titleLead: 'They don’t complain.',
    titleStart: 'They ',
    titleHighlightA: 'just stop',
    titleHighlightB: 'choosing you',
    titleEnd: '.',
    label: 'Only',
    value: '15',
    unit: '%',
    description: 'of disrupted passengers make a complaint. The rest stay silent, and their next booking is where you find out.',
    source: 'UK Civil Aviation Authority, Aviation Consumer Survey 2025.',
    image: '/images/solutions/airlines/stat-cabin.jpg',
    imageAlt: 'Passengers seated in an aircraft cabin',
  },

  why: {
    title: 'The flight is tracked.\nThe feeling is missed.',
    titleHighlight: ['The feeling is missed.'],
    eyebrow: 'Why airlines need CQI',
    paragraphs: [
      'Airlines run on promises: on-time departures, reliable baggage, the seat a passenger chose. When those promises break, your systems may record the event without showing what it means for that customer.',
      'A delay, a lounge refusal and failed Wi-Fi can look like separate incidents. To the passenger, they are one experience, and a reason to switch carriers.',
      'By the time they stop booking, the chance to recover their trust may already be gone.',
    ],
    // Four-dot carousel (Figma): Flight Journey, Flight 360, Voice of Customer, Action Center.
    slides: [
      { image: '/images/solutions/airlines/19_AIRLINES_IMG1.png', alt: 'CQI Flight Journey dashboard' },
      { image: '/images/solutions/airlines/19_AIRLINES_IMG2.png', alt: 'CQI Flight 360 dashboard' },
      { image: '/images/solutions/airlines/19_AIRLINES_IMG3.png', alt: 'CQI Voice of Customer dashboard' },
      { image: '/images/solutions/airlines/19_AIRLINES_IMG4.png', alt: 'CQI Action Center dashboard' },
    ],
  },

  pulse: {
    eyebrow: 'Customer Pulse',
    title: 'Every seat has a story.\nNow your team can see it.',
    description:
      'A color for each passenger, built from their journey and updated as new signals arrive.\nSee whose trust needs attention before the next booking is lost.',
    legend: [
      { state: 'H', label: 'Healthy' },
      { state: 'F', label: 'Friction' },
      { state: 'E', label: 'Eroding' },
      { state: 'R', label: 'Imminent risk' },
      { state: 'S', label: 'Silent' },
    ] satisfies { state: SeatState; label: string }[],
    legendNote: 'Each state carries the context and next action, not just a color.',
    // Four blocks of 3 rows × 11 seats; each seat's status comes from its card in airlines-seat-cards.ts.
    seatBlocks: [
      { left: 293.51, top: 660.8, firstCol: 1, letters: ['F', 'E', 'D'] },
      { left: 632.25, top: 660.8, firstCol: 12, letters: ['F', 'E', 'D'] },
      { left: 293.51, top: 766.66, firstCol: 1, letters: ['C', 'B', 'A'] },
      { left: 632.25, top: 766.66, firstCol: 12, letters: ['C', 'B', 'A'] },
    ] satisfies AirlinesSeatBlock[],
    /** Mobile shows a 6 × 3 close-up of the cabin instead of the plane (Figma mobile 6561:39363). */
    mobileSeats: ['RHEHHHHS', 'HFHERHFR', 'RFHSHHEH'],
    mobileSelectedSeat: { row: 1, col: 4 },
    mobileNote: 'This is a representation of the airplane seating layout.',
    /** The seat selected on load: the featured passenger, described by `card` below. */
    defaultSeat: '14A',
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

  /** Figma "Frame 1410129101": two passengers, same delay, different journey history. */
  history: {
    eyebrow: 'Why history matters',
    title: 'Same delay, different risk.',
    lead: 'Today, both passengers face the same delay.',
    body: 'For one, it’s a minor inconvenience. For the other, it’s the latest in a pattern. CQI reads the whole journey, not just today’s event, so your team knows who to reach first.',
    historyLabel: 'Journey history',
    todayLabel: 'Today',
    passengers: [
      {
        name: 'Maria Silva',
        seat: 'Seat 14A',
        status: 'risk',
        statusLabel: 'Imminent Risk',
        history: ['H', 'H', 'H', 'H', 'H', 'E', 'E', 'E', 'R', 'R'],
        today: 'R',
      },
      {
        name: 'Andrew',
        seat: 'Seat 14D',
        status: 'healthy',
        statusLabel: 'Healthy',
        history: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'],
        today: 'E',
      },
    ] as {
      name: string;
      seat: string;
      status: 'risk' | 'healthy';
      statusLabel: string;
      history: SeatState[];
      today: SeatState;
    }[],
  },

  contributes: {
    eyebrow: 'What CQI contributes',
    title: 'See the risk. Give your team a chance to change the outcome.',
    titleHighlight: ['change the outcome'],
    description:
      'CQI connects signals across the passenger lifecycle, so your teams can understand the experience, recognize eroding loyalty and respond with context.',
    // Figma Frame 1000003596: three plain cards (no images) tagged Sense / Flag / Fix.
    cards: [
      {
        tag: 'Sense',
        title: 'Connect the experience',
        description:
          'Bring together what happens across booking, check-in, the gate, onboard and beyond. See the friction that a survey can miss.',
      },
      {
        tag: 'Flag',
        title: 'Make retention risk visible',
        description:
          'Identify whose trust is eroding and why. Help teams prioritize the passengers who need attention before they go silent.',
      },
      {
        tag: 'Fix',
        title: 'Act with the full context',
        description:
          'Guide the right team toward a tailored recovery action, using your airline’s playbook while the relationship is still recoverable.',
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
        desktopImage: '/images/solutions/airlines/step-desktop-1.png',
        desktopImageSize: { width: 496, height: 496 },
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
        desktopImage: '/images/solutions/airlines/step-desktop-2.png',
        desktopImageSize: { width: 499, height: 496 },
        mobileImage: '/images/solutions/airlines/step-mobile-2.png',
        mobileImageSize: { width: 400, height: 398 },
        mood: 'eroding',
      },
      {
        label: '3. Boarding & gate',
        headline: 'Priority boarding.',
        description: 'The gate team knows the passenger’s situation before they arrive.',
        icon: '/images/solutions/airlines/step-3.svg',
        desktopImage: '/images/solutions/airlines/step-desktop-3.png',
        desktopImageSize: { width: 496, height: 300 },
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
        desktopImage: '/images/solutions/airlines/step-desktop-4.png',
        desktopImageSize: { width: 464, height: 496 },
        mobileImage: '/images/solutions/airlines/step-mobile-4.png',
        mobileImageSize: { width: 374, height: 400 },
        mood: 'eroding',
      },
      {
        label: '5. Contact centre',
        headline: 'Route the passenger at risk with context.',
        description: 'The agent sees the full history and can respond with understanding.',
        icon: '/images/solutions/airlines/step-5.svg',
        desktopImage: '/images/solutions/airlines/step-desktop-5.png',
        desktopImageSize: { width: 496, height: 308 },
        mobileImage: '/images/solutions/airlines/step-mobile-5.png',
        mobileImageSize: { width: 400, height: 249 },
        mood: 'friction',
      },
    ] satisfies AirlinesStep[],
  },

  // Figma FAQS - AIRLINES (6679:61824): five questions, no links under the answers.
  faq: {
    eyebrow: 'Before you start',
    title: 'Questions airline teams ask',
    mobileTitleWidth: 260,
    items: [
      {
        question: 'What data does CQI use?',
        answer:
          'Your airline’s own operational and customer records, not surveys alone: bookings and PNRs, flown segments, delays, cancellations and diversions, baggage incidents, contact centre and written interactions, complaints and compensation, loyalty activity, lounge visits and cabin-condition faults. Survey and NPS responses are added where they exist.',
      },
      {
        question: 'How does it connect to our systems?',
        answer:
          'Your existing systems feed one Customer Brain: CRM, loyalty and billing; flight operations, PSS and dispatch; app, web, IVR and bots; lounge, gate-scan and IFE systems. Gate agents, cabin crew, lounge staff, the contact centre and executives then see the same passenger and the same recommendation.',
      },
      {
        question: 'How is passenger data protected?',
        answer:
          'All data is handled under the confidentiality and data-protection terms agreed with your airline. Personal identifiers are used only to link records to one passenger across systems, and can be pseudonymized at source as long as the same key is used in every extract.',
      },
      {
        question: 'How soon do we see value?',
        answer:
          'You get a playbook from day one: a recommended action for each touchpoint, from booking to after the flight. As CQI learns from your data and from the outcome of each action, its recommendations get smarter over time.',
      },
      {
        question: 'How do we start?',
        answer:
          'With a pilot on one route, one cabin and one segment: 90 days to the first live color map and an ROI proof point within six months. Historical extracts as flat files or database exports are enough for the pilot. On day one CQI runs your own recovery playbook; over time it learns what works and recommends better actions.',
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

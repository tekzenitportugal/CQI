import type { CtaBannerData, PageHeroData } from '@/types/content';
import type { FaqSectionData } from '@/components/sections/FaqSection';

export type IntegrationsPartnerCard = {
  tag: string;
  /** Reuses the shared TagPill variants: 'goals' = blue text pill, 'signals' = grey text pill. */
  tagVariant: 'goals' | 'signals';
  description: string;
} & (
  | { logo: string; logoAlt?: string; logoWidth: number; logoHeight: number; title?: never }
  /** Figma: some cards show a text title instead of a partner logo (e.g. "Field dispatch & workforce"). */
  | { logo?: never; logoAlt?: never; logoWidth?: never; logoHeight?: never; title?: string }
);

export type IntegrationsPartnerCategory = {
  id: string;
  label: string;
  /** Figma shows the footnote under only some tabs. */
  showFootnote?: boolean;
} & (
  | { intro: string; cards: IntegrationsPartnerCard[]; airlineCards?: never }
  /** Figma's Airlines tab has no intro line and its cards hold several logos each. */
  | { airlineCards: IntegrationsAirlineCard[]; intro?: never; cards?: never }
);

export type IntegrationsPartnersData = {
  categories: IntegrationsPartnerCategory[];
  defaultCategoryId: string;
  footnote: string;
};

/**
 * One entry in an Airlines-tab card: a logo with an optional caption under it, or, where Figma has no logo, just
 * the name in capitals.
 */
export type IntegrationsAirlineLogo = {
  src: string;
  alt: string;
  /** Size (px) of the logo's slot in Figma; the artwork is placed inside it by `fit`. */
  width: number;
  height: number;
  /** Where the artwork sits inside the slot, in % of the slot (Figma bottom-aligns and crops some exports). */
  fit?: { left: number; top: number; width: number; height: number };
  /** Crop whatever of the artwork falls outside the slot. */
  clip?: boolean;
  caption?: string;
  text?: never;
};

export type IntegrationsAirlineText = {
  text: string;
  /** Width (px) the text wraps at. */
  width?: number;
  /** Extra space (px) Figma leaves around the text so it lines up with the logos beside it. */
  paddingRight?: number;
  paddingTop?: number;
  src?: never;
};

export type IntegrationsAirlineCard = {
  logos: (IntegrationsAirlineLogo | IntegrationsAirlineText)[];
  description: string;
  /** Spacing and alignment differ card to card in Figma. */
  layout: {
    /** Logos sit at the top of the card and the description at the bottom, instead of both at the bottom. */
    spread?: boolean;
    /** Px between the logos and the description. */
    gap?: number;
    /** Px of space under the logos. */
    logosPaddingBottom?: number;
    /** Px between logos. */
    logosGap?: number;
    /** Logos share one baseline (bottom edge) instead of the top. */
    logosAlignEnd?: boolean;
    /** Logos are spread across the full width of the card. */
    logosSpaceBetween?: boolean;
    /** Logos wrap onto more lines. */
    logosWrap?: boolean;
  };
};

export type IntegrationsConnectionCard = {
  title: string;
  description: string;
};

export type IntegrationsConnectionStep = {
  title: string;
  description: string;
};

export type IntegrationsConnectionData = {
  title: string;
  titleHighlight?: string[];
  description: string;
  button: { label: string; href: string };
  /** The four ways data reaches CQI, stepped through in the pinned dome (Figma 6725:62762). */
  steps: IntegrationsConnectionStep[];
  cards: IntegrationsConnectionCard[];
};

export type IntegrationsPageData = {
  hero: PageHeroData;
  partners: IntegrationsPartnersData;
  connection: IntegrationsConnectionData;
  faq: FaqSectionData;
  cta: CtaBannerData;
};

const AIRLINES_LOGOS = '/images/product/integrations/logos/airlines-tab';

export const integrationsData = {
  hero: {
    mobileSoftFade: true,
    title: 'CQI reads the systems you already run',
    titleHighlight: ['systems you already run'],
    eyebrow: 'Integrations',
    description:
      'CQI favours a lightweight integration. A library of connectors, adapters and pre-defined pipelines accelerates ingestion while guaranteeing security, data health and privacy compliance, and outbound connectors push verified action back into the systems that own it.',
    image: '/images/product/integrations/hero.webp',
    mobileImage: '/images/product/integrations/hero-mobile.png',
    mobilePortraitCrop: true,
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  partners: {
    defaultCategoryId: 'contact-centre',
    categories: [
      {
        id: 'contact-centre',
        showFootnote: true,
        // Verbatim from Figma copy (source label reads "CCaas", not "CCaaS").
        label: 'Contact Centre & CCaas',
        intro:
          'Interaction content and contact metadata: transcripts, chat and bot sessions, CDR, split and queue data, CTI events.',
        cards: [
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            logo: '/images/product/integrations/logos/avaya.png',
            logoAlt: 'Avaya',
            logoWidth: 84,
            logoHeight: 24,
            description: 'Self-service and IVR containment. Nothing to spend here.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/genesys.png',
            logoAlt: 'Genesys',
            logoWidth: 121,
            logoHeight: 24,
            description: 'Interaction records, transcripts and routing events via open API and streaming.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/nice.png',
            logoAlt: 'NICE',
            logoWidth: 69,
            logoHeight: 30,
            description: 'Recording, transcript and WFO data via API and scheduled export.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/amazon-connect.png',
            logoAlt: 'Amazon Connect',
            logoWidth: 174,
            logoHeight: 30,
            description: 'Contact trace records, streaming transcripts and event bus.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/five9.png',
            logoAlt: 'Five9',
            logoWidth: 89,
            logoHeight: 50,
            description: 'Interaction and queue data via API.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/talkdesk.png',
            logoAlt: 'Talkdesk',
            logoWidth: 123,
            logoHeight: 20,
            description: 'Interaction, transcript and disposition data via API.',
          },
        ],
      },
      {
        id: 'crm',
        label: 'CRM & Service Management',
        intro: 'Customer records, cases, orders and the service commitments attached to them.',
        cards: [
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            logo: '/images/product/integrations/logos/tecnotree.png',
            logoAlt: 'Tecnotree',
            logoWidth: 128,
            logoHeight: 24,
            description: 'Customer lifecycle records over TM Forum Open API.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/salesforce.png',
            logoAlt: 'Salesforce',
            logoWidth: 72,
            logoHeight: 50,
            description: 'Cases, accounts and activity via REST and streaming events.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/dynamics-365.png',
            logoAlt: 'Dynamics 365',
            logoWidth: 145,
            logoHeight: 50,
            description: 'Cases, accounts and service commitments via API.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/zendesk.png',
            logoAlt: 'Zendesk',
            logoWidth: 69,
            logoHeight: 50,
            description: 'Tickets, conversations and macros via API and webhooks.',
          },
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            logo: '/images/product/integrations/logos/servicenow.png',
            logoAlt: 'ServiceNow',
            logoWidth: 163,
            logoHeight: 25,
            description: 'Bi-directional: assurance and incident context in, verified cases and alerts out.',
          },
        ],
      },
      {
        id: 'billing',
        label: 'Billing & BSS',
        intro:
          'Convergent billing, charging, catalogue and order data, where most commitments are meant to execute.',
        cards: [
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            logo: '/images/product/integrations/logos/tecnotree.png',
            logoAlt: 'Tecnotree',
            logoWidth: 128,
            logoHeight: 24,
            description: 'Billing, charging, order and catalogue data over TM Forum Open API.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            title: 'Other BSS & billing stacks',
            description: 'Invoice, adjustment, credit and order records via CDC, bulk extract or API.',
          },
        ],
      },
      {
        id: 'network',
        label: 'Network, OSS & field',
        intro: 'Performance and assurance data, provisioning, dispatch\nand IoT telemetry.',
        cards: [
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            logo: '/images/product/integrations/logos/huawei.png',
            logoAlt: 'Huawei',
            logoWidth: 49,
            logoHeight: 50,
            description: 'Network performance, assurance and optimisation data over TM Forum Open API.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            title: 'Field dispatch & workforce',
            description: 'Appointment windows, technician arrival and completion events.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            title: 'IoT & device telemetry',
            description:
              'Error codes and usage telemetry, used for proactive maintenance in consumer electronics.',
          },
        ],
      },
      {
        id: 'voc',
        label: 'VoC & Survey',
        intro: 'Survey and feedback platforms, so declared sentiment can be verified against behaviour.',
        cards: [
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            logo: '/images/product/integrations/logos/xebo-ai.png',
            logoAlt: 'XEBO.ai',
            logoWidth: 102,
            logoHeight: 30,
            description: 'NPS, CSAT and CES survey responses via API and webhooks.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/qualtrics-xm.png',
            logoAlt: 'Qualtrics XM',
            logoWidth: 89,
            logoHeight: 28,
            description: 'Survey responses and metadata via API.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/medallia.png',
            logoAlt: 'Medallia',
            logoWidth: 89,
            logoHeight: 20,
            description: 'Feedback records and metadata via API.',
          },
        ],
      },
      {
        // Verbatim from Figma copy (source label reads "Outbond", not "Outbound").
        id: 'outbound',
        label: 'Outbond comms & Activation',
        intro: 'Where a verified insight becomes an action: SMS, push, email, IVR, queue and routing.',
        cards: [
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            title: 'SMS, push & email',
            description: 'Outbound activation of a verified next-best action to the customer.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            title: 'IVR, queue & routing',
            description: 'State-driven treatment: reroute, prioritise, escalate or contain, with a control group.',
          },
        ],
      },
      {
        id: 'data-platform',
        showFootnote: true,
        label: 'Data platform & Transport',
        intro: 'How data physically reaches CQI, and how results\nflow back out.',
        cards: [
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            logo: '/images/product/integrations/logos/google-cloud.png',
            logoAlt: 'Google Cloud',
            logoWidth: 147,
            logoHeight: 28,
            description: 'CQI runs on Google Cloud, with the hosting region selected per client.',
          },
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            title: 'Streaming & REST API',
            description: 'Event bus, webhooks, CTI/WebSocket and a scalable REST API in both directions.',
          },
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            title: 'CDC, bulk & SFTP',
            description: 'Change data capture, scheduled batch, file transfer and secure SFTP handover.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/tmforum.png',
            logoAlt: 'TM Forum Open APIs',
            logoWidth: 50,
            logoHeight: 50,
            description: 'The standard integration path for telecom CRM, BSS and OSS sources.',
          },
        ],
      },
      {
        // Figma "Airlines" tab (6803:39274): no intro line, cards of several logos each.
        id: 'airlines',
        showFootnote: true,
        label: 'AIRLINES',
        airlineCards: [
          {
            logos: [
              { src: `${AIRLINES_LOGOS}/amadeus.svg`, alt: 'Amadeus', width: 141, height: 36, fit: { left: 0, top: 56.94, width: 79.46, height: 44.45 }, caption: 'Amadeys Altéa Res' },
              { src: `${AIRLINES_LOGOS}/sabre.png`, alt: 'Sabre', width: 115, height: 36, fit: { left: 0, top: 43.06, width: 80, height: 55.56 }, clip: true, caption: 'SabreSonic Res' },
            ],
            description: 'Core booking system holding reservations, itineraries and special requests.',
            layout: { gap: 31, logosPaddingBottom: 34, logosGap: 38 },
          },
          {
            logos: [
              { src: `${AIRLINES_LOGOS}/amadeus.svg`, alt: 'Amadeus', width: 141, height: 36, fit: { left: 0, top: 56.94, width: 79.46, height: 44.45 }, caption: 'Amadeus Anytime\nMerchandising\n& Amadeus e-Retail' },
              { src: `${AIRLINES_LOGOS}/sabre.png`, alt: 'Sabre', width: 115, height: 36, fit: { left: 0, top: 43.06, width: 80, height: 55.56 }, clip: true, caption: 'Sabre Digital\nConnect' },
            ],
            description: 'Online sales of seats, bags and extras, plus promo codes and payments.',
            layout: { gap: 31, logosGap: 38 },
          },
          {
            logos: [
              { src: `${AIRLINES_LOGOS}/amadeus.svg`, alt: 'Amadeus', width: 141, height: 36, fit: { left: 0, top: 56.94, width: 79.46, height: 44.45 }, caption: 'Amadeus Altéa\nFlight Management' },
              { src: `${AIRLINES_LOGOS}/sabre.png`, alt: 'Sabre', width: 115, height: 36, fit: { left: 0, top: 43.06, width: 80, height: 55.56 }, clip: true, caption: 'Sabre AirCentre' },
            ],
            description: 'Tracks flights in real time, including delays, cancellations and diversions.',
            layout: { gap: 20, logosPaddingBottom: 28, logosGap: 38 },
          },
          {
            logos: [
              { src: `${AIRLINES_LOGOS}/sita.svg`, alt: 'SITA', width: 103.235, height: 30, caption: 'WorldTracer and BRS' },
              { text: 'Other Baggage Reconciliation System (BRS)', width: 133 },
            ],
            description: 'Tracks bags end to end and handles lost or delayed baggage.',
            layout: { gap: 54, logosGap: 60, logosAlignEnd: true },
          },
          {
            logos: [
              { src: `${AIRLINES_LOGOS}/amadeus.svg`, alt: 'Amadeus', width: 141, height: 36, fit: { left: 0, top: 56.94, width: 79.46, height: 44.45 }, caption: 'Amadeus Loyalty' },
              { src: `${AIRLINES_LOGOS}/sabre.png`, alt: 'Sabre', width: 115, height: 36, fit: { left: 0, top: 43.06, width: 80, height: 55.56 }, clip: true, caption: 'Sabre Loyalty' },
              { src: `${AIRLINES_LOGOS}/ibs.svg`, alt: 'IBS Software', width: 145, height: 32, fit: { left: 0, top: 37.5, width: 99.71, height: 62.73 }, caption: 'IBS iFly Loyalty' },
            ],
            description: 'Manages frequent-flyer members, points and tier status.',
            layout: { spread: true, logosSpaceBetween: true, logosWrap: true },
          },
          {
            logos: [
              { src: `${AIRLINES_LOGOS}/aims.png`, alt: 'AIMS', width: 93.98, height: 30, fit: { left: -3.26, top: -28.57, width: 113.68, height: 138.78 }, clip: true, caption: 'IEG AIMS' },
              { src: `${AIRLINES_LOGOS}/collinson.svg`, alt: 'Collinson', width: 146, height: 30, fit: { left: 0, top: -6.67, width: 99.6, height: 106.67 }, clip: true },
            ],
            description: 'Controls lounge entry and eligibility.',
            layout: { gap: 54, logosSpaceBetween: true },
          },
          {
            logos: [
              { src: `${AIRLINES_LOGOS}/swiss.png`, alt: 'Swiss Aviation Software', width: 148, height: 36, fit: { left: 0, top: 16.67, width: 100, height: 83.33 }, clip: true, caption: 'Swiss-AS AMOS' },
              { src: `${AIRLINES_LOGOS}/ifs.png`, alt: 'IFS', width: 65, height: 36, fit: { left: 0, top: 16.67, width: 99.2, height: 83.33 }, clip: true, caption: 'IFS Maintenix' },
              { text: 'Cabin Log Book', paddingRight: 46, paddingTop: 15 },
              { src: `${AIRLINES_LOGOS}/trax.png`, alt: 'Trax', width: 54, height: 32, fit: { left: 0, top: 37.4, width: 100, height: 62.8 }, clip: true },
            ],
            description: 'Logs aircraft and cabin defects and repairs.',
            layout: { spread: true, logosWrap: true, logosGap: 38 },
          },
        ],
      },
    ],
    footnote:
      'Entries marked In CQI deployments name platforms that appear in CQI solution architecture or market material. The rest are supported through a standard pattern, open API, streaming, CDC or file.',
  } satisfies IntegrationsPartnersData,

  connection: {
    title: 'How the connection is made: four ways data reaches CQI',
    titleHighlight: ['data reaches CQI'],
    description:
      'Cloud-to-cloud, encrypted at rest and in transit. CQI performs the computation, so the load does not land on your platforms.',
    button: { label: 'Reference architecture', href: '/products/implementation#reference-architecture' },
    steps: [
      {
        title: 'Direction',
        description:
          'Inbound by default, with write-back where a system owns the fix. Comms and service-management connectors are outbound: CQI activates the action there.',
      },
      {
        title: 'Security',
        description:
          'Encrypted in transit and at rest. PII is redacted or hashed before analytics, and processing runs inside CQI’s own cloud.',
      },
      {
        title: 'Effort',
        description:
          'Pre-defined pipelines and an adapter ecosystem carry most of the work. The proof of concept normally starts from a file or API extract with no production integration at all.',
      },
      {
        title: 'Data quality',
        description:
          'Monitored as part of ingestion and reported back, so gaps in the feed surface as a data issue rather than as a wrong insight.',
      },
    ],
    cards: [
      {
        title: 'Streaming API',
        description:
          'Real-time events and CTI sockets for the signals that must be acted on inside the interaction.',
      },
      {
        title: 'Open APIs & webhooks',
        description:
          'Pull requests and event subscriptions, including TM Forum Open API for telecom CRM, BSS and OSS.',
      },
      {
        title: 'CDC & scheduled batch',
        description:
          'Change data capture and scheduled extracts for systems of record where streaming is not available.',
      },
      {
        title: 'File & SFTP',
        description:
          'Bulk and file transfer into a secured CQI environment — the usual starting point for a proof of concept.',
      },
    ],
  } satisfies IntegrationsConnectionData,

  faq: {
    eyebrow: 'Frequently asked',
    title: 'About integrations',
    items: [
      {
        question: 'Our platform is not listed. Does that block us?',
        answer:
          'No. Ingestion is pattern-based rather than vendor-locked: if your platform exposes an API, an event stream, a change feed or a scheduled export, there is a path. Data discovery in week one of the PoC confirms it.',
        link: { label: 'Tell us your stack', href: '/contact' },
      },
      {
        question: 'Does CQI write back into our systems?',
        answer:
          'Yes, where you want it to. Outbound connectors trigger updates, alarms, messages, call reroutes and A/B tests, and can create or update cases in service management. Most deployments start read-only.',
      },
      {
        question: 'How much load does this put on our platforms?',
        answer:
          'CQI performs the computation in its own cloud. Integration is designed to be lightweight, with pre-defined pipelines and monitored data quality rather than bespoke extraction work on your side.',
      },
    ],
  } satisfies FaqSectionData,

  cta: {
    title: 'Tell us what you run',
    titleHighlight: ['what you run'],
    description:
      'A technical session on connectors, data model, residency and governance, before any commitment.',
    image: '/images/product/security-trust/cta.webp',
    imageWidth: 579,
    imageHeight: 289,
    // Figma node 6225:38813: raw 2731×4096 portrait, 300.48% of the frame tall, top −75%.
    imagePosition: 'center 37.41%',
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' as const },
      { label: 'PoC approach', href: '/products/poc-approach', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

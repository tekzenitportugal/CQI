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
  intro: string;
  cards: IntegrationsPartnerCard[];
};

export type IntegrationsPartnersData = {
  categories: IntegrationsPartnerCategory[];
  defaultCategoryId: string;
  footnote: string;
};

/**
 * One vendor system in an expanded airline row: a logo with an optional caption under it, or, where Figma has
 * no logo, just the name (`text`) sitting on the logos' baseline.
 */
export type IntegrationsAirlineSystem =
  | {
      /** Exported from Figma at 3x, including the empty space above the mark, so it drops into the row as-is. */
      logo: string;
      logoAlt: string;
      /** Rendered size in px (the image file is 3x this). */
      logoWidth: number;
      logoHeight: number;
      /** Product name under the logo. */
      name?: string;
      /** Width (px) the name wraps at, where Figma sets it over two lines. */
      nameWidth?: 109 | 113 | 194 | 226 | 279;
      text?: never;
    }
  | {
      text: string;
      /** Height (px) of the logo area it shares a row with; the text sits at its bottom edge. */
      slotHeight: 30 | 32 | 50;
      logo?: never;
    };

export type IntegrationsAirlineItem = {
  title: string;
  description: string;
  /** Vendor systems shown when the row is expanded. */
  systems: IntegrationsAirlineSystem[];
  /** Rows of logos with no captions line up on their bottom edge (Distribution). */
  systemsAlign?: 'end';
};

export type IntegrationsAirlinesData = {
  title: string;
  titleHighlight: string[];
  items: IntegrationsAirlineItem[];
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
  airlines: IntegrationsAirlinesData;
  connection: IntegrationsConnectionData;
  faq: FaqSectionData;
  cta: CtaBannerData;
};

export const integrationsData = {
  hero: {
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
    ],
    footnote:
      'Entries marked In CQI deployments name platforms that appear in CQI solution architecture or market material. The rest are supported through a standard pattern, open API, streaming, CDC or file.',
  } satisfies IntegrationsPartnersData,

  // Figma "Airline-specific source systems" (6757:36279); each row's expanded state is Figma's "OPEN" variant
  // (6757:36383 – 6757:37230). Logos are Figma exports of the logo areas, so they keep Figma's spacing.
  airlines: {
    title: 'Airline-specific source systems',
    titleHighlight: ['Airline-specific'],
    items: [
      {
        title: 'Passenger Service System (PSS)',
        description: 'Core booking system holding reservations, itineraries and special requests.',
        systems: [
          { logo: '/images/product/integrations/logos/airline-amadeus.png', logoAlt: 'Amadeus', logoWidth: 141, logoHeight: 36, name: 'Amadeys Altéa Res' },
          { logo: '/images/product/integrations/logos/airline-sabre.png', logoAlt: 'Sabre', logoWidth: 115, logoHeight: 36, name: 'SabreSonic Res' },
          { logo: '/images/product/integrations/logos/airline-navitaire.png', logoAlt: 'Navitaire', logoWidth: 107, logoHeight: 36, name: 'Navitaire New Skies' },
          { logo: '/images/product/integrations/logos/airline-crane-pax.png', logoAlt: 'Hitit Crane PAX', logoWidth: 162, logoHeight: 36, name: 'Hitit Crane PAX' },
          { logo: '/images/product/integrations/logos/airline-radixx.png', logoAlt: 'Radixx', logoWidth: 93, logoHeight: 36 },
        ],
      },
      {
        title: 'Departure Control System (DCS)',
        description: 'Check-in and boarding: who flew, seats, upgrades and denied boarding.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/dcs-amadeus.png', logoAlt: 'Amadeus', logoWidth: 141, logoHeight: 30, name: 'Amadeys Altéa DC' },
          { logo: '/images/product/integrations/logos/airline/dcs-sabre.png', logoAlt: 'Sabre', logoWidth: 115, logoHeight: 30, name: 'SabreSonic DCS' },
          { logo: '/images/product/integrations/logos/airline/dcs-sita.png', logoAlt: 'SITA', logoWidth: 103, logoHeight: 30, name: 'SITA Departure Control' },
        ],
      },
      {
        title: 'Passenger Data (APIS/APP)',
        description: 'Passport and travel-document data shared with border authorities.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/apis-amadeus.png', logoAlt: 'Amadeus', logoWidth: 141, logoHeight: 25, name: 'Amadeys Altéa' },
          { logo: '/images/product/integrations/logos/airline/apis-sabre.png', logoAlt: 'Sabre', logoWidth: 115, logoHeight: 25, name: 'SabreSonic' },
        ],
      },
      {
        title: 'Distribution (GDS)',
        description: 'Travel-agency channels that feed bookings to the airline.',
        systemsAlign: 'end',
        systems: [
          { logo: '/images/product/integrations/logos/airline/gds-amadeus.png', logoAlt: 'Amadeus', logoWidth: 140, logoHeight: 20 },
          { logo: '/images/product/integrations/logos/airline/gds-sabre.png', logoAlt: 'Sabre', logoWidth: 115, logoHeight: 25 },
          { logo: '/images/product/integrations/logos/airline/gds-travelport.png', logoAlt: 'Travelport', logoWidth: 180, logoHeight: 22 },
        ],
      },
      {
        title: 'Merchandising & Digital Retail',
        description: 'Online sales of seats, bags and extras, plus promo codes and payments.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/merch-amadeus.png', logoAlt: 'Amadeus', logoWidth: 141, logoHeight: 50, name: 'Amadeus Anytime Merchandising & Amadeus e-Retail', nameWidth: 194 },
          { logo: '/images/product/integrations/logos/airline/merch-sabre.png', logoAlt: 'Sabre', logoWidth: 115, logoHeight: 50, name: 'Sabre Digital Connect' },
          { logo: '/images/product/integrations/logos/airline/merch-navitaire.png', logoAlt: 'dataLEX', logoWidth: 101, logoHeight: 50 },
          { logo: '/images/product/integrations/logos/airline/merch-extra.png', logoAlt: 'Cellpoint Digital', logoWidth: 50, logoHeight: 50 },
        ],
      },
      {
        title: 'Revenue Management',
        description: 'Sets fares and overbooking levels to maximise revenue.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/rm-pros.png', logoAlt: 'PROS', logoWidth: 107, logoHeight: 30 },
          { logo: '/images/product/integrations/logos/airline/rm-sabre.png', logoAlt: 'Sabre', logoWidth: 115, logoHeight: 30, name: 'Sabre AirVision RM' },
        ],
      },
      {
        title: 'Revenue Accounting & Settlement',
        description: 'Records fares, refunds and flown-ticket revenue.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/revacc-accelya.png', logoAlt: 'Accelya', logoWidth: 100, logoHeight: 50, name: 'Accelya FLX/REVERA' },
          { logo: '/images/product/integrations/logos/airline/revacc-amadeus.png', logoAlt: 'Amadeus', logoWidth: 141, logoHeight: 50, name: 'Amadeus Revenue Accounting' },
          { logo: '/images/product/integrations/logos/airline/revacc-mercator.png', logoAlt: 'Mercator', logoWidth: 100, logoHeight: 50, name: 'Mercator RAPID' },
          { logo: '/images/product/integrations/logos/airline/revacc-iata.png', logoAlt: 'IATA', logoWidth: 81, logoHeight: 50, name: 'IATA BSP/ARC' },
        ],
      },
      {
        title: 'Catering & Onboard Service',
        description: 'Plans and confirms special meals and onboard services.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/catering-zafire.png', logoAlt: 'Zafire', logoWidth: 99, logoHeight: 50 },
          { logo: '/images/product/integrations/logos/airline/catering-lufthansa.png', logoAlt: 'Lufthansa Systems', logoWidth: 151, logoHeight: 50 },
        ],
      },
      {
        title: 'Operations Control & Flight Movement',
        description: 'Tracks flights in real time, including delays, cancellations and diversions.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/ops-amadeus.png', logoAlt: 'Amadeus', logoWidth: 141, logoHeight: 50, name: 'Amadeus Altéa Flight Management', nameWidth: 113 },
          { logo: '/images/product/integrations/logos/airline/ops-sabre.png', logoAlt: 'Sabre', logoWidth: 115, logoHeight: 50, name: 'Sabre AirCentre' },
          { logo: '/images/product/integrations/logos/airline/ops-lufthansa.png', logoAlt: 'Lufthansa Systems', logoWidth: 151, logoHeight: 50, name: 'Lufthansa Systems NetLine/Ops ++', nameWidth: 109 },
          { logo: '/images/product/integrations/logos/airline/ops-hitit.png', logoAlt: 'Hitit', logoWidth: 81, logoHeight: 50, name: 'Hitit Crane OPS' },
          { text: 'OAG/Cirium', slotHeight: 50 },
          { text: 'ACARS/OOOI feeds', slotHeight: 50 },
        ],
      },
      {
        title: 'Disruption & Service Recovery',
        description: 'Rebooks and notifies affected passengers and issues compensation.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/disruption-amadeus.png', logoAlt: 'Amadeus', logoWidth: 141, logoHeight: 30, name: 'Amadeus Altéa Disruption, Customer Experience Management, EMD vouchers', nameWidth: 279 },
          { logo: '/images/product/integrations/logos/airline/disruption-15below.png', logoAlt: '15below', logoWidth: 100, logoHeight: 30 },
        ],
      },
      {
        title: 'Baggage Management',
        description: 'Tracks bags end to end and handles lost or delayed baggage.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/baggage-sita.png', logoAlt: 'SITA', logoWidth: 103, logoHeight: 30, name: 'WorldTracer, BagJourney / BagManager', nameWidth: 226 },
          { text: 'Baggage Reconciliation System (BRS)', slotHeight: 30 },
        ],
      },
      {
        title: 'Loyalty Management',
        description: 'Manages frequent-flyer members, points and tier status.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/loyalty-amadeus.png', logoAlt: 'Amadeus', logoWidth: 141, logoHeight: 32, name: 'Amadeus Loyalty' },
          { logo: '/images/product/integrations/logos/airline/loyalty-sabre.png', logoAlt: 'Sabre', logoWidth: 115, logoHeight: 30, name: 'Sabre Loyalty' },
          { logo: '/images/product/integrations/logos/airline/loyalty-ibs.png', logoAlt: 'IBS Software', logoWidth: 145, logoHeight: 32, name: 'IBS iFly Loyalty' },
          { logo: '/images/product/integrations/logos/airline/loyalty-comarch.png', logoAlt: 'Comarch', logoWidth: 130, logoHeight: 32 },
          { logo: '/images/product/integrations/logos/airline/loyalty-extra.png', logoAlt: 'Switchfly', logoWidth: 123, logoHeight: 32 },
          { text: 'TCS/Kale', slotHeight: 32 },
        ],
      },
      {
        title: 'Lounge Access',
        description: 'Controls lounge entry and eligibility.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/lounge-collinson.png', logoAlt: 'Collinson', logoWidth: 146, logoHeight: 50 },
          { logo: '/images/product/integrations/logos/airline/lounge-plaza.png', logoAlt: 'Plaza Premium Group', logoWidth: 118, logoHeight: 50 },
        ],
      },
      {
        title: 'Maintenance & Engineering (MRO)',
        description: 'Logs aircraft and cabin defects and repairs.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/mro-swiss.png', logoAlt: 'Swiss-AS', logoWidth: 148, logoHeight: 32, name: 'Swiss-AS AMOS' },
          { logo: '/images/product/integrations/logos/airline/mro-ifs.png', logoAlt: 'IFS', logoWidth: 65, logoHeight: 32, name: 'IFS Maintenix' },
          { logo: '/images/product/integrations/logos/airline/mro-ultramain.png', logoAlt: 'Ultramain', logoWidth: 129, logoHeight: 32, name: 'Ultramain eLogbook' },
          { logo: '/images/product/integrations/logos/airline/mro-extra1.png', logoAlt: 'Trax', logoWidth: 54, logoHeight: 32 },
          { logo: '/images/product/integrations/logos/airline/mro-extra2.png', logoAlt: 'Ramco Aviation Software', logoWidth: 79, logoHeight: 32 },
          { text: 'Cabin Log Book', slotHeight: 32 },
        ],
      },
      {
        title: 'Aircraft Health Monitoring',
        description: 'Uses live aircraft sensor data to spot faults early.',
        systems: [
          { logo: '/images/product/integrations/logos/airline/ahm-airbus.png', logoAlt: 'Airbus', logoWidth: 128, logoHeight: 32, name: 'Airbus Skywise' },
          { logo: '/images/product/integrations/logos/airline/ahm-boeing.png', logoAlt: 'Boeing', logoWidth: 115, logoHeight: 32, name: 'Boeing AHM' },
        ],
      },
    ],
  } satisfies IntegrationsAirlinesData,

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

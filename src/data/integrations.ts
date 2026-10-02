import type { CtaBannerData, ExpandableBandItem, PageHeroData } from '@/types/content';
import type { FaqSectionData } from '@/components/sections/FaqSection';

export type IntegrationsPartnerCard = {
  tag: string;
  /** Reuses the shared TagPill variants: 'goals' = blue text pill, 'signals' = grey text pill. */
  tagVariant: 'goals' | 'signals';
  logo?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  /** Figma: some cards show a text title instead of a partner logo (e.g. "Field dispatch & workforce"). */
  title?: string;
  description: string;
};

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

export type IntegrationsConnectionCard = {
  title: string;
  description: string;
};

export type IntegrationsConnectionData = {
  title: string;
  titleHighlight?: string[];
  description: string;
  button: { label: string; href: string };
  cards: IntegrationsConnectionCard[];
};

export type IntegrationsPageData = {
  hero: PageHeroData;
  partners: IntegrationsPartnersData;
  connection: IntegrationsConnectionData;
  waysBands: ExpandableBandItem[];
  bandColors: string[];
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
    image: '/images/product/integrations/hero.png',
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
            logo: '/images/product/integrations/logos/avaya.svg',
            logoAlt: 'Avaya',
            logoWidth: 83,
            logoHeight: 24,
            description: 'Self-service and IVR containment. Nothing to spend here.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/genesys.svg',
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
            logoWidth: 70,
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
            logoWidth: 90,
            logoHeight: 50,
            description: 'Interaction and queue data via API.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/talkdesk.svg',
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
            logoWidth: 71,
            logoHeight: 50,
            description: 'Cases, accounts and activity via REST and streaming events.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/dynamics-365.png',
            logoAlt: 'Dynamics 365',
            logoWidth: 89,
            logoHeight: 50,
            description: 'Cases, accounts and service commitments via API.',
          },
          {
            tag: 'Ingestion pattern',
            tagVariant: 'signals',
            logo: '/images/product/integrations/logos/zendesk.png',
            logoAlt: 'Zendesk',
            logoWidth: 75,
            logoHeight: 50,
            description: 'Tickets, conversations and macros via API and webhooks.',
          },
          {
            tag: 'In CQI deployments',
            tagVariant: 'goals',
            logo: '/images/product/integrations/logos/servicenow.png',
            logoAlt: 'ServiceNow',
            logoWidth: 168,
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
            logo: '/images/product/integrations/logos/huawei.svg',
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
            logo: '/images/product/integrations/logos/qualtrics-xm.svg',
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
            logoWidth: 50,
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

  connection: {
    title: 'How the connection is made: four ways data reaches CQI',
    titleHighlight: ['data reaches CQI'],
    description:
      'Cloud-to-cloud, encrypted at rest and in transit. CQI performs the computation, so the load does not land on your platforms.',
    button: { label: 'Reference architecture', href: '/products/implementation#reference-architecture' },
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

  // Figma "CARDS EXPAND - INTEGRATIONS" (node 6079:26945): each of the 4 property variants
  // exposes one band open at a time, so all 4 bodies are readable across the variant set.
  waysBands: [
    {
      title: 'Direction',
      description:
        'Inbound by default, with write-back where a system owns the fix. Comms and service-management connectors are outbound: CQI activates the action there.',
    },
    {
      title: 'Security',
      description:
        'Encrypted in transit and at rest. PII is redacted or hashed before analytics, and processing runs inside CQI’s own cloud.',
      link: { label: 'Security & trust', href: '/products/security-trust' },
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
  ] satisfies ExpandableBandItem[],
  bandColors: ['#fefefe', '#edf2ff', '#ccdaff', '#b2c7ff'],

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
    image: '/images/product/integrations/cta-tablet.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' as const },
      { label: 'PoC approach', href: '/products/poc-approach', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

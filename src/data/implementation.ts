import type { CtaBannerData, CtaLink } from '@/types/content';
import type { HeroCopyData } from '@/components/ui/HeroCopy';

export type ImplementationDarkCard = {
  title: string;
  description: string;
};

export type EcosystemTag = {
  label: string;
  /** Percentage position of the tag's dot within the 525×525 circle. */
  top: string;
  left: string;
  /** Figma mobile (374px circle) position and dot-to-tag gap, when it differs. */
  mobile?: { top: string; left: string; gap?: string };
};

export type ImplementationTierTag = {
  label: string;
  variant: 'signals' | 'goals';
};

export type ImplementationTier = {
  index: number;
  title: string;
  description: string;
  tags: ImplementationTierTag[];
  /** Figma tier fill, from off-white through to the deepest blue. */
  background: string;
  text: 'dark' | 'light';
};

export type DeliveryStage = {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  linkLabel: string;
  linkHref: string;
  /** True to render a labeled FPO placeholder instead of the real image. */
  fpo?: boolean;
};

export type TaggedInsightItem = {
  tag: string;
  title: string;
  description: string;
};

export type RaciRow = {
  label: string;
  description: string;
};

export const implementationData = {
  hero: {
    title: 'Enrichment, not rip-and-replace',
    titleHighlight: ['not rip-and-replace'],
    eyebrow: 'CQI implementation',
    description:
      'CQI is designed to work alongside the CX, CRM, contact-centre and operational platforms you already run — verifying signals across them and orchestrating action inside existing workflows.',
    mobileTextGap: 48,
    mobileIntroGap: 10,
    mobileHighlightBlock: true,
    mobileMinHeight: 880,
    mobilePaddingTop: 56,
  } satisfies HeroCopyData,

  dataSources: {
    eyebrow: 'Integration',
    title: 'How data reaches CQI',
    titleHighlight: ['data reaches'],
    description:
      'A library of connectors, adapters and pre-defined pipelines accelerates ingestion while guaranteeing security, data health and privacy compliance.',
    cards: [
      {
        title: 'Interaction sources',
        description:
          'Contact centre and CCaaS platforms: call transcripts, chat and chatbot sessions, CDR, split and queue data, CTI and real-time sockets.',
      },
      {
        title: 'Systems of record',
        description:
          'CRM and customer lifecycle management, BSS and convergent billing, order and catalogue systems, service management.',
      },
      {
        title: 'Operational signals',
        description:
          'Network and OSS performance data, provisioning, field dispatch, IoT telemetry, and VoC survey platforms.',
      },
    ] satisfies ImplementationDarkCard[],
  },

  ecosystem: {
    tags: [
      { label: 'CDC & Bulk', top: '7.05%', left: '32.67%', mobile: { top: '10.03%', left: '26.07%' } },
      { label: 'TM Forum Open API', top: '21.90%', left: '72.67%', mobile: { top: '17.25%', left: '68.98%' } },
      { label: 'Open APIs', top: '30.86%', left: '30.76%', mobile: { top: '36.23%', left: '27.27%' } },
      { label: 'CTI / WebSocket', top: '48.76%', left: '85.81%', mobile: { top: '47.19%', left: '85.70%' } },
      { label: 'File transfer & SFTP', top: '59.24%', left: '16.29%', mobile: { top: '60.56%', left: '16.98%' } },
      { label: 'Webhooks & Events', top: '71.43%', left: '62.76%', mobile: { top: '73.13%', left: '59.76%' } },
      { label: 'Streaming', top: '94.10%', left: '50.38%', mobile: { top: '94.25%', left: '50.27%', gap: '4px' } },
    ] satisfies EcosystemTag[],
    paragraph:
      'Outbound connectors close the loop into SMS, push, email, IVR, service management and network assurance, so a verified insight becomes an action in the system that owns it.',
    cta: { label: 'Browse integrations', href: '/products/integrations', variant: 'primary' } satisfies CtaLink,
  },

  referenceArchitecture: {
    eyebrow: 'Reference architecture',
    title: 'Six tiers,\non Google Cloud',
    titleHighlight: ['on Google Cloud'],
    description:
      'CQI runs on Google Cloud, with the hosting region selected to meet your residency requirements. Governance and security are cross-cutting, not a tier.',
    tiers: [
      {
        index: 1,
        title: 'Source systems',
        description: 'VoC · network & OSS · contact centre · CRM · BSS & billing · edge collectors',
        tags: [{ label: 'Your estate', variant: 'signals' }],
        background: '#e6ebfa',
        text: 'dark',
      },
      {
        index: 2,
        title: 'Ingestion & integration',
        description:
          'API management, event bus, stream and batch ETL, change data capture, bulk transfer, webhook collectors',
        tags: [
          { label: 'Real time', variant: 'signals' },
          { label: 'Batch', variant: 'signals' },
        ],
        background: '#b2c7ff',
        text: 'dark',
      },
      {
        index: 3,
        title: 'Data platform',
        description:
          'Lakehouse with bronze/silver/gold zones, customer 360, identity resolution, catalogue and lineage, in-memory cache',
        tags: [
          { label: 'Customer 360', variant: 'signals' },
          { label: 'Lineage', variant: 'signals' },
        ],
        background: '#668fff',
        text: 'light',
      },
      {
        index: 4,
        title: 'AI & ML platform',
        description:
          'Feature store, vector search and retrieval-augmented generation with guardrails, confidence scoring, anomaly detection, multilingual NLP, churn propensity, next-best-action, scenario modelling',
        tags: [
          { label: 'Explainable', variant: 'goals' },
          { label: 'Guardrailed', variant: 'goals' },
        ],
        background: '#3369ff',
        text: 'light',
      },
      {
        index: 5,
        title: 'CQI application layer',
        description:
          'Analytics · scoring & alerting · orchestration. Sentiment, topic clustering, cohort analytics, the CQI scoring engine, autonomous alerting, journey orchestration and closed-loop connectors',
        tags: [{ label: 'CQI SaaS', variant: 'signals' }],
        background: '#0044ff',
        text: 'light',
      },
      {
        index: 6,
        title: 'Presentation & experience',
        description:
          'CX health command dashboard, journey-level monitoring, conversational insight assistant, guided root-cause workspace, executive and operational reporting',
        tags: [
          { label: 'UI', variant: 'signals' },
          { label: 'API', variant: 'signals' },
          { label: 'Reporting', variant: 'signals' },
        ],
        background: '#0036cc',
        text: 'light',
      },
    ] satisfies ImplementationTier[],
    footnote:
      'Entries marked In CQI deployments name platforms that appear in CQI solution architecture or market material. The rest are supported through a standard pattern, open API, streaming, CDC or file.',
  },

  delivery: {
    eyebrow: 'Delivery',
    title: 'Four stages from proof to scale',
    titleHighlight: ['proof to scale'],
    // Figma node 6225:35762 ("CQI IMPLEMENTATION") exposes all 4 card variants via
    // get_design_context — verbatim copy below. Each card has its own CQI product screenshot.
    stages: [
      {
        title: 'Proof of concept',
        description:
          'Roughly four weeks from data receipt. One month of interaction data across the chosen journeys, a friction map, and a go/no-go decision. CQI-native visualisation, no integration required.',
        image: '/images/product/implementation/delivery-poc.jpg',
        imageWidth: 1973,
        imageHeight: 1115,
        linkLabel: 'The five steps',
        linkHref: '/products/poc-approach',
      },
      {
        title: 'Land build',
        description:
          'First-horizon screens, the data model, RBAC and PII handling, and user acceptance testing. Visualisation can move to your own design language during this stage.',
        image: '/images/product/implementation/delivery-land-build.jpg',
        imageWidth: 1920,
        imageHeight: 2261,
        linkLabel: 'The five steps',
        linkHref: '/products/poc-approach',
      },
      {
        title: 'Go live',
        description:
          'The CX health dashboard and trend detection with root cause analysis, live for the agreed journeys, with training and adoption support.',
        image: '/images/product/implementation/delivery-go-live.jpg',
        imageWidth: 1920,
        imageHeight: 1352,
        linkLabel: 'The five steps',
        linkHref: '/products/poc-approach',
      },
      {
        title: 'Expand',
        description:
          'Additional connectors, journeys and screens by horizon. Customer-level and task-level scoring, service recovery workflow, then simulation and innovation sandbox.',
        image: '/images/product/implementation/delivery-expand.jpg',
        imageWidth: 1920,
        imageHeight: 1115,
        linkLabel: 'The five steps',
        linkHref: '/products/poc-approach',
      },
    ] satisfies DeliveryStage[],
  },

  timeToValue: {
    eyebrow: 'Time to value',
    title: 'How the KPI curve typically moves',
    titleHighlight: ['KPI curve'],
    description:
      'Phasing from CQI implementation material. Actual pace depends on data availability and scope.',
    items: [
      {
        tag: 'First 15 days',
        title: 'Recontact falls',
        description: 'Reduce recontact from conversational insight alone. The friction map goes live.',
      },
      {
        tag: 'From 30 days',
        title: 'Root causes named',
        description: 'Surface the root causes of churn with Verified CX. Fixes assigned to owners.',
      },
      {
        tag: 'From 60 days',
        title: 'Silent churn exposed',
        description: 'Uncover silent and technical churn across the full lifecycle.',
      },
    ] satisfies TaggedInsightItem[],
  },

  responsibilities: {
    eyebrow: 'Responsibilities',
    title: 'Who does what',
    description:
      'A working split from live CQI engagements.\nR = responsible, C = contributes or consulted.\nA full RACI is agreed at contracting.',
    rows: [
      {
        label: 'Platform provisioning & hosting',
        description: 'CQI: R · Client: C — cloud deployment in the agreed region',
      },
      {
        label: 'Data provisioning & access',
        description: 'CQI: C · Client: R — feeds supplied cloud-to-cloud',
      },
      {
        label: 'Visualisation build & data model',
        description: 'CQI: R · Client: C — CQI builds, the client validates against its own CX language',
      },
      {
        label: 'Security & compliance review',
        description: 'CQI: C · Client: R — client-led, with CQI supplying evidence',
      },
      {
        label: 'UAT & sign-off',
        description: 'CQI: C · Client: R — the client owns acceptance',
      },
      {
        label: 'Training & adoption',
        description: 'CQI: R · Client: C — CQI delivers, client champions roll it out',
      },
    ] satisfies RaciRow[],
  },

  cta: {
    title: 'Bring your architects',
    titleHighlight: ['architects'],
    description: 'A technical session on connectors, data model, residency and governance.',
    image: '/images/product/implementation/cta-architects.jpg',
    imageWidth: 579,
    imageHeight: 289,
    imagePosition: 'center 44.13%',
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' as const },
      { label: 'Security & trust', href: '/products/security-trust', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

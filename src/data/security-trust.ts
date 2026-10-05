import type { CtaBannerData, IconFeatureCard, PageHeroData, RuledRow } from '@/types/content';

/** Local to this page: RuledRowsSection's header has no highlight/eyebrow-less support. */
export type ComplianceStandardsData = {
  title: string;
  titleHighlight?: string[];
  rows: RuledRow[];
};

/** Local to this page: left column is a title + a nested small-label sub-block. */
export type GovernanceData = {
  title: string;
  titleHighlight?: string[];
  auditability: {
    label: string;
    description: string;
  };
  rows: RuledRow[];
};

export const securityTrustData = {
  hero: {
    title: 'Protected by design,\nassured by compliance',
    titleHighlight: ['compliance'],
    eyebrow: 'Security & Trust',
    description:
      'CQI operates as a data processor. Data is processed inside CQI’s own cloud and is anonymised before models run.',
    image: '/images/product/security-trust/hero.png',
    mobileImage: '/images/product/security-trust/hero-mobile.png',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  blindSpots: {
    eyebrow: 'Five blind spots',
    title: 'How data is protected, control by control',
    cards: [
      {
        icon: '/images/product/security-trust/ai-data-processing.svg',
        title: 'AI data processing',
        description:
          'Processing runs inside CQI’s own cloud. Data is anonymised before any model runs, so no PII reaches the AI layer.',
      },
      {
        icon: '/images/product/security-trust/data-minimisation.svg',
        title: 'Data minimisation & pseudonymisation',
        description:
          'Identifiers are masked or hashed before analytics, with controlled re-identification through a secure key vault.',
      },
      {
        icon: '/images/product/security-trust/encrypted-everywhere.svg',
        title: 'Encrypted everywhere',
        description:
          'AES-256 at rest and TLS 1.3 in transit, with optional bring-your-own-key for enterprise tenants.',
      },
      {
        icon: '/images/product/security-trust/access-governance.svg',
        title: 'Strict access governance',
        description:
          'Role-based access control, confidentiality agreements and multi-factor authentication for administrators.',
      },
      {
        icon: '/images/product/security-trust/logical-physical-separation.svg',
        title: 'Logical & physical separation',
        description:
          'Single-tenant segregation, hosted in SOC 2 and ISO 27001 certified data centres.',
      },
      {
        icon: '/images/product/security-trust/continuous-assurance.svg',
        title: 'Continuous assurance',
        description:
          'Vulnerability scanning, independent security audits and 72-hour breach notification.',
      },
    ] satisfies IconFeatureCard[],
  },

  compliance: {
    title: 'Compliance across the standards and regimes that matter',
    titleHighlight: ['standards and regimes that matter'],
    rows: [
      {
        label: 'GDPR',
        description:
          'CQI is GDPR compliant as a data processor, including Article 28 obligations. Sub-processors are vetted and bound by confidentiality terms; there is no unauthorised processing.',
      },
      {
        label: 'ISO 27001',
        description:
          'CQI is ISO 27001 compliant, and runs security tests continuously to keep the infrastructure safe for clients.',
      },
      {
        label: 'SOC 2 · ISO 27001 data centres',
        description:
          'Tenant workloads sit in certified data centres with logical and physical separation.',
      },
      {
        label: 'Regional regimes',
        description:
          'CQI complies with additional regional frameworks — including CITRA in Kuwait — and confirms data classification per source before ingestion, agreeing where the line sits above which data must stay on premise.',
      },
      {
        label: 'Data residency',
        description:
          'Hosting region is selected per client. Residency, sovereignty and retention are agreed at scoping, and the preferred hosting location is a configurable platform property rather than an exception.',
      },
      {
        label: 'Responsible AI',
        description:
          'Guardrails and confidence scoring on generative outputs, plus AI-governance hardening as deployments mature.',
      },
    ] satisfies RuledRow[],
  } satisfies ComplianceStandardsData,

  governance: {
    title: 'Governance is a product feature, not a policy document',
    titleHighlight: ['product feature'],
    auditability: {
      label: 'Auditability',
      description:
        'If a platform makes automated decisions about customers, someone will eventually have to explain one. CQI is built so that explanation exists as an artefact.',
    },
    rows: [
      {
        description:
          'The rule graph behind automated decisions is visual, savable and exportable, an auditable record of how decisions are made',
      },
      {
        description:
          'Risk status decomposes into benchmarked factors with the exact tipping date, rather than an opaque score',
      },
      {
        description:
          'Breached-SLA flags carry system evidence, giving auditable proof of commitment-keeping',
      },
      {
        description:
          'Data quality, lineage, catalogue, consent and KPI ownership are tracked as part of the platform',
      },
    ] satisfies RuledRow[],
  } satisfies GovernanceData,

  cta: {
    title: 'Send us your security questionnaire',
    titleHighlight: ['security questionnaire'],
    description: 'We will supply the evidence pack and join your infosec review.',
    image: '/images/product/security-trust/cta.png',
    imageWidth: 579,
    imageHeight: 289,
    // Figma node 6225:38813: raw 2731×4096 portrait, 300.48% of the frame tall, top −75%.
    imagePosition: 'center 37.41%',
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' as const },
      { label: 'CQI implementation', href: '/products/implementation', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};

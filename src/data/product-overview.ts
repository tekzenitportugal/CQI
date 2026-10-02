import type { CapabilitiesSectionData } from '@/components/sections/CapabilitiesSection';
import type { FeatureSplitSectionData } from '@/components/sections/FeatureSplitSection';
import type { LayerStackSectionData } from '@/components/sections/LayerStackSection';
import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type { CtaBannerData } from '@/types/content';
import { capabilityRoutes } from '@/data/capabilities';

// Figma 6079:31786 "PRODUCT OVERVIEW - CQI"
export const productOverviewData = {
  hero: {
    title: 'The verification and action layer of the CX stack',
    titleHighlight: ['verification and action layer'],
    titleMaxWidth: 702,
    eyebrow: 'Product overview',
    description:
      'CQI delivers an AI-powered SaaS platform that fuses customer voice with operational truth, creating a single verified view of the customer journey, and acting on it while it still matters.',
    descriptionMaxWidth: 653,
    cta: {
      label: 'Module by module',
      href: '/products/core-functionalities',
      variant: 'secondary',
    },
  } satisfies HeroCopyData,

  capabilities: {
    title: 'One platform, not a suite: six capabilities built on a single verified signal',
    titleHighlight: ['six capabilities', 'verified signal'],
    items: [
      {
        title: 'Verified CX Analytics',
        description:
          'Connects what customers say with operational events to produce a single, trusted read on CX health, continuously, not monthly.',
        href: capabilityRoutes.verifiedCxAnalytics,
        icon: '/images/shared/capabilities/verified-cx-analytics.svg',
      },
      {
        title: 'Customer Quality Index',
        description:
          'A per-customer lifecycle score built from every event, experience and interaction across the journey.',
        href: capabilityRoutes.customerQualityIndex,
        icon: '/images/shared/capabilities/customer-quality-index.svg',
      },
      {
        title: 'Root Cause & Recovery',
        description:
          'Shows what is broken, who is responsible and how to fix it (people, process or data) with a UI to track, measure and close',
        href: capabilityRoutes.rootCauseRecovery,
        icon: '/images/shared/capabilities/root-cause-resolution.svg',
      },
      {
        title: 'Predictive Churn & Recontact',
        description:
          'Real-time customer risk assessment across every customer, including the ones who never complain.',
        href: capabilityRoutes.predictiveChurnRecontact,
        icon: '/images/shared/capabilities/predictive-recontact.svg',
        titleWeight: 400,
      },
      {
        title: 'Cross-Channel Integrity',
        description:
          'A commitment ledger spanning channels, with containment, continuity and repetition scored separately.',
        href: capabilityRoutes.crossChannelIntegrity,
        icon: '/images/shared/capabilities/cross-channel-integrity.svg',
      },
      {
        title: 'End-to-end Orchestration',
        description:
          'Configurable workflows connected to queue, route, IVR, chat and comms, with control groups and A/B testing built in.',
        href: capabilityRoutes.endToEndOrchestration,
        icon: '/images/shared/capabilities/end-to-end-orchestration.svg',
      },
    ],
  } satisfies CapabilitiesSectionData,

  architecture: {
    eyebrow: 'architecture',
    title: 'Five layers, one platform',
    titleHighlight: ['one platform'],
    description:
      'Acting as an AI brain, CQI identifies misalignment early, guiding teams or triggering actions before it affects the customer relationship.',
    cta: { label: 'Reference architecture', href: '/products/implementation#reference-architecture', variant: 'secondary' },
    layers: [
      {
        title: 'Interfaces & API',
        description: 'Web UI plus a scalable REST API',
        tags: ['Web', 'APIs', 'IVR', 'Email', 'CRM', 'Schedule exports'],
        tone: 'b200',
      },
      {
        title: 'Security & Privacy',
        description: 'Protected by design, assured by compliance',
        tags: ['Encryption', 'RBAC', 'GDPR', 'Preferred hosting location', 'Responsible AI'],
        tone: 'b100',
      },
      {
        title: 'Activation workflow',
        description: 'Turning verified insight into action',
        tags: ['API integration', 'Automation & orchestration', 'Workflows'],
        tone: 'b75',
      },
      {
        title: 'Intelligence engine',
        description: 'The heart of the platform',
        tags: ['Agentic AI', 'RAG', 'Deep Learning', 'Business rules', 'Root Cause analysis'],
        tone: 'l100',
      },
      {
        title: 'Data ingestion',
        description: 'Multimodal, lightweight, secure, quality-monitored',
        tags: ['Adapter ecosystem', 'Pre-defined pipelines', 'PII redaction', 'Quality Monitoring'],
        tone: 'b50',
      },
    ],
  } satisfies LayerStackSectionData,

  journeyHealth: {
    eyebrow: 'Journey health',
    title: 'Health is promise continuity,\nnot an average score',
    titleHighlight: ['promise continuity'],
    description:
      'A journey is only as healthy as the commitments that survive it. CQI scores each stage on containment, continuity and repetition, so a red stage tells you which of three broke.',
    features: [
      { title: 'containment', description: 'Did the channel the customer choose actually resolve it?' },
      { title: 'Continuity', description: 'Did context and commitments survive the move  between channels?' },
      { title: 'Repetition', description: 'How many times did the customer have to come back?' },
    ],
    image: {
      src: '/images/product/capabilities/journey-health.png',
      width: 587,
      height: 340,
      // Figma node 6225:41743: raw 1920x2722 dashboard screenshot, shown top-cropped
      // at 100% width / ~245% height inside the 587x340 frame; border + shadow are
      // applied separately in CSS (FeatureSplitSection.module.scss .mediaFrame).
      inset: { top: 0, left: 0, width: 587, height: 832 },
    },
  } satisfies FeatureSplitSectionData,

  cta: {
    title: 'See it on your own data',
    titleHighlight: ['your own data'],
    description:
      'A non-intrusive proof of value needs no backend integration to surface your first friction map.',
    // Figma node 6225:41718 ("CTA"): raw 4096x2731 photo, scaled to 134.14%/179.19%
    // of the 579x289 frame and offset top/left so the person + monitor are in view.
    image: '/images/product/capabilities/cta-office-focus.jpg',
    imageWidth: 579,
    imageHeight: 289,
    imageInset: { top: -73, left: -108, width: 777, height: 518 },
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
      { label: 'PoC approach', href: '/products/poc-approach', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};

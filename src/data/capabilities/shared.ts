import type { CtaBannerData, LinkItem } from '@/types/content';
import { productExploreRoutes } from '@/data/product-routes';

export const capabilityRoutes = {
  overview: '/products/capabilities',
  verifiedCxAnalytics: '/products/verified-cx-analytics',
  customerQualityIndex: '/products/customer-quality-index',
  rootCauseRecovery: '/products/root-cause-recovery',
  predictiveChurnRecontact: '/products/predictive-churn-recontact',
  crossChannelIntegrity: '/products/cross-channel-integrity',
  endToEndOrchestration: '/products/end-to-end-orchestration',
} as const;

/** Pager links shown on every capability page (Figma: "Product Overview →", "All Modules →"). */
export const capabilityPagerLinks: LinkItem[] = [
  { label: 'Product Overview', href: capabilityRoutes.overview },
  { label: 'All Modules', href: productExploreRoutes.coreFunctionalities },
];

/** Capability-page CTA (Figma CTA instance on the capability frames). */
export const capabilityCta: CtaBannerData = {
  title: 'See this working on your own\ninteractions',
  titleHighlight: ['your own', 'interactions'],
  description: 'A two-week non-intrusive proof of value, with your own baseline and your own friction map.',
  image: '/images/product/capabilities/cta-headset.jpg',
  imageWidth: 579,
  imageHeight: 289,
  // Figma crop (node 6225:42153): 300.48% tall, -94.19% from the top
  imagePosition: 'center 46.99%',
  buttons: [
    { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
    { label: 'PoC approach', href: '/products/poc-approach', variant: 'secondary' },
  ],
};

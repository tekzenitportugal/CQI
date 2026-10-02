import { crossChannelIntegrity } from './cross-channel-integrity';
import { customerQualityIndex } from './customer-quality-index';
import { endToEndOrchestration } from './end-to-end-orchestration';
import { predictiveChurnRecontact } from './predictive-churn-recontact';
import { rootCauseRecovery } from './root-cause-recovery';
import type { CapabilityPageData } from './types';
import { verifiedCxAnalytics } from './verified-cx-analytics';

export type { CapabilityPageData } from './types';
export { capabilityRoutes } from './shared';

/** Product > Capabilities pages, in Figma's pager order. */
export const capabilityPages: CapabilityPageData[] = [
  verifiedCxAnalytics,
  customerQualityIndex,
  rootCauseRecovery,
  predictiveChurnRecontact,
  crossChannelIntegrity,
  endToEndOrchestration,
];

export function getCapabilityPage(slug: string) {
  return capabilityPages.find((page) => page.slug === slug);
}

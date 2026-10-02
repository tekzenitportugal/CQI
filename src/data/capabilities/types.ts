import type { CapabilityFeaturesData } from '@/components/sections/CapabilityFeaturesSection';
import type { CapabilityPagerData } from '@/components/sections/CapabilityPagerSection';
import type { FaqSectionData } from '@/components/sections/FaqSection';
import type { RuledRowsSectionData } from '@/components/sections/RuledRowsSection';
import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type { CtaBannerData } from '@/types/content';

/** One Product > Capabilities page (Figma "… - CQI" frames, 1536 × 4888). */
export type CapabilityPageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: HeroCopyData;
  /** Product mockup/photo composited over the hero gradient band (Figma: image inside Rectangle 85). */
  heroImage?: string;
  features: CapabilityFeaturesData;
  howItWorks: RuledRowsSectionData & { descriptionOffset?: number };
  /**
   * Figma places each section at a fixed y (1064 / 1997 / 2765), so the gaps after
   * "What it does" and "How it works" differ per page. Values in px at 1536.
   */
  spacing: { afterFeatures: number; afterHowItWorks: number };
  pager: CapabilityPagerData;
  faq: FaqSectionData;
  cta: CtaBannerData;
};

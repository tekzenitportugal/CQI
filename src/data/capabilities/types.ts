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
  /** Hero banner image: a full-bleed photo (PageHeroBanner) unless `heroMockup` is set. */
  heroImage?: string;
  /** Dedicated mobile crop of `heroImage`, used when it's a full-bleed photo. */
  heroImageMobile?: string;
  /** Natural aspect ratio ("w / h") of `heroImage`, used to size it when stacked below the copy on mobile. */
  heroImageAspectRatio?: string;
  /** Serve `heroImage` as-is, skipping Next's resize/recompress. */
  heroImageUnoptimized?: boolean;
  /** Fade the hero gradient over the image's left edge so the image sits behind it and the copy stays readable. */
  heroImageBehindGradient?: boolean;
  /** Set for pages still using the right-anchored product mockup cutout over the plain gradient, instead of a full-bleed photo. */
  heroMockup?: boolean;
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

import type { CapabilityFeaturesData } from '@/components/sections/CapabilityFeaturesSection';
import type { CapabilityFlowData } from '@/components/sections/CapabilityFlowSection';
import type { CapabilityScreensData } from '@/components/sections/CapabilityScreensSection';
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
  /** Below lg: which part of `heroImageMobile` the cover crop keeps (CSS background-position). */
  heroImageMobilePosition?: string;
  /** Below lg: show the whole mobile photo this tall (% of the hero box), bottom-anchored, instead of cover-cropping it. */
  heroMobilePhotoHeight?: number;
  /** Tablet (768–1023px): CSS background-position of the mobile photo (and full box width), so the subject isn't cropped away. */
  heroTabletPhotoPosition?: string;
  /** lg+: Figma's radial wash from the left edge over the hero photo (see PageHeroBanner `radialWash`). */
  heroRadialWash?: boolean;
  /** Below lg: ease the hero copy wash into the photo (see PageHeroData.mobileSoftFade). */
  heroMobileSoftFade?: boolean;
  /** Figma desktop mockup placed inside the hero card (inset hero); see GradientHero `desktopFigure`. */
  heroDesktopFigure?: { src: string; width: number; height: number; top: number; right: number; displayWidth: number };
  /** Figma mobile mockup placed inside the hero card (inset hero); see GradientHero `mobileFigure`. */
  heroMobileFigure?: { src: string; width: number; height: number; top: number; left: number; displayWidth: number; copyTop: number };
  /** Natural aspect ratio ("w / h") of `heroImage`, used to size it when stacked below the copy on mobile. */
  heroImageAspectRatio?: string;
  /** Below lg: transparent margin under the device in `heroImage`, as % of its width; see GradientHero `mobileImageTrim`. */
  heroMobileImageTrim?: number;
  /** Tablet (768–1023px): share of the card width the stacked hero image takes; see GradientHero `tabletImageScale`. */
  heroTabletImageScale?: number;
  /** Serve `heroImage` as-is, skipping Next's resize/recompress. */
  heroImageUnoptimized?: boolean;
  /** Fade the hero gradient over the image's left edge so the image sits behind it and the copy stays readable. */
  heroImageBehindGradient?: boolean;
  /** Below lg, crop the image's transparent margins so the device spans the card's full width (inset variant). */
  heroMobileFill?: boolean;
  /** Desktop: vertically centre the cutout between the nav and the bottom of the hero (instead of bottom-anchoring). */
  heroImageCentered?: boolean;
  /** Set for pages still using the right-anchored product mockup cutout over the plain gradient, instead of a full-bleed photo. */
  heroMockup?: boolean;
  /** Cards + screenshot layout, or the animated half-disc diagram (`steps`). */
  features: CapabilityFeaturesData | CapabilityFlowData;
  /** Optional row of product screenshots shown straight after "What it does". */
  screens?: CapabilityScreensData;
  howItWorks: RuledRowsSectionData & { descriptionOffset?: number; descriptionWeight?: number };
  /**
   * Figma places each section at a fixed y (1064 / 1997 / 2765), so the gaps after
   * "What it does" and "How it works" differ per page. Values in px at 1536.
   */
  spacing: { afterFeatures: number; afterHowItWorks: number; mobileAfterHowItWorks?: number };
  pager: CapabilityPagerData;
  faq: FaqSectionData;
  cta: CtaBannerData;
};

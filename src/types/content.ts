export type LinkItem = {
  label: string;
  href: string;
};

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'light'
  | 'lightOutline'
  | 'text';

export type CtaLink = LinkItem & {
  variant?: ButtonVariant;
};

export type StatCard = {
  value: string;
  label: string;
};

export type CapabilityCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
  titleWeight?: 400 | 500;
};

export type IndustryTab = {
  id: string;
  label: string;
  headline: string;
  description: string;
  descriptionHighlight?: string[];
  href: string;
  image?: string;
  imageObjectPosition?: string;
  imageFlipX?: boolean;
};

export type TeamRoleTab = {
  id: string;
  label: string;
  /** Shorter label (\n = line break) used on phones, where tabs become wrapping chips. */
  mobileLabel?: string;
  subheading: string;
  subheadingHighlight?: string[];
  description: string;
  bullets: string[];
  link?: { label: string; href: string };
  image: string;
  imageObjectPosition?: string;
};

export type FiveStage = {
  id: number;
  title: string;
  description: string;
};

export type StackLayer = {
  title: string;
  tag: string;
  tagHighlight?: boolean;
  description: string;
};

export type OutcomeMetric = {
  value: string;
  suffix?: string;
  label: string;
};

export type ModuleCard = {
  tag: string;
  title: string;
  description: string;
  titleWeight?: 400 | 500;
};


export type CtaBannerData = {
  title: string;
  titleHighlight?: string[];
  description: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  /** CSS object-position for Figma crops that aren't centred. */
  imagePosition?: string;
  /** For crops zoomed/offset beyond what object-position can express (Figma: image larger than its frame). */
  imageInset?: { top: number; left: number; width: number; height: number };
  /** Mobile-only zoom of the photo inside its frame (Figma mobile crops tighter than desktop). */
  imageMobileZoom?: number;
  /** Below lg only: a separate photo (Figma mobile uses a different, pre-cropped image). */
  mobileImage?: string;
  /** Below lg only: ignore the desktop line breaks in the title and let it wrap naturally. */
  mobileInlineTitle?: boolean;
  buttons: CtaLink[];
};

/** Full-bleed photo hero (PageHeroBanner): HeroCopy's fields plus the banner photo(s). */
export type PageHeroData = import('@/components/ui/HeroCopy').HeroCopyData & {
  /** Omit for a gradient-only hero (no photo in Figma). */
  image?: string;
  /** Dedicated portrait crop for below lg; falls back to `image` (CSS-cropped) when omitted. */
  mobileImage?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** Below lg only: top padding (px) of the copy, measured from the banner's content edge. */
  mobilePaddingTop?: number;
  /** Below lg only: title→intro and eyebrow→description gaps (px) when Figma differs from the default 60/20. */
  mobileTextGap?: number;
  mobileIntroGap?: number;
  /** Below lg only (dedicated mobile image): shifts the photo up by this many px (Figma crops it taller than the card). */
  mobileImageShift?: number;
  /** Below lg only (dedicated mobile image): CSS `background` for the wash layer over the photo. */
  mobileOverlay?: string;
};

export type IconFeatureCard = {
  icon: string;
  title: string;
  description: string;
  variant?: 'dark' | 'accent';
};

export type SentimentStage = {
  label: string;
  icon: string;
  color: string;
};

export type ResearchStatItem = {
  value: string;
  label: string;
  source: string;
};

export type TimelineEntry = {
  heading: string;
  body: string;
  indent?: string;
};

export type VerificationLayer = {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  variant?: 'verification';
};

export type RiskDecompositionCard = {
  title: string;
  description: string;
};

export type RoutingStateCard = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export type RuledRow = {
  /** Omit for a label-less row (Figma: plain paragraphs between dashed rules). */
  label?: string;
  description: string;
};

export type HowWeDoItFeature = {
  title: string;
  description: string;
};

export type WhereCqiFitsData = {
  eyebrow: string;
  title: string;
  description: string;
  /** Rendered under the heading; omit to place the CTAs elsewhere (homepage puts them after the diagram). */
  ctas?: CtaLink[];
};

export type IndustryTagGroup = {
  label: string;
  tags: string[];
  variant: 'default' | 'invisible' | 'signals' | 'highlight' | 'goals' | 'white';
};

export type IndustryFrictionData = {
  title: string;
  titleHighlight?: string[];
  /** Per-page title column override (Figma: most sectors use the shared 691px default). */
  titleMaxWidth?: number;
  description: string;
  tagGroups: IndustryTagGroup[];
  image: string;
  /** Frame aspect ("w / h"). Figma industry screenshots are 587×341, not the square placeholder. */
  imageAspect?: string;
  /** Black dim over the screenshot. Omit to keep the shared 50% placeholder dim. */
  imageOverlay?: number;
  imagePosition?: string;
  /** Bordered product screenshot (Figma: 8px radius, hairline border, soft shadow). */
  imageFramed?: boolean;
};

export type IndustryThreeThingsItem = {
  step: number;
  title: string;
  description: string;
};

export type IndustryThreeThingsData = {
  title: string;
  titleHighlight?: string[];
  items: IndustryThreeThingsItem[];
  /** Figma mobile (banking, insurance, utilities, consumer electronics): step 1 has a 32px marker gap instead of 24px. */
  roomyFirstStep?: boolean;
};

export type IndustryScenario = {
  title: string;
  description: string;
  outcomeLabel?: string;
  outcome: string;
  image?: string;
  imagePosition?: string;
  /** Black dim layer opacity over the image (Figma: set per card, not per sector — e.g. 0.5 on insurance/utilities' first card, 0.6 on consumer-electronics' second). */
  imageOverlay?: number;
  /** Figma applies `mix-blend-mode: color` on the overlay for the cards above. */
  imageBlend?: 'normal' | 'color';
};

export type IndustryScenariosData = {
  title: string;
  titleHighlight?: string[];
  scenarios: IndustryScenario[];
};

export type PercentMetricCard = {
  value: string;
  label: string;
};

export type IndustryOutcomeRangeData = {
  title: string;
  titleHighlight?: string[];
  cta?: CtaLink;
  eyebrow: string;
  metrics: PercentMetricCard[];
  footnote: string;
  /** Figma: utilities & consumer electronics use three cards in one row. */
  metricsColumnCount?: 3 | 4;
};

export type ResearchMetricCard = {
  value: string;
  label: string;
  source?: string;
};

export type IndustryResearchMetricsData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  metrics: ResearchMetricCard[];
  footnote: string;
};

export type SolutionsIndustryTab = {
  id: string;
  label: string;
  headline: string;
  headlineHighlight?: string[];
  tags: string[];
  href: string;
  image: string;
  imageObjectPosition?: string;
  imageFlipX?: boolean;
};

export type SolutionsIndustryTabsData = {
  title: string;
  titleHighlight?: string[];
  tabs: SolutionsIndustryTab[];
};

export type FailureModeCard = {
  title: string;
  description: string;
  /** Figma alternates card text between bottom- and top-anchored. */
  align?: 'top' | 'bottom';
};

export type CrossSectorPatternsData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description: string;
  cards: FailureModeCard[];
};

export type AdjacentSectorCard = {
  title: string;
  description: string;
  image: string;
};

export type AdjacentSectorsData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description: string;
  cards: AdjacentSectorCard[];
};

export type SolutionsHubData = {
  metaTitle: string;
  metaDescription: string;
  hero: import('@/components/ui/HeroCopy').HeroCopyData;
  sixSectors: SolutionsIndustryTabsData;
  crossSectorPatterns: CrossSectorPatternsData;
  cta: CtaBannerData;
};

export type NotListedPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: import('@/components/ui/HeroCopy').HeroCopyData;
  /** Full-bleed hero photo (PageHeroBanner); omit to keep the plain gradient card. */
  heroImage?: string;
  heroImageMobile?: string;
  threeQuestions: IndustryThreeThingsData;
  adjacentSectors: AdjacentSectorsData;
  cta: CtaBannerData;
};

export type ExpandableBandItem = {
  title: string;
  /** Ruled-row style content shown when this band is open (label/description pairs), or plain copy. */
  description?: string;
  rows?: RuledRow[];
  /** Figma "CARDS EXPAND": an optional text-arrow link shown under the description when this band is open. */
  link?: LinkItem;
};

export type IndustrySolutionData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: import('@/components/ui/HeroCopy').HeroCopyData;
  /** Hero art: a full-bleed photo (PageHeroBanner) unless `heroMockup` is set. Omit to keep the plain gradient card. */
  heroImage?: string;
  heroImageMobile?: string;
  /** Natural aspect ratio ("w / h") of a mockup cutout, used to size it when stacked below the copy on mobile. */
  heroImageAspectRatio?: string;
  /** Right-anchored product cutout on the gradient hero (same treatment as the homepage), instead of a full-bleed photo. */
  heroMockup?: boolean;
  friction: IndustryFrictionData;
  threeThings: IndustryThreeThingsData;
  scenarios: IndustryScenariosData;
  outcomeRange?: IndustryOutcomeRangeData;
  researchMetrics?: IndustryResearchMetricsData;
  plugIn: WhereCqiFitsData;
  cta: CtaBannerData;
};


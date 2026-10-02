import type { Metadata } from 'next';
import { productOverviewData } from '@/data/product-overview';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FeatureSplitSection } from '@/components/sections/FeatureSplitSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { LayerStackSection } from '@/components/sections/LayerStackSection';

export const metadata: Metadata = {
  title: 'Product Overview — CQI Verified CX',
  description:
    'The verification and action layer of the CX stack: six capabilities built on a single verified signal.',
};

export default function ProductOverviewPage() {
  return (
    <>
      <GradientHero data={productOverviewData.hero} image="/images/product/capabilities-overview/hero-banner-prod-overview.png" />
      {/* Figma: heading 200px below the hero band; cards 350px tall */}
      <CapabilitiesSection
        data={productOverviewData.capabilities}
        titleMaxWidth={728}
        spaceTop={200}
        cardMinHeight={350}
        cardGradientAngle="52.969deg"
      />
      <LayerStackSection data={productOverviewData.architecture} />
      <div className="fade-band">
        <FeatureSplitSection data={productOverviewData.journeyHealth} />
        <CtaBannerSection data={productOverviewData.cta} />
      </div>
    </>
  );
}

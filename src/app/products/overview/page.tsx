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
      <GradientHero
        data={productOverviewData.hero}
        image="/images/product/capabilities-overview/2_PRODUCT_OVERVIEW_IMG1.png"
        imageUnoptimized
        imageAspectRatio="3908 / 3392"
        // Figma mobile 6439:7279: 397×332 box flush to the card's bottom, laptop cropped in it.
        mobileCrop={{ aspect: '397 / 332', width: 125, left: -25, top: -14.8, imageWidth: 3908, imageHeight: 3392 }}
        // Transparent space under the laptop inside the crop box, trimmed so the 60px mobile gap starts at the laptop.
        mobileImageTrim={8.3}
      />
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

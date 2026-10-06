import type { IndustrySolutionData } from '@/types/content';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { IndustryFrictionSection } from '@/components/sections/IndustryFrictionSection';
import { IndustryOutcomeRangeSection } from '@/components/sections/IndustryOutcomeRangeSection';
import { IndustryResearchMetricsSection } from '@/components/sections/IndustryResearchMetricsSection';
import { IndustryScenariosSection } from '@/components/sections/IndustryScenariosSection';
import { IndustryThreeThingsSection } from '@/components/sections/IndustryThreeThingsSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { WhereCqiFitsSection } from '@/components/sections/WhereCqiFitsSection';

type IndustrySolutionViewProps = {
  data: IndustrySolutionData;
};

export function IndustrySolutionView({ data }: IndustrySolutionViewProps) {
  return (
    <>
      {data.heroMockup && data.heroImage ? (
        <GradientHero
          data={data.hero}
          variant="inset"
          image={data.heroImage}
          imageAspectRatio={data.heroImageAspectRatio}
          mobileImage={data.heroImageMobile}
        />
      ) : data.heroImage ? (
        <PageHeroBanner data={{ ...data.hero, image: data.heroImage, mobileImage: data.heroImageMobile }} />
      ) : (
        <GradientHero data={data.hero} variant="inset" />
      )}
      <IndustryFrictionSection data={data.friction} />
      <div className="solutions-band">
        <IndustryThreeThingsSection data={data.threeThings} variant="grouped" industryMobile />
        <IndustryScenariosSection data={data.scenarios} />
      </div>
      <div>
        {data.researchMetrics ? (
          <IndustryResearchMetricsSection data={data.researchMetrics} variant="solutions" />
        ) : (
          data.outcomeRange && (
            <IndustryOutcomeRangeSection data={data.outcomeRange} variant="solutions" />
          )
        )}
        <WhereCqiFitsSection data={data.plugIn} variant="solutions" />
      </div>
      <CtaBannerSection data={data.cta} variant="solutions" />
    </>
  );
}

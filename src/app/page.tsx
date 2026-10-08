import { homepageData } from '@/data/homepage';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FullBleedImageSection } from '@/components/sections/FullBleedImageSection';
import { GapSection } from '@/components/sections/GapSection';
import { HeroBanner } from '@/components/sections/HeroBanner';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { OutcomeRangeSection } from '@/components/sections/OutcomeRangeSection';
import { StackInfographicSection } from '@/components/sections/StackInfographicSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { WhereCqiFitsSection } from '@/components/sections/WhereCqiFitsSection';

export default function HomePage() {
  return (
    <>
      <HeroBanner>
        <HeroSection data={homepageData.hero} />
      </HeroBanner>
      <GapSection data={homepageData.gap} />
      <StatsSection data={homepageData.stats} />
      <HowItWorksSection data={homepageData.howItWorks} />
      <FullBleedImageSection data={homepageData.fullBleedImage} />
      <CapabilitiesSection data={homepageData.capabilities} />
      <OutcomeRangeSection data={homepageData.outcomeRange} />
      <div className="fade-band">
        <IndustriesSection data={homepageData.industries} />
        <WhereCqiFitsSection data={homepageData.whereCqiFits} />
        <StackInfographicSection layers={homepageData.stackLayers} ctas={homepageData.stackCtas} />
        <CtaBannerSection data={homepageData.cta} />
      </div>
    </>
  );
}

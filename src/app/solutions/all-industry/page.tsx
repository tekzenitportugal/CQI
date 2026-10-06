import type { Metadata } from 'next';
import { solutionsHubData } from '@/data/solutions/hub';
import { CrossSectorPatternsSection } from '@/components/sections/CrossSectorPatternsSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { SolutionsIndustryTabsSection } from '@/components/sections/SolutionsIndustryTabsSection';

export const metadata: Metadata = {
  title: solutionsHubData.metaTitle,
  description: solutionsHubData.metaDescription,
};

export default function SolutionsHubPage() {
  return (
    <>
      <GradientHero data={solutionsHubData.hero} variant="inset" />
      <SolutionsIndustryTabsSection data={solutionsHubData.sixSectors} />
      <CrossSectorPatternsSection data={solutionsHubData.crossSectorPatterns} />
      <CtaBannerSection data={solutionsHubData.cta} variant="flushTop" />
    </>
  );
}

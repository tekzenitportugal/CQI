import type { Metadata } from 'next';
import { compareCqiData } from '@/data/compare-cqi';
import { CompareCategoriesSection } from '@/components/sections/CompareCategoriesSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { DistinctionTableSection } from '@/components/sections/DistinctionTableSection';
import { GradientHero } from '@/components/sections/GradientHero';

export const metadata: Metadata = {
  title: compareCqiData.metaTitle,
  description: compareCqiData.metaDescription,
};

export default function CompareCqiPage() {
  return (
    <>
      <GradientHero data={compareCqiData.hero} variant="inset" gradient={compareCqiData.heroGradient} />
      <CompareCategoriesSection data={compareCqiData.categories} />
      <DistinctionTableSection data={compareCqiData.distinction} />
      <CtaBannerSection data={compareCqiData.conversationCta} variant="flushTop" />
    </>
  );
}

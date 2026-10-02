import type { Metadata } from 'next';
import { notListedPageData } from '@/data/solutions/not-listed';
import { AdjacentSectorsSection } from '@/components/sections/AdjacentSectorsSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { IndustryThreeThingsSection } from '@/components/sections/IndustryThreeThingsSection';

export const metadata: Metadata = {
  title: notListedPageData.metaTitle,
  description: notListedPageData.metaDescription,
};

export default function NotListedPage() {
  return (
    <>
      <GradientHero data={notListedPageData.hero} variant="inset" />
      <IndustryThreeThingsSection data={notListedPageData.threeQuestions} />
      <AdjacentSectorsSection data={notListedPageData.adjacentSectors} />
      <CtaBannerSection data={notListedPageData.cta} />
    </>
  );
}

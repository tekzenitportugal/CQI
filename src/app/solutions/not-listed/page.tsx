import type { Metadata } from 'next';
import { notListedPageData } from '@/data/solutions/not-listed';
import { AdjacentSectorsSection } from '@/components/sections/AdjacentSectorsSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { IndustryThreeThingsSection } from '@/components/sections/IndustryThreeThingsSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';

export const metadata: Metadata = {
  title: notListedPageData.metaTitle,
  description: notListedPageData.metaDescription,
};

export default function NotListedPage() {
  return (
    <>
      {notListedPageData.heroImage ? (
        <PageHeroBanner
          data={{
            ...notListedPageData.hero,
            image: notListedPageData.heroImage,
            mobileImage: notListedPageData.heroImageMobile,
          }}
        />
      ) : (
        <GradientHero data={notListedPageData.hero} variant="inset" />
      )}
      <IndustryThreeThingsSection data={notListedPageData.threeQuestions} industryMobile alignedLine />
      <div className="solutions-band">
        <AdjacentSectorsSection data={notListedPageData.adjacentSectors} />
        <CtaBannerSection data={notListedPageData.cta} />
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import { aboutData } from '@/data/about';
import { AboutPurposeSection } from '@/components/sections/AboutPurposeSection';
import { CategoryFrontierSection } from '@/components/sections/CategoryFrontierSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { ValuesInPracticeSection } from '@/components/sections/ValuesInPracticeSection';

export const metadata: Metadata = {
  title: 'About Us — CQI Verified CX',
  description:
    'CQI exists to close the gap between what customers experience and what enterprises can see. CQI Sense is the verification and action layer of the CX stack.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeroBanner data={aboutData.hero} />
      <AboutPurposeSection data={aboutData.purpose} />
      <CategoryFrontierSection data={aboutData.categoryFrontier} />
      <ValuesInPracticeSection data={aboutData.valuesInPractice} />
      <CtaBannerSection data={aboutData.cta} variant="flushTop" />
    </>
  );
}

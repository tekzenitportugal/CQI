import type { Metadata } from 'next';
import { roiCalculatorData } from '@/data/roi-calculator';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { HowModelWorksSection } from '@/components/sections/HowModelWorksSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { RoiCalculatorSection } from '@/components/sections/RoiCalculatorSection';

export const metadata: Metadata = {
  title: roiCalculatorData.metaTitle,
  description: roiCalculatorData.metaDescription,
};

export default function RoiCalculatorPage() {
  return (
    <>
      <PageHeroBanner data={roiCalculatorData.hero} mirror={false} />
      <RoiCalculatorSection data={roiCalculatorData.calculator} />
      <HowModelWorksSection data={roiCalculatorData.howModelWorks} />
      <FaqSection data={roiCalculatorData.faq} spaceTop={100} />
      <CtaBannerSection data={roiCalculatorData.conversationCta} />
    </>
  );
}

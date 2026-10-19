import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { roiCalculatorData } from '@/data/roi-calculator';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { HowModelWorksSection } from '@/components/sections/HowModelWorksSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { RoiCalculatorSection } from '@/components/sections/RoiCalculatorSection';

/**
 * The ROI calculator is hidden for now (shows a 404, and every link to it has been removed).
 * Flip this to `true` to bring the page back, then restore the links in the menu, sitemap, industry heroes, pricing, homepage and "how we prove it".
 */
const ROI_CALCULATOR_ENABLED = false;

export const metadata: Metadata = {
  title: roiCalculatorData.metaTitle,
  description: roiCalculatorData.metaDescription,
  robots: ROI_CALCULATOR_ENABLED ? undefined : { index: false, follow: false },
};

export default function RoiCalculatorPage() {
  if (!ROI_CALCULATOR_ENABLED) notFound();

  return (
    <>
      <PageHeroBanner data={roiCalculatorData.hero} mirror={false} />
      <RoiCalculatorSection data={roiCalculatorData.calculator} />
      <HowModelWorksSection data={roiCalculatorData.howModelWorks} />
      <FaqSection data={roiCalculatorData.faq} spaceTop={150} />
      <CtaBannerSection data={roiCalculatorData.conversationCta} />
    </>
  );
}

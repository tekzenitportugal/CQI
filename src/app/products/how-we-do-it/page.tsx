import type { Metadata } from 'next';
import { howWeDoItData } from '@/data/how-we-do-it';
import { ColourToActionSection } from '@/components/sections/ColourToActionSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { CustomerPulseHowSection } from '@/components/sections/CustomerPulseHowSection';
import { RiskDecompositionCarouselSection } from '@/components/sections/RiskDecompositionCarouselSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { RiskEngineSection } from '@/components/sections/RiskEngineSection';
import { RootCauseAnalyticsSection } from '@/components/sections/RootCauseAnalyticsSection';
import { VerificationAlgorithmSection } from '@/components/sections/VerificationAlgorithmSection';

export const metadata: Metadata = {
  title: 'How We Do It — CQI Verified CX',
  description:
    'CQI’s verification algorithm connects CX signals, agent actions, and operational events to surface misalignment and root cause.',
};

export default function HowWeDoItPage() {
  return (
    <>
      <GradientHero
        data={howWeDoItData.hero}
        variant="inset"
        image={howWeDoItData.hero.image}
        imageAspectRatio="1520 / 849"
        imageUnoptimized
        imageBehindGradient="wide"
        mobileBackdrop="/images/product/how-we-do-it/hero-mobile.png"
      />
      <VerificationAlgorithmSection data={howWeDoItData.verificationIntro} />
      <RootCauseAnalyticsSection data={howWeDoItData.rootCause} />
      <CustomerPulseHowSection data={howWeDoItData.customerPulse} />
      <RiskEngineSection data={howWeDoItData.riskEngine} />
      <RiskDecompositionCarouselSection data={howWeDoItData.riskDecomposition} />
      <div className="fade-band">
        <ColourToActionSection data={howWeDoItData.colourToAction} />
        <CtaBannerSection data={howWeDoItData.cta} />
      </div>
    </>
  );
}

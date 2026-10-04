import type { Metadata } from 'next';
import { coreFunctionalitiesData } from '@/data/core-functionalities';
import { RuledRowsSection } from '@/components/sections/RuledRowsSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { ModulesCarouselSection } from '@/components/sections/ModulesCarouselSection';
import { GradientHero } from '@/components/sections/GradientHero';

export const metadata: Metadata = {
  title: 'Core Functionalities — CQI Verified CX',
  description:
    'Twelve modules, one operating model. Explore how CQI ships as a working operating model — health view, evidence layer, explainable risk engine, and recovery workflows.',
};

export default function CoreFunctionalitiesPage() {
  return (
    <>
      <GradientHero data={coreFunctionalitiesData.hero} variant="inset" />
      <ModulesCarouselSection data={coreFunctionalitiesData.modules} />
      <div className="fade-band">
        <RuledRowsSection data={coreFunctionalitiesData.connectiveTissue} variant="grouped" />
        <CtaBannerSection data={coreFunctionalitiesData.cta} />
      </div>
    </>
  );
}

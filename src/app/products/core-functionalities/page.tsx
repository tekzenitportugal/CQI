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
        {/* Figma: starts 281px into the fade band; the CTA below owns the next 200px */}
        <RuledRowsSection
          data={coreFunctionalitiesData.connectiveTissue}
          spaceTop={281}
          descriptionOffset={3}
          headingGap={14}
          variant="grouped"
        />
        <CtaBannerSection data={coreFunctionalitiesData.cta} />
      </div>
    </>
  );
}

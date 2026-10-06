import type { Metadata } from 'next';
import { implementationData } from '@/data/implementation';
import { CqiEcosystemSection } from '@/components/sections/CqiEcosystemSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { DataSourcesSection } from '@/components/sections/DataSourcesSection';
import { DeliveryStagesSection } from '@/components/sections/DeliveryStagesSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { ReferenceArchitectureSection } from '@/components/sections/ReferenceArchitectureSection';
import { ResponsibilitiesSection } from '@/components/sections/ResponsibilitiesSection';
import { TaggedInsightsRow } from '@/components/sections/TaggedInsightsRow';

export const metadata: Metadata = {
  title: 'CQI Implementation — CQI Verified CX',
  description:
    'How CQI connects to your estate, the reference architecture on Google Cloud, delivery stages, time to value, and who does what.',
};

export default function ImplementationPage() {
  return (
    <>
      <GradientHero data={implementationData.hero} variant="inset" />
      <DataSourcesSection data={implementationData.dataSources} />
      <CqiEcosystemSection data={implementationData.ecosystem} />
      <ReferenceArchitectureSection data={implementationData.referenceArchitecture} />
      <DeliveryStagesSection data={implementationData.delivery} />
      <TaggedInsightsRow
        figmaMobile
        eyebrow={implementationData.timeToValue.eyebrow}
        title={implementationData.timeToValue.title}
        titleHighlight={implementationData.timeToValue.titleHighlight}
        description={implementationData.timeToValue.description}
        items={implementationData.timeToValue.items}
      />
      <ResponsibilitiesSection data={implementationData.responsibilities} />
      <CtaBannerSection data={implementationData.cta} />
    </>
  );
}

import type { Metadata } from 'next';
import { integrationsData } from '@/data/integrations';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { IntegrationsConnectionSection } from '@/components/sections/IntegrationsConnectionSection';
import { IntegrationsPartnersSection } from '@/components/sections/IntegrationsPartnersSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { ExpandableBandList } from '@/components/ui/ExpandableBandList';

export const metadata: Metadata = {
  title: 'Integrations — CQI',
  description:
    'CQI favours a lightweight integration: a library of connectors, adapters and pre-defined pipelines that accelerates ingestion while guaranteeing security, data health and privacy compliance.',
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHeroBanner data={integrationsData.hero} />
      <IntegrationsPartnersSection data={integrationsData.partners} />
      <IntegrationsConnectionSection data={integrationsData.connection} />
      <ExpandableBandList items={integrationsData.waysBands} colors={integrationsData.bandColors} scrollDriven />
      <FaqSection data={integrationsData.faq} />
      <CtaBannerSection data={integrationsData.cta} />
    </>
  );
}

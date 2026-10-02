import type { Metadata } from 'next';
import { requestADemoData } from '@/data/request-a-demo';
import { DemoCoverageSection } from '@/components/sections/DemoCoverageSection';
import { DemoFormSection } from '@/components/sections/DemoFormSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';

export const metadata: Metadata = {
  title: requestADemoData.metaTitle,
  description: requestADemoData.metaDescription,
};

export default function RequestADemoPage() {
  return (
    <>
      <PageHeroBanner data={requestADemoData.hero} />
      <DemoFormSection data={requestADemoData.form} />
      <DemoCoverageSection data={requestADemoData.coverage} />
    </>
  );
}

import type { Metadata } from 'next';
import { seeItLiveData } from '@/data/see-it-live';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { LiveSessionCoverageSection } from '@/components/sections/LiveSessionCoverageSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { SeeItLiveStagesSection } from '@/components/sections/SeeItLiveStagesSection';

export const metadata: Metadata = {
  title: seeItLiveData.metaTitle,
  description: seeItLiveData.metaDescription,
};

export default function SeeItLivePage() {
  return (
    <>
      <PageHeroBanner data={seeItLiveData.hero} mirror={false} />
      <SeeItLiveStagesSection data={seeItLiveData.stages} />
      <LiveSessionCoverageSection data={seeItLiveData.liveSessionCoverage} />
      <CtaBannerSection data={seeItLiveData.conversationCta} />
    </>
  );
}

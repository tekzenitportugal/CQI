import type { Metadata } from 'next';
import { historyData } from '@/data/history';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { MilestonesRowSection } from '@/components/sections/MilestonesRowSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { WhyItExistsSection } from '@/components/sections/WhyItExistsSection';

export const metadata: Metadata = {
  title: 'Our History — CQI Verified CX',
  description:
    'From operator problem to platform: how CQI went from a founder-lived CX problem to a verification layer deployed with enterprise operators worldwide.',
};

export default function HistoryPage() {
  return (
    <>
      <PageHeroBanner data={historyData.hero} />
      <MilestonesRowSection
        eyebrow={historyData.milestones.eyebrow}
        title={historyData.milestones.title}
        titleHighlight={historyData.milestones.titleHighlight}
        items={historyData.milestones.items}
      />
      <WhyItExistsSection
        eyebrow={historyData.whyItExists.eyebrow}
        title={historyData.whyItExists.title}
        cards={historyData.whyItExists.cards}
      />
      <CtaBannerSection data={historyData.cta} />
    </>
  );
}

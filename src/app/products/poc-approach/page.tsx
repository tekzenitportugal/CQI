import type { Metadata } from 'next';
import { pocApproachData } from '@/data/poc-approach';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { PocHeroBanner } from '@/components/sections/PocHeroBanner';
import { PocPhasesSection } from '@/components/sections/PocPhasesSection';
import { PocRequirementsSection } from '@/components/sections/PocRequirementsSection';

export const metadata: Metadata = {
  title: 'PoC Approach — CQI',
  description:
    'Five steps, about four weeks, one decision: how the CQI proof of concept runs from data discovery to a go/no-go on production deployment.',
};

export default function PocApproachPage() {
  return (
    <>
      <PocHeroBanner data={pocApproachData.hero} />
      <PocPhasesSection data={pocApproachData.phases} />
      <PocRequirementsSection data={pocApproachData.requirements} />
      <FaqSection data={pocApproachData.faq} />
      <CtaBannerSection data={pocApproachData.cta} />
    </>
  );
}

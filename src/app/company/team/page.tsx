import type { Metadata } from 'next';
import { teamData } from '@/data/team';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { TeamGroupsSection } from '@/components/sections/TeamGroupsSection';
import { WorkingAtCqiSection } from '@/components/sections/WorkingAtCqiSection';

export const metadata: Metadata = {
  title: 'CQI Team — CQI Verified CX',
  description:
    'The CQI team pairs people who have run contact centres and operations with the data and AI engineers who instrument them.',
};

export default function TeamPage() {
  return (
    <>
      <PageHeroBanner data={teamData.hero} />
      <TeamGroupsSection data={teamData.groups} />
      <WorkingAtCqiSection data={teamData.culture} />
      <CtaBannerSection data={teamData.cta} />
    </>
  );
}

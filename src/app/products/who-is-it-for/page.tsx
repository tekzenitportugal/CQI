import type { Metadata } from 'next';
import { whoIsItForData } from '@/data/who-is-it-for';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { TeamNeedsSection } from '@/components/sections/TeamNeedsSection';
import { WhereCqiBelongsSection } from '@/components/sections/WhereCqiBelongsSection';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Who Is It For? — CQI Verified CX',
  description:
    'One verified CX view for CX leadership, IT and data, operations, quality teams, the front line, and partners — each with a different job from the same signal.',
};

export default function WhoIsItForPage() {
  return (
    <>
      <PageHeroBanner data={whoIsItForData.hero} />
      <div className={styles.body}>
        <TeamNeedsSection data={whoIsItForData.teamNeeds} />
        <WhereCqiBelongsSection data={whoIsItForData.whereBelongs} />
      </div>
      <CtaBannerSection data={whoIsItForData.cta} />
    </>
  );
}

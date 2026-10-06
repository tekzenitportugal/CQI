import type { Metadata } from 'next';
import { howWeProveItData } from '@/data/how-we-prove-it';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { OutcomeScopeSection } from '@/components/sections/OutcomeScopeSection';
import { RiskBandMigrationSection } from '@/components/sections/RiskBandMigrationSection';
import { TaggedInsightsRowSection } from '@/components/sections/TaggedInsightsRowSection';
import { TimeToValueSection } from '@/components/sections/TimeToValueSection';
import { WhereRangesApplySection } from '@/components/sections/WhereRangesApplySection';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'How We Prove It — CQI Verified CX',
  description:
    'CQI ships the measurement apparatus with the platform: baselines from your own data, a control group by default, and verification before attribution.',
};

export default function HowWeProveItPage() {
  return (
    <>
      <div className={styles.hero}>
        <GradientHero data={howWeProveItData.hero} variant="inset" />
      </div>
      <TimeToValueSection
        eyebrow={howWeProveItData.timeToValueEyebrow}
        data={howWeProveItData.threeThings}
      />
      <RiskBandMigrationSection data={howWeProveItData.riskBand} />
      <OutcomeScopeSection data={howWeProveItData.outcomeScope} />
      <WhereRangesApplySection data={howWeProveItData.whereRangesApply} />
      <TaggedInsightsRowSection data={howWeProveItData.kpiMovement} />
      <CtaBannerSection data={howWeProveItData.cta} variant="flushTop" />
    </>
  );
}

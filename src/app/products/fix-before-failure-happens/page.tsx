import type { Metadata } from 'next';
import { fixBeforeFailureData } from '@/data/fix-before-failure';
import { BlindSpotsSection } from '@/components/sections/BlindSpotsSection';
import { BrokenPromiseSection } from '@/components/sections/BrokenPromiseSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FrictionTrustSection } from '@/components/sections/FrictionTrustSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { ResearchStatsSection } from '@/components/sections/ResearchStatsSection';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Fix Before Failure Happens — CQI Verified CX',
  description:
    'CQI prevents friction before it becomes a complaint. Understand blind spots, broken promises, and the cost of waiting for customers to speak up.',
};

export default function FixBeforeFailurePage() {
  return (
    <>
      <GradientHero data={fixBeforeFailureData.hero} variant="inset" />
      <FrictionTrustSection data={fixBeforeFailureData.frictionTrust} />
      <div className={styles.band}>
        <BlindSpotsSection data={fixBeforeFailureData.blindSpots} />
        <BrokenPromiseSection data={fixBeforeFailureData.brokenPromise} />
      </div>
      <ResearchStatsSection data={fixBeforeFailureData.research} />
      <CtaBannerSection data={fixBeforeFailureData.cta} variant="flushTop" />
    </>
  );
}

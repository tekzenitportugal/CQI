import type { PocPhasesData } from '@/data/poc-approach';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TagPill } from '@/components/ui/TagPill';
import styles from './PocPhasesSection.module.scss';

type PocPhasesSectionProps = {
  data: PocPhasesData;
};

// "Preparation | ~1 week": one line on desktop, stacked on mobile (Figma mobile tag).
function PhaseTagLabel({ tag }: { tag: string }) {
  const [name, duration] = tag.split(' | ');
  if (!duration) return <>{tag}</>;
  return (
    <>
      <span className={styles.tagPart}>{name}</span>
      <span className={styles.tagSeparator}>{' | '}</span>
      <span className={styles.tagPart}>{duration}</span>
    </>
  );
}

function StepMarker({ step }: { step: number }) {
  return (
    <div className={styles.marker} aria-hidden="true">
      <div className={styles.markerOuterWrap}>
        <img
          src="/images/shared/industry/step-outer.svg"
          alt=""
          className={styles.markerOuter}
          width={42}
          height={42}
        />
      </div>
      <div className={styles.markerInnerWrap}>
        <img src="/images/shared/industry/step-inner.svg" alt="" width={22} height={22} />
      </div>
      <span className={styles.markerNumber}>{step}</span>
    </div>
  );
}

/**
 * Figma "Group 981": a 3-phase progress header (pill + one-liner over a
 * 3-segment progress rail) directly above a 5-step timeline. The 5-step
 * timeline is the same dashed-marker pattern as IndustryThreeThingsSection,
 * inlined here (rather than reused) so the rail underneath it can be the
 * 3-colour segmented bar instead of that component's plain single line.
 */
export function PocPhasesSection({ data }: PocPhasesSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          title={data.title}
          titleHighlight={data.titleHighlight}
          align="left"
          className={styles.heading}
        />

        <div className={styles.body}>
        <div className={styles.phasesRow}>
          {data.phases.map((phase) => (
            <div className={styles.phaseCol} key={phase.tag}>
              <TagPill label={<PhaseTagLabel tag={phase.tag} />} variant="signals" />
              <p className={styles.phaseDescription}>{phase.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.timeline}>
          <div className={styles.lineTrack} aria-hidden="true" />
          <div className={styles.rail} aria-hidden="true">
            <span className={styles.segment} style={{ background: '#e1e1e1' }} />
            <span className={styles.segment} style={{ background: '#afafaf' }} />
            <span className={styles.segment} style={{ background: '#888888' }} />
          </div>
          <ul className={styles.grid}>
            {data.steps.map((step) => (
              <li key={step.step} className={styles.item}>
                <StepMarker step={step.step} />
                <div className={styles.itemCopy}>
                  <h3 className={styles.itemTitle}>{step.title}</h3>
                  <p className={styles.itemDescription}>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </Container>
    </section>
  );
}

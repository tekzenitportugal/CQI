import type { IndustryThreeThingsData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './IndustryThreeThingsSection.module.scss';

type IndustryThreeThingsSectionProps = {
  data: IndustryThreeThingsData;
  /** 'grouped' when the next section shares this one's background (no mobile bottom gap). */
  variant?: 'default' | 'grouped';
  /** Optional label rendered above the title, inside this section. */
  eyebrow?: string;
  headingAlign?: 'left' | 'center';
  /** Figma mobile variant without the connecting line: fixed-height steps, wider copy. */
  plainMobile?: boolean;
  /** Figma mobile (Solutions · industry pages): no connecting line, 24px marker gap, copy wraps the full column. */
  industryMobile?: boolean;
};

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

export function IndustryThreeThingsSection({
  data,
  variant = 'default',
  eyebrow,
  headingAlign = 'left',
  plainMobile = false,
  industryMobile = false,
}: IndustryThreeThingsSectionProps) {
  return (
    <section
      className={`${styles.section} ${variant === 'grouped' ? styles.grouped : ''} ${plainMobile ? styles.plainMobile : ''} ${industryMobile ? styles.industryMobile : ''} ${data.roomyFirstStep ? styles.roomyFirstStep : ''}`.trim()}
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={data.title}
          titleHighlight={data.titleHighlight}
          align={headingAlign}
          className={`${styles.heading} ${headingAlign === 'center' ? styles.headingCenter : ''}`.trim()}
        />
        <div className={styles.timeline}>
          <div className={styles.lineTrack} aria-hidden="true">
            <img src="/images/solutions/shared/three-things-line.svg" alt="" width={1536} height={1} />
          </div>
          <ul className={styles.grid}>
            {data.items.map((item) => (
              <li key={item.step} className={styles.item}>
                <StepMarker step={item.step} />
                <div className={styles.itemCopy}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import styles from './SeeItLiveStagesSection.module.scss';

export type SeeItLiveStage = {
  stageLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  mobileImage?: string;
  imageWidth: number;
  imageHeight: number;
};

export type SeeItLiveStagesSectionData = {
  stages: SeeItLiveStage[];
  disclaimer: string;
  cta: { label: string; href: string };
};

type SeeItLiveStagesSectionProps = {
  data: SeeItLiveStagesSectionData;
};

/** Figma "5 stages" walkthrough (6079:31287): alternating text/screenshot rows down a centre line. */
export function SeeItLiveStagesSection({ data }: SeeItLiveStagesSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />

          {/* .rows is its own container so .line isn't a sibling — otherwise it shifts every
              row's :nth-child parity by one and inverts the whole alternating layout. */}
          <div className={styles.rows}>
            {data.stages.map((stage, index) => (
              <div key={stage.stageLabel} className={styles.row}>
                <div className={styles.copy}>
                  <p className={styles.stageLabel}>{stage.stageLabel}</p>
                  <div className={styles.heading}>
                    <p className={styles.title}>{stage.title}</p>
                    <p className={styles.subtitle}>{stage.subtitle}</p>
                  </div>
                  <p className={styles.description}>{stage.description}</p>
                </div>

                {index === 0 && <div className={styles.lineCapTop} aria-hidden="true" />}
                <div
                  className={index === 0 ? `${styles.dot} ${styles.dotActive}` : styles.dot}
                  aria-hidden="true"
                />

                <div className={styles.media}>
                  <Image
                    src={stage.image}
                    alt=""
                    width={stage.imageWidth}
                    height={stage.imageHeight}
                    className={`${styles.image} ${stage.mobileImage ? styles.desktopImage : ''}`.trim()}
                    sizes="(max-width: 1023px) 100vw, 466px"
                  />
                  {stage.mobileImage && (
                    <Image
                      src={stage.mobileImage}
                      alt=""
                      width={stage.imageWidth}
                      height={stage.imageHeight}
                      className={`${styles.image} ${styles.mobileImage}`}
                      sizes="100vw"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.disclaimer}>{data.disclaimer}</p>
          <Button label={data.cta.label} href={data.cta.href} variant="primary" />
        </div>
      </Container>
    </section>
  );
}

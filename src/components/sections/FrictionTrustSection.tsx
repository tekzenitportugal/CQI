import type { fixBeforeFailureData } from '@/data/fix-before-failure';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { highlightText } from '@/utils/highlightText';
import styles from './FrictionTrustSection.module.scss';

type FrictionTrustSectionProps = {
  data: typeof fixBeforeFailureData.frictionTrust;
};

export function FrictionTrustSection({ data }: FrictionTrustSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <FpoImage
          src={data.image}
          alt=""
          width={data.imageWidth}
          height={data.imageHeight}
          inset={data.imageInset}
          label
          className={styles.media}
        />

        <div className={styles.content}>
          <div className={styles.intro}>
            <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
            <div className={styles.context}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <p className={styles.description}>{data.description}</p>
            </div>
          </div>

          <div className={styles.sentimentBlock}>
            <ul className={styles.sentimentRow}>
              {data.sentimentStages.map((stage) => (
                <li key={stage.label} className={styles.sentimentItem}>
                  <span className={styles.sentimentRing}>
                    <span className={styles.sentimentCircle} style={{ backgroundColor: stage.color }}>
                      <img src={stage.icon} alt="" width={43} height={43} aria-hidden="true" />
                    </span>
                  </span>
                  <span className={styles.sentimentLabel}>{stage.label}</span>
                </li>
              ))}
            </ul>
            <p className={styles.sentimentNote}>{data.sentimentNote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

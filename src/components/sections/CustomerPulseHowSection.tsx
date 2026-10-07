import type { howWeDoItData } from '@/data/how-we-do-it';
import { Container } from '@/components/ui/Container';
import { FeatureList } from '@/components/ui/FeatureList';
import { FpoImage } from '@/components/ui/FpoImage';
import { highlightText } from '@/utils/highlightText';
import styles from './CustomerPulseHowSection.module.scss';

type CustomerPulseHowSectionProps = {
  data: typeof howWeDoItData.customerPulse;
};

export function CustomerPulseHowSection({ data }: CustomerPulseHowSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.intro}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <h2 className={styles.title}>{data.title}</h2>
            </div>
            <p className={styles.description}>{data.description}</p>
          </div>

          <ul className={styles.sentimentRow} aria-label="Customer lifecycle states">
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
        </div>

        <div className={styles.split}>
          <div className={styles.features}>
            <FeatureList items={data.features} />
            <p className={styles.featuresFootnote}>{highlightText(data.featuresFootnote)}</p>
          </div>

          <FpoImage
            src={data.image}
            alt={data.title}
            width={data.imageWidth}
            height={data.imageHeight}
            overlay={false}
            borderRadius={8}
            className={styles.media}
          />
        </div>
      </Container>
    </section>
  );
}

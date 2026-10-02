import type { RiskBandMigrationData } from '@/data/how-we-prove-it';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { highlightText } from '@/utils/highlightText';
import styles from './RiskBandMigrationSection.module.scss';

type RiskBandMigrationSectionProps = {
  data: RiskBandMigrationData;
};

export function RiskBandMigrationSection({ data }: RiskBandMigrationSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.media}>
            <FpoImage
              src={data.image}
              alt=""
              width={587}
              height={550}
              inset={{ top: 27, left: 10, width: 567, height: 496 }}
              overlay
              label
              fillContainer
            />
          </div>
          <div className={styles.copy}>
            <div className={styles.copyMain}>
              <h2 className={styles.title}>
                {highlightText(data.title, data.titleHighlight, styles.titleHighlight)}
              </h2>
              <div className={styles.intro}>
                <p className={styles.eyebrow}>{data.eyebrow}</p>
                <p className={styles.description}>{data.description}</p>
              </div>
            </div>
            <p className={styles.footnote}>{data.footnote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

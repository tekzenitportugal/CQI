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
              alt={data.title}
              // Frame follows the screenshot's own ratio (2476 × 1484) so the whole
              // dashboard is visible, nothing cropped.
              width={2476}
              height={1484}
              overlay={false}
              objectPosition="left top"
              borderRadius={8}
              className={styles.mediaFrame}
              sizes="(max-width: 1023.98px) 100vw, 587px"
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

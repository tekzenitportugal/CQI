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
              width={587}
              height={341}
              // Figma 6225:38959: image is 100.18% × 119.46%, anchored to the top,
              // so the frame clips the bottom of the dashboard screenshot.
              inset={{ top: 0, left: -0.53, width: 588.06, height: 407.36 }}
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

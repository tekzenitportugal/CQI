import type { homepageData } from '@/data/homepage';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { highlightText } from '@/utils/highlightText';
import styles from './GapSection.module.scss';

type GapSectionProps = {
  data: typeof homepageData.gap;
};

export function GapSection({ data }: GapSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.media}>
          <FpoImage
            src={data.image}
            alt={data.title}
            width={data.imageWidth}
            height={data.imageHeight}
            overlay={false}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            {highlightText(data.title, data.titleHighlight)}
          </h2>
          <div className={styles.gapBlock}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <p className={styles.description}>
              {data.description.split('\n').map((line, i) => (
                <span key={i} className={styles.descriptionLine}>
                  {i > 0 && ' '}
                  {highlightText(line)}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

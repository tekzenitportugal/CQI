import { Container } from '@/components/ui/Container';
import { FeatureList, type FeatureListItem } from '@/components/ui/FeatureList';
import { FpoImage } from '@/components/ui/FpoImage';
import { highlightText } from '@/utils/highlightText';
import styles from './FeatureSplitSection.module.scss';

export type FeatureSplitSectionData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description: string;
  features: FeatureListItem[];
  image: {
    src: string;
    width: number;
    height: number;
    inset: { top: number; left: number; width: number; height: number };
  };
};

type FeatureSplitSectionProps = {
  data: FeatureSplitSectionData;
};

/** Figma "Journey health": copy + feature rows on the left, dashboard screenshot on the right (1194px). */
export function FeatureSplitSection({ data }: FeatureSplitSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
            </div>
            <p className={styles.description}>{data.description}</p>
          </div>
          <FeatureList items={data.features} />
        </div>

        <div className={styles.media}>
          <FpoImage
            src={data.image.src}
            alt={data.title}
            width={data.image.width}
            height={data.image.height}
            inset={data.image.inset}
            overlay={false}
            borderRadius={8}
            className={styles.mediaFrame}
            sizes="(max-width: 992px) 100vw, 587px"
          />
        </div>
      </Container>
    </section>
  );
}

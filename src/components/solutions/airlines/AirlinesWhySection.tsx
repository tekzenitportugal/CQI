import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import type { airlinesPageData } from '@/data/solutions/airlines-page';
import styles from './AirlinesWhySection.module.scss';

type AirlinesWhySectionProps = {
  data: typeof airlinesPageData.why;
};

/** "The flight is tracked. The feeling is missed." — dashboard left, copy right. */
export function AirlinesWhySection({ data }: AirlinesWhySectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.media}>
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              unoptimized
              className={styles.image}
              sizes="(min-width: 1024px) 587px, 100vw"
            />
          </div>
          <div className={styles.copy}>
            <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
            <div className={styles.body}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <div className={styles.paragraphs}>
                {data.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

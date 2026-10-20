import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import type { airlinesPageData } from '@/data/solutions/airlines-page';
import styles from './AirlinesStatSection.module.scss';

type AirlinesStatSectionProps = {
  data: typeof airlinesPageData.stat;
};

/** "They don't complain. They just stop choosing you." — headline over a photo + 15% stat card (Figma Group 906). */
export function AirlinesStatSection({ data }: AirlinesStatSectionProps) {
  return (
    <section id={data.id} className={styles.section}>
      <Container>
        <h2 className={styles.title}>
          {data.titleLead}
          <br />
          {data.titleStart}
          <span className="text-highlight">
            {data.titleHighlightA}
            <br className={styles.mobileBreak} /> {data.titleHighlightB}
          </span>
          {data.titleEnd}
        </h2>
        <div className={styles.card}>
          <div className={styles.photo}>
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              unoptimized
              className={styles.photoImage}
              sizes="(min-width: 1024px) 772px, 100vw"
            />
          </div>
          <div className={styles.copy}>
            <div className={styles.stat}>
              <p className={styles.label}>{data.label}</p>
              <div className={styles.statBody}>
                <p className={styles.value}>
                  {data.value}
                  <span className={styles.unit}>{data.unit}</span>
                </p>
                <p className={styles.description}>{data.description}</p>
              </div>
            </div>
            <p className={styles.source}>{data.source}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

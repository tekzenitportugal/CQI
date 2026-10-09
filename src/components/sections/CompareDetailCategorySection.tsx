import type { CSSProperties } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './CompareDetailCategorySection.module.scss';

export type CompareDetailCategorySectionData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  /** Figma heading box width (px). */
  titleWidth?: number;
  cards: {
    tone: 'strength' | 'limit' | 'addition';
    tag: string;
    title: string;
    description: string;
  }[];
};

type CompareDetailCategorySectionProps = {
  data: CompareDetailCategorySectionData;
};

/** Figma "The category" — strength / limit / addition cards on the compare detail pages (6469:32135). */
export function CompareDetailCategorySection({ data }: CompareDetailCategorySectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          titleHighlight={data.titleHighlight}
          className={styles.heading}
          style={data.titleWidth ? ({ '--section-heading-title-max-width': `${data.titleWidth}px` } as CSSProperties) : undefined}
        />

        <ul className={styles.cards}>
          {data.cards.map((card) => (
            <li key={card.tone} className={`${styles.item} ${styles[card.tone]}`}>
              <span className={styles.tag}>{card.tag}</span>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

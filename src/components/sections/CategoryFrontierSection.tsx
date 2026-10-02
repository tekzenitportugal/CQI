import type { CategoryFrontierData } from '@/data/about';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './CategoryFrontierSection.module.scss';

type CategoryFrontierSectionProps = {
  data: CategoryFrontierData;
};

/**
 * Figma "Frame 1000003506": full-bleed soft-blue band with a heading row (title left,
 * description right), a row of 4 dark cards (the last — CQI — solid navy), then a trailing
 * note + link block underneath the cards.
 */
export function CategoryFrontierSection({ data }: CategoryFrontierSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.body}>
          <div className={styles.cards}>
            {data.cards.map((card) => (
              <article
                key={card.title}
                className={`${styles.card} ${card.highlight ? styles.cardHighlight : ''}`.trim()}
              >
                <span className={styles.tag}>{card.tag}</span>
                <div className={styles.cardCopy}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.footer}>
            <p className={styles.note}>{data.note}</p>
            <Button label={data.link.label} href={data.link.href} variant="text" showArrow />
          </div>
        </div>
      </Container>
    </section>
  );
}

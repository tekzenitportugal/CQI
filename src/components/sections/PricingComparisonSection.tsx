import type { PricingComparisonData } from '@/data/pricing';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { PricingComparisonTable } from '@/components/ui/PricingComparisonTable';
import { highlightText } from '@/utils/highlightText';
import styles from './PricingComparisonSection.module.scss';

type PricingComparisonSectionProps = {
  data: PricingComparisonData;
};

/** Figma "Total cost of ownership": split heading, then the comparison table and its footnote/link. */
export function PricingComparisonSection({ data }: PricingComparisonSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.tableWrap}>
          <PricingComparisonTable headers={data.headers} rows={data.rows} />

          <div className={styles.footer}>
            <p className={styles.footnote}>{data.footnote}</p>
            <Button label={data.link.label} href={data.link.href} variant="text" showArrow className={styles.link} />
          </div>
        </div>
      </Container>
    </section>
  );
}

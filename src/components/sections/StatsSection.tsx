import type { homepageData } from '@/data/homepage';
import { Container } from '@/components/ui/Container';
import { StatCard } from '@/components/ui/StatCard';
import { highlightText } from '@/utils/highlightText';
import styles from './StatsSection.module.scss';

type StatsSectionProps = {
  data: typeof homepageData.stats;
};

export function StatsSection({ data }: StatsSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>
          {highlightText(data.title, data.titleHighlight)}
        </h2>

        <div className={styles.grid}>
          {data.items.map((item) => (
            <StatCard key={item.value} value={item.value} label={item.label} />
          ))}
        </div>

        <p className={styles.footnote}>{highlightText(data.footnote)}</p>
      </Container>
    </section>
  );
}

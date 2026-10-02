import type { fixBeforeFailureData } from '@/data/fix-before-failure';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCard } from '@/components/ui/StatCard';
import styles from './ResearchStatsSection.module.scss';

type ResearchStatsSectionProps = {
  data: typeof fixBeforeFailureData.research;
};

export function ResearchStatsSection({ data }: ResearchStatsSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          titleHighlight={data.titleHighlight}
          className={styles.heading}
        />

        <div className={styles.grid}>
          {data.items.map((item) => (
            <StatCard
              key={item.value}
              value={item.value}
              label={item.label}
              source={item.source}
              layout="split"
            />
          ))}
        </div>

        <p className={styles.footnote}>{data.footnote}</p>
      </Container>
    </section>
  );
}

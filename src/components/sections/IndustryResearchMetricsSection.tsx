import type { IndustryResearchMetricsData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { ResearchMetricCard } from '@/components/ui/ResearchMetricCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './IndustryResearchMetricsSection.module.scss';

type IndustryResearchMetricsSectionProps = {
  data: IndustryResearchMetricsData;
  variant?: 'default' | 'solutions';
};

export function IndustryResearchMetricsSection({
  data,
  variant = 'default',
}: IndustryResearchMetricsSectionProps) {
  return (
    <section
      className={`${styles.section} ${variant === 'solutions' ? styles.solutions : ''}`.trim()}
    >
      <Container>
        <p className={styles.eyebrow}>{data.eyebrow}</p>
        <SectionHeading
          title={data.title}
          titleHighlight={data.titleHighlight}
          align="left"
          className={styles.heading}
        />
        <div className={styles.grid}>
          {data.metrics.map((metric) => (
            <ResearchMetricCard key={metric.label} data={metric} />
          ))}
        </div>
        <p className={styles.footnote}>{data.footnote}</p>
      </Container>
    </section>
  );
}

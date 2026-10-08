import type { IndustryOutcomeRangeData } from '@/types/content';
import { GhostLink } from '@/components/ui/GhostLink';
import { Container } from '@/components/ui/Container';
import { PercentMetricCard } from '@/components/ui/PercentMetricCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './IndustryOutcomeRangeSection.module.scss';

type IndustryOutcomeRangeSectionProps = {
  data: IndustryOutcomeRangeData;
  variant?: 'default' | 'solutions';
};

export function IndustryOutcomeRangeSection({
  data,
  variant = 'default',
}: IndustryOutcomeRangeSectionProps) {
  return (
    <section
      className={`${styles.section} ${variant === 'solutions' ? styles.solutions : ''}`.trim()}
    >
      <Container>
        <div className={styles.header}>
          <SectionHeading
            title={data.title}
            titleHighlight={data.titleHighlight}
            align="left"
            className={styles.sectionHeading}
          />
          {data.cta && <GhostLink label={data.cta.label} href={data.cta.href} />}
        </div>

        <div className={styles.body}>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <div
            className={`${styles.metrics} ${
              data.metricsColumnCount === 3 ? styles.metricsCols3 : ''
            }`.trim()}
          >
            {data.metrics.map((metric) => (
              <PercentMetricCard key={metric.label} data={metric} />
            ))}
          </div>
          <p className={styles.footnote}>{data.footnote}</p>
        </div>
      </Container>
    </section>
  );
}

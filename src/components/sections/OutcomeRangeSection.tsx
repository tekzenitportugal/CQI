import type { homepageData } from '@/data/homepage';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './OutcomeRangeSection.module.scss';

type OutcomeRangeSectionProps = {
  data: typeof homepageData.outcomeRange;
};

export function OutcomeRangeSection({ data }: OutcomeRangeSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            title={data.title}
            titleHighlight={data.titleHighlight}
            align="left"
            className={styles.sectionHeading}
          />
          <div className={styles.actions}>
            {data.ctas.map((cta) => (
              <Button
                key={cta.label}
                label={cta.label}
                href={cta.href}
                variant={cta.variant}
              />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.media}>
            <FpoImage
              src={data.image}
              alt=""
              width={773}
              height={400}
              overlay={0.15}
              objectPosition="center top"
              fillContainer
            />
          </div>
          <div className={styles.content}>
            <div className={styles.metricsBlock}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <div className={styles.metrics}>
                {data.metrics.map((metric) => (
                  <article key={metric.label} className={styles.metric}>
                    <p className={styles.value}>
                      <span className={styles.valueNumber}>{metric.value}</span>
                      {metric.suffix && (
                        <span className={styles.valueSuffix}>{metric.suffix}</span>
                      )}
                    </p>
                    <p className={styles.label}>{metric.label}</p>
                  </article>
                ))}
              </div>
            </div>
            <p className={styles.footnote}>{data.footnote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

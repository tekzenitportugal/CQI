import type { OutcomeScopeData } from '@/data/how-we-prove-it';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { highlightText } from '@/utils/highlightText';
import styles from './OutcomeScopeSection.module.scss';

type OutcomeScopeSectionProps = {
  data: OutcomeScopeData;
};

export function OutcomeScopeSection({ data }: OutcomeScopeSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {highlightText(data.title, data.titleHighlight, styles.titleHighlight)}
          </h2>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.media}>
            <FpoImage
              src={data.image}
              alt=""
              width={773}
              height={400}
              overlay
              label
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

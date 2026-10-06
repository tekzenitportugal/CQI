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
              // Figma 6225:34119: portrait is 289.84% of the frame and shifted up
              // 72.42%, so the frame shows the middle of the photo.
              inset={{ top: -289.68, left: 0, width: 773, height: 1159.36 }}
              overlay={false}
              objectPosition="left top"
              fillContainer
              sizes="(max-width: 1023.98px) 100vw, 773px"
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
                    <p className={styles.label}>
                      {/* Figma mobile breaks the label after its first word. */}
                      <span className={styles.labelHead}>{metric.label.split(' ')[0]}</span>{' '}
                      <span>{metric.label.split(' ').slice(1).join(' ')}</span>
                    </p>
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

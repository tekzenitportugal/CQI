import type { howWeDoItData } from '@/data/how-we-do-it';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './RiskEngineSection.module.scss';

type RiskEngineSectionProps = {
  data: typeof howWeDoItData.riskEngine;
};

export function RiskEngineSection({ data }: RiskEngineSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
        <div className={styles.body}>
          <p className={styles.paragraph}>{data.paragraph}</p>
          <p className={styles.footnote}>{data.footnote}</p>
        </div>
      </Container>
    </section>
  );
}

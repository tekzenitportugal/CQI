import type { WhereRangesApplyData } from '@/data/how-we-prove-it';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { RuledRowsList } from '@/components/ui/RuledRowsList';
import styles from './WhereRangesApplySection.module.scss';

type WhereRangesApplySectionProps = {
  data: WhereRangesApplyData;
};

export function WhereRangesApplySection({ data }: WhereRangesApplySectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          <Button label={data.cta.label} href={data.cta.href} variant={data.cta.variant} />
        </div>
        <RuledRowsList rows={data.rows} className={styles.table} />
      </Container>
    </section>
  );
}

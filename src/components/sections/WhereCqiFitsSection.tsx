import type { WhereCqiFitsData } from '@/types/content';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './WhereCqiFitsSection.module.scss';

type WhereCqiFitsSectionProps = {
  data: WhereCqiFitsData;
  /** Industry solution pages — Figma 292px band padding below plug-in block. */
  variant?: 'default' | 'solutions';
};

export function WhereCqiFitsSection({ data, variant = 'default' }: WhereCqiFitsSectionProps) {
  return (
    <section
      className={`${styles.section} ${variant === 'solutions' ? styles.solutions : ''}`.trim()}
    >
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          align="center"
          className={styles.heading}
        />
        {data.ctas && data.ctas.length > 0 && (
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
        )}
      </Container>
    </section>
  );
}

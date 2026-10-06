import type { PricingHeroData } from '@/data/pricing';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroCopy } from '@/components/ui/HeroCopy';
import styles from './PricingHeroBanner.module.scss';

type PricingHeroBannerProps = {
  data: PricingHeroData;
};

/**
 * Gradient-only hero box (Figma has no photo here) with two CTAs under the copy —
 * mirrors the PocHeroBanner pattern (a dedicated local variant) rather than editing
 * the shared PageHeroBanner.
 */
export function PricingHeroBanner({ data }: PricingHeroBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.heroBox} aria-hidden="true">
        <div className={styles.gradient} />
      </div>

      <Container className={styles.contentWrap}>
        <div className={styles.content}>
          <HeroCopy
            title={data.title}
            titleHighlight={data.titleHighlight}
            eyebrow={data.eyebrow}
            description={data.description}
            titleMaxWidth={data.titleMaxWidth}
          />
          <div className={styles.actions}>
            {data.buttons.map((button) => (
              <Button
                key={button.label}
                label={button.label}
                href={button.href}
                variant={button.variant ?? 'primary'}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

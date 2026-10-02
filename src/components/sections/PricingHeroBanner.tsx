import Image from 'next/image';
import type { PricingHeroData } from '@/data/pricing';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroCopy } from '@/components/ui/HeroCopy';
import styles from './PricingHeroBanner.module.scss';

type PricingHeroBannerProps = {
  data: PricingHeroData;
};

/**
 * Same "Rectangle 85" photo-hero treatment as PageHeroBanner, but this page's hero has
 * two CTAs under the copy instead of PageHeroBanner's zero — mirrors the PocHeroBanner
 * pattern (a dedicated local variant) rather than editing the shared PageHeroBanner.
 */
export function PricingHeroBanner({ data }: PricingHeroBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.heroBox} aria-hidden="true">
        <div className={styles.imageWrap}>
          <Image src={data.image} alt="" fill priority className={styles.heroImage} sizes="100vw" />
        </div>
        <div className={styles.overlay} />
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

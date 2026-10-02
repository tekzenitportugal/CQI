import type { PocHeroData } from '@/data/poc-approach';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroCopy } from '@/components/ui/HeroCopy';
import styles from './PocHeroBanner.module.scss';

type PocHeroBannerProps = {
  data: PocHeroData;
};

/**
 * Same gradient-hero treatment as GradientHero's "inset" variant (Figma
 * Rectangle 154 is a plain gradient, no photo), but this page's hero has two
 * CTAs stacked under the copy instead of GradientHero's single optional one.
 * GradientHero/HeroCopyData don't support a button row, and both are shared
 * with other pages, so this is a dedicated local variant rather than an edit
 * to the shared component.
 */
export function PocHeroBanner({ data }: PocHeroBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.heroBox} aria-hidden="true" />

      <Container className={styles.contentWrap}>
        <div className={styles.content}>
          <HeroCopy
            title={data.title}
            titleHighlight={data.titleHighlight}
            eyebrow={data.eyebrow}
            description={data.description}
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

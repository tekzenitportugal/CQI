import type { CSSProperties } from 'react';
import type { implementationData } from '@/data/implementation';
import { Container } from '@/components/ui/Container';
import { GhostLink } from '@/components/ui/GhostLink';
import { TagPill } from '@/components/ui/TagPill';
import styles from './CqiEcosystemSection.module.scss';

type CqiEcosystemSectionProps = {
  data: typeof implementationData.ecosystem;
};

const RINGS = [
  '/images/product/implementation/ring-1.svg',
  '/images/product/implementation/ring-2.svg',
  '/images/product/implementation/ring-3.svg',
  '/images/product/implementation/ring-4.svg',
  '/images/product/implementation/ring-5.svg',
];

/**
 * Figma "Group 855": CQI logo centred in 5 concentric dashed rings, with connector
 * tags orbiting the rings. The paragraph + CTA sit to the right of the circle (not
 * inside it, unlike WhereCqiBelongsSection's version of this pattern).
 */
export function CqiEcosystemSection({ data }: CqiEcosystemSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.stage}>
            {RINGS.map((ring, index) => (
              <img key={ring} src={ring} alt="" className={styles.ring} data-ring={index} aria-hidden />
            ))}

            <div className={styles.logo}>
              <img src="/images/product/implementation/cqi-logo.svg" alt="CQI" width={84} height={40} />
            </div>

            <ul className={styles.tags}>
              {data.tags.map((tag) => (
                <li
                  key={tag.label}
                  className={styles.tagItem}
                  style={
                    {
                      '--top': tag.top,
                      '--left': tag.left,
                      ...(tag.mobile && {
                        '--m-top': tag.mobile.top,
                        '--m-left': tag.mobile.left,
                        ...(tag.mobile.gap && { '--m-gap': tag.mobile.gap }),
                      }),
                    } as CSSProperties
                  }
                >
                  <span className={styles.dot} aria-hidden="true" />
                  <TagPill label={tag.label} variant="signals" />
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.copy}>
            <p className={styles.paragraph}>{data.paragraph}</p>
            <GhostLink label={data.cta.label} href={data.cta.href} />
          </div>
        </div>
      </Container>
    </section>
  );
}

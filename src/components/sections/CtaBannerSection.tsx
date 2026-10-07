import type { CSSProperties } from 'react';
import type { ButtonVariant, CtaBannerData } from '@/types/content';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { highlightText } from '@/utils/highlightText';
import styles from './CtaBannerSection.module.scss';

type CtaBannerSectionProps = {
  data: CtaBannerData;
  variant?: 'default' | 'solutions' | 'flushTop';
};

/** The banner sits on blue, so primary/secondary render as the light button pair. */
const BANNER_VARIANT: Partial<Record<ButtonVariant, ButtonVariant>> = {
  primary: 'light',
  secondary: 'lightOutline',
};

export function CtaBannerSection({ data, variant = 'default' }: CtaBannerSectionProps) {
  return (
    <section
      className={`${styles.section} ${variant === 'solutions' ? styles.solutions : ''} ${variant === 'flushTop' ? styles.flushTop : ''}`.trim()}
    >
      <Container>
        <div className={styles.banner}>
          <div
            className={styles.media}
            style={data.imageMobileZoom ? ({ '--cta-mobile-zoom': data.imageMobileZoom } as CSSProperties) : undefined}
          >
            <FpoImage
              className={data.mobileImage ? styles.desktopMedia : undefined}
              src={data.image}
              alt={data.title}
              width={data.imageWidth ?? 579}
              height={data.imageHeight ?? 289}
              overlay={false}
              objectPosition={data.imagePosition}
              inset={data.imageInset}
              sizes="(max-width: 1023px) 100vw, 579px"
              fillContainer
            />
            {data.mobileImage && (
              <FpoImage
                className={styles.mobileMedia}
                src={data.mobileImage}
                alt={data.title}
                width={716}
                height={440}
                overlay={false}
                sizes="100vw"
                fillContainer
              />
            )}
          </div>

          <div className={styles.content}>
            <h2 className={`${styles.title} ${data.mobileInlineTitle ? styles.titleInlineMobile : ''}`.trim()}>
              {highlightText(data.title, data.titleHighlight, styles.titleHighlight)}
            </h2>

            <div className={styles.footer}>
              <p className={styles.description}>{highlightText(data.description)}</p>
              <div className={styles.actions}>
                {data.buttons.map((button) => (
                  <Button
                    key={button.label}
                    label={button.label}
                    href={button.href}
                    variant={BANNER_VARIANT[button.variant ?? 'primary'] ?? button.variant}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

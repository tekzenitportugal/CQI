import type { ButtonVariant, CtaBannerData } from '@/types/content';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { highlightText } from '@/utils/highlightText';
import styles from './CtaBannerSection.module.scss';

type CtaBannerSectionProps = {
  data: CtaBannerData;
  variant?: 'default' | 'solutions';
};

/** The banner sits on blue, so primary/secondary render as the light button pair. */
const BANNER_VARIANT: Partial<Record<ButtonVariant, ButtonVariant>> = {
  primary: 'light',
  secondary: 'lightOutline',
};

export function CtaBannerSection({ data, variant = 'default' }: CtaBannerSectionProps) {
  return (
    <section
      className={`${styles.section} ${variant === 'solutions' ? styles.solutions : ''}`.trim()}
    >
      <Container>
        <div className={styles.banner}>
          <div className={styles.media}>
            <FpoImage
              src={data.image}
              alt=""
              width={data.imageWidth ?? 579}
              height={data.imageHeight ?? 289}
              overlay={false}
              objectPosition={data.imagePosition}
              inset={data.imageInset}
              sizes="(max-width: 992px) 100vw, 579px"
              fillContainer
            />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>
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

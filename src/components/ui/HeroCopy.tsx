import type { CSSProperties } from 'react';
import type { CtaLink } from '@/types/content';
import { Button } from '@/components/ui/Button';
import { highlightText } from '@/utils/highlightText';
import styles from './HeroCopy.module.scss';

export type HeroCopyData = {
  title: string;
  titleHighlight?: string[];
  eyebrow: string;
  description: string;
  /** Figma text box widths when they differ from the 587px default. */
  titleMaxWidth?: number;
  descriptionMaxWidth?: number;
  /** Figma hero column width (e.g. 708px on industry pages). */
  copyMaxWidth?: number;
  cta?: CtaLink;
  /** Figma mobile overrides (px): title → intro gap and eyebrow → description gap. */
  mobileTextGap?: number;
  mobileIntroGap?: number;
  /** Mobile only: the highlighted title phrase starts its own line. */
  mobileHighlightBlock?: boolean;
  /** Mobile only: ignore the desktop line breaks in the title and let it wrap naturally. */
  mobileInlineTitle?: boolean;
  /** Figma mobile hero box height (px) when it differs from the 864px default (inset variant). */
  mobileMinHeight?: number;
  /** Figma mobile top padding (px) above the vertically centred copy (inset variant, no image). */
  mobilePaddingTop?: number;
};

type HeroCopyProps = HeroCopyData & {
  className?: string;
};

/** Figma hero copy: 48px title → 48px → eyebrow + 24px intro → 60px → optional outline button. */
export function HeroCopy({
  title,
  titleHighlight,
  eyebrow,
  description,
  titleMaxWidth,
  descriptionMaxWidth,
  copyMaxWidth,
  cta,
  mobileTextGap,
  mobileIntroGap,
  mobileHighlightBlock,
  mobileInlineTitle,
  className,
}: HeroCopyProps) {
  const style = {
    ...(titleMaxWidth ? { '--hero-title-width': `${titleMaxWidth}px` } : {}),
    ...(descriptionMaxWidth ? { '--hero-description-width': `${descriptionMaxWidth}px` } : {}),
    ...(copyMaxWidth ? { '--hero-copy-max-width': `${copyMaxWidth}px` } : {}),
    ...(mobileTextGap ? { '--hero-mobile-text-gap': `${mobileTextGap}px` } : {}),
    ...(mobileIntroGap ? { '--hero-mobile-intro-gap': `${mobileIntroGap}px` } : {}),
  } as CSSProperties;

  return (
    <div className={[styles.copy, className].filter(Boolean).join(' ')} style={style}>
      <div className={styles.text}>
        <h1
          className={[
            styles.title,
            mobileHighlightBlock && styles.titleBlockHighlight,
            mobileInlineTitle && styles.titleInlineMobile,
          ]
            .filter(Boolean)
            .join(' ')}
        >{highlightText(title, titleHighlight)}</h1>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <p className={styles.description}>{highlightText(description)}</p>
        </div>
      </div>
      {cta && <Button label={cta.label} href={cta.href} variant={cta.variant ?? 'secondary'} />}
    </div>
  );
}

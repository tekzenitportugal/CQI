import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { CtaLink } from '@/types/content';
import { Button } from '@/components/ui/Button';
import { TagPill } from '@/components/ui/TagPill';
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
  /** Mobile only: caps the title width (px) and lets no-break phrases wrap at their hyphens (Figma title breaks). */
  mobileTitleWidth?: number;
  /** Mobile only: ignore the desktop line breaks in the title and let it wrap naturally. */
  mobileInlineTitle?: boolean;
  /** Mobile only: ignore the desktop line breaks in the description and let it wrap naturally. */
  mobileInlineDescription?: boolean;
  /** White pills under the intro (e.g. example platforms on the compare detail pages). */
  tags?: string[];
  /** "← label" link above the title (article detail pages). */
  backLink?: { label: string; href: string };
  /** Small meta line instead of the big intro (article detail pages: date / place). */
  descriptionMeta?: boolean;
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
  mobileTitleWidth,
  mobileInlineTitle,
  mobileInlineDescription,
  tags,
  backLink,
  descriptionMeta,
  className,
}: HeroCopyProps) {
  const style = {
    ...(titleMaxWidth ? { '--hero-title-width': `${titleMaxWidth}px` } : {}),
    ...(descriptionMaxWidth ? { '--hero-description-width': `${descriptionMaxWidth}px` } : {}),
    ...(copyMaxWidth ? { '--hero-copy-max-width': `${copyMaxWidth}px` } : {}),
    ...(mobileTextGap ? { '--hero-mobile-text-gap': `${mobileTextGap}px` } : {}),
    ...(mobileIntroGap ? { '--hero-mobile-intro-gap': `${mobileIntroGap}px` } : {}),
    ...(mobileTitleWidth ? { '--hero-mobile-title-width': `${mobileTitleWidth}px` } : {}),
  } as CSSProperties;
  // A blank line (`\n\n`) splits off a closing note: inline on desktop (same text, same breaks), its own smaller block on mobile.
  const paragraphBreak = description.indexOf('\n\n');
  const descriptionLead = paragraphBreak === -1 ? description : description.slice(0, paragraphBreak + 2);
  const descriptionNote = paragraphBreak === -1 ? '' : description.slice(paragraphBreak + 2);

  return (
    <div className={[styles.copy, className].filter(Boolean).join(' ')} style={style}>
      <div className={styles.text}>
        {backLink && (
          <Link href={backLink.href} className={styles.backLink}>
            <img
              src="/images/shared/common/arrow-right-blue.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
              className={styles.backArrow}
            />
            {backLink.label}
          </Link>
        )}
        <h1
          className={[
            styles.title,
            mobileHighlightBlock && styles.titleBlockHighlight,
            mobileInlineTitle && styles.titleInlineMobile,
            mobileTitleWidth && styles.titleMobileWidth,
          ]
            .filter(Boolean)
            .join(' ')}
        >{highlightText(title, titleHighlight)}</h1>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <p
            className={[
              styles.description,
              mobileInlineDescription && styles.descriptionInlineMobile,
              descriptionMeta && styles.descriptionMeta,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {highlightText(descriptionLead)}
            {descriptionNote && <span className={styles.descriptionNote}>{highlightText(descriptionNote)}</span>}
          </p>
        </div>
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <TagPill key={tag} label={tag} variant="white" />
            ))}
          </div>
        )}
      </div>
      {cta && <Button label={cta.label} href={cta.href} variant={cta.variant ?? 'secondary'} />}
    </div>
  );
}

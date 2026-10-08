import type { CSSProperties } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './CompareCategoriesSection.module.scss';

export type CompareCategoryCard = {
  /** `\n` breaks the two-line uppercase heading, as in Figma. */
  title: string;
  /** `\n` sets the three-line break, as in Figma. */
  description: string;
  /** Figma mobile copy, where it differs from the desktop frame (line break / wording). */
  mobileTitle?: string;
  mobileDescription?: string;
  tags: string[];
  /** Desktop width (px) of the tag row, from Figma — controls where the tags wrap. */
  tagsWidth?: number;
  href: string;
};

export type CompareCategoriesSectionData = {
  title: string;
  titleHighlight?: string[];
  intro: string;
  disclaimer: string;
  items: CompareCategoryCard[];
};

type CompareCategoriesSectionProps = {
  data: CompareCategoriesSectionData;
};

/** Figma "Four categories, four different jobs" (6079:38468). */
export function CompareCategoriesSection({ data }: CompareCategoriesSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <div className={styles.background} aria-hidden="true">
          <div className={styles.ellipse1} />
          <div className={styles.ellipse2} />
          <div className={styles.ellipse3} />
          <div className={styles.ellipse4} />
        </div>
        <div className={styles.mobileBackground} aria-hidden="true">
          <img className={styles.mEllipse1} src="/images/resources/compare-cqi/ellipse-1.webp" alt="" />
          <img className={styles.mEllipse2} src="/images/resources/compare-cqi/ellipse-2-mobile.webp" alt="" />
          <img className={styles.mEllipse3} src="/images/resources/compare-cqi/ellipse-3.webp" alt="" />
          <img className={styles.mEllipse4} src="/images/resources/compare-cqi/ellipse-4.webp" alt="" />
        </div>

        <div className={styles.heading}>
          <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
          <div className={styles.intro}>
            <p className={styles.introText}>{data.intro}</p>
            <p className={styles.disclaimer}>{data.disclaimer}</p>
          </div>
        </div>

        <ul className={styles.grid}>
          {data.items.map((category) => (
            <li key={category.title} className={styles.card}>
              <div className={styles.copy}>
                <div className={styles.textGroup}>
                  <p
                    className={`${styles.cardTitle} ${category.mobileTitle ? styles.desktopOnly : ''}`.trim()}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {category.title}
                  </p>
                  {category.mobileTitle && (
                    <p className={`${styles.cardTitle} ${styles.mobileOnly}`} style={{ whiteSpace: 'pre-line' }}>
                      {category.mobileTitle}
                    </p>
                  )}
                  <p
                    className={`${styles.cardDescription} ${category.mobileDescription ? styles.desktopOnly : ''}`.trim()}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {category.description}
                  </p>
                  {category.mobileDescription && (
                    <p className={`${styles.cardDescription} ${styles.mobileOnly}`}>{category.mobileDescription}</p>
                  )}
                </div>
                <div
                  className={styles.tags}
                  style={category.tagsWidth ? ({ '--tags-width': `${category.tagsWidth}px` } as CSSProperties) : undefined}
                >
                  {category.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={category.href} className={styles.link}>
                Read the comparison
                <img src="/images/shared/common/arrow-right-blue.svg" alt="" width={16} height={16} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

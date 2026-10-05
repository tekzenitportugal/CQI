import type { CSSProperties } from 'react';
import { highlightText } from '@/utils/highlightText';
import styles from './SectionHeading.module.scss';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleHighlight?: string[];
  description?: string;
  align?: 'left' | 'center';
  titleAs?: 'h2' | 'h3' | 'h4';
  className?: string;
  style?: CSSProperties;
};

export function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'left',
  titleAs: TitleTag = 'h2',
  className = '',
  style,
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]} ${className}`.trim()} style={style}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <TitleTag className={styles.title}>{highlightText(title, titleHighlight)}</TitleTag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

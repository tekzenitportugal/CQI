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
};

export function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'left',
  titleAs: TitleTag = 'h2',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]} ${className}`.trim()}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <TitleTag className={styles.title}>{highlightText(title, titleHighlight)}</TitleTag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

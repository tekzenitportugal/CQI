import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import styles from './DemoCoverageSection.module.scss';

export type DemoOption = {
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  highlight?: boolean;
};

export type DemoCoverageSectionData = {
  coverageTitle: string;
  coverageItems: string[];
  options: DemoOption[];
};

type DemoCoverageSectionProps = {
  data: DemoCoverageSectionData;
};

/** Figma "What we will cover" + option cards (6079:31759–31784). */
export function DemoCoverageSection({ data }: DemoCoverageSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.stack}>
        <div className={styles.coverageCard}>
          <p className={styles.coverageTitle}>{data.coverageTitle}</p>
          <ul className={styles.coverageList}>
            {data.coverageItems.map((item) => (
              <li key={item} className={styles.coverageItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.options}>
          {data.options.map((option) => (
            <div
              key={option.title}
              className={`${styles.option} ${option.highlight ? styles.optionHighlight : ''}`.trim()}
            >
              <div className={styles.optionCopy}>
                <p className={styles.optionTitle}>{option.title}</p>
                <p className={styles.optionDescription}>{option.description}</p>
              </div>
              <Link href={option.linkHref} className={styles.optionLink}>
                {option.linkLabel}
                <img src="/images/shared/common/arrow-right-blue.svg" alt="" width={16} height={16} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

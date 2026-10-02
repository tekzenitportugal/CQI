import { ArticleCard, type ArticleCardData } from '@/components/ui/ArticleCard';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './PublishedPiecesSection.module.scss';

export type PublishedPiecesSectionData = {
  title: string;
  titleHighlight?: string[];
  items: ArticleCardData[];
};

type PublishedPiecesSectionProps = {
  data: PublishedPiecesSectionData;
};

export function PublishedPiecesSection({ data }: PublishedPiecesSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={data.title} titleHighlight={data.titleHighlight} align="left" />

        <ul className={styles.grid}>
          {data.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <ArticleCard {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

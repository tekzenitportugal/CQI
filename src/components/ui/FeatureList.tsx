import styles from './FeatureList.module.scss';

export type FeatureListItem = {
  title: string;
  description: string;
};

type FeatureListProps = {
  items: FeatureListItem[];
  className?: string;
};

/** Figma feature rows: Poppins 20 uppercase title, 10px, 17.5 Medium description; 40px between rows. */
export function FeatureList({ items, className }: FeatureListProps) {
  return (
    <dl className={[styles.list, className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <div key={item.title} className={styles.item}>
          <dt className={styles.title}>{item.title}</dt>
          <dd className={styles.description}>{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}

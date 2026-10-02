import styles from './CompactDashedList.module.scss';

type CompactDashedListProps = {
  items: string[];
  className?: string;
};

/** Figma WHO IS IT FOR role bullets — 16px vertical padding, dashed #668FFF dividers. */
export function CompactDashedList({ items, className }: CompactDashedListProps) {
  return (
    <ul className={[styles.list, className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

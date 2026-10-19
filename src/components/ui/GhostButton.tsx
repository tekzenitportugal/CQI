import styles from './GhostLink.module.scss';

type GhostButtonProps = {
  label: string;
  onClick: () => void;
  tone?: 'blue' | 'dark';
  className?: string;
};

/** Ghost button for in-page actions (no navigation): same look as GhostLink, rendered as a <button>. */
export function GhostButton({ label, onClick, tone = 'blue', className = '' }: GhostButtonProps) {
  const icon = tone === 'blue' ? 'arrow-right-blue.svg' : 'arrow-explore-dark.svg';

  return (
    <button
      type="button"
      onClick={onClick}
      className={[styles.link, styles.button, styles[tone], className].filter(Boolean).join(' ')}
    >
      {label}
      <img src={`/images/shared/common/${icon}`} alt="" width={16} height={16} aria-hidden="true" />
    </button>
  );
}

import Link from 'next/link';
import styles from './GhostLink.module.scss';

type GhostLinkProps = {
  label: string;
  href: string;
  /** `blue` on white backgrounds (like "Skip"), `dark` elsewhere. */
  tone?: 'blue' | 'dark';
  className?: string;
};

/** Ghost button: text + arrow, underline on hover. */
export function GhostLink({ label, href, tone = 'blue', className = '' }: GhostLinkProps) {
  const icon = tone === 'blue' ? 'arrow-right-blue.svg' : 'arrow-explore-dark.svg';

  return (
    <Link href={href} className={[styles.link, styles[tone], className].filter(Boolean).join(' ')}>
      {label}
      <img src={`/images/shared/common/${icon}`} alt="" width={16} height={16} aria-hidden="true" />
    </Link>
  );
}

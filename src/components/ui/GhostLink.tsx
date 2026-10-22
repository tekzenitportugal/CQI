import Link from 'next/link';
import styles from './GhostLink.module.scss';

type GhostLinkProps = {
  label: string;
  href: string;
  /** `blue` on white backgrounds (like "Skip"), `dark` elsewhere. */
  tone?: 'blue' | 'dark';
  className?: string;
  /** Open in a new browser tab. */
  newTab?: boolean;
};

/** Ghost button: text + arrow, underline on hover. */
export function GhostLink({ label, href, tone = 'blue', className = '', newTab = false }: GhostLinkProps) {
  const icon = tone === 'blue' ? 'arrow-right-blue.svg' : 'arrow-explore-dark.svg';

  return (
    <Link href={href} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={[styles.link, styles[tone], className].filter(Boolean).join(' ')}>
      {label}
      <img src={`/images/shared/common/${icon}`} alt="" width={16} height={16} aria-hidden="true" />
    </Link>
  );
}

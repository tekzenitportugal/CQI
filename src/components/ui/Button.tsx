import Link from 'next/link';
import type { ButtonVariant } from '@/types/content';
import styles from './Button.module.scss';

type ButtonProps = {
  label?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'icon';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  showArrow?: boolean;
  disabled?: boolean;
  /** Icon src for size="icon" (icon-only buttons render no label). */
  icon?: string;
  /** Accessible name for size="icon", since it has no visible label. */
  ariaLabel?: string;
};

export function Button({
  label,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  showArrow = false,
  disabled = false,
  icon,
  ariaLabel,
}: ButtonProps) {
  const isIconOnly = size === 'icon';
  const classNames = [styles.button, styles[variant], styles[size], disabled && styles.disabled, className]
    .filter(Boolean)
    .join(' ');

  const content = isIconOnly ? (
    icon && <img src={icon} alt="" width={24} height={24} aria-hidden="true" />
  ) : (
    <>
      <span>{label}</span>
      {showArrow && (
        <img src="/images/shared/common/arrow-right-blue.svg" alt="" width={16} height={16} aria-hidden="true" />
      )}
    </>
  );

  const accessibleName = isIconOnly ? ariaLabel : undefined;

  if (href) {
    if (disabled) {
      return (
        <span className={classNames} aria-disabled="true" aria-label={accessibleName}>
          {content}
        </span>
      );
    }

    return (
      <Link href={href} className={classNames} aria-label={accessibleName} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      aria-label={accessibleName}
    >
      {content}
    </button>
  );
}

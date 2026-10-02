import type { ReactNode } from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'main';
};

export function Container({
  children,
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  return <Tag className={`${styles.container} ${className}`.trim()}>{children}</Tag>;
}

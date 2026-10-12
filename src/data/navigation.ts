import type { LinkItem } from '@/types/content';

export const headerCtas: LinkItem[] = [
  { label: 'Request a demo', href: '/request-a-demo' },
];

/** Capability pages use a smaller header button with Figma's shorter label. */
export const compactHeaderCta: LinkItem = { label: 'Request Demo', href: '/request-a-demo' };

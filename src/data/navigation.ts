import type { LinkItem } from '@/types/content';

export type NavItem = LinkItem & {
  hasDropdown?: boolean;
};

export const mainNavigation: NavItem[] = [
  { label: 'Product', href: '/products', hasDropdown: true },
  { label: 'Solutions', href: '/solutions', hasDropdown: true },
  { label: 'Resources', href: '/resources', hasDropdown: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', href: '/company', hasDropdown: true },
];

export const headerCtas: LinkItem[] = [
  { label: 'Request a demo', href: '/request-a-demo' },
];

/** Capability pages use a smaller header button with Figma's shorter label. */
export const compactHeaderCta: LinkItem = { label: 'Request Demo', href: '/request-a-demo' };

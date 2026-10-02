'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { capabilityPages } from '@/data/capabilities';

const capabilityPaths = new Set(capabilityPages.map((page) => `/products/${page.slug}`));

/** Capability detail pages use the compact header button (Figma). */
function useHeaderVariant(): 'default' | 'compact' {
  const pathname = usePathname();
  return capabilityPaths.has(pathname) ? 'compact' : 'default';
}

export function SiteHeader() {
  return <Header variant={useHeaderVariant()} />;
}

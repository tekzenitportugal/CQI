import type { Metadata } from 'next';
import { NotFoundSection } from '@/components/sections/NotFoundSection';

export const metadata: Metadata = {
  title: 'Page not found — CQI',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <NotFoundSection
      data={{
        title: 'Looks like the journey broke here',
        description: 'You can head back to the homepage or explore our product.',
        buttons: [
          { label: 'Homepage', href: '/', variant: 'primary' },
          { label: 'Product overview', href: '/products/overview', variant: 'secondary' },
        ],
      }}
    />
  );
}

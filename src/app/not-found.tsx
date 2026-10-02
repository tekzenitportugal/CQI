import { NotFoundSection } from '@/components/sections/NotFoundSection';

export default function NotFound() {
  return (
    <NotFoundSection
      data={{
        title: 'Looks like the journey broke here',
        description: 'You can head back to the homepage or explore our product.',
        buttons: [
          { label: 'Homepage', href: '/', variant: 'primary' },
          { label: 'Product overview', href: '/products/capabilities', variant: 'secondary' },
        ],
      }}
    />
  );
}

import { productExploreRoutes } from '@/data/product-routes';

export type MegaMenuLink = {
  label: string;
  href: string;
};

export type MegaMenuColumn = {
  title: string;
  links: MegaMenuLink[];
};

export type MegaMenuId = 'product' | 'solutions' | 'resources' | 'company';

export type MegaMenuConfig = {
  id: MegaMenuId;
  label: string;
  href: string;
  columns: MegaMenuColumn[];
};

/** Figma MENU component (6081:8539) — subnav labels and routes. Built routes link to live pages. */
export const megaMenus: MegaMenuConfig[] = [
  {
    id: 'product',
    label: 'Product',
    href: '/products/capabilities',
    columns: [
      {
        title: 'Capabilities',
        links: [
          { label: 'Product Overview', href: '/products/capabilities' },
          { label: 'Verified CX Analytics', href: '/products/verified-cx-analytics' },
          { label: 'Customer Quality Index', href: '/products/customer-quality-index' },
          { label: 'Root cause & recovery', href: '/products/root-cause-recovery' },
          { label: 'Predictive churn & recontact', href: '/products/predictive-churn-recontact' },
          { label: 'Cross-channel integrity', href: '/products/cross-channel-integrity' },
          { label: 'End-to-end orchestration', href: '/products/end-to-end-orchestration' },
        ],
      },
      {
        title: 'Explore',
        links: [
          { label: 'Core functionalities', href: productExploreRoutes.coreFunctionalities },
          { label: 'Fix before failure happens', href: productExploreRoutes.fixBeforeFailure },
          { label: 'How we do it', href: productExploreRoutes.howWeDoIt },
          { label: 'Who is it for?', href: productExploreRoutes.whoIsItFor },
        ],
      },
      {
        title: 'Deploy',
        links: [
          { label: 'Integrations', href: '/products/integrations' },
          { label: 'CQI Implementation', href: '/products/implementation' },
          { label: 'PoC Approach', href: '/products/poc-approach' },
          { label: 'Security & trust', href: '/products/security-trust' },
          { label: 'How we prove it', href: '/products/how-we-prove-it' },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    href: '/solutions/all-industry',
    columns: [
      {
        title: 'By Industry',
        links: [
          { label: 'Telecom', href: '/solutions/telecom' },
          { label: 'Airlines', href: '/solutions/airlines' },
          { label: 'Banking', href: '/solutions/banking' },
          { label: 'Insurance', href: '/solutions/insurance' },
          { label: 'Utilities & energy', href: '/solutions/utilities-energy' },
          { label: 'Consumer electronics', href: '/solutions/consumer-electronics' },
        ],
      },
      {
        title: 'By Problem',
        links: [
          { label: 'All industries', href: '/solutions/all-industry' },
          { label: 'Not listed?', href: '/solutions/not-listed' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources/articles',
    columns: [
      {
        title: 'Reference',
        links: [
          { label: 'Glossary', href: '/resources/glossary' },
          { label: 'ROI Calculator', href: '/resources/roi-calculator' },
          { label: 'Compare CQI', href: '/resources/compare-cqi' },
        ],
      },
      {
        title: 'Start here',
        links: [
          { label: 'See it live', href: '/resources/see-it-live' },
          { label: 'Site map', href: '/sitemap' },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    href: '/company/about',
    columns: [
      {
        title: 'CQI Sense',
        links: [
          { label: 'About us', href: '/company/about' },
          { label: 'Our history', href: '/company/history' },
          { label: 'CQI team', href: '/company/team' },
        ],
      },
      {
        title: 'Work with us',
        links: [
          { label: 'Partnerships', href: '/company/partnerships' },
          { label: 'Careers', href: '/company/careers' },
          { label: 'Get in touch', href: '/contact' },
        ],
      },
    ],
  },
];

export const pricingNavLink = { label: 'Pricing', href: '/pricing' };

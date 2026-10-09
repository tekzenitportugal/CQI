import type { MetadataRoute } from 'next';
import { capabilityPages } from '@/data/capabilities';
import { compareDetailSlugs } from '@/data/compare-cqi-pages';
import { industrySlugs } from '@/data/solutions';
import { SITE_URL } from './site-url';

const staticRoutes = [
  '/',
  '/company/about',
  '/company/careers',
  '/company/history',
  '/company/partnerships',
  '/company/team',
  '/contact',
  '/cookies',
  '/pricing',
  '/privacy-policy',
  '/products/overview',
  '/products/core-functionalities',
  '/products/fix-before-failure-happens',
  '/products/how-we-do-it',
  '/products/how-we-prove-it',
  '/products/implementation',
  '/products/integrations',
  '/products/poc-approach',
  '/products/security-trust',
  '/products/who-is-it-for',
  '/request-a-demo',
  '/resources/articles',
  '/resources/compare-cqi',
  '/resources/glossary',
  '/resources/roi-calculator',
  '/resources/see-it-live',
  '/sitemap',
  '/solutions/all-industry',
  '/solutions/not-listed',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...capabilityPages.map((page) => `/products/${page.slug}`),
    ...compareDetailSlugs.map((slug) => `/resources/compare-cqi/${slug}`),
    ...industrySlugs.map((slug) => `/solutions/${slug}`),
  ];
  return routes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    priority: route === '/' ? 1 : 0.7,
  }));
}

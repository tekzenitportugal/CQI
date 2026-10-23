import type { MetadataRoute } from 'next';
import { articleSlugs } from '@/data/article-posts';
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
    ...articleSlugs.map((slug) => `/resources/articles/${slug}`),
    ...compareDetailSlugs.map((slug) => `/resources/compare-cqi/${slug}`),
    ...industrySlugs.map((slug) => `/solutions/${slug}`),
  ];
  const legalRoutes = ['/cookies', '/privacy-policy', '/terms', '/sitemap'];
  return routes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' || route.startsWith('/resources/articles') ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : legalRoutes.includes(route) ? 0.3 : route === '/request-a-demo' ? 0.9 : 0.7,
  }));
}

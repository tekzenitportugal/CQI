/** Canonical origin used for metadata, sitemap and robots. Set NEXT_PUBLIC_SITE_URL in each environment. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cqisense.com').replace(/\/$/, '');

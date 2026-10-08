import type { Metadata } from 'next';
import { Noto_Sans, Poppins } from 'next/font/google';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { Footer } from '@/components/layout/Footer';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { homepageData } from '@/data/homepage';
import '@/styles/globals.scss';
import { SITE_URL } from './site-url';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteTitle = 'CQI — Verified CX · Operational Experience Intelligence';
const siteDescription =
  'CQI builds a live, governed picture of every customer — verified CX analytics across your existing stack.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  applicationName: 'CQI',
  alternates: { canonical: './' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'CQI',
    locale: 'en',
    title: siteTitle,
    description: siteDescription,
    url: './',
    images: [{ url: '/images/shared/home/phone-hands.jpg', width: 1436, height: 508, alt: 'CQI verified CX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/shared/home/phone-hands.jpg'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CQI',
  url: SITE_URL,
  logo: `${SITE_URL}/images/shared/common/cqi-logo.svg`,
  description: siteDescription,
  sameAs: ['https://www.linkedin.com/company/cqi-sense/'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <Footer data={homepageData.footer} />
        <CookieBanner />
      </body>
    </html>
  );
}

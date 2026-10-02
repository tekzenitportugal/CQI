import type { Metadata } from 'next';
import { Noto_Sans, Poppins } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { homepageData } from '@/data/homepage';
import '@/styles/globals.scss';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CQI — Verified CX · Operational Experience Intelligence',
  description:
    'CQI builds a live, governed picture of every customer — verified CX analytics across your existing stack.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${poppins.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <Footer data={homepageData.footer} />
      </body>
    </html>
  );
}

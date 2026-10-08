import Image from 'next/image';
import Link from 'next/link';
import type { homepageData } from '@/data/homepage';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './Footer.module.scss';

type FooterProps = {
  data: typeof homepageData.footer;
};

export function Footer({ data }: FooterProps) {
  return (
    <footer className={styles.footer} id="contact">
      <Container className={styles.inner}>
        <h2 className={styles.headline}>
          {data.headline[0]}
          <br />
          {data.headline[1]}
        </h2>

        <div className={styles.poc}>
          <h3 className={styles.pocTitle}>{highlightText(data.poc.title)}</h3>
          <p className={styles.pocDescription}>{highlightText(data.poc.description)}</p>
        </div>

        <div className={styles.contact}>
          <p className={styles.address}>{highlightText(data.address)}</p>
          <a href={`mailto:${data.email}`} className={styles.email}>
            {data.email}
          </a>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/m/company/cqi-sense/posts/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Image src="/images/shared/common/linkedin.png" alt="" width={16} height={16} className={styles.linkedin} />
            </a>
          </div>
        </div>

        <Button label={data.cta.label} href={data.cta.href} variant="ghost" className={styles.cta} />

        <p className={styles.copyright}>{data.copyright}</p>

        <ul className={styles.legal}>
          {data.legal.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { compactHeaderCta, headerCtas } from '@/data/navigation';
import { MainNavMenu } from '@/components/layout/MainNavMenu';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import styles from './Header.module.scss';

type HeaderProps = {
  /**
   * `default`: menu pill ends 437px from the right, 50px "Request a demo" (homepage, Explore pages).
   * `compact`: pill centred between logo and a small "Request Demo" button (capability pages).
   */
  variant?: 'default' | 'compact';
};

// Ignore scroll jitter smaller than this before toggling hide/show.
const SCROLL_DELTA_THRESHOLD = 4;

export function Header({ variant = 'default' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const isCompact = variant === 'compact';

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (currentY <= 0) {
          setHidden(false);
        } else if (delta > SCROLL_DELTA_THRESHOLD) {
          setHidden(true);
        } else if (delta < -SCROLL_DELTA_THRESHOLD) {
          setHidden(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Never hide the header while the mobile menu is open underneath it.
  const showHidden = hidden && !menuOpen;

  // Lock page scroll while the mobile menu is open so touch/wheel input scrolls
  // the menu's own content instead of the page underneath it.
  useEffect(() => {
    if (!menuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${showHidden ? styles.headerHidden : ''}`.trim()}>
      <Container className={`${styles.inner} ${isCompact ? styles.innerCompact : ''}`.trim()}>
        <Link href="/" className={styles.logo} aria-label="CQI home">
          <Image src="/images/shared/common/cqi-logo.svg" alt="CQI" width={67} height={32} priority />
        </Link>

        <nav className={styles.navSlot} aria-label="Main navigation">
          <MainNavMenu mobileOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />
        </nav>

        <div className={`${styles.actions} ${menuOpen ? styles.actionsHidden : ''}`.trim()}>
          {isCompact ? (
            <Button label={compactHeaderCta.label} href={compactHeaderCta.href} variant="primary" size="sm" />
          ) : (
            <>
              <Button
                label="See it live"
                href="/resources/see-it-live"
                variant="secondary"
                className={styles.hiddenCta}
              />
              {headerCtas.map((cta) => (
                <Button
                  key={cta.label}
                  label={cta.label}
                  href={cta.href}
                  variant="primary"
                  className={styles.ctaButton}
                />
              ))}
            </>
          )}
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </Container>
    </header>
  );
}

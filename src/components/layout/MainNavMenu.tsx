'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { megaMenus, pricingNavLink, type MegaMenuConfig, type MegaMenuId } from '@/data/mega-menu';
import { headerCtas } from '@/data/navigation';
import { NavChevron } from '@/components/layout/NavChevron';
import { Button } from '@/components/ui/Button';
import styles from './MainNavMenu.module.scss';

type MainNavMenuProps = {
  mobileOpen: boolean;
  onNavigate?: () => void;
};

// How long the dropdown stays open after the cursor leaves, so it survives the trip from
// the trigger down to the panel even when the cursor drifts outside the hover zone.
const CLOSE_DELAY_MS = 600;

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function getMenuById(id: MegaMenuId): MegaMenuConfig {
  const menu = megaMenus.find((entry) => entry.id === id);
  if (!menu) throw new Error(`Unknown menu: ${id}`);
  return menu;
}

export function MainNavMenu({ mobileOpen, onNavigate }: MainNavMenuProps) {
  const [openMenu, setOpenMenu] = useState<MegaMenuId | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MegaMenuId | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  useEffect(() => cancelClose, [cancelClose]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const desktopPanelMenu = openMenu && !mobileOpen ? openMenu : null;

  const closeMenus = useCallback(() => {
    cancelClose();
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [cancelClose]);

  const handleMouseEnter = (id: MegaMenuId) => {
    cancelClose();
    setOpenMenu(id);
  };

  const handleMouseLeave = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS);
  };

  const toggleMobileSection = (id: MegaMenuId) => {
    setMobileExpanded((current) => (current === id ? null : id));
    setOpenMenu(id);
  };

  const desktopPanel = desktopPanelMenu ? getMenuById(desktopPanelMenu) : null;

  const renderMegaTrigger = (menu: MegaMenuConfig) => {
    const isOpen =
      mobileOpen ? mobileExpanded === menu.id : openMenu === menu.id;
    const isCurrent = menu.columns.some((column) =>
      column.links.some((link) => isActivePath(pathname, link.href)),
    );
    return (
      <li key={menu.id} className={styles.topItem}>
        <button
          type="button"
          className={`${styles.trigger} ${isOpen || isCurrent ? styles.triggerActive : ''}`.trim()}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onMouseEnter={() => handleMouseEnter(menu.id)}
          onFocus={() => handleMouseEnter(menu.id)}
          onClick={() => toggleMobileSection(menu.id)}
        >
          {menu.label}
          <NavChevron active={isOpen} className={isOpen ? undefined : styles.chevronDown} />
        </button>

        {mobileOpen && isOpen && (
          <MegaMenuPanel
            menu={menu}
            className={`${styles.panelMobile} ${menu.id === 'product' ? styles.panelStacked : ''}`.trim()}
            onNavigate={() => {
              closeMenus();
              onNavigate?.();
            }}
          />
        )}
      </li>
    );
  };

  const shell = (
    <div
      className={`${styles.shell} ${mobileOpen ? styles.shellMobileOpen : ''}`.trim()}
      onMouseEnter={cancelClose}
      onMouseLeave={handleMouseLeave}
      id="main-navigation"
    >
      <div className={`${styles.pill} ${mobileOpen ? styles.pillMobile : ''}`.trim()}>
        <ul className={styles.topList}>
          {renderMegaTrigger(getMenuById('product'))}
          {renderMegaTrigger(getMenuById('solutions'))}
          {renderMegaTrigger(getMenuById('resources'))}
          <li className={styles.topItem}>
            <Link
              href={pricingNavLink.href}
              className={`${styles.topLink} ${styles.topLinkPlain} ${isActivePath(pathname, pricingNavLink.href) ? styles.topLinkActive : ''}`.trim()}
              onClick={() => {
                closeMenus();
                onNavigate?.();
              }}
            >
              {pricingNavLink.label}
            </Link>
          </li>
          {renderMegaTrigger(getMenuById('company'))}
        </ul>

        {mobileOpen && (
          <div className={styles.mobileCtas}>
            <Button
              label="See it live"
              href="/resources/see-it-live"
              variant="secondary"
              size="sm"
              onClick={() => {
                closeMenus();
                onNavigate?.();
              }}
            />
            {headerCtas.map((cta) => (
              <Button
                key={cta.label}
                label={cta.label}
                href={cta.href}
                variant="primary"
                size="sm"
                onClick={() => {
                  closeMenus();
                  onNavigate?.();
                }}
              />
            ))}
          </div>
        )}
      </div>

      {desktopPanel && (
        <div
          className={styles.panelBridge}
          onMouseEnter={() => handleMouseEnter(desktopPanel.id)}
        >
          <MegaMenuPanel
            menu={desktopPanel}
            className={`${styles.panel} ${styles.panelOpen}`.trim()}
            onNavigate={() => {
              closeMenus();
              onNavigate?.();
            }}
          />
        </div>
      )}
    </div>
  );

  // The fullscreen mobile overlay is portalled straight to <body> so it isn't
  // trapped inside the header's stacking context — the header has
  // `will-change: transform` for its slide-hide animation, which makes it a
  // containing block for fixed-position descendants and would otherwise paint
  // this overlay *behind* the header's own logo/close icon instead of below them.
  if (mobileOpen && mounted) {
    return createPortal(shell, document.body);
  }

  return shell;
}

type MegaMenuPanelProps = {
  menu: MegaMenuConfig;
  className?: string;
  onNavigate?: () => void;
};

function MegaMenuPanel({ menu, className, onNavigate }: MegaMenuPanelProps) {
  const pathname = usePathname();

  return (
    <div className={className} role="region" aria-label={`${menu.label} menu`}>
      <div className={styles.panelColumns}>
        {menu.columns.map((column) => (
          <div
            key={column.title}
            className={styles.column}
            style={column.width ? ({ '--column-width': `${column.width}px` } as CSSProperties) : undefined}
          >
            <p className={styles.columnTitle}>{column.title}</p>
            <ul className={styles.linkList}>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${styles.subLink} ${isActivePath(pathname, link.href) ? styles.subLinkActive : ''}`.trim()}
                    onClick={onNavigate}
                    aria-current={isActivePath(pathname, link.href) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

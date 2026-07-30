"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "./MagneticButton";
import styles from "./Navbar.module.css";
import { SERVICES } from "../config/services";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/work" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { 
    setMenuOpen(false); 
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`glass ${styles.nav}`}>
        {/* Logo */}
        <Link href="/" className={`mono ${styles.logo}`}>
          <span className={styles.logoAccent}>AutoHub</span> Labs
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }, i) => {
            if (label === "Services") {
              return (
                <li 
                  key={href} 
                  className={styles.dropdownContainer}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <Link
                    href={href}
                    className={`${styles.link} ${pathname === href || pathname.startsWith("/services/") ? styles.active : ""}`}
                  >
                    {label} <span className={styles.caret}>▼</span>
                  </Link>
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownGrid}>
                      {SERVICES.map((service) => (
                        <Link 
                          key={service.id} 
                          href={`/services/${service.id}`}
                          className={styles.dropdownItem}
                        >
                          <div className={styles.dropdownItemTitle}>{service.name}</div>
                          <div className={styles.dropdownItemDesc}>{service.shortDesc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            }
            return (
              <li key={href} style={{ animationDelay: `${i * 0.07}s` }}>
                <Link
                  href={href}
                  className={`${styles.link} ${pathname === href ? styles.active : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <MagneticButton
          href="/contact"
          className={styles.cta}
          strength={10}
        >
          <span className={styles.ctaDot} />
          Let&apos;s Talk
        </MagneticButton>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        {NAV_LINKS.map(({ label, href }) => {
          if (label === "Services") {
            return (
              <div key={href} className={styles.mobileDropdownContainer}>
                <button 
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className={styles.mobileLinkButton}
                >
                  {label} <span className={`${styles.mobileCaret} ${mobileServicesOpen ? styles.rotated : ""}`}>▼</span>
                </button>
                <div className={`${styles.mobileSubmenu} ${mobileServicesOpen ? styles.mobileSubmenuOpen : ""}`}>
                  <Link href="/services" className={styles.mobileSublink}>
                    All Services
                  </Link>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className={styles.mobileSublink}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <Link key={href} href={href} className={styles.mobileLink}>
              {label}
            </Link>
          );
        })}
        <Link href="/contact" className={styles.mobileCta}>
          Let&apos;s Talk →
        </Link>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "./MagneticButton";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/work" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`glass ${styles.nav}`}>
        {/* Logo */}
        <Link href="/" className={`mono ${styles.logo}`}>
          <span className={styles.logoAccent}>AUTO</span>HUB.
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }, i) => (
            <li key={href} style={{ animationDelay: `${i * 0.07}s` }}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
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
        {NAV_LINKS.map(({ label, href }) => (
          <Link key={href} href={href} className={styles.mobileLink}>
            {label}
          </Link>
        ))}
        <Link href="/contact" className={styles.mobileCta}>
          Let&apos;s Talk →
        </Link>
      </div>
    </header>
  );
}

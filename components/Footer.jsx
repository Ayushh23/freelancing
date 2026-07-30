"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <ScrollReveal>
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoAccent}>AutoHub</span> Labs
              </Link>
              <p className={styles.brandDesc}>
                We build automation systems that run silently in the background, 
                so you can focus on scaling your business. No more manual tasks.
              </p>
              <div className={styles.statusIndicator}>
                <span className={styles.statusDot} />
                SYSTEMS OPERATIONAL
              </div>
            </div>
          </ScrollReveal>

          <div className={styles.linksGrid}>
            <ScrollReveal delay={0.1}>
              <div className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>Navigation</h4>
                <ul className={styles.linkList}>
                  <li><Link href="/" className={styles.link}>Home</Link></li>
                  <li><Link href="/services" className={styles.link}>Services</Link></li>
                  <li><Link href="/work" className={styles.link}>Our Work</Link></li>
                  <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>Connect</h4>
                <ul className={styles.linkList}>
                  <li><a href="mailto:hello@autohub.com" className={styles.link}>hello@autohub.com</a></li>
                  <li><a href="tel:+917667804626" className={styles.link}>+91 76678 04626</a></li>
                  <li><a href="#" className={styles.link}>LinkedIn</a></li>
                  <li><a href="#" className={styles.link}>Twitter (X)</a></li>
                  <li><a href="#" className={styles.link}>GitHub</a></li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>Legal</h4>
                <ul className={styles.linkList}>
                  <li><a href="#" className={styles.link}>Privacy Policy</a></li>
                  <li><a href="#" className={styles.link}>Terms of Service</a></li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.4}>
          <div className={styles.bottomSection}>
            <p className={styles.copyright}>
              &copy; {currentYear} AutoHub Labs Pvt. Ltd. All rights reserved.
            </p>
            <p className={styles.crafted}>
              Engineered for the future.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Web Developer",
    initial: "P",
    color: "#7C3AED",
    stars: 5,
    quote:
      "AutoHub Labs completely transformed the way I think about shipping products. The code quality, communication, and attention to UX detail were all exceptional — genuinely the best dev team I've worked with.",
  },
  {
    name: "Shivam Barnwal",
    role: "Product Manager — Website Building",
    initial: "S",
    color: "#10B981",
    stars: 5,
    quote:
      "Working with AutoHub Labs on our website was seamless. They took our rough requirements and delivered a polished, high-converting product ahead of schedule. Highly recommended for any product team.",
  },
  {
    name: "Ravi Barnwal",
    role: "Product Manager — Website Development",
    initial: "R",
    color: "#06B6D4",
    stars: 5,
    quote:
      "Impressive technical depth and zero hand-holding required. I gave them the vision and they built it — clean architecture, great performance, and thorough documentation on handover.",
  },
  {
    name: "Satya Prakash Roul",
    role: "Business Owner — Web App",
    initial: "SP",
    color: "#F59E0B",
    stars: 5,
    quote:
      "I came with an idea and no technical background. AutoHub Labs guided me through every step, built my web app from scratch, and made sure I understood everything. My business wouldn't exist online without them.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <ScrollReveal>
            <span className={styles.eyebrow}>Testimonials</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className={styles.sectionSubtitle}>
              Real feedback from real people we&apos;ve built for.
            </p>
          </ScrollReveal>
        </div>
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialTop}>
                  <div
                    className={styles.testimonialAvatar}
                    style={{
                      background: `${t.color}22`,
                      border: `1.5px solid ${t.color}55`,
                      color: t.color,
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
                <div className={styles.testimonialStars}>
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <span key={s} className={styles.star}>★</span>
                  ))}
                </div>
                <blockquote className={styles.testimonialQuote}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className={styles.testimonialAccentBar} style={{ background: t.color }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

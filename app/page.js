import Link from "next/link";
import Hero3D from "../components/Hero3D";
import styles from "./home.module.css";

const MARQUEE_ITEMS = [
  "College AI Bots", "TechFest Platforms", "Manager Automation",
  "API Integrations", "Event Websites", "Workflow Scripts",
];

const STATS = [
  { value: "15+", label: "Projects Shipped" },
  { value: "8 hrs", label: "Saved Per Manager/Week" },
  { value: "60%", label: "Drop in Admin Queries" },
  { value: "5k+", label: "Event Registrations Handled" },
];

const SERVICES_PREVIEW = [
  {
    icon: "⚙️",
    title: "Automation & Bots",
    desc: "From Python scripts to Zapier flows — we turn hours of manual work into a single click.",
  },
  {
    icon: "🌐",
    title: "Web Platforms",
    desc: "High-performance sites and apps with Next.js and Node. Built to handle real traffic.",
  },
  {
    icon: "🤖",
    title: "Custom AI Bots",
    desc: "LLM-powered bots trained on your data, integrated into WhatsApp, Slack, or your site.",
  },
];

const STEPS = [
  { num: "01", title: "Discovery Call", desc: "We understand your workflow, bottlenecks, and goals in a 30-minute call." },
  { num: "02", title: "Proposal & Scope", desc: "You receive a clear plan — what we build, timeline, and cost. No surprises." },
  { num: "03", title: "Build & Iterate", desc: "We ship in sprints and keep you in the loop. Feedback-first, always." },
  { num: "04", title: "Launch & Support", desc: "We deploy, monitor, and provide 30 days of support post-launch." },
];

const FEATURED = [
  {
    label: "AI · 2026",
    title: "College AI ChatBot",
    desc: "An NLP chatbot that handles student queries 24/7 — reducing admin load by 60% for a college with 3,000+ students.",
    result: "60% fewer admin queries",
  },
  {
    label: "Web · 2026",
    title: "National TechFest Platform",
    desc: "Zero-downtime event platform for a national tech festival. Handled 5,000+ registrations, live updates, and team management.",
    result: "5,000+ registrations",
  },
];

export default function Home() {
  const all = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <>
      {/* ── Hero ── */}
      <Hero3D />

      {/* ── Marquee trust strip ── */}
      <div className={styles.strip}>
        <div className={styles.marqueeWrap}>
          <div className={styles.marquee}>
            {all.map((item, i) => (
              <span key={i} className={styles.mItem}>
                {item}<span className={styles.mDot}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <section className={`${styles.section} ${styles.statsSection}`}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={`mono ${styles.eyebrow}`}>What We Do</p>
            <h2 className={styles.sectionTitle}>
              One team.<br />Everything you need.
            </h2>
            <p className={styles.sectionSub}>
              Whether you need a bot that handles your inbox, a platform that scales to thousands, or a full workflow overhaul — we've got it covered.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES_PREVIEW.map((s) => (
              <div key={s.title} className={`glass ${styles.serviceCard}`}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.sectionFooter}>
            <Link href="/services" className={styles.linkBtn}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className={`${styles.section} ${styles.featuredSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={`mono ${styles.eyebrow}`}>Featured Work</p>
            <h2 className={styles.sectionTitle}>
              We don't just build.<br />We deliver results.
            </h2>
          </div>

          <div className={styles.featuredGrid}>
            {FEATURED.map((p) => (
              <div key={p.title} className={`glass ${styles.featuredCard}`}>
                <p className={`mono ${styles.featLabel}`}>{p.label}</p>
                <h3 className={styles.featTitle}>{p.title}</h3>
                <p className={styles.featDesc}>{p.desc}</p>
                <div className={styles.featResult}>
                  <span className="mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>OUTCOME</span>
                  <strong>{p.result}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sectionFooter}>
            <Link href="/work" className={styles.linkBtn}>See All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={`mono ${styles.eyebrow}`}>How It Works</p>
            <h2 className={styles.sectionTitle}>
              From idea to launch<br />in 4 steps.
            </h2>
          </div>

          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.num} className={styles.step}>
                <span className={`mono ${styles.stepNum}`}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={`glass ${styles.ctaBox}`}>
            <p className={`mono ${styles.eyebrow}`} style={{ marginBottom: "1.5rem" }}>
              Ready to automate?
            </p>
            <h2 className={styles.ctaTitle}>
              Stop doing things manually.<br />
              <span className="text-chrome">Let's fix that.</span>
            </h2>
            <p className={styles.ctaSub}>
              Tell us what you're building. We'll respond within a few hours with a clear plan.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>Start a Project →</Link>
              <Link href="/work" className={styles.ctaSecondary}>See Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

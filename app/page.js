import Link from "next/link";
import Hero3D from "../components/Hero3D";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import GlowCard from "../components/GlowCard";
import MagneticButton from "../components/MagneticButton";
import Testimonials from "../components/Testimonials";
import { Rocket, Timer, TrendingDown, Target, Settings, Globe, Bot, PhoneCall, ClipboardList, Hammer, Zap } from "lucide-react";
// Note: MagneticButton handles Next.js Link internally via href prop
import styles from "./home.module.css";

const MARQUEE_ITEMS = [
  { label: "College AI Bots",        color: "#6366f1" },
  { label: "TechFest Platforms",     color: "#8b5cf6" },
  { label: "Manager Automation",     color: "#06b6d4" },
  { label: "API Integrations",       color: "#a855f7" },
  { label: "Event Websites",         color: "#6366f1" },
  { label: "Workflow Scripts",       color: "#0ea5e9" },
  { label: "WhatsApp Bots",          color: "#10b981" },
  { label: "Data Dashboards",        color: "#f59e0b" },
];

const STATS = [
  { value: "15",  suffix: "+",   label: "Projects Shipped",        icon: <Rocket size={24} color="#7C3AED" /> },
  { value: "8",   suffix: " hrs",label: "Saved Per Manager/Week",  icon: <Timer size={24} color="#10B981" /> },
  { value: "60",  suffix: "%",   label: "Drop in Admin Queries",   icon: <TrendingDown size={24} color="#06B6D4" /> },
  { value: "5000",suffix: "+",   label: "Registrations Handled",   icon: <Target size={24} color="#7C3AED" /> },
];

const SERVICES_PREVIEW = [
  {
    icon: <Settings size={32} color="#7C3AED" />,
    title: "Automation & Bots",
    desc: "From Python scripts to Zapier flows — we turn hours of manual work into a single click.",
    accent: "99,102,241",
    tag: "Save Time",
  },
  {
    icon: <Globe size={32} color="#06B6D4" />,
    title: "Web Platforms",
    desc: "High-performance sites and apps with Next.js and Node. Built to handle real traffic.",
    accent: "6,182,212",
    tag: "Scale Fast",
  },
  {
    icon: <Bot size={32} color="#10B981" />,
    title: "Custom AI Bots",
    desc: "LLM-powered bots trained on your data, integrated into WhatsApp, Slack, or your site.",
    accent: "168,85,247",
    tag: "Work Smarter",
  },
];

const STEPS = [
  { num: "01", title: "Discovery Call",    desc: "We understand your workflow, bottlenecks, and goals in a 30-minute call.", icon: <PhoneCall size={28} /> },
  { num: "02", title: "Proposal & Scope",  desc: "You receive a clear plan — what we build, timeline, and cost. No surprises.", icon: <ClipboardList size={28} /> },
  { num: "03", title: "Build & Iterate",   desc: "We ship in sprints and keep you in the loop. Feedback-first, always.", icon: <Hammer size={28} /> },
  { num: "04", title: "Launch & Support",  desc: "We deploy, monitor, and provide 30 days of support post-launch.", icon: <Zap size={28} /> },
];

const FEATURED = [
  {
    label: "AI · 2026",
    title: "College AI ChatBot",
    desc: "An NLP chatbot that handles student queries 24/7 — reducing admin load by 60% for a college with 3,000+ students.",
    result: "60% fewer admin queries",
    accent: "99,102,241",
  },
  {
    label: "Web · 2026",
    title: "National TechFest Platform",
    desc: "Zero-downtime event platform for a national tech festival. Handled 5,000+ registrations, live updates, and team management.",
    result: "5,000+ registrations",
    accent: "6,182,212",
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
        <div className={styles.stripLabel}>WHAT WE BUILD</div>
        <div className={styles.marqueeWrap}>
          <div className={styles.marquee}>
            {all.map((item, i) => (
              <span
                key={i}
                className={styles.mItem}
                style={{ "--item-color": item.color }}
              >
                <span className={styles.mDot} style={{ background: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <section className={`${styles.section} ${styles.statsSection}`}>
        <div className={styles.container}>
          <ScrollReveal>
            <p className={`mono ${styles.eyebrow}`}>By the numbers</p>
          </ScrollReveal>
          <div className={styles.statsGrid}>
            {STATS.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.statCard}>
                  <div className={styles.statIconBox}>{stat.icon}</div>
                  <div className={styles.statContent}>
                    <div className={styles.statValueRow}>
                      <AnimatedCounter target={parseInt(stat.value)} />
                      <span className={styles.statSuffix}>{stat.suffix}</span>
                    </div>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <ScrollReveal>
              <p className={`mono ${styles.eyebrow}`}>What We Do</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.sectionTitle}>
                One team.<br />
                <span className="text-gradient">Everything you need.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className={styles.sectionSub}>
                Whether you need a bot that handles your inbox, a platform that scales to thousands,
                or a full workflow overhaul — we&apos;ve got it covered.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES_PREVIEW.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.12}>
                <GlowCard
                  className={`glass ${styles.serviceCard}`}
                  glowColor={s.accent}
                >
                  <span className={styles.serviceIcon}>{s.icon}</span>
                  <span
                    className={styles.serviceTag}
                    style={{ color: `rgb(${s.accent})`, background: `rgba(${s.accent},0.08)`, borderColor: `rgba(${s.accent},0.2)` }}
                  >
                    {s.tag}
                  </span>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.sectionFooter}>
            <ScrollReveal>
              <Link href="/services" className={styles.linkBtn}>
                View All Services →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className={`${styles.section} ${styles.featuredSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <ScrollReveal>
              <p className={`mono ${styles.eyebrow}`}>Featured Work</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.sectionTitle}>
                We don&apos;t just build.<br />
                <span className="text-chrome">We deliver results.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className={styles.featuredGrid}>
            {FEATURED.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                <GlowCard
                  className={`glass ${styles.featuredCard}`}
                  glowColor={p.accent}
                >
                  <p className={`mono ${styles.featLabel}`}
                    style={{ color: `rgb(${p.accent})` }}>
                    {p.label}
                  </p>
                  <h3 className={styles.featTitle}>{p.title}</h3>
                  <p className={styles.featDesc}>{p.desc}</p>
                  <div className={styles.featResult}
                    style={{ borderLeft: `3px solid rgb(${p.accent})` }}>
                    <span className="mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>OUTCOME</span>
                    <strong>{p.result}</strong>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.sectionFooter}>
            <ScrollReveal>
              <Link href="/work" className={styles.linkBtn}>See All Projects →</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <ScrollReveal>
              <p className={`mono ${styles.eyebrow}`}>How It Works</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.sectionTitle}>
                From idea to launch<br />in 4 steps.
              </h2>
            </ScrollReveal>
          </div>

          <div className={styles.stepsGrid}>
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className={styles.step}>
                  <span className={styles.stepIcon}>{step.icon}</span>
                  <span className={`mono ${styles.stepNum}`}>{step.num}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── Bottom CTA ── */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={`glass-glow ${styles.ctaBox}`}>
              {/* Animated orbs inside CTA */}
              <div className={styles.ctaOrb1} />
              <div className={styles.ctaOrb2} />

              <p className={`mono ${styles.eyebrow}`} style={{ marginBottom: "1.5rem" }}>
                Ready to automate?
              </p>
              <h2 className={styles.ctaTitle}>
                Stop doing things manually.<br />
                <span className="text-gradient-anim">Let&apos;s fix that.</span>
              </h2>
              <p className={styles.ctaSub}>
                Tell us what you&apos;re building. We&apos;ll respond within a few hours with a clear plan.
              </p>
              <div className={styles.ctaActions}>
                <MagneticButton href="/contact" className={styles.ctaPrimary}>
                  Start a Project →
                </MagneticButton>
                <MagneticButton href="/work" className={styles.ctaSecondary}>
                  See Our Work
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "../../../config/services";
import styles from "./service-page.module.css";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return { title: "Service Not Found | AutoHub Labs Pvt. Ltd." };
  return {
    title: `${service.name} — ${service.tagline} | AutoHub Labs Pvt. Ltd.`,
    description: service.heroDesc,
  };
}

/* ── Inline SVG Illustrations per service ──────────────── */
const SERVICE_ILLUSTRATIONS = {
  "app-dev": (
    <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroIllustration}>
      <rect x="110" y="20" width="200" height="280" rx="24" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5"/>
      <rect x="125" y="55" width="170" height="210" rx="8" fill="rgba(124,58,237,0.05)" stroke="rgba(124,58,237,0.15)" strokeWidth="1"/>
      <circle cx="210" cy="38" r="6" fill="rgba(124,58,237,0.4)"/>
      <rect x="140" y="70" width="140" height="8" rx="4" fill="rgba(124,58,237,0.3)"/>
      <rect x="140" y="88" width="100" height="6" rx="3" fill="rgba(148,163,184,0.2)"/>
      <rect x="140" y="108" width="140" height="60" rx="8" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.2)" strokeWidth="1"/>
      <rect x="152" y="118" width="60" height="6" rx="3" fill="rgba(124,58,237,0.4)"/>
      <rect x="152" y="132" width="100" height="4" rx="2" fill="rgba(148,163,184,0.2)"/>
      <rect x="152" y="142" width="80" height="4" rx="2" fill="rgba(148,163,184,0.15)"/>
      <rect x="140" y="182" width="65" height="28" rx="14" fill="rgba(124,58,237,0.6)"/>
      <rect x="215" y="182" width="65" height="28" rx="14" fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.3)" strokeWidth="1"/>
      <rect x="140" y="224" width="140" height="6" rx="3" fill="rgba(148,163,184,0.15)"/>
      <rect x="140" y="238" width="110" height="6" rx="3" fill="rgba(148,163,184,0.1)"/>
      <circle cx="348" cy="80" r="30" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5"/>
      <text x="340" y="85" fontSize="18" fill="rgba(16,185,129,0.7)">⚡</text>
      <circle cx="72" cy="180" r="24" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5"/>
      <text x="62" y="186" fontSize="14" fill="rgba(6,182,212,0.7)">📱</text>
      <line x1="348" y1="108" x2="310" y2="130" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="95" y1="175" x2="115" y2="175" stroke="rgba(6,182,212,0.2)" strokeWidth="1" strokeDasharray="4 3"/>
    </svg>
  ),
  "software-dev": (
    <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroIllustration}>
      <rect x="40" y="60" width="340" height="200" rx="12" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5"/>
      <rect x="40" y="60" width="340" height="32" rx="12" fill="rgba(16,185,129,0.12)"/>
      <circle cx="62" cy="76" r="6" fill="rgba(239,68,68,0.5)"/>
      <circle cx="82" cy="76" r="6" fill="rgba(234,179,8,0.5)"/>
      <circle cx="102" cy="76" r="6" fill="rgba(16,185,129,0.5)"/>
      <rect x="58" y="110" width="60" height="6" rx="3" fill="rgba(124,58,237,0.5)"/>
      <rect x="130" y="110" width="40" height="6" rx="3" fill="rgba(6,182,212,0.4)"/>
      <rect x="182" y="110" width="80" height="6" rx="3" fill="rgba(148,163,184,0.3)"/>
      <rect x="74" y="128" width="50" height="6" rx="3" fill="rgba(16,185,129,0.4)"/>
      <rect x="136" y="128" width="30" height="6" rx="3" fill="rgba(148,163,184,0.2)"/>
      <rect x="178" y="128" width="60" height="6" rx="3" fill="rgba(124,58,237,0.3)"/>
      <rect x="58" y="146" width="80" height="6" rx="3" fill="rgba(148,163,184,0.2)"/>
      <rect x="150" y="146" width="50" height="6" rx="3" fill="rgba(6,182,212,0.3)"/>
      <rect x="74" y="164" width="90" height="6" rx="3" fill="rgba(16,185,129,0.3)"/>
      <rect x="176" y="164" width="40" height="6" rx="3" fill="rgba(148,163,184,0.2)"/>
      <rect x="58" y="182" width="70" height="6" rx="3" fill="rgba(124,58,237,0.4)"/>
      <rect x="140" y="182" width="80" height="6" rx="3" fill="rgba(148,163,184,0.2)"/>
      <rect x="58" y="200" width="55" height="6" rx="3" fill="rgba(6,182,212,0.3)"/>
      <rect x="125" y="200" width="100" height="6" rx="3" fill="rgba(148,163,184,0.15)"/>
      <rect x="58" y="218" width="75" height="6" rx="3" fill="rgba(124,58,237,0.3)"/>
      <rect x="145" y="218" width="45" height="6" rx="3" fill="rgba(16,185,129,0.4)"/>
      <rect x="58" y="236" width="100" height="6" rx="3" fill="rgba(148,163,184,0.2)"/>
    </svg>
  ),
  "web-dev": (
    <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroIllustration}>
      <rect x="30" y="30" width="360" height="240" rx="16" fill="rgba(6,182,212,0.05)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5"/>
      <rect x="30" y="30" width="360" height="40" rx="16" fill="rgba(6,182,212,0.1)"/>
      <circle cx="60" cy="50" r="6" fill="rgba(239,68,68,0.5)"/>
      <circle cx="80" cy="50" r="6" fill="rgba(234,179,8,0.5)"/>
      <circle cx="100" cy="50" r="6" fill="rgba(16,185,129,0.5)"/>
      <rect x="160" y="44" width="130" height="12" rx="6" fill="rgba(255,255,255,0.08)"/>
      <rect x="50" y="90" width="320" height="100" rx="12" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.15)" strokeWidth="1"/>
      <rect x="65" y="105" width="180" height="12" rx="6" fill="rgba(6,182,212,0.4)"/>
      <rect x="65" y="125" width="220" height="8" rx="4" fill="rgba(148,163,184,0.2)"/>
      <rect x="65" y="140" width="180" height="8" rx="4" fill="rgba(148,163,184,0.15)"/>
      <rect x="65" y="160" width="90" height="24" rx="12" fill="rgba(6,182,212,0.5)"/>
      <rect x="165" y="160" width="90" height="24" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <rect x="50" y="208" width="95" height="50" rx="8" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.15)" strokeWidth="1"/>
      <rect x="158" y="208" width="95" height="50" rx="8" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.15)" strokeWidth="1"/>
      <rect x="266" y="208" width="104" height="50" rx="8" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.15)" strokeWidth="1"/>
      <rect x="62" y="220" width="70" height="6" rx="3" fill="rgba(6,182,212,0.3)"/>
      <rect x="62" y="234" width="50" height="4" rx="2" fill="rgba(148,163,184,0.2)"/>
      <rect x="170" y="220" width="70" height="6" rx="3" fill="rgba(6,182,212,0.3)"/>
      <rect x="170" y="234" width="50" height="4" rx="2" fill="rgba(148,163,184,0.2)"/>
      <rect x="278" y="220" width="70" height="6" rx="3" fill="rgba(6,182,212,0.3)"/>
      <rect x="278" y="234" width="50" height="4" rx="2" fill="rgba(148,163,184,0.2)"/>
    </svg>
  ),
  "automations": (
    <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroIllustration}>
      <circle cx="80" cy="80" r="36" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5"/>
      <text x="65" y="87" fontSize="20">📊</text>
      <circle cx="210" cy="80" r="36" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5"/>
      <text x="196" y="87" fontSize="20">🤖</text>
      <circle cx="340" cy="80" r="36" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5"/>
      <text x="326" y="87" fontSize="20">📧</text>
      <path d="M116 80 L174 80" stroke="rgba(245,158,11,0.4)" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrow1)"/>
      <path d="M246 80 L304 80" stroke="rgba(245,158,11,0.4)" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrow2)"/>
      <circle cx="80" cy="200" r="30" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5"/>
      <text x="67" y="207" fontSize="18">🔄</text>
      <circle cx="210" cy="200" r="30" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/>
      <text x="197" y="207" fontSize="18">✅</text>
      <circle cx="340" cy="200" r="30" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/>
      <text x="327" y="207" fontSize="18">📈</text>
      <path d="M80 116 L80 170" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" strokeDasharray="5 4"/>
      <path d="M210 116 L210 170" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="5 4"/>
      <path d="M340 116 L340 170" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" strokeDasharray="5 4"/>
      <path d="M110 200 L180 200" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" strokeDasharray="5 4"/>
      <path d="M240 200 L310 200" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" strokeDasharray="5 4"/>
      <defs>
        <marker id="arrow1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="rgba(245,158,11,0.6)"/>
        </marker>
        <marker id="arrow2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="rgba(245,158,11,0.6)"/>
        </marker>
      </defs>
    </svg>
  ),
  "everythings": (
    <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroIllustration}>
      <circle cx="210" cy="160" r="80" fill="rgba(236,72,153,0.05)" stroke="rgba(236,72,153,0.15)" strokeWidth="1.5" strokeDasharray="8 6"/>
      <circle cx="210" cy="160" r="50" fill="rgba(236,72,153,0.08)" stroke="rgba(236,72,153,0.2)" strokeWidth="1.5"/>
      <text x="193" y="168" fontSize="24">∞</text>
      <circle cx="100" cy="80" r="28" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5"/>
      <text x="88" y="87" fontSize="16">🛠️</text>
      <circle cx="320" cy="80" r="28" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/>
      <text x="308" y="87" fontSize="16">⚡</text>
      <circle cx="80" cy="220" r="28" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/>
      <text x="68" y="227" fontSize="16">☁️</text>
      <circle cx="340" cy="220" r="28" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5"/>
      <text x="328" y="227" fontSize="16">🤖</text>
      <line x1="125" y1="95" x2="170" y2="130" stroke="rgba(124,58,237,0.2)" strokeWidth="1.2" strokeDasharray="5 4"/>
      <line x1="295" y1="95" x2="250" y2="130" stroke="rgba(16,185,129,0.2)" strokeWidth="1.2" strokeDasharray="5 4"/>
      <line x1="103" y1="205" x2="158" y2="185" stroke="rgba(6,182,212,0.2)" strokeWidth="1.2" strokeDasharray="5 4"/>
      <line x1="315" y1="205" x2="260" y2="185" stroke="rgba(245,158,11,0.2)" strokeWidth="1.2" strokeDasharray="5 4"/>
    </svg>
  ),
};

/* ── Tech Stack Icon Map ────────────────────────────────── */
const TECH_ICONS = {
  Python: "🐍", TypeScript: "🟦", JavaScript: "🟨", Go: "🔵",
  Swift: "🍊", Kotlin: "🟣", Dart: "🔷", Rust: "🦀", "C++": "⚙️", "C#": "💜",
  "Next.js 16": "▲", "React 19": "⚛️", React: "⚛️", "React Native": "📱",
  Flutter: "🐦", FastAPI: "🚀", "Node.js": "🟩", Electron: "⚡", Tauri: "🦀",
  PostgreSQL: "🐘", MongoDB: "🍃", Redis: "🔴", SQLite: "🗄️",
  Docker: "🐳", Kubernetes: "☸️", Terraform: "🏗️",
  Firebase: "🔥", Supabase: "⚡", Vercel: "▲", AWS: "☁️",
  "OpenAI API": "🤖", LangChain: "🔗", Pinecone: "🌲",
  N8N: "⚡", Zapier: "⚡", "GitHub Actions": "🐙",
};

/* ── Customer Testimonials ──────────────────────────────── */
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

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) notFound();

  const illustration = SERVICE_ILLUSTRATIONS[service.id] || SERVICE_ILLUSTRATIONS["everythings"];

  return (
    <main className="page">
      <div className={styles.pageWrapper}>

        {/* ── Back Navigation ─────────────────────────────────── */}
        <Link href="/services" className={styles.backBtn}>
          <span>←</span> Back to All Services
        </Link>

        {/* ══════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Services / {service.name}
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleGradient}>{service.name}</span>
            </h1>
            <p className={styles.heroTagline}>{service.tagline}</p>
            <p className={styles.heroDesc}>{service.heroDesc}</p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroCta}>
                Get a Quote →
              </Link>
              <a href="#process" className={styles.heroSecondary}>
                See Our Process
              </a>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.illustrationWrapper}>
              {illustration}
              <div className={styles.illustrationGlow} style={{ background: `radial-gradient(circle, ${service.accentColor}22 0%, transparent 70%)` }} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            METRICS STATS BAR
        ══════════════════════════════════════════════════════ */}
        <section className={styles.statsBar}>
          {service.metrics.map((metric, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statValue} style={{ color: service.accentColor }}>{metric.value}</div>
              <div className={styles.statLabel}>{metric.label}</div>
            </div>
          ))}
        </section>

        {/* ══════════════════════════════════════════════════════
            WHAT WE DELIVER
        ══════════════════════════════════════════════════════ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Deliver</h2>
            <p className={styles.sectionSubtitle}>
              We tailor every engagement to your roadmap — from discovery and design through engineering, QA, and launch.
            </p>
          </div>
          <div className={styles.deliverGrid}>
            <div className={styles.deliverList}>
              {service.whatWeDeliver.map((item, i) => (
                <div key={i} className={styles.deliverItem}>
                  <span className={styles.deliverCheck} style={{ color: service.accentColor }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className={styles.engagementBox}>
              <div className={styles.engagementTitle}>Engagement snapshot</div>
              {["Discovery & estimation", "Design & prototyping", "Agile delivery with demos", "QA automation & UAT", "Launch & hypercare", "Monitoring & optimisation"].map((step, i) => (
                <div key={i} className={styles.engagementStep}>
                  <span className={styles.engagementDot} style={{ background: service.accentColor }} />
                  <span>{step}</span>
                </div>
              ))}
              <Link href="/contact" className={styles.engagementCta} style={{ background: service.accentColor }}>
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            WHY US — full-width narrative
        ══════════════════════════════════════════════════════ */}
        <section className={styles.whySection}>
          <div className={styles.whyInner}>
            <div className={styles.whyIcon}>💡</div>
            <div>
              <h2 className={styles.whySectionTitle}>Why AutoHub Labs?</h2>
              <p className={styles.whyText}>{service.whyUs}</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FEATURES / SERVICES GRID
        ══════════════════════════════════════════════════════ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{service.name} Services</h2>
          </div>
          <div className={styles.featuresGrid}>
            {service.features.map((feature, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
                <div className={styles.featureBar} style={{ background: service.accentColor }} />
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PROCESS TIMELINE
        ══════════════════════════════════════════════════════ */}
        <section className={styles.section} id="process">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our {service.name} Process</h2>
            <p className={styles.sectionSubtitle}>
              A transparent, milestone-driven workflow that keeps you in full control from kickoff to launch.
            </p>
          </div>
          <div className={styles.processGrid}>
            {service.howWeBuild.map((item, i) => (
              <div key={i} className={styles.processCard}>
                <div className={styles.processNum} style={{ color: service.accentColor, borderColor: `${service.accentColor}40` }}>{item.step}</div>
                <div className={styles.processContent}>
                  <h3 className={styles.processTitle}>{item.title}</h3>
                  <p className={styles.processDesc}>{item.desc}</p>
                </div>
                {i < service.howWeBuild.length - 1 && (
                  <div className={styles.processArrow} style={{ color: service.accentColor }}>→</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            TECH STACK
        ══════════════════════════════════════════════════════ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Technologies & Tools</h2>
          </div>
          <div className={styles.techOuter}>
            {Object.entries(service.techStack).map(([category, items]) => (
              <div key={category} className={styles.techCategory}>
                <div className={styles.techCatLabel}>{category}</div>
                <div className={styles.techPills}>
                  {items.map((tech) => (
                    <span key={tech} className={styles.techPill}>
                      <span>{TECH_ICONS[tech] || "🔧"}</span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqList}>
            {service.faqs.map((faq, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{faq.q}</span>
                  <span className={styles.faqChevron}>+</span>
                </summary>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════════════════════ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <p className={styles.sectionSubtitle}>
              Real feedback from real people we&apos;ve built for.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.testimonialTop}>
                  <div className={styles.testimonialAvatar} style={{ background: `${t.color}22`, border: `1.5px solid ${t.color}55`, color: t.color }}>
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
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CTA FINAL
        ══════════════════════════════════════════════════════ */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaGlow} style={{ background: `radial-gradient(circle at 50% 0%, ${service.accentColor}25 0%, transparent 65%)` }} />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to build something great?</h2>
            <p className={styles.ctaDesc}>
              Let&apos;s talk about your {service.name} requirements and design a custom solution for your business.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaBtnPrimary} style={{ background: `linear-gradient(135deg, ${service.accentColor}, #5B21B6)` }}>
                <span className={styles.ctaBtnDot} />
                Get Service / Get Quote
              </Link>
              <Link href="/services" className={styles.ctaBtnSecondary}>
                Explore Other Services →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

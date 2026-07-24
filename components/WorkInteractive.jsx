"use client";

import { useState } from "react";
import Link from "next/link";
import GlowCard from "./GlowCard";
import MagneticButton from "./MagneticButton";
import ScrollReveal from "./ScrollReveal";
import styles from "../app/work/work.module.css";

const PROJECTS_DATA = [
  {
    id: "college-ai",
    index: "01",
    category: "AI & Automation",
    title: "College AI Assistant & Knowledge Agent",
    subtitle: "RAG-powered student query assistant for a 3,000+ student university campus.",
    problem:
      "Admin staff were spending 4+ hours daily answering identical student questions about exam schedules, timetables, fee deadlines, and hostel rules via email and phone.",
    solution:
      "We ingested handbooks, timetables, and FAQs into a Pinecone vector database and constructed an NLP bot with system prompt guardrails. Deployed to the university website and Telegram.",
    outcome: "60% drop in admin queries",
    outcomeNum: "60%",
    outcomeSub: "Reduction in daily admin calls",
    techStack: ["Python", "OpenAI API", "Pinecone", "React", "Flask"],
    year: "2026",
    highlight: "Students preferred instant 3-second bot answers over waiting in physical queues.",
    clientRole: "Dean of Student Affairs",
    featured: true
  },
  {
    id: "techfest",
    index: "02",
    category: "Web Platforms",
    title: "National TechFest Registration Platform",
    subtitle: "Zero-downtime event infrastructure for 15+ concurrent national competitions.",
    problem:
      "The client's legacy portal crashed under 1,000 concurrent users during peak registration launch week the previous year.",
    solution:
      "We engineered a Next.js App Router platform backed by PostgreSQL connection pooling, Redis caching, and automated QR check-in ticket generation.",
    outcome: "5,000+ Registrations · 0 Downtime",
    outcomeNum: "5,000+",
    outcomeSub: "Registrations handled with zero lag",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Razorpay"],
    year: "2026",
    highlight: "Handled 5,000+ registrations on launch day with sub-400ms page load speeds.",
    clientRole: "Head of TechFest Operations",
    featured: false
  },
  {
    id: "workflow-manager",
    index: "03",
    category: "AI & Automation",
    title: "Executive Workflow Automation System",
    subtitle: "Automated daily reporting and multi-app data extraction pipeline for 4 department heads.",
    problem:
      "Managers were spending 2+ hours every morning manually pulling CSVs, building spreadsheets, and drafting update emails.",
    solution:
      "We built background Python scripts, Google Workspace API integrations, and Slack webhook bots that compile reports at 8:00 AM automatically.",
    outcome: "8+ Hours Saved Per Manager / Wk",
    outcomeNum: "8h+",
    outcomeSub: "Saved per executive every week",
    techStack: ["Python", "Zapier", "Google Workspace API", "REST APIs"],
    year: "2025",
    highlight: "'I forgot what I used to do with my mornings before this automated system.'",
    clientRole: "VP of Operations",
    featured: false
  },
  {
    id: "multi-sync",
    index: "04",
    category: "API Integration",
    title: "Multi-Platform Middleware & Sync Engine",
    subtitle: "Real-time bidirectional data synchronization layer across CRM, Invoicing, and Project tools.",
    problem:
      "Data lived in disconnected silos across HubSpot, QuickBooks, and Jira, causing frequent copy-paste errors and stale customer records.",
    solution:
      "Constructed a Node.js middleware layer with webhook event listeners and automated retry queues for instantaneous data sync.",
    outcome: "100% Data Accuracy · 0 Manual Entry",
    outcomeNum: "100%",
    outcomeSub: "Data synchronization accuracy",
    techStack: ["Node.js", "Webhooks", "PostgreSQL", "HubSpot API", "Stripe API"],
    year: "2025",
    highlight: "Eliminated mismatched invoice versions entirely across all 3 platforms.",
    clientRole: "Chief Technology Officer",
    featured: false
  },
  {
    id: "whatsapp-ngo",
    index: "05",
    category: "AI & Automation",
    title: "Community Outreach WhatsApp Agent",
    subtitle: "Automated broadcast & query routing agent reaching 1,200+ beneficiaries weekly.",
    problem:
      "An NGO needed to communicate critical updates to thousands of beneficiaries without forcing them to download a heavy new app.",
    solution:
      "Leveraged WhatsApp Business API and automated state machines to deliver targeted broadcasts, collect feedback, and route urgent queries to human volunteers.",
    outcome: "1,200+ Weekly Beneficiaries Reached",
    outcomeNum: "1,200+",
    outcomeSub: "Active weekly engaged users",
    techStack: ["WhatsApp Business API", "Node.js", "Twilio", "MongoDB"],
    year: "2025",
    highlight: "Near-zero manual effort needed to broadcast and track weekly community updates.",
    clientRole: "Program Director",
    featured: false
  }
];

const CATEGORIES = ["All Projects", "AI & Automation", "Web Platforms", "API Integration"];

export default function WorkInteractive() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => selectedCategory === "All Projects" || p.category === selectedCategory
  );

  const featuredProject = PROJECTS_DATA.find((p) => p.featured);

  return (
    <div className={styles.container}>
      {/* ── Page Header ── */}
      <div className={styles.header}>
        <ScrollReveal>
          <div className={styles.headerBadge}>
            <span className={styles.badgePulse} />
            CASE STUDIES & DELIVERED IMPACT
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className={styles.title}>
            Shipped products.<br />
            <span className="text-gradient-anim">Proven operational results.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className={styles.subtitle}>
            Every project here represents a solved operational bottleneck. No concept mocks — these are active systems saving teams real time every day.
          </p>
        </ScrollReveal>
      </div>

      {/* ── Category Filter Tabs ── */}
      <ScrollReveal delay={0.25}>
        <div className={styles.filterBar}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* ── Featured Hero Case Study ── */}
      {selectedCategory === "All Projects" && featuredProject && (
        <ScrollReveal delay={0.3}>
          <GlowCard className={styles.featuredCaseStudy} glowColor="99,102,241">
            <div className={styles.featuredBadgeRow}>
              <span className={styles.featuredTag}>FLAGSHIP CASE STUDY</span>
              <span className={styles.featuredYear}>{featuredProject.year}</span>
            </div>

            <div className={styles.featuredGrid}>
              <div className={styles.featuredContent}>
                <span className={styles.featuredCategory}>{featuredProject.category}</span>
                <h2 className={styles.featuredTitle}>{featuredProject.title}</h2>
                <p className={styles.featuredSub}>{featuredProject.subtitle}</p>

                <div className={styles.problemSolutionBox}>
                  <div className={styles.psCol}>
                    <span className={styles.psLabel}>THE BOTTLENECK</span>
                    <p className={styles.psText}>{featuredProject.problem}</p>
                  </div>
                  <div className={styles.psCol}>
                    <span className={styles.psLabel}>THE ENGINEERED SOLUTION</span>
                    <p className={styles.psText}>{featuredProject.solution}</p>
                  </div>
                </div>

                <div className={styles.featuredQuote}>
                  <span className={styles.quoteMark}>&ldquo;</span>
                  <p>{featuredProject.highlight}</p>
                  <span className={styles.quoteRole}>— {featuredProject.clientRole}</span>
                </div>
              </div>

              {/* Stats & Tech Panel */}
              <div className={styles.featuredSidePanel}>
                <div className={styles.statHeroBox}>
                  <span className={styles.statHeroNum}>{featuredProject.outcomeNum}</span>
                  <span className={styles.statHeroLabel}>{featuredProject.outcomeSub}</span>
                </div>

                <h4 className={styles.sideHeading}>TECHNOLOGY STACK</h4>
                <div className={styles.techPillGrid}>
                  {featuredProject.techStack.map((tech) => (
                    <span key={tech} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </ScrollReveal>
      )}

      {/* ── Asymmetric Projects Grid ── */}
      <div className={styles.projectsGrid}>
        {filteredProjects
          .filter((p) => selectedCategory !== "All Projects" || !p.featured)
          .map((p, idx) => (
            <ScrollReveal key={p.id} delay={idx * 0.1}>
              <GlowCard className={styles.projectCard} glowColor="139,92,246">
                <div className={styles.cardHeader}>
                  <div>
                    <span className={styles.cardCategory}>{p.category}</span>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                  </div>
                  <div className={styles.metricBadge}>
                    <span className={styles.metricBadgeNum}>{p.outcomeNum}</span>
                  </div>
                </div>

                <p className={styles.cardSub}>{p.subtitle}</p>

                <div className={styles.cardDetails}>
                  <div className={styles.detailBlock}>
                    <span className={styles.detailTitle}>Problem:</span>
                    <p className={styles.detailText}>{p.problem}</p>
                  </div>
                  <div className={styles.detailBlock}>
                    <span className={styles.detailTitle}>Solution:</span>
                    <p className={styles.detailText}>{p.solution}</p>
                  </div>
                </div>

                <div className={styles.cardQuote}>
                  <p>&ldquo;{p.highlight}&rdquo;</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.cardTechRow}>
                    {p.techStack.map((t) => (
                      <span key={t} className={styles.miniTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className={styles.cardYear}>{p.year}</span>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
      </div>

      {/* ── Bottom CTA ── */}
      <ScrollReveal>
        <div className={styles.bottomCtaBox}>
          <h2 className={styles.bottomCtaTitle}>Have a workflow that needs solving?</h2>
          <p className={styles.bottomCtaSub}>
            Let&apos;s talk through your manual bottlenecks and design an automated system.
          </p>
          <MagneticButton href="/contact" className={styles.bottomCtaBtn}>
            Start a Scoping Conversation &rarr;
          </MagneticButton>
        </div>
      </ScrollReveal>
    </div>
  );
}

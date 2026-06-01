import Link from "next/link";
import styles from "./work.module.css";

export const metadata = {
  title: "Work | AUTOHUB",
  description:
    "Projects we've built — bots, platforms, and automation systems. Real problems, real solutions.",
};

const projects = [
  {
    index: "01",
    category: "AI & Automation",
    title: "College AI ChatBot",
    description:
      "A college admin team was drowning in repetitive student questions — exam schedules, results, fee deadlines, hostel info. Students messaged staff at all hours. We built an NLP-powered chatbot trained directly on the college's own data: handbooks, timetables, FAQs, announcements. It went live on the college website and started handling queries round the clock. Admin staff could finally breathe. No more copy-pasting the same answers 50 times a day.",
    highlight: "What surprised everyone: students actually preferred the bot for quick answers. They didn't want to wait in a queue — they just wanted the info, fast.",
    outcome: "60% drop in admin queries",
    stack: ["Python", "NLP", "React", "Flask", "OpenAI"],
    year: "2026",
  },
  {
    index: "02",
    category: "Web Development",
    title: "National TechFest Platform",
    description:
      "A national-level college tech festival with 15+ events, hundreds of teams, and thousands of participants from across the country — all trying to register at the same time. The previous year, their system crashed. They came to us a month before the event. We built the whole thing from scratch: a fast, reliable platform that handled multi-event registrations, team formation, payment verification, live event updates, and result announcements. On launch day, 5,000+ registrations came in. Zero downtime.",
    highlight: "We monitored it live through the event night. One bug surfaced at 11pm — fixed and deployed in under 10 minutes without anyone noticing.",
    outcome: "5,000+ registrations, zero downtime",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Vercel", "Razorpay"],
    year: "2026",
  },
  {
    index: "03",
    category: "Business Automation",
    title: "Manager Workflow Automation",
    description:
      "Four managers. Each spending 2+ hours a day on the same things: pulling reports from different tools, copying data into spreadsheets, sending status update emails, chasing approvals. We mapped each person's workflow, found the patterns, and automated them. Custom Python scripts, Zapier integrations, Google Workspace connections. One manager's daily report that took 45 minutes to compile? Now it generates and emails itself every morning at 8am.",
    highlight: "One of them told us after two weeks: 'I forgot what I used to do with my mornings.' That stuck with us.",
    outcome: "8+ hours saved per manager, per week",
    stack: ["Python", "Zapier", "Google Workspace", "API Integration", "Sheets API"],
    year: "2025",
  },
  {
    index: "04",
    category: "API Integration",
    title: "Multi-Platform Data Sync System",
    description:
      "A growing business was using three separate tools — a CRM, a project tracker, and an invoicing system — that had no idea about each other. Leads entered in one place had to be manually added to the others. Updates didn't sync. People were working off stale data. We built a middleware layer that connected all three via their APIs, with webhook triggers and a central sync engine. Every update in one system now propagates automatically. No manual entry, no version mismatches.",
    highlight: "The team lead said the first week after launch was 'weirdly quiet' because nobody was shouting about mismatched data anymore.",
    outcome: "3 platforms fully synced, 0 manual data entry",
    stack: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL", "Zapier"],
    year: "2025",
  },
  {
    index: "05",
    category: "WhatsApp Bot",
    title: "Community Outreach Bot",
    description:
      "A local NGO needed a way to reach thousands of beneficiaries with updates, reminders, and information — but didn't have the budget for a full app or the technical team to maintain one. WhatsApp was already on everyone's phone. We built a bot that could send scheduled messages, collect responses, route queries to the right volunteers, and track who'd received what information. Simple on the outside. Smart on the inside.",
    highlight: "Within the first month it was reaching 1,200+ people per week with near-zero manual effort from the NGO team.",
    outcome: "1,200+ people reached weekly",
    stack: ["WhatsApp Business API", "Node.js", "Twilio", "MongoDB"],
    year: "2025",
  },
];

export default function WorkPage() {
  return (
    <main className="page">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="mono" style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
            Selected Work
          </p>
          <h1 className={styles.title}>
            Real projects.<br />
            <span className="text-chrome">Real results.</span>
          </h1>
          <p className={styles.subtitle}>
            Every project here started with a real problem someone was stuck with. No mockups,
            no concept pieces — these shipped, they're live, and they're saving people time right now.
          </p>
        </div>

        {/* Projects List */}
        <div className={styles.list}>
          {projects.map((p) => (
            <article key={p.index} className={styles.item}>
              <div className={styles.meta}>
                <span className="mono" style={{ color: "var(--text-muted)" }}>{p.index}</span>
                <span className="mono" style={{ color: "var(--text-muted)" }}>{p.year}</span>
              </div>

              <div className={styles.body}>
                <p className={`mono ${styles.category}`}>{p.category}</p>
                <h2 className={styles.projectTitle}>{p.title}</h2>
                <p className={styles.desc}>{p.description}</p>

                {p.highlight && (
                  <blockquote className={styles.highlight}>
                    <span className={styles.highlightMark}>"</span>
                    {p.highlight}
                  </blockquote>
                )}

                <div className={styles.outcome}>
                  <span className="mono" style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
                    OUTCOME
                  </span>
                  <p className={styles.outcomeText}>{p.outcome}</p>
                </div>

                <div className={styles.stack}>
                  {p.stack.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <p className={`mono ${styles.ctaEye}`}>What's next?</p>
          <h2 className={styles.ctaTitle}>
            Your project could<br />
            <span className="text-chrome">be next on this list.</span>
          </h2>
          <p className={styles.ctaSub}>
            We're always working on something new. If you've got a problem that needs solving —
            a workflow that's too slow, a process that needs automating, a platform that needs building —
            let's have a conversation about it.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Start a Project →
            </Link>
            <Link href="/services" className={styles.ctaSecondary}>
              See What We Build
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

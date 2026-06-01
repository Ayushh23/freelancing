import Link from "next/link";
import Image from "next/image";
import styles from "./services.module.css";

export const metadata = {
  title: "Services | AUTOHUB",
  description:
    "From AI bots to full-stack platforms — here's exactly what we build and how we can help you.",
};

const services = [
  {
    number: "01",
    title: "Automation & Smart Bots",
    tagline: "You're doing work a computer should be doing. Let's change that.",
    description:
      "Honestly? Most of the stuff eating your day doesn't need a human. Report generation, data entry, email follow-ups, syncing spreadsheets — we've seen it all. We come in, understand what's draining your time, and build systems that handle it automatically. Python scripts, Zapier flows, N8N pipelines, custom bots — whatever it takes. You describe the pain, we engineer the fix.",
    bullets: [
      "Automated reporting pipelines that run on schedule",
      "Email sequences and outreach bots",
      "Data entry and cross-platform sync automation",
      "Internal workflow automation for teams",
    ],
    tags: ["Python", "Zapier", "N8N", "APIs", "Chatbots", "Google Workspace"],
    image: "/service_automation.png",
  },
  {
    number: "02",
    title: "Web Platforms & Apps",
    tagline: "Your idea deserves an internet home that actually works.",
    description:
      "We've built everything from event platforms handling thousands of users to internal dashboards your team actually enjoys using. We don't just throw a template at you. We think through the flows, the edge cases, the load scenarios — then build something clean, fast, and reliable. Next.js, React, Node.js, databases — we handle the full stack. Front-end to back-end to deployment.",
    bullets: [
      "Full-stack web apps (Next.js / React / Node.js)",
      "Event & registration platforms",
      "Business dashboards with live data",
      "APIs, admin panels, and CMS integrations",
    ],
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "MongoDB", "Vercel"],
    image: "/service_web.png",
  },
  {
    number: "03",
    title: "Custom AI Bots",
    tagline: "Your own AI — trained on your data, living in your tools.",
    description:
      "Not a generic chatbot. Not a widget that says 'How can I help you today?' and then breaks. A real AI assistant that knows your content, speaks your language, and actually answers questions. We've built bots for colleges that handle 100s of student queries a day, and bots for businesses that work directly inside WhatsApp or Slack. Tell us where it needs to live — we'll make it happen.",
    bullets: [
      "LLM-powered bots trained on your documents and data",
      "WhatsApp, Telegram, Slack, or website integrations",
      "FAQ bots, student query bots, support agents",
      "Ongoing fine-tuning and improvement",
    ],
    tags: ["OpenAI", "LangChain", "NLP", "WhatsApp API", "Slack", "Pinecone"],
    image: "/service_ai_bots.png",
  },
  {
    number: "04",
    title: "API Integrations & Third-Party Connections",
    tagline: "Your tools aren't talking to each other. We fix that.",
    description:
      "You use five different tools. None of them know about each other. Data lives in silos. You're copying things manually between systems. Sound familiar? We connect your platforms — CRMs, payment gateways, project management tools, communication channels — so information flows automatically where it needs to go. One action, everything updates.",
    bullets: [
      "CRM, payment, and SaaS API integrations",
      "Webhook setups and event-driven automations",
      "Real-time data syncing between platforms",
      "Custom middleware and adapter layers",
    ],
    tags: ["REST APIs", "GraphQL", "Webhooks", "Stripe", "Notion", "Airtable"],
    image: "/service_api.png",
  },
  {
    number: "05",
    title: "TechFest & Event Platforms",
    tagline: "Big events need infrastructure that doesn't break at 2am.",
    description:
      "We've been there — the night before a national-level event, thousands of registrations hitting at once, and a platform that needs to stay up no matter what. We specialize in building event platforms that are battle-tested before launch. Registration flows, team management, result announcements, live leaderboards, QR check-ins — the whole system, so you can focus on running a great event.",
    bullets: [
      "Multi-event registration systems",
      "Team and participant management dashboards",
      "Live results and announcement boards",
      "QR-based check-in and verification systems",
    ],
    tags: ["Next.js", "PostgreSQL", "Real-time", "QR Codes", "Node.js"],
    image: "/service_techfest.png",
  },
  {
    number: "06",
    title: "Consultation & Workflow Audit",
    tagline: "Not sure what you need? That's exactly what we're here for.",
    description:
      "Sometimes you don't need code right away. You need someone to sit down, look at how your team operates, and tell you honestly: 'Here's where you're bleeding time. Here's what we'd build first. Here's what's not worth automating.' We offer workflow audits where we map your current process, spot the bottlenecks, and hand you a clear, prioritized action plan — whether you build with us or not.",
    bullets: [
      "30-minute discovery and workflow review call",
      "Process mapping and bottleneck identification",
      "Prioritized automation roadmap",
      "Tech stack recommendations with no vendor bias",
    ],
    tags: ["Consulting", "Workflow Audit", "Process Mapping", "Strategy"],
    image: "/service_consulting.png",
  },
  {
    number: "07",
    title: "Social Media Management",
    tagline: "Your brand deserves a presence that actually gets noticed.",
    description:
      "Most businesses know they should be on Instagram. Very few know what to post, when to post it, and why it's not working. We take your social media off your plate entirely. From strategy and content calendars to caption writing, graphic design, posting, and growth tracking — we run it like a marketing team, without the overhead of hiring one. Whether you're starting from zero or trying to fix a stalled account, we build a consistent, on-brand presence that actually converts.",
    bullets: [
      "Instagram, LinkedIn, and Facebook account management",
      "Content strategy, calendars, and caption writing",
      "Graphic and reel creation tailored to your brand",
      "Growth tracking, engagement reporting, and monthly reviews",
    ],
    tags: ["Instagram", "LinkedIn", "Content Strategy", "Reels", "Growth", "Branding"],
  },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="mono" style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
            What We Do
          </p>
          <h1 className={styles.title}>
            Services built around<br />
            <span className="text-chrome">your actual problems.</span>
          </h1>
          <p className={styles.subtitle}>
            We don't do vague retainers or one-size-fits-all packages. Every project starts with
            understanding what's broken, what's slow, and what needs to work better. Then we build it.
          </p>
        </div>

        {/* Services List */}
        <div className={styles.list}>
          {services.map((s) => (
            <div key={s.number} className={styles.item}>
              <div className={`mono ${styles.number}`}>{s.number}</div>
              <div className={styles.body}>
                <h2 className={styles.serviceTitle}>{s.title}</h2>
                <p className={styles.tagline}>{s.tagline}</p>
                <p className={styles.desc}>{s.description}</p>

                <ul className={styles.bullets}>
                  {s.bullets.map((b) => (
                    <li key={b} className={styles.bullet}>
                      <span className={styles.bulletDot}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>

                {s.image ? (
                  <div className={styles.imgWrap}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={900}
                      height={420}
                      className={styles.serviceImg}
                    />
                  </div>
                ) : (
                  <div className={styles.imgPlaceholder} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaEye + " mono"}>Ready to get started?</p>
          <h2 className={styles.ctaTitle}>
            Tell us what's slowing you down.<br />
            <span className="text-chrome">We'll take it from there.</span>
          </h2>
          <p className={styles.ctaSub}>
            No forms with 20 fields. Just a short message about your situation — and we'll come
            back with a real plan, not a sales pitch.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Start a Conversation →
          </Link>
        </div>
      </div>
    </main>
  );
}

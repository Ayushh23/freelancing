/**
 * ═══════════════════════════════════════════════════════════
 *  SERVICES CONFIGURATION — Single source of truth
 * ═══════════════════════════════════════════════════════════
 *
 *  ➕ ADD a service: paste a new object into the SERVICES array
 *  ➖ DELETE a service: remove its object from the array
 *  ✏️  EDIT: update any field — changes auto-propagate everywhere
 *
 *  Fields:
 *   id          — URL slug (keep lowercase, use hyphens)
 *   name        — Short display name (Navbar dropdown)
 *   tagline     — One-line power statement
 *   shortDesc   — 2-sentence dropdown sub-text
 *   heroDesc    — 3-4 sentence paragraph for hero section
 *   whyUs       — Why choose AutoHub Labs (displayed in its own card)
 *   metrics     — 4-5 key stats shown in the stats bar
 *   whatWeDeliver — bullet list of deliverables
 *   features    — Cards with title + description (rich "Services" grid)
 *   howWeBuild  — Numbered process steps (title + desc)
 *   techStack   — Object of category → string[] (e.g. languages, frameworks)
 *   faqs        — Frequently asked questions (q + a)
 *   accentColor — Optional hex accent for per-service gradient tinting
 */
export const SERVICES = [
  /* ─────────────────────────────────────────────────────── */
  /*  APP DEV                                                */
  /* ─────────────────────────────────────────────────────── */
  {
    id: "app-dev",
    name: "App Dev",
    tagline: "Mobile & Native Application Engineering",
    shortDesc: "Bespoke iOS & Android mobile apps engineered for speed and fluid UX.",
    heroDesc:
      "As a premier mobile engineering studio, AutoHub Labs delivers cutting-edge iOS and Android applications that power businesses across diverse industries. Our expert developers leverage the latest SDKs and best practices to build scalable, high-performance apps that drive real engagement — from concept all the way to live deployment.",
    whyUs:
      "We combine native performance with beautiful design to ship mobile apps that users actually love using. Every project includes a dedicated PM, daily progress updates, and 30 days of post-launch support.",
    metrics: [
      { value: "99.9%", label: "App Uptime" },
      { value: "< 1.5s", label: "Cold Start Time" },
      { value: "4.8★", label: "Avg Store Rating" },
      { value: "2 Weeks", label: "MVP Delivery" },
    ],
    whatWeDeliver: [
      "Seamless native iOS & Android builds (Swift / Kotlin)",
      "Cross-platform React Native & Flutter development",
      "Offline-first local database support",
      "Real-time push notifications & background sync",
      "App Store & Play Store publishing + ASO optimization",
      "Post-launch monitoring & crash reporting setup",
    ],
    features: [
      {
        title: "Native iOS & Android",
        desc: "Pure native builds in Swift and Kotlin for peak performance, battery efficiency, and access to every platform API.",
        icon: "📱",
      },
      {
        title: "Cross-Platform (Flutter/RN)",
        desc: "One codebase, two stores. Ship beautiful, performant apps on both platforms without doubling development time.",
        icon: "⚡",
      },
      {
        title: "Modern UI/UX Design",
        desc: "Pixel-perfect interfaces following Material 3 and HIG guidelines. Every tap, scroll, and transition is deliberate.",
        icon: "🎨",
      },
      {
        title: "Play & App Store Launch",
        desc: "Complete store listing optimisation, ASO strategies, and seamless publishing so your app is discoverable day one.",
        icon: "🚀",
      },
      {
        title: "API & Backend Integration",
        desc: "Robust REST & GraphQL integrations, auth flows, payment gateways, and third-party SDK wiring.",
        icon: "🔗",
      },
      {
        title: "QA & Device Testing",
        desc: "Automated Espresso / XCTest suites plus manual testing across 20+ real device profiles.",
        icon: "🧪",
      },
    ],
    howWeBuild: [
      { step: "01", title: "Discovery & Scoping", desc: "We map out your target users, core flows, and feature priority list in a focused 30-min session." },
      { step: "02", title: "Wireframes & Prototypes", desc: "Interactive Figma prototypes let you feel the UX before a single line of code is written." },
      { step: "03", title: "Agile Development Sprints", desc: "Weekly demos, daily standups, and a shared Notion board keep you in full control of the build." },
      { step: "04", title: "QA & Performance Testing", desc: "Multi-device automated test suites + manual regression across all target OS versions." },
      { step: "05", title: "Launch & Hypercare", desc: "Store submission, marketing assets, and 30-day post-launch monitoring included as standard." },
    ],
    techStack: {
      Languages: ["Swift", "Kotlin", "Dart", "TypeScript"],
      Frameworks: ["Flutter", "React Native", "Jetpack Compose", "SwiftUI"],
      Backend: ["Firebase", "Supabase", "Node.js", "FastAPI"],
      Testing: ["Espresso", "XCTest", "Detox", "Jest"],
    },
    faqs: [
      { q: "How long does it take to build a mobile app?", a: "A focused MVP typically takes 2–4 weeks. Full-featured production apps run 6–12 weeks depending on scope." },
      { q: "Do you build for both iOS and Android?", a: "Yes — we offer native (Swift/Kotlin) and cross-platform (Flutter/React Native) builds. We recommend the right approach after scoping." },
      { q: "Will you publish the app to the stores?", a: "Absolutely. We handle the full submission process including store assets, privacy policy, and compliance review." },
      { q: "What happens after the app is live?", a: "Every project includes 30 days of complimentary post-launch support with crash monitoring and minor fixes." },
    ],
    accentColor: "#7C3AED",
  },

  /* ─────────────────────────────────────────────────────── */
  /*  SOFTWARE DEV                                           */
  /* ─────────────────────────────────────────────────────── */
  {
    id: "software-dev",
    name: "Software Dev",
    tagline: "Custom Enterprise Software & Scalable Systems",
    shortDesc: "Robust system software and databases built to handle complex business logic.",
    heroDesc:
      "AutoHub Labs engineers bespoke desktop, backend, and system-level software that solves the hard operational problems other agencies avoid. From high-throughput data pipelines to secure multi-tenant SaaS backends — we design for correctness, performance, and long-term maintainability.",
    whyUs:
      "Enterprise software projects fail because of unclear requirements and poor architecture decisions made early. We invest heavily in the discovery and design phase so what we build is exactly what you need — not a costly approximation.",
    metrics: [
      { value: "100%", label: "Data Accuracy" },
      { value: "< 200ms", label: "API Response" },
      { value: "99.95%", label: "System Uptime" },
      { value: "5–8 Days", label: "Avg Delivery" },
    ],
    whatWeDeliver: [
      "Bespoke desktop apps (Windows, macOS, Linux)",
      "High-throughput backend APIs & microservices",
      "Custom admin dashboards & internal tooling",
      "Database design, migrations & optimisation",
      "CI/CD pipelines & infrastructure-as-code",
      "Security audits & penetration test remediation",
    ],
    features: [
      {
        title: "Desktop Applications",
        desc: "Native Windows / macOS / Linux apps built with Electron, Tauri, or .NET — whichever fits your team's workflow.",
        icon: "🖥️",
      },
      {
        title: "Scalable Microservices",
        desc: "Event-driven architecture with message queues, containerised services, and auto-scaling Kubernetes clusters.",
        icon: "⚙️",
      },
      {
        title: "Database Engineering",
        desc: "Schema design, query optimisation, migration scripts, and replication strategies across SQL and NoSQL systems.",
        icon: "🗄️",
      },
      {
        title: "DevOps & CI/CD",
        desc: "Automated deployment pipelines, infra-as-code with Terraform, Docker, and zero-downtime release strategies.",
        icon: "🔄",
      },
      {
        title: "Security & Compliance",
        desc: "End-to-end encryption, OWASP hardening, GDPR/SOC 2 readiness reviews and penetration test remediation.",
        icon: "🔐",
      },
      {
        title: "Admin & Internal Tools",
        desc: "Custom dashboards, CRM extensions, and internal workflows that replace expensive off-the-shelf subscriptions.",
        icon: "📊",
      },
    ],
    howWeBuild: [
      { step: "01", title: "Requirements Deep-Dive", desc: "We map every business rule, edge case, and integration surface before opening a code editor." },
      { step: "02", title: "Architecture Blueprint", desc: "A clear system design doc with component diagrams, data flows, and technology decisions — signed off before build." },
      { step: "03", title: "Modular Implementation", desc: "Backend built in testable, independently deployable modules with comprehensive API documentation." },
      { step: "04", title: "Automated QA & Load Testing", desc: "Unit, integration, and load tests ensure correctness and that the system won't buckle under real traffic." },
      { step: "05", title: "Deployment & Handover", desc: "Full infrastructure setup, runbooks, and a structured knowledge-transfer session so your team owns the code." },
    ],
    techStack: {
      Languages: ["Python", "TypeScript", "Go", "C#"],
      Frameworks: ["FastAPI", "Node.js", "Electron", "Tauri"],
      Databases: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse"],
      DevOps: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    },
    faqs: [
      { q: "How do you handle changing requirements mid-project?", a: "We use agile sprints with a change-request process that gives you flexibility without blowing the budget or timeline." },
      { q: "Do you write tests for the code you deliver?", a: "Always. Every module ships with unit and integration tests. We also set up CI pipelines that run them on every push." },
      { q: "Can you work with our existing codebase?", a: "Yes — we do audits, refactors, and feature additions on existing codebases. We'll tell you honestly if something needs to be rebuilt." },
      { q: "Who owns the code at the end?", a: "You do, 100%. We hand over all source code, credentials, and documentation with no ongoing licensing fees." },
    ],
    accentColor: "#10B981",
  },

  /* ─────────────────────────────────────────────────────── */
  /*  WEB DEV                                                */
  /* ─────────────────────────────────────────────────────── */
  {
    id: "web-dev",
    name: "Web Dev",
    tagline: "High-Performance Full-Stack Web Platforms",
    shortDesc: "Stunning, lightning-fast Next.js websites optimized for conversions.",
    heroDesc:
      "From SaaS products to bespoke corporate platforms — AutoHub Labs builds web experiences that load instantly, rank on Google, and convert visitors into customers. We use the latest Next.js server components, edge rendering, and conversion-rate-optimisation best practices on every project.",
    whyUs:
      "Most agencies hand you a beautiful website that scores 40 on PageSpeed. We obsess over Core Web Vitals from day one. Every site we ship hits 95+ on Lighthouse and includes a full SEO foundation ready to rank.",
    metrics: [
      { value: "99/100", label: "Lighthouse Score" },
      { value: "< 0.4s", label: "LCP" },
      { value: "10k+", label: "Req / min capacity" },
      { value: "2 Weeks", label: "Avg Delivery" },
    ],
    whatWeDeliver: [
      "Next.js full-stack platforms and SaaS applications",
      "Conversion-optimised landing pages & corporate sites",
      "E-commerce with Stripe/Razorpay checkout flows",
      "Headless CMS integration (Sanity, Contentful, Strapi)",
      "Auth systems (NextAuth, Clerk, custom JWT)",
      "SEO infrastructure, sitemap, schema, and meta setup",
    ],
    features: [
      {
        title: "Next.js Full-Stack",
        desc: "Server components, app router, and edge functions for the fastest possible TTFB on every page.",
        icon: "⚡",
      },
      {
        title: "E-Commerce & Payments",
        desc: "Custom storefronts with Stripe, Razorpay, and LemonSqueezy — including subscriptions and one-click checkout.",
        icon: "🛒",
      },
      {
        title: "CMS & Content Pipeline",
        desc: "Headless CMS setup so your team can edit copy, publish blogs, and update products without touching code.",
        icon: "✍️",
      },
      {
        title: "SEO & Core Web Vitals",
        desc: "Technical SEO foundation: sitemap, robots, schema markup, open graph, and 95+ Lighthouse scores out of the box.",
        icon: "🔍",
      },
      {
        title: "Authentication & Auth",
        desc: "Secure user auth with role-based access control, social logins, MFA, and session management.",
        icon: "🔐",
      },
      {
        title: "API & Integrations",
        desc: "CRM, analytics, email marketing, and third-party webhooks wired seamlessly into your platform.",
        icon: "🔗",
      },
    ],
    howWeBuild: [
      { step: "01", title: "Discovery & Information Architecture", desc: "We map your sitemap, user journeys, and conversion goals before design begins." },
      { step: "02", title: "Design System & Prototypes", desc: "Figma design system with components, colour tokens, and interactive page prototypes." },
      { step: "03", title: "Development & Integration", desc: "Next.js build with all third-party integrations wired up and tested in a staging environment." },
      { step: "04", title: "Performance & SEO Audit", desc: "Lighthouse CI, Core Web Vitals review, and technical SEO checklist before go-live." },
      { step: "05", title: "Launch & Growth Support", desc: "Zero-downtime deployment, analytics setup, and 30 days of post-launch monitoring included." },
    ],
    techStack: {
      Frontend: ["Next.js 16", "React 19", "TypeScript", "Framer Motion"],
      Styling: ["CSS Modules", "TailwindCSS", "Radix UI"],
      Backend: ["Node.js", "tRPC", "PostgreSQL", "Supabase"],
      Hosting: ["Vercel", "AWS", "Cloudflare"],
    },
    faqs: [
      { q: "Do you build custom designs or use templates?", a: "Everything is custom-designed from scratch. We don't use WordPress themes or template marketplaces." },
      { q: "How do you ensure the site ranks on Google?", a: "Technical SEO is built in from day one: clean HTML, schema markup, sitemaps, fast loading, and optimised meta on every page." },
      { q: "Can my team update content after launch?", a: "Yes — we wire in a headless CMS so non-technical team members can edit copy, images, and blog posts easily." },
      { q: "What hosting do you recommend?", a: "Vercel for most Next.js projects, AWS for high-traffic or compliance-heavy applications. We handle the setup either way." },
    ],
    accentColor: "#06B6D4",
  },

  /* ─────────────────────────────────────────────────────── */
  /*  AUTOMATIONS                                            */
  /* ─────────────────────────────────────────────────────── */
  {
    id: "automations",
    name: "Automations",
    tagline: "AI Agents & Intelligent Workflow Automations",
    shortDesc: "End-to-end background processes and custom AI agents to save human hours.",
    heroDesc:
      "Most operational bottlenecks hide in plain sight: manual spreadsheet cross-referencing, copy-paste data transfers, and repetitive reporting. AutoHub Labs architects Python pipelines, N8N orchestrations, and native API bridges that execute silently in the background — giving your team back 15+ hours every week.",
    whyUs:
      "Automation projects fail when they're brittle. We build with error-handling, retry logic, and alerting built in from the start so your pipelines don't silently break at 3am and no one notices until Monday.",
    metrics: [
      { value: "15+ hrs", label: "Saved per Week" },
      { value: "99.9%", label: "Pipeline Reliability" },
      { value: "< 5 Days", label: "Avg Setup Time" },
      { value: "0", label: "Manual Steps Remaining" },
    ],
    whatWeDeliver: [
      "Scheduled data extraction & auto-generated report emails",
      "Multi-system database & spreadsheet sync engines",
      "Custom N8N / Zapier / Make webhook pipelines",
      "RAG-based AI agents trained on your documentation",
      "Error monitoring, alerting & automated fallback handlers",
      "Real-time analytics dashboards for pipeline visibility",
    ],
    features: [
      {
        title: "Workflow Orchestration",
        desc: "Visual N8N pipelines or custom Python schedulers that chain together any combination of apps, APIs, and databases.",
        icon: "🔄",
      },
      {
        title: "Custom AI Agents (RAG)",
        desc: "Domain-specific chatbots that answer questions strictly from your internal documentation — no hallucinations.",
        icon: "🤖",
      },
      {
        title: "Multi-System Data Sync",
        desc: "Bidirectional sync between CRM, spreadsheets, databases, and SaaS tools with transformation and deduplication.",
        icon: "🔀",
      },
      {
        title: "Automated Reporting",
        desc: "Scheduled PDF, Excel, and email reports pulled from live data sources and delivered on autopilot.",
        icon: "📄",
      },
      {
        title: "Error Monitoring & Alerts",
        desc: "Automatic Slack / email alerts when a pipeline step fails, plus retry logic and fallback handlers.",
        icon: "🚨",
      },
      {
        title: "API Middleware Layers",
        desc: "Custom middleware that translates and bridges between APIs that don't natively speak to each other.",
        icon: "⚙️",
      },
    ],
    howWeBuild: [
      { step: "01", title: "Operational Audit", desc: "We map every manual step, trigger, and data flow in your current process to find what can be eliminated." },
      { step: "02", title: "Pipeline Architecture", desc: "A clear diagram of all automated flows, triggers, transformations, and error paths — reviewed with you before build." },
      { step: "03", title: "Build & API Wiring", desc: "Pipelines built with secure credential handling, rate limiting, and full idempotency so they're safe to re-run." },
      { step: "04", title: "Testing & Dry Runs", desc: "Staged dry runs with dummy data followed by live shadow runs to catch edge cases before full go-live." },
      { step: "05", title: "Monitoring & Optimisation", desc: "Dashboard showing every pipeline run, alert setup, and monthly optimisation review included for 30 days." },
    ],
    techStack: {
      Orchestration: ["N8N", "Zapier", "Make (Integromat)", "Apache Airflow"],
      Languages: ["Python", "JavaScript", "Bash"],
      AI: ["OpenAI API", "LangChain", "Pinecone", "Ollama"],
      Infrastructure: ["Google Cloud", "AWS Lambda", "Redis", "Webhooks"],
    },
    faqs: [
      { q: "How fast can a typical automation be deployed?", a: "Most single-purpose automations are built, tested, and live within 4–7 business days." },
      { q: "What if an automation breaks after you hand it over?", a: "All pipelines include a 30-day support window. We also set up alerting so you'll know immediately if something goes wrong." },
      { q: "Can you automate processes that involve non-technical tools like Google Sheets?", a: "Absolutely — Sheets, Airtable, Notion, Slack, Gmail, WhatsApp and hundreds of other tools are all automatable." },
      { q: "Is my data safe during automation transfers?", a: "Yes. We use encrypted API connections, scoped OAuth tokens, and never store credentials in plaintext." },
    ],
    accentColor: "#F59E0B",
  },

  /* ─────────────────────────────────────────────────────── */
  /*  EVERYTHINGS                                            */
  /* ─────────────────────────────────────────────────────── */
  {
    id: "everythings",
    name: "Everythings",
    tagline: "Bespoke Consulting & Dynamic Engineering Solutions",
    shortDesc: "From custom scripts to legacy code fixes — if it involves code, we build it.",
    heroDesc:
      "Some projects don't fit a standard category — and that's exactly where we thrive. Whether you need a one-off Python script, a legacy codebase modernised, an MVP prototyped in 48 hours, or technical guidance on a complex architecture decision, AutoHub Labs is the team to call.",
    whyUs:
      "Our engineers have built across every major language, platform, and domain. When a problem is genuinely novel, we research, prototype, and deliver — rather than forcing your need into a service package that doesn't fit.",
    metrics: [
      { value: "48 hrs", label: "Prototype Turnaround" },
      { value: "Any Stack", label: "Technology Agnostic" },
      { value: "100%", label: "Source Code Ownership" },
      { value: "∞", label: "Problem Scope" },
    ],
    whatWeDeliver: [
      "Bespoke scripts, CLI tools, and system utilities",
      "Legacy codebase refactors and technical debt cleanup",
      "Rapid MVP & prototype builds (48–72 hr turnarounds)",
      "Technical architecture consulting & code reviews",
      "Cloud migrations and infrastructure modernisation",
      "IoT firmware integrations and embedded system scripts",
    ],
    features: [
      {
        title: "Rapid Prototyping",
        desc: "Working proof-of-concept in 48 hours. Enough to validate your idea, impress investors, or test the market.",
        icon: "⚡",
      },
      {
        title: "Legacy Modernisation",
        desc: "Methodical refactor of old codebases — upgrading frameworks, fixing security holes, and adding test coverage.",
        icon: "🔧",
      },
      {
        title: "Technical Consulting",
        desc: "Architecture reviews, technology selection, and code audits delivered as clear written recommendations.",
        icon: "📋",
      },
      {
        title: "Cloud Migrations",
        desc: "Move from on-premise or legacy hosting to modern cloud infrastructure with zero data loss and minimal downtime.",
        icon: "☁️",
      },
      {
        title: "Custom Tooling & Scripts",
        desc: "One-off automation scripts, data processing pipelines, CLI tools — whatever your dev team doesn't have time for.",
        icon: "🛠️",
      },
      {
        title: "IoT & Embedded Systems",
        desc: "Firmware scripts, hardware API bridges, and data collection pipelines for connected device projects.",
        icon: "📡",
      },
    ],
    howWeBuild: [
      { step: "01", title: "Ideation & Scoping", desc: "A focused conversation to understand the exact problem, desired outcome, and any hard constraints." },
      { step: "02", title: "Research & Planning", desc: "We investigate the best technical approach, document our plan, and align with you before any build work starts." },
      { step: "03", title: "Rapid Iteration", desc: "Agile micro-sprints with frequent check-ins so you can steer as clarity emerges." },
      { step: "04", title: "Review & Refinement", desc: "Shared staging environment and collaborative review sessions until the output is exactly right." },
      { step: "05", title: "Handover & Documentation", desc: "Full source code, environment setup docs, and a walkthrough session so your team can own and extend it." },
    ],
    techStack: {
      Languages: ["Python", "TypeScript", "Go", "Rust", "C++"],
      Cloud: ["AWS", "GCP", "Azure", "Fly.io"],
      Databases: ["PostgreSQL", "MongoDB", "SQLite", "Redis"],
      Other: ["Docker", "Raspberry Pi", "Arduino", "MQTT"],
    },
    faqs: [
      { q: "I have an idea but don't know if it's technically feasible — can you help?", a: "That's exactly the kind of conversation we love. Book a free 30-min discovery call and we'll give you an honest technical assessment." },
      { q: "Can you work on a time-and-materials basis?", a: "Yes. For exploratory or open-ended projects we offer hourly T&M engagements in addition to fixed-price project quotes." },
      { q: "How quickly can you start?", a: "Most projects can kick off within 24–48 hours of scope agreement." },
      { q: "What if the scope grows after we've started?", a: "We use a transparent change-request process. Any scope addition is quoted and approved before work begins." },
    ],
    accentColor: "#EC4899",
  },
];

"use client";

import { useState } from "react";
import Link from "next/link";
import GlowCard from "./GlowCard";
import MagneticButton from "./MagneticButton";
import ScrollReveal from "./ScrollReveal";
import styles from "../app/services/services.module.css";

const SERVICES_DATA = [
  {
    id: "automation",
    number: "01",
    title: "Automation & Workflow Engineering",
    subtitle: "Turn 15+ hours of weekly manual repetitive task drain into automated precision.",
    description:
      "Most operational bottlenecks are hidden in plain sight: manual spreadsheet cross-referencing, multi-app data transfers, scheduled client reporting, and manual notification triggers. We architect custom python pipelines, n8n orchestrations, and native API bridges that execute silently in the background.",
    deliverables: [
      "Scheduled data-extraction & auto-generated report emails",
      "Multi-system database & spreadsheet synchronization engine",
      "Custom Zapier / Make / N8N webhook trigger pipelines",
      "Error monitoring alerts & automated fallback handlers"
    ],
    techStack: ["Python", "N8N", "Zapier", "REST APIs", "Google Cloud", "Webhooks"],
    metrics: { timeSaved: "12-18 hrs/week", reliability: "99.9%", avgSetup: "5-7 Days" },
    diagramType: "pipeline"
  },
  {
    id: "web-platforms",
    number: "02",
    title: "Full-Stack Web Applications",
    subtitle: "High-concurrency, ultra-fast web platforms engineered for conversion & scale.",
    description:
      "From event registration hubs handling 5,000+ simultaneous users to bespoke internal executive dashboards — we build web apps that never lag or crash. Using Next.js Server Components, Turbopack, and optimized database queries, your platform will feel lightning fast.",
    deliverables: [
      "Full-stack React & Next.js web application architecture",
      "Custom REST & GraphQL API server endpoints",
      "Database schema design (PostgreSQL / MongoDB / Supabase)",
      "Payment gateway integration (Stripe / Razorpay / LemonSqueezy)"
    ],
    techStack: ["Next.js 16", "React 19", "Node.js", "PostgreSQL", "TailwindCSS", "Vercel"],
    metrics: { speedScore: "99/100", loadTime: "< 0.4s", capacity: "10k+ Req/min" },
    diagramType: "web"
  },
  {
    id: "ai-agents",
    number: "03",
    title: "Enterprise AI Agents & RAG Bots",
    subtitle: "Custom AI assistants trained strictly on your proprietary documentation & data.",
    description:
      "Say goodbye to hallucinating generic chatbots. We build domain-specific Retrieval-Augmented Generation (RAG) agents that ingest your company knowledge base, API docs, or customer support history. Deployed directly into your website, WhatsApp, or Slack.",
    deliverables: [
      "Vector database embeddings pipeline (Pinecone / Qdrant)",
      "LLM fine-tuning & prompt guardrail security engineering",
      "Multi-channel deployment (WhatsApp API, Telegram, Slack, Web Widget)",
      "Real-time analytics dashboard & query log monitoring"
    ],
    techStack: ["OpenAI API", "LangChain", "Pinecone", "Python", "WhatsApp API", "FastAPI"],
    metrics: { accuracy: "98.4%", deflectionRate: "65%", responseTime: "< 1.2s" },
    diagramType: "ai"
  },
  {
    id: "api-sync",
    number: "04",
    title: "API Middleware & Data Sync Engine",
    subtitle: "Unify fragmented SaaS tools into a single coherent real-time ecosystem.",
    description:
      "When your CRM, invoicing software, project tools, and marketing platforms don't speak to each other, human error is guaranteed. We construct custom middleware layers with real-time webhook listeners to keep every platform perfectly in sync.",
    deliverables: [
      "Bidirectional REST & GraphQL API synchronization layers",
      "Webhook processing queues with auto-retry on failure",
      "Data transformation, cleaning, and normalization logic",
      "Centralized log tracking & audit trail for all data transfers"
    ],
    techStack: ["Node.js", "Redis", "Webhooks", "Stripe API", "Airtable", "PostgreSQL"],
    metrics: { syncLatency: "< 200ms", dataAccuracy: "100%", manualHoursSaved: "10+ hrs/wk" },
    diagramType: "api"
  },
  {
    id: "event-infra",
    number: "05",
    title: "High-Traffic Event Infrastructure",
    subtitle: "Battle-tested digital event platforms built to withstand massive traffic spikes.",
    description:
      "National hackathons, tech festivals, and conferences require zero-downtime registration, team formation, live scoring, and instant check-in. We build high-resilience systems engineered for heavy spike loads.",
    deliverables: [
      "Multi-event participant registration & ticketing system",
      "Live leaderboards, schedule sync, & instant announcement engine",
      "QR-code generation & mobile check-in verification portal",
      "Role-based admin management dashboard"
    ],
    techStack: ["Next.js", "Node.js", "Real-Time Sockets", "PostgreSQL", "QR Engine"],
    metrics: { maxRegistrations: "5,000+", uptime: "100%", checkinSpeed: "2 sec/user" },
    diagramType: "event"
  }
];

const ESTIMATOR_OPTIONS = [
  { id: "auto", label: "Workflow & Script Automation", hours: 15, estDays: "4-6 Days" },
  { id: "web", label: "Full-Stack Web App / Platform", hours: 45, estDays: "2-3 Weeks" },
  { id: "ai", label: "Custom RAG AI Bot / Agent", hours: 30, estDays: "1-2 Weeks" },
  { id: "api", label: "API Middleware & Data Sync", hours: 20, estDays: "5-8 Days" },
  { id: "social", label: "Growth Strategy & Content", hours: 15, estDays: "Ongoing Retainer" },
];

const FAQS = [
  {
    q: "How fast can a typical automation or bot project be deployed?",
    a: "Most single-purpose automations and custom AI bots are built, tested, and deployed within 5 to 10 business days. Full-stack web platforms typically take 2 to 3 weeks."
  },
  {
    q: "Do you provide support after the project is launched?",
    a: "Yes! Every project includes 30 days of complimentary post-launch support, monitoring, and minor adjustments to ensure 100% operational peace of mind."
  },
  {
    q: "How does the custom AI RAG bot guarantee accurate answers?",
    a: "We index your verified internal documents, PDFs, and database tables into a secure vector store (Pinecone) with strict system prompt guardrails, ensuring the AI only answers based on your ground-truth data."
  },
  {
    q: "What is required from our team to start?",
    a: "A 30-minute discovery call where you explain your current manual bottleneck or project goal. We handle technical scoping, architectural design, build, and deployment."
  }
];

export default function ServicesInteractive() {
  const [activeTab, setActiveTab] = useState("automation");
  const [selectedEstimates, setSelectedEstimates] = useState(["auto", "ai"]);
  const [openFaq, setOpenFaq] = useState(null);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  const toggleEstimator = (id) => {
    setSelectedEstimates((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalSavedHours = selectedEstimates.reduce((acc, id) => {
    const item = ESTIMATOR_OPTIONS.find((o) => o.id === id);
    return acc + (item ? item.hours : 0);
  }, 0);

  // Calculate percentage of node connector height
  const selectedCount = selectedEstimates.length;
  const totalCount = ESTIMATOR_OPTIONS.length;
  const connectionHeight = totalCount > 1 ? (selectedCount > 0 ? ((selectedCount - 1) / (totalCount - 1)) * 100 : 0) : 0;

  return (
    <div className={styles.container}>
      {/* ── Page Header ── */}
      <div className={styles.header}>
        <ScrollReveal>
          <div className={styles.headerBadge}>
            <span className={styles.badgePulse} />
            ENGINEERING & CAPABILITIES
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className={styles.title}>
            Architected for efficiency.<br />
            <span className="text-gradient-anim">Built for measurable impact.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className={styles.subtitle}>
            We eliminate manual operational drag and construct high-performance digital infrastructure.
            No template hacks — every solution is custom-coded for your precise workflow.
          </p>
        </ScrollReveal>
      </div>

      {/* ── Interactive Service Tab Navigation ── */}
      <ScrollReveal delay={0.25}>
        <div className={styles.tabNav}>
          {SERVICES_DATA.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`${styles.tabBtn} ${activeTab === s.id ? styles.tabActive : ""}`}
            >
              <span className={styles.tabNum}>{s.number}</span>
              <span className={styles.tabTitle}>{s.title.split("&")[0]}</span>
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* ── Service Deep-Dive Showcase Card ── */}
      <ScrollReveal delay={0.3}>
        <GlowCard className={styles.showcaseCard} glowColor="99,102,241">
          <div className={styles.showcaseHeader}>
            <div>
              <div className={styles.serviceStatusRow}>
                <span className={styles.serviceNumLabel}>{activeService.number} / 05</span>
                <div className={styles.statusIndicator}>
                  <span className={styles.statusDot} />
                  SYSTEM ONLINE
                </div>
              </div>
              <h2 className={styles.showcaseTitle}>{activeService.title}</h2>
              <p className={styles.showcaseSubtitle}>{activeService.subtitle}</p>
            </div>
            <div className={styles.metricsGroup}>
              {Object.entries(activeService.metrics).map(([key, val]) => (
                <div key={key} className={styles.metricPill}>
                  <span className={styles.metricVal}>{val}</span>
                  <span className={styles.metricKey}>{key.replace(/([A-Z])/g, " $1")}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.showcaseGrid}>
            {/* Description & Deliverables */}
            <div className={styles.showcaseLeft}>
              <p className={styles.showcaseDesc}>{activeService.description}</p>

              <h4 className={styles.sectionHeading}>KEY DELIVERABLES & FEATURES</h4>
              <ul className={styles.deliverablesList}>
                {activeService.deliverables.map((item, i) => (
                  <li key={i} className={styles.deliverableItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className={styles.sectionHeading} style={{ marginTop: "1.5rem" }}>TECHNOLOGY STACK</h4>
              <div className={styles.techStackRow}>
                {activeService.techStack.map((tech) => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Visual Code / Architecture Diagram Mockup */}
            <div className={styles.showcaseRight}>
              <div className={styles.codeTerminal}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalDots}>
                    <span className={styles.dotRed} />
                    <span className={styles.dotYellow} />
                    <span className={styles.dotGreen} />
                  </div>
                  <span className={styles.terminalTitle}>{activeService.id}.config.ts — AutoHub Labs Pipeline</span>
                </div>
                <div className={styles.terminalBody}>
                  {activeService.id === "automation" && (
                    <pre className={styles.codeText}>
                      <code>
                        <span className={styles.kw}>import</span> &#123; Pipeline &#125; <span className={styles.kw}>from</span> <span className={styles.str}>&quot;@autohub-labs/engine&quot;</span>;{'\n\n'}
                        <span className={styles.cmt}>// Auto-executes report generation &amp; spreadsheet sync</span>{'\n'}
                        <span className={styles.kw}>export const</span> automation = <span className={styles.fn}>createPipeline</span>(&#123;{'\n'}
                        {'  '}schedule: <span className={styles.str}>&quot;0 8 * * 1-5&quot;</span>, <span className={styles.cmt}>// Mon-Fri at 8:00 AM</span>{'\n'}
                        {'  '}sources: [<span className={styles.str}>&quot;Stripe&quot;</span>, <span className={styles.str}>&quot;PostgreSQL&quot;</span>, <span className={styles.str}>&quot;Airtable&quot;</span>],{'\n'}
                        {'  '}actions: [{'\n'}
                        {'    '}type: <span className={styles.str}>&quot;GENERATE_PDF_SUMMARY&quot;</span>,{'\n'}
                        {'    '}notify: [<span className={styles.str}>&quot;Slack:#exec-updates&quot;</span>, <span className={styles.str}>&quot;Email:ceo@co.com&quot;</span>],{'\n'}
                        {'  '}]&#123;{'\n'}
                        &#125;);{'\n\n'}
                        <span className={styles.fn}>console</span>.<span className={styles.fn}>log</span>(<span className={styles.str}>&quot;⚡ Pipeline Active. 0 Manual Errors.&quot;</span>)<span className={styles.typingCursor}/>
                      </code>
                    </pre>
                  )}

                  {activeService.id === "web-platforms" && (
                    <pre className={styles.codeText}>
                      <code>
                        <span className={styles.kw}>import</span> &#123; AppRouter, Turbopack &#125; <span className={styles.kw}>from</span> <span className={styles.str}>&quot;next&quot;</span>;{'\n\n'}
                        <span className={styles.cmt}>// High-concurrency zero-downtime render</span>{'\n'}
                        <span className={styles.kw}>export default async function</span> <span className={styles.fn}>EventPlatform</span>() &#123;{'\n'}
                        {'  '}<span className={styles.kw}>const</span> metrics = <span className={styles.kw}>await</span> <span className={styles.fn}>getRealtimeMetrics</span>();{'\n'}
                        {'  '}<span className={styles.kw}>return</span> ({'\n'}
                        {'    '}&lt;<span className={styles.fn}>Layout</span> speedScore=&#123;<span className={styles.num}>99</span>&#125;&gt;{'\n'}
                        {'      '}&lt;<span className={styles.fn}>LiveLeaderboard</span> data=&#123;metrics&#125; /&gt;{'\n'}
                        {'      '}&lt;<span className={styles.fn}>InstantRegistration</span> limit=&#123;<span className={styles.num}>10000</span>&#125; /&gt;{'\n'}
                        {'    '}&lt;/<span className={styles.fn}>Layout</span>&gt;{'\n'}
                        {'  '});{'\n'}
                        &#125;<span className={styles.typingCursor}/>
                      </code>
                    </pre>
                  )}

                  {activeService.id === "ai-agents" && (
                    <pre className={styles.codeText}>
                      <code>
                        <span className={styles.kw}>import</span> &#123; RAGAgent, Pinecone &#125; <span className={styles.kw}>from</span> <span className={styles.str}>&quot;@autohub-labs/ai&quot;</span>;{'\n\n'}
                        <span className={styles.cmt}>// Strictly-grounded knowledge base response</span>{'\n'}
                        <span className={styles.kw}>const</span> agent = <span className={styles.kw}>new</span> <span className={styles.fn}>RAGAgent</span>(&#123;{'\n'}
                        {'  '}vectorStore: <span className={styles.str}>&quot;pinecone-company-docs&quot;</span>,{'\n'}
                        {'  '}guardrails: &#123; strictGrounding: <span className={styles.kw}>true</span>, maxTokens: <span className={styles.num}>250</span> &#125;,{'\n'}
                        {'  '}channels: [<span className={styles.str}>&quot;WhatsApp&quot;</span>, <span className={styles.str}>&quot;Website&quot;</span>, <span className={styles.str}>&quot;Slack&quot;</span>],{'\n'}
                        &#125;);{'\n\n'}
                        <span className={styles.kw}>await</span> agent.<span className={styles.fn}>answer</span>(<span className={styles.str}>&quot;What is the SLA for enterprise billing?&quot;</span>)<span className={styles.typingCursor}/>
                      </code>
                    </pre>
                  )}

                  {activeService.id === "api-sync" && (
                    <pre className={styles.codeText}>
                      <code>
                        <span className={styles.kw}>import</span> &#123; WebhookQueue &#125; <span className={styles.kw}>from</span> <span className={styles.str}>&quot;@autohub-labs/middleware&quot;</span>;{'\n\n'}
                        <span className={styles.cmt}>// Instant 200ms multi-app data propagation</span>{'\n'}
                        <span className={styles.kw}>const</span> queue = <span className={styles.kw}>new</span> <span className={styles.fn}>WebhookQueue</span>(&#123; autoRetry: <span className={styles.num}>3</span> &#125;);{'\n'}
                        queue.<span className={styles.fn}>on</span>(<span className={styles.str}>&quot;CUSTOMER_UPDATED&quot;</span>, <span className={styles.kw}>async</span> (data) =&gt; &#123;{'\n'}
                        {'  '}<span className={styles.kw}>await</span> Promise.<span className={styles.fn}>all</span>([{'\n'}
                        {'    '}syncCRM(data), syncInvoicing(data), syncSlack(data){'\n'}
                        {'  '}]);{'\n'}
                        &#125;)<span className={styles.typingCursor}/>
                      </code>
                    </pre>
                  )}

                  {activeService.id === "event-infra" && (
                    <pre className={styles.codeText}>
                      <code>
                        <span className={styles.kw}>import</span> &#123; LoadBalancer &#125; <span className={styles.kw}>from</span> <span className={styles.str}>&quot;@autohub-labs/infra&quot;</span>;{'\n\n'}
                        <span className={styles.cmt}>// Handles 5,000+ peak registration traffic spikes</span>{'\n'}
                        <span className={styles.kw}>export const</span> infra = <span className={styles.kw}>new</span> <span className={styles.fn}>LoadBalancer</span>(&#123;{'\n'}
                        {'  '}maxRps: <span className={styles.num}>10000</span>,{'\n'}
                        {'  '}qrScannerSpeed: <span className={styles.str}>&quot;2.0s&quot;</span>,{'\n'}
                        {'  '}uptimeGuarantee: <span className={styles.str}>&quot;99.99%&quot;</span>,{'\n'}
                        &#125;)<span className={styles.typingCursor}/>
                      </code>
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </ScrollReveal>

      {/* ── Interactive ROI & Scope Estimator Widget ── */}
      <section className={styles.estimatorSection}>
        <ScrollReveal>
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionBadge}>INTERACTIVE ESTIMATOR</span>
            <h2 className={styles.sectionTitle}>
              Build your customized solution &amp;<br />
              <span className="text-gradient">see estimated time savings.</span>
            </h2>
            <p className={styles.sectionSub}>
              Select the modules your business needs to instantly calculate your estimated weekly manual hours saved.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className={styles.estimatorGrid}>
            <div className={styles.optionsList}>
              <div className={styles.nodeConnector}>
                <div 
                  className={styles.nodeConnectorActive} 
                  style={{ height: `${connectionHeight}%` }} 
                />
              </div>
              {ESTIMATOR_OPTIONS.map((opt) => {
                const isSelected = selectedEstimates.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleEstimator(opt.id)}
                    className={`${styles.estimatorOpt} ${isSelected ? styles.optSelected : ""}`}
                  >
                    <div className={styles.checkbox}>
                      {isSelected && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="20 6 9 17 4 12" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                    <div className={styles.optContent}>
                      <span className={styles.optTitle}>{opt.label}</span>
                      <span className={styles.optDays}>Est. Timeline: {opt.estDays}</span>
                    </div>
                    <span className={styles.optHours}>+{opt.hours} hrs/wk</span>
                  </button>
                );
              })}
            </div>

            {/* Impact Calculation Summary Box */}
            <div className={styles.summaryBox}>
              <h3 className={styles.summaryTitle}>ESTIMATED IMPACT SUMMARY</h3>

              <div className={styles.impactMetricRow}>
                <span className={styles.impactLabel}>Weekly Hours Saved</span>
                <span className={styles.impactValue}>{totalSavedHours} hrs / week</span>
              </div>

              <div className={styles.impactMetricRow}>
                <span className={styles.impactLabel}>Annual Hours Recovered</span>
                <span className={styles.impactValue}>{(totalSavedHours * 50).toLocaleString()} hrs / yr</span>
              </div>

              <div className={styles.impactMetricRow}>
                <span className={styles.impactLabel}>Selected Modules</span>
                <span className={styles.impactValue}>{selectedEstimates.length} Active</span>
              </div>

              <div className={styles.divider} />

              <MagneticButton href="/contact" className={styles.summaryCtaBtn}>
                Get Scoped Proposal &rarr;
              </MagneticButton>
              <p className={styles.summarySubtext}>Zero commitment. Scoped proposal delivered within 6 hours.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className={styles.faqSection}>
        <ScrollReveal>
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionBadge}>FREQUENTLY ASKED QUESTIONS</span>
            <h2 className={styles.sectionTitle}>Everything you need to know.</h2>
          </div>
        </ScrollReveal>

        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className={styles.faqQuestionBtn}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <p className={styles.faqAnswer}>{faq.a}</p>}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── Final Call to Action ── */}
      <ScrollReveal>
        <div className={styles.bottomCtaBox}>
          <h2 className={styles.bottomCtaTitle}>Ready to automate your operations?</h2>
          <p className={styles.bottomCtaSub}>
            Let&apos;s review your workflow bottlenecks together and engineer a tailored solution.
          </p>
          <MagneticButton href="/contact" className={styles.bottomCtaBtn}>
            Schedule 30-Min Scoping Call &rarr;
          </MagneticButton>
        </div>
      </ScrollReveal>
    </div>
  );
}

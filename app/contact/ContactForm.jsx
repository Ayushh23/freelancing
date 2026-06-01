"use client";

import { useState, useEffect } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.grid}>
      {/* ── Left: Human side ── */}
      <div className={styles.left}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for new projects
        </div>

        <h1 className={styles.title}>
          Skip the<br />
          <span className="text-chrome">corporate talk.</span>
        </h1>
        <p className={styles.subtitle}>
          Tell me what you're trying to build and I'll tell you if I can help — usually within a few hours.
        </p>

        <div className={styles.infoList}>
          <div className={styles.infoRow}>
            <span className="mono" style={{ color: "var(--text-muted)" }}>LOCAL TIME</span>
            <span className={styles.infoVal}>{time} IST</span>
          </div>
          <div className={styles.infoRow}>
            <span className="mono" style={{ color: "var(--text-muted)" }}>EMAIL</span>
            <a href="mailto:hello@autohub.dev" className={styles.infoLink}>
              hello@autohub.dev
            </a>
          </div>
          <div className={styles.infoRow}>
            <span className="mono" style={{ color: "var(--text-muted)" }}>SOCIALS</span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="#" className={styles.infoLink}>Twitter</a>
              <a href="#" className={styles.infoLink}>LinkedIn</a>
              <a href="#" className={styles.infoLink}>GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Mad Libs form ── */}
      <form className={`glass ${styles.form}`} onSubmit={(e) => e.preventDefault()}>
        <p className={styles.madlibText}>
          Hey! My name is{" "}
          <input className={styles.il} placeholder="your name" type="text" />
          {" "}and I'm from{" "}
          <input className={styles.il} placeholder="company / college" type="text" />
          .
        </p>

        <p className={styles.madlibText}>
          I need help with{" "}
          <select className={styles.sel}>
            <option>automation & bots</option>
            <option>a website or platform</option>
            <option>an AI chatbot</option>
            <option>workflow scripts</option>
            <option>something else</option>
          </select>
          {" "}and my budget is around{" "}
          <input className={styles.il} placeholder="₹20k — ₹1L" style={{ width: "130px" }} />.
        </p>

        <p className={styles.madlibText}>
          Reach me at{" "}
          <input className={styles.il} placeholder="your@email.com" type="email" style={{ width: "220px" }} />
          {" "}to get started.
        </p>

        <button type="submit" className={styles.submit}>
          Send it →
        </button>
      </form>
    </div>
  );
}

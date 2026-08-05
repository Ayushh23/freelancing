"use client";

import { useState, useEffect } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    needHelpWith: "automation & bots",
    budget: "",
    email: ""
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          needHelpWith: "automation & bots",
          budget: "",
          email: ""
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

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
          <span className={styles.chromeText}>corporate talk.</span>
        </h1>
        <p className={styles.subtitle}>
          Tell me what you're trying to build and I'll tell you if I can help — usually within a few hours.
        </p>

        <div className={styles.infoList}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>LOCAL TIME</span>
            <span className={styles.infoVal}>{time} IST</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>EMAIL</span>
            <a href="mailto:hello@autohub.dev" className={styles.infoLink}>
              hello@autohub.dev
            </a>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>SOCIALS</span>
            <div className={styles.socialsGroup}>
              <a href="#" className={styles.infoLink}>Twitter</a>
              <a href="#" className={styles.infoLink}>LinkedIn</a>
              <a href="#" className={styles.infoLink}>GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Modern Premium Form ── */}
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Send a Message</h2>
            <p className={styles.formSubtitle}>Let's discuss details and build something amazing.</p>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={styles.input}
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="company" className={styles.label}>Company / Organization</label>
              <input
                id="company"
                name="company"
                type="text"
                className={styles.input}
                placeholder="e.g. Acme Corp"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="budget" className={styles.label}>Estimated Budget</label>
              <input
                id="budget"
                name="budget"
                type="text"
                className={styles.input}
                placeholder="e.g. ₹20k - ₹1L"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="needHelpWith" className={styles.label}>I need help with</label>
            <div className={styles.selectWrapper}>
              <select
                id="needHelpWith"
                name="needHelpWith"
                className={styles.select}
                value={formData.needHelpWith}
                onChange={handleChange}
              >
                <option value="automation & bots">Automation & Bots</option>
                <option value="a website or platform">A Website or Platform</option>
                <option value="an AI chatbot">An AI Chatbot</option>
                <option value="workflow scripts">Workflow Scripts</option>
                <option value="something else">Something Else</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className={styles.btnContent}>
                <span className={styles.spinner}></span>
                Sending...
              </span>
            ) : status === "success" ? (
              "Sent Successfully! ✓"
            ) : (
              "Send Message →"
            )}
          </button>

          {status === "success" && (
            <div className={styles.successMessage}>
              Thank you! Your message has been sent successfully. Check your email for confirmation.
            </div>
          )}

          {status === "error" && (
            <div className={styles.errorMessage}>
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

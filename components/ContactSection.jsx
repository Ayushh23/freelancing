"use client";

import { motion } from "framer-motion";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Let's Build.
            </h2>
            <p className={styles.subtitle}>Drop us a line to discuss automation and digital products.</p>
          </div>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <textarea placeholder="Project Details" className={styles.textarea}></textarea>
            <button className={styles.submitBtn}>
              INITIATE <span className={styles.arrow}>→</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

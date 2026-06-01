"use client";

import { motion } from "framer-motion";
import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "Automation",
    description: "Intelligent workflows that scale. We eliminate busywork so your team can focus on what matters.",
    icon: "⚙️",
  },
  {
    title: "Digital Platforms",
    description: "Next-gen web applications built with cutting-edge tech. React, Next.js, Node. Fast, clean, and secure.",
    icon: "🌐",
  },
  {
    title: "Experiences",
    description: "From minimalist UI design to custom 3D web experiences. We handle everything end-to-end.",
    icon: "✨",
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={`mono-font ${styles.badge}`}>SERVICES</span>
          <h2 className={styles.title}>
            What We Do.
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`glass-panel ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                borderColor: "var(--accent-blue)"
              }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

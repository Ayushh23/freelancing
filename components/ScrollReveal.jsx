"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollReveal — wraps children in a div that fades in when scrolled into view.
 * direction: "up" | "left" | "right" | "none"
 * delay: CSS transition delay in seconds (e.g. 0.1)
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.12,
  className = "",
  style = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const revealClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
      ? "reveal-right"
      : direction === "none"
      ? ""
      : "reveal";

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

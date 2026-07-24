"use client";

import { useRef, useState } from "react";
import Link from "next/link";

/**
 * MagneticButton — a button/link that magnetically follows the cursor.
 * Use href for links, onClick for buttons.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 18,
  onClick,
  href,
  target,
  rel,
  type = "button",
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = rect.width * 1.2;
    if (dist < radius) {
      const factor = (1 - dist / radius) * strength;
      setPos({ x: (dx / dist) * factor, y: (dy / dist) * factor });
    }
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  const magnetStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition:
      pos.x === 0 && pos.y === 0
        ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
        : "transform 0.1s ease",
    willChange: "transform",
  };

  if (href) {
    return (
      <Link
        ref={ref}
        href={href}
        className={className}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={magnetStyle}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={magnetStyle}
    >
      {children}
    </button>
  );
}

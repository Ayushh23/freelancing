"use client";

import { useRef, useState } from "react";

/**
 * GlowCard — card with a spotlight glow that follows the mouse.
 */
export default function GlowCard({ children, className = "", style = {}, glowColor = "99,102,241" }) {
  const ref = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setGlow((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Spotlight overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle 200px at ${glow.x}% ${glow.y}%, rgba(${glowColor},0.13) 0%, transparent 70%)`,
          opacity: glow.opacity,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          zIndex: 1,
          borderRadius: "inherit",
        }}
      />
      {/* Border glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle 120px at ${glow.x}% ${glow.y}%, rgba(${glowColor},0.25) 0%, transparent 70%)`,
          opacity: glow.opacity,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          zIndex: 2,
          borderRadius: "inherit",
          mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}

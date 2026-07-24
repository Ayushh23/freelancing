"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, MeshTransmissionMaterial, Torus, Stars } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import styles from "./Hero3D.module.css";

/* ── Mouse-reactive camera rig ── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (mouse.current.y * 0.5 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Main Chrome Blob ── */
function ChromeBlob() {
  const meshRef = useRef();
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.06;
      meshRef.current.rotation.y += delta * 0.10;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={1.0}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.65, 20]} />
        <MeshDistortMaterial
          color="#c8c8d8"
          envMapIntensity={3.5}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={1}
          roughness={0.02}
          distort={0.28}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

/* ── Torus Knot ── */
function TorusKnot() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.12;
      ref.current.rotation.z += delta * 0.08;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} position={[3.2, -0.5, -1.5]} scale={0.55}>
        <torusKnotGeometry args={[1, 0.35, 120, 16]} />
        <MeshDistortMaterial
          color="#818cf8"
          envMapIntensity={2}
          metalness={0.9}
          roughness={0.1}
          distort={0.15}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

/* ── Satellite Orbs ── */
function SatelliteOrb({ position, color, size = 0.45, speed = 1.8 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={size}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={2.5}
          metalness={0.8}
          roughness={0.15}
          distort={0.2}
          speed={1.5}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

/* ── Orbiting ring ── */
function OrbitRing() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      ref.current.rotation.z += 0.004;
    }
  });
  return (
    <mesh ref={ref} scale={2.8}>
      <torusGeometry args={[1, 0.012, 8, 120]} />
      <meshStandardMaterial color="#6366f1" transparent opacity={0.35} />
    </mesh>
  );
}

/* ── Floating particles ── */
function FloatingParticles({ count = 320 }) {
  const ref = useRef();
  const positions = useRef(
    new Float32Array(
      Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 12)
    )
  );
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.025;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.012) * 0.15;
    }
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#a5b4fc"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Loader fallback ── */
function SceneLoader() {
  return null;
}

/* ── Animated badge chip ── */
function Chip({ label, icon, style }) {
  return (
    <div className={styles.chip} style={style}>
      <span>{icon}</span> {label}
    </div>
  );
}

/* ── Word-by-word headline animation ── */
function AnimatedHeadline({ children }) {
  const words = children.split(" ");
  return (
    <span>
      {words.map((word, i) => (
        <span
          key={i}
          className={styles.word}
          style={{ animationDelay: `${0.05 + i * 0.07}s` }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className={styles.hero}>
      {/* Gradient orbs */}
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      {/* LEFT: text content */}
      <div className={styles.left}>
        <p className={`mono ${styles.eyebrow}`}>
          <span className={styles.eyebrowDot} />
          Automation · AI Bots · Web Dev
        </p>

        <h1 className={styles.headline}>
          Built for<br />
          <span className="text-gradient-anim">businesses</span><br />
          that move fast.
        </h1>

        <p className={styles.sub}>
          We design intelligent workflows and high-performance digital products
          that save time and scale with you.
        </p>

        <div className={styles.actions}>
          <MagneticButton href="/work" className={styles.btnPrimary}>
            See Our Work
          </MagneticButton>
          <MagneticButton href="/contact" className={styles.btnSecondary}>
            Start a Project →
          </MagneticButton>
        </div>

        {/* Tech chips */}
        <div className={styles.chips}>
          <Chip label="Python" icon="🐍" style={{ animationDelay: "0.6s" }} />
          <Chip label="Next.js" icon="⚡" style={{ animationDelay: "0.7s" }} />
          <Chip label="OpenAI" icon="🤖" style={{ animationDelay: "0.8s" }} />
          <Chip label="Zapier" icon="⚙️" style={{ animationDelay: "0.9s" }} />
        </div>
      </div>

      {/* RIGHT: 3D canvas */}
      <div className={styles.canvas}>
        {mounted && (
          <Canvas
            camera={{ position: [0, 0, 6.5], fov: 42 }}
            style={{ background: "transparent" }}
            gl={{ antialias: true, alpha: true }}
          >
            <Suspense fallback={<SceneLoader />}>
              <Environment preset="city" />
              <ambientLight intensity={0.7} />
              <directionalLight position={[8, 8, 4]} intensity={2} color="#ffffff" />
              <directionalLight position={[-6, -4, -4]} intensity={1.2} color="#818cf8" />
              <pointLight position={[0, 4, 2]} intensity={1} color="#22d3ee" />
              <pointLight position={[4, -3, 1]} intensity={0.8} color="#a855f7" />

              <CameraRig />
              <ChromeBlob />
              <TorusKnot />
              <SatelliteOrb position={[-3.0, 1.8, -1]}  color="#06b6d4" size={0.4} speed={2.2} />
              <SatelliteOrb position={[ 2.8, 2.2, -0.5]} color="#a855f7" size={0.35} speed={1.5} />
              <SatelliteOrb position={[-2.4, -2.2, -1]} color="#818cf8" size={0.3} speed={2.5} />
              <OrbitRing />
              <FloatingParticles count={280} />
              <Stars radius={20} depth={20} count={400} factor={2} saturation={0.5} fade speed={0.5} />
            </Suspense>
          </Canvas>
        )}

        {/* Canvas glow overlay */}
        <div className={styles.canvasGlow} />
      </div>
    </section>
  );
}

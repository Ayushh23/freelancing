"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import Link from "next/link";
import styles from "./Hero3D.module.css";

function ChromeBlob() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.08;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 20]} />
        <MeshDistortMaterial
          color="#d0d0d0"
          envMapIntensity={3}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={1}
          roughness={0}
          distort={0.25}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <section className={styles.hero}>
      {/* Left: text content */}
      <div className={styles.left}>
        <p className={`mono ${styles.eyebrow}`}>Automation · AI Bots · Web Dev</p>

        <h1 className={styles.headline}>
          Built for<br />
          <span className="text-chrome">businesses</span><br />
          that move fast.
        </h1>

        <p className={styles.sub}>
          We design intelligent workflows and high-performance digital products that save time and scale with you.
        </p>

        <div className={styles.actions}>
          <Link href="/work" className={styles.btnPrimary}>See Our Work</Link>
          <Link href="/contact" className={styles.btnSecondary}>Start a Project →</Link>
        </div>
      </div>

      {/* Right: 3D canvas */}
      <div className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 5.5], fov: 42 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.6} />
          <directionalLight position={[8, 8, 4]} intensity={2} color="#ffffff" />
          <directionalLight position={[-8, -4, -4]} intensity={1} color="#A0BCFF" />
          <ChromeBlob />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>
    </section>
  );
}

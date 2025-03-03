"use client";

import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: string;
  y: string;
  size: string;
  duration: number;
  delay: number;
}

interface AnimatedParticlesProps {
  count?: number;
}

export function AnimatedParticles({ count = 50 }: AnimatedParticlesProps) {
  // Generate deterministic particles
  const particles: Particle[] = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: `${(i * 13) % 100}%`, // Deterministic x position
    y: `${(i * 7) % 100}%`,  // Deterministic y position
    size: `${(i % 4) + 1}px`, // Size between 1-4px
    duration: 10 + (i % 10), // Duration between 10-19s
    delay: i % 10, // Delay between 0-9s
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: 0.2,
          }}
          animate={{
            y: [particle.y, `calc(${particle.y} - 20%)`],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
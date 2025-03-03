"use client";

import React from "react";

interface BackgroundParticlesProps {
  type?: "nebula" | "waves";
  count?: number;
  colorA?: string;
  colorB?: string;
  fromColor?: string;
  toColor?: string;
}

export function BackgroundParticles({
  type = "nebula",
  count = 100,
  colorA = "#8b5cf6",
  colorB = "#06b6d4",
  fromColor = "from-blue-950",
  toColor = "to-black",
}: BackgroundParticlesProps) {
  return (
    <div className={`fixed inset-0 -z-10 bg-gradient-to-b ${fromColor} ${toColor}`}>
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: count }).map((_, i) => {
          // Use deterministic values based on index instead of random
          const top = `${(i * 7) % 100}%`;
          const left = `${(i * 13) % 100}%`;
          const width = `${(i % 3) + 1}px`;
          const height = `${(i % 3) + 1}px`;
          const opacity = 0.3 + ((i % 5) / 10);
          const color = i % 2 === 0 ? colorA : colorB;
          const blur = 5 + ((i % 5) * 2);
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top,
                left,
                width,
                height,
                opacity,
                boxShadow: `0 0 ${blur}px ${color}`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
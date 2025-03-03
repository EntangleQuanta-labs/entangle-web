"use client";

import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

interface FeaturesCardProps {
  features: Feature[];
}

export function FeaturesCard({ features }: FeaturesCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-16 relative"
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-xl blur-md"></div>
      <div className="relative bg-background/30 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
          What to Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
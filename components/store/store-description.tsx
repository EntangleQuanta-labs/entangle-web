"use client";

import { motion } from "framer-motion";

export function StoreDescription() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-12"
    >
      <p className="text-xl text-muted-foreground mb-6">
        Our marketplace is under construction. We're building something amazing for you.
      </p>
      <p className="text-muted-foreground">
        The Entangle Store will feature premium AI agents, custom models, and exclusive features to enhance your experience.
      </p>
    </motion.div>
  );
}
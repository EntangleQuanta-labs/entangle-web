"use client";

import { motion } from "framer-motion";

export function ComingSoonBanner() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-8"
    >
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 blur-xl opacity-30"></div>
        <h1 className="relative text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
          Coming Soon
        </h1>
      </div>
    </motion.div>
  );
}
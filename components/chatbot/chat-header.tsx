"use client";

import { motion } from "framer-motion";

export function ChatHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center my-8"
    >
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
        Entangle AI Assistant
      </h1>
      <p className="text-muted-foreground mt-2">
        Ask me anything and I'll do my best to help you
      </p>
    </motion.div>
  );
}
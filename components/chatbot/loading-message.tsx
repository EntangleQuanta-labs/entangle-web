"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Bot, Loader2 } from "lucide-react";

export function LoadingMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-start gap-3 max-w-[80%] mr-auto"
    >
      <div className="flex-shrink-0 rounded-full p-1 bg-gradient-to-r from-cyan-500 to-blue-500">
        <Avatar className="h-8 w-8 border-2 border-background">
          <div className="bg-muted flex items-center justify-center h-full w-full rounded-full">
            <Bot className="h-4 w-4" />
          </div>
        </Avatar>
      </div>

      <div className="rounded-lg px-4 py-2 shadow-md bg-card text-card-foreground border border-border/50">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <p className="text-sm">Thinking...</p>
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

interface NotifyButtonProps {
  onClick: () => void;
}

export function NotifyButton({ onClick }: NotifyButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-block"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg blur-md opacity-70"></div>
      <Button
        onClick={onClick}
        className="relative bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white px-8 py-6 text-lg"
      >
        <Bell className="mr-2 h-5 w-5" />
        Notify Me When It Launches
      </Button>
    </motion.div>
  );
}
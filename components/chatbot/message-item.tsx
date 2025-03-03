"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Bot, User, Lock } from "lucide-react";

export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
  return (
    <motion.div
      initial={
        message.role === "user"
          ? { opacity: 0, x: 20 }
          : { opacity: 0, scale: 0.95 }
      }
      animate={
        message.role === "user"
          ? { opacity: 1, x: 0 }
          : { opacity: 1, scale: 1 }
      }
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex items-start gap-3 max-w-[80%]",
        message.role === "user" ? "ml-auto" : "mr-auto"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 rounded-full p-1",
          message.role === "user"
            ? "order-last bg-gradient-to-r from-indigo-500 to-purple-500"
            : "bg-gradient-to-r from-cyan-500 to-blue-500"
        )}
      >
        <Avatar className="h-8 w-8 border-2 border-background">
          <div className="bg-muted flex items-center justify-center h-full w-full rounded-full">
            {message.role === "user" ? (
              <User className="h-4 w-4" />
            ) : (
              <Bot className="h-4 w-4" />
            )}
          </div>
        </Avatar>
      </div>

      <div
        className={cn(
          "rounded-lg px-4 py-2 shadow-md",
          message.role === "user"
            ? "bg-primary text-primary-foreground"
            : "bg-card text-card-foreground border border-border/50"
        )}
      >
        <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
        <span className="text-xs opacity-50 mt-1 block">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </motion.div>
  );
}
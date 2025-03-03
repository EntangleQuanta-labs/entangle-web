"use client";

import { useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Message, MessageItem } from "./message-item";
import { LoadingMessage } from "./loading-message";

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 mb-4">
      <AnimatePresence initial={false}>
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </AnimatePresence>

      {isLoading && <LoadingMessage />}

      <div ref={messagesEndRef} />
    </div>
  );
}
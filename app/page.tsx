"use client";

import { useState } from "react";
import { BackgroundParticles } from "@/components/ui/background-particles";
import { ChatHeader } from "@/components/chatbot/chat-header";
import { MessageList } from "@/components/chatbot/message-list";
import { MessageInput } from "@/components/chatbot/message-input";
import { Message } from "@/components/chatbot/message-item";

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "I understand your question. Let me think about that...",
        "That's an interesting point! Here's what I think...",
        "Based on my knowledge, I can provide the following information...",
        "I'd be happy to help with that! Here's what you need to know...",
        "Great question! Let me explain...",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen pt-16 overflow-hidden">
      {/* Background with nebula effect */}
      <BackgroundParticles 
        type="nebula" 
        fromColor="from-blue-950" 
        toColor="to-black" 
      />

      {/* Chat container */}
      <div className="container mx-auto px-4 flex-1 flex flex-col max-w-4xl">
        <ChatHeader />
        <MessageList messages={messages} isLoading={isLoading} />
        <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
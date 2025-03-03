"use client";

import { motion } from "framer-motion";
import { AgentCard, AgentProps } from "./agent-card";

interface AgentsGridProps {
  agents: Omit<AgentProps, "onAgentClick" | "onGithubAuth">[];
  onAgentClick: (id: string) => void;
  onGithubAuth?: () => void;
  isGithubAuthenticated?: boolean;
  isLoading?: boolean;
}

export function AgentsGrid({ 
  agents, 
  onAgentClick, 
  onGithubAuth,
  isGithubAuthenticated,
  isLoading 
}: AgentsGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          {...agent}
          onAgentClick={onAgentClick}
          onGithubAuth={onGithubAuth}
          isGithubAuthenticated={agent.isGithubAgent ? isGithubAuthenticated : undefined}
          isLoading={agent.isGithubAgent ? isLoading : undefined}
        />
      ))}
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Lock } from "lucide-react";
import { DivideIcon as LucideIcon } from "lucide-react";

export interface AgentProps {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  isLocked?: boolean;
  isGithubAgent?: boolean;
  isGithubAuthenticated?: boolean;
  isLoading?: boolean;
  onAgentClick: (id: string) => void;
  onGithubAuth?: () => void;
}

export function AgentCard({
  id,
  name,
  description,
  icon: Icon,
  color,
  isLocked,
  isGithubAgent,
  isGithubAuthenticated,
  isLoading,
  onAgentClick,
  onGithubAuth,
}: AgentProps) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
      <Card
        onClick={() => onAgentClick(id)}
        className="relative overflow-hidden h-full cursor-pointer group"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="p-6 h-full"
        >
          {/* Glowing background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 blur-xl`}></div>
          </div>

          {/* Border glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-30`} style={{ margin: '-1px' }}></div>
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
              <Icon className="h-6 w-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              {name}
              {isLocked && <Lock className="h-4 w-4 text-muted-foreground" />}
            </h3>
            
            <p className="text-muted-foreground text-sm flex-grow">
              {description}
            </p>

            {isGithubAgent && (
              <div className="mt-4">
                <Button
                  variant={isGithubAuthenticated ? "outline" : "default"}
                  className={`w-full ${
                    isGithubAuthenticated
                      ? "border-green-500/50 text-green-500"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  }`}
                  disabled={isLoading}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isGithubAuthenticated && onGithubAuth) {
                      onGithubAuth();
                    }
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connecting...
                    </>
                  ) : isGithubAuthenticated ? (
                    <>
                      <Icon className="mr-2 h-4 w-4" />
                      Connected to GitHub
                    </>
                  ) : (
                    <>
                      <Icon className="mr-2 h-4 w-4" />
                      Connect to GitHub
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
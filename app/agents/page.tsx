"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { signIn, useSession } from "next-auth/react";
import {
  Code,
  Database,
  FileSearch,
  Github,
  Image,
  Lightbulb,
  Lock,
  Music,
  Search,
  Video,
} from "lucide-react";
import { BackgroundParticles } from "@/components/ui/background-particles";
import { AgentsGrid } from "@/components/agents/agents-grid";

export default function AgentsPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();
  const isGithubAuthenticated = !!session?.accessToken;

  const agents = [
    {
      id: "it",
      name: "IT Agent",
      description: "GitHub integration and repository management",
      icon: Github,
      color: "from-blue-500 to-indigo-600",
      isGithubAgent: true,
    },
    {
      id: "code",
      name: "Code Assistant",
      description: "Help with programming and debugging",
      icon: Code,
      color: "from-emerald-500 to-green-600",
    },
    {
      id: "search",
      name: "Search Agent",
      description: "Find information across the web",
      icon: Search,
      color: "from-amber-500 to-orange-600",
    },
    {
      id: "creative",
      name: "Creative Assistant",
      description: "Generate ideas and creative content",
      icon: Lightbulb,
      color: "from-pink-500 to-rose-600",
    },
    {
      id: "data",
      name: "Data Analyst",
      description: "Analyze and visualize data",
      icon: Database,
      color: "from-violet-500 to-purple-600",
    },
    {
      id: "image",
      name: "Image Generator",
      description: "Create and edit images",
      icon: Image,
      color: "from-cyan-500 to-blue-600",
      isLocked: true,
    },
    {
      id: "video",
      name: "Video Creator",
      description: "Create and edit videos",
      icon: Video,
      color: "from-red-500 to-rose-600",
      isLocked: true,
    },
    {
      id: "music",
      name: "Music Composer",
      description: "Create and edit music",
      icon: Music,
      color: "from-teal-500 to-emerald-600",
      isLocked: true,
    },
    {
      id: "research",
      name: "Research Assistant",
      description: "Deep research on any topic",
      icon: FileSearch,
      color: "from-blue-500 to-sky-600",
      isLocked: true,
    },
  ];

  const handleGithubAuth = async () => {
    setIsLoading(true);
    
    try {
      await signIn("github", { callbackUrl: "/agents" });
    } catch (error) {
      console.error("GitHub authentication error:", error);
      setIsLoading(false);
      
      toast({
        title: "Authentication Failed",
        description: "There was a problem connecting to GitHub. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAgentClick = (agentId: string) => {
    const agent = agents.find(a => a.id === agentId);
    
    if (!agent) return;
    
    if (agent.isLocked) {
      toast({
        title: "Agent Locked",
        description: "This agent will be available soon.",
        variant: "destructive",
      });
      return;
    }

    if (agent.isGithubAgent && !isGithubAuthenticated) {
      handleGithubAuth();
      return;
    }

    toast({
      title: `${agent.name} Activated`,
      description: `You are now working with the ${agent.name}.`,
    });
  };

  // Show success toast when GitHub authentication completes
  useEffect(() => {
    if (isGithubAuthenticated) {
      toast({
        title: "GitHub Authentication Successful",
        description: "You can now access your repositories and manage your GitHub account.",
      });
    }
  }, [isGithubAuthenticated, toast]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background with animated waves */}
      <BackgroundParticles 
        type="waves" 
        fromColor="from-purple-950" 
        toColor="to-blue-950" 
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            AI Agents
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Specialized AI agents designed to help with specific tasks. Each agent has unique capabilities to assist you.
          </p>
        </motion.div>

        <AgentsGrid 
          agents={agents} 
          onAgentClick={handleAgentClick} 
          onGithubAuth={handleGithubAuth}
          isGithubAuthenticated={isGithubAuthenticated}
          isLoading={isLoading || status === "loading"}
        />
      </div>
    </div>
  );
}
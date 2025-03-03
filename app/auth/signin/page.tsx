"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("github", { callbackUrl: "/agents" });
    } catch (error) {
      console.error("GitHub sign-in error:", error);
      setIsLoading(false);
      
      toast({
        title: "Authentication Failed",
        description: "There was a problem signing in with GitHub. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      {/* Background with nebula effect */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-950 to-purple-950">
        <div className="absolute inset-0 opacity-20">
          {/* Use key-based rendering with deterministic values to avoid hydration mismatch */}
          {Array.from({ length: 100 }).map((_, i) => {
            // Use deterministic values based on index instead of random
            const top = `${(i * 7) % 100}%`;
            const left = `${(i * 13) % 100}%`;
            const width = `${(i % 3) + 1}px`;
            const height = `${(i % 3) + 1}px`;
            const opacity = 0.3 + ((i % 5) / 10);
            const color = i % 2 === 0 ? "#8b5cf6" : "#06b6d4";
            const blur = 5 + ((i % 5) * 2);
            
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  top,
                  left,
                  width,
                  height,
                  opacity,
                  boxShadow: `0 0 ${blur}px ${color}`,
                }}
              />
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4"
      >
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Connect with GitHub to access all features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-md blur-md"></div>
              <Button
                variant="outline"
                className="relative w-full bg-background/50 border-border/50 hover:bg-background/80"
                onClick={handleGithubSignIn}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Github className="mr-2 h-4 w-4" />
                )}
                {isLoading ? "Connecting..." : "Sign in with GitHub"}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="text-center text-sm text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
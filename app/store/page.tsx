"use client";

import { useToast } from "@/hooks/use-toast";
import { AnimatedParticles } from "@/components/ui/animated-particles";
import { ComingSoonBanner } from "@/components/store/coming-soon-banner";
import { StoreDescription } from "@/components/store/store-description";
import { NotifyButton } from "@/components/store/notify-button";
import { FeaturesCard } from "@/components/store/features-card";

export default function StorePage() {
  const { toast } = useToast();

  const handleNotify = () => {
    toast({
      title: "Notification Set",
      description: "We'll notify you when the store launches!",
    });
  };

  const features = [
    {
      title: "Premium Agents",
      description: "Specialized AI agents with enhanced capabilities"
    },
    {
      title: "Custom Models",
      description: "Train and customize AI models for your specific needs"
    },
    {
      title: "Advanced Features",
      description: "Unlock powerful tools and integrations"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-950 to-purple-950">
        <div className="absolute inset-0 opacity-20">
          <AnimatedParticles count={50} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <ComingSoonBanner />
          <StoreDescription />
          <NotifyButton onClick={handleNotify} />
          <FeaturesCard features={features} />
        </div>
      </div>
    </div>
  );
}
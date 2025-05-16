"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsCredoraSection from "@/components/sections/WhatIsCredoraSection";
import HowBorrowingWorksSection from "@/components/sections/HowBorrowingWorksSection";
import ForLendersSection from "@/components/sections/ForLendersSection";
import ProtocolArchitectureSection from "@/components/sections/ProtocolArchitectureSection";
import AICreditEngineSection from "@/components/sections/AICreditEngineSection";
import GlobalImpactSection from "@/components/sections/GlobalImpactSection";
import UpcomingFeaturesSection from "@/components/sections/UpcomingFeaturesSection";
import DevelopersSection from "@/components/sections/DevelopersSection";
import ConnectSection from "@/components/sections/ConnectSection";
import StatsCountUpSection from "@/components/sections/StatsCountUpSection";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.2)_1px,_transparent_0)] bg-[length:40px_40px] bg-fixed">
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <main>
          <HeroSection />
          <StatsCountUpSection />
          <WhatIsCredoraSection />
          <HowBorrowingWorksSection />
          <ForLendersSection />
          <ProtocolArchitectureSection />
          <AICreditEngineSection />
          <GlobalImpactSection />
          <UpcomingFeaturesSection />
          <DevelopersSection />
          <ConnectSection />
        </main>
      )}
    </div>
  );
};

export default Index;

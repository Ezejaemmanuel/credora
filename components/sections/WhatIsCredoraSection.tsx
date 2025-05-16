
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { GlowingCard } from "../ui/GlowingCard";

const featureItems = [
  {
    icon: "🤖",
    title: "AI-Powered Risk Scoring",
    description: "Smart algorithms assess wallet history, behavior, and optional documents.",
    variant: "green",
  },
  {
    icon: "🏦",
    title: "Smart Contract Loan Pools",
    description: "Borrowers approved by AI get instant loan pool deployments.",
    variant: "red",
  },
  {
    icon: "💰",
    title: "Tokenized Yield for Lenders",
    description: "Lenders earn interest with real-time on-chain repayment updates.",
    variant: "green",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const WhatIsCredoraSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="What Is Credora?" 
          subtitle="Credora is a decentralized protocol for AI-powered undercollateralized lending."
          center
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featureItems.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <GlowingCard variant={feature.variant as "green" | "red"}>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-3 font-orbitron ${
                  feature.variant === "green" ? "text-neonGreen" : "text-neonRed"
                }`}>
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -z-10 top-40 right-0 w-96 h-96 blur-[100px] rounded-full bg-neonGreen/10" />
    </section>
  );
};

export default WhatIsCredoraSection;


import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { GlowingCard } from "../ui/GlowingCard";

const architectureComponents = [
  {
    title: "CredoraFactory.sol",
    description: "Spawns loan contracts with AI-approved limits",
    icon: "⚙️",
    variant: "green"
  },
  {
    title: "CredoraLoanPool.sol",
    description: "Handles ERC-20 tokens, funding, repayments",
    icon: "💸",
    variant: "red"
  },
  {
    title: "CredoraScoringEngine",
    description: "Off-chain + on-chain hybrid AI credit evaluation",
    icon: "🧠",
    variant: "green"
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
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const ProtocolArchitectureSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Protocol Architecture" 
          center
          variant="red"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {architectureComponents.map((component, index) => (
            <motion.div key={index} variants={item}>
              <GlowingCard variant={component.variant as "green" | "red"}>
                <div className="text-4xl mb-4">{component.icon}</div>
                <h3 className={`text-xl font-bold mb-3 font-orbitron ${
                  component.variant === "green" ? "text-neonGreen" : "text-neonRed"
                }`}>
                  {component.title}
                </h3>
                <p className="text-white/70">{component.description}</p>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-black border border-neonGreen/30 p-6 rounded-md relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative z-10">
            <h3 className="text-2xl font-orbitron text-neonGreen mb-6 text-center">System Architecture</h3>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
              <div className="bg-black/60 p-4 rounded-md border border-neonGreen/30">
                <h4 className="font-orbitron text-neonGreen mb-2">Smart Contracts</h4>
                <p className="text-white/70 text-sm">Ethereum & L2 Chains</p>
              </div>
              
              <div className="hidden md:block text-neonGreen">
                ⟷
              </div>
              
              <div className="bg-black/60 p-4 rounded-md border border-neonRed/30">
                <h4 className="font-orbitron text-neonRed mb-2">Scoring Engine</h4>
                <p className="text-white/70 text-sm">Off-chain ML Models</p>
              </div>
              
              <div className="hidden md:block text-neonGreen">
                ⟷
              </div>
              
              <div className="bg-black/60 p-4 rounded-md border border-neonGreen/30">
                <h4 className="font-orbitron text-neonGreen mb-2">User Interface</h4>
                <p className="text-white/70 text-sm">Web Application</p>
              </div>
            </div>
            
            <div className="mt-8 text-white/80 text-center">
              <p>End-to-end encrypted. Decentralized governance. Community-audited.</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 blur-[120px] rounded-full bg-neonRed/10" />
    </section>
  );
};

export default ProtocolArchitectureSection;


import { motion } from "framer-motion";
import { CyberButton } from "../ui/CyberButton";
import { BadgeDollarSign, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div
          className="flex justify-center items-center gap-3 mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Brain className="text-neonGreen w-10 h-10" />
          <span className="text-neonGreen text-lg font-orbitron">AI AGENTS-POWERED</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="text-neonGreen animate-glow-pulse">Credora:</span>{" "}
          <span className="text-white">The Future of Credit is Trust</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-6 max-w-3xl mx-auto text-white/80"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Borrow <span className="text-neonGreen font-bold">USDC</span> on <span className="text-neonGreen font-bold">AssetChain</span> using your on-chain reputation.
          <span className="text-neonRed"> No collateral. </span> 
          <span className="text-neonRed">No friction. </span>
          Just AI-driven trust.
        </motion.p>
        
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="relative">
            <BadgeDollarSign className="text-neonGreen inline-block mr-2" />
            <span className="text-neonGreen font-orbitron">Powered by AssetChain</span>
            <motion.span 
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-neonGreen"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <CyberButton variant="green">
            Borrow USDC Now
          </CyberButton>
          <CyberButton variant="red">
            Start Lending
          </CyberButton>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, rgba(0,255,0,0) 70%)',
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(255,49,49,0.1) 0%, rgba(255,49,49,0) 70%)',
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default HeroSection;

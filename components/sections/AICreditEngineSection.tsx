
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const features = [
  "Wallet age, gas patterns, DeFi usage",
  "On-chain scoring without KYC",
  "Optional KYC/DID with integrations (Polygon ID, Worldcoin)",
  "Transaction frequency and volume analysis",
  "Cross-chain reputation aggregation",
  "Continuous learning algorithm"
];

const AICreditEngineSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="AI Credit Engine" 
          subtitle="Smarter Credit, For Everyone"
          variant="green"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated brain visualization */}
              <div className="absolute inset-0 rounded-full border-4 border-neonGreen/30 animate-pulse" />
              <div className="absolute inset-8 rounded-full border-4 border-neonGreen/40 animate-pulse [animation-delay:300ms]" />
              <div className="absolute inset-16 rounded-full border-4 border-neonGreen/50 animate-pulse [animation-delay:600ms]" />
              <div className="absolute inset-24 rounded-full border-4 border-neonRed/60 animate-pulse [animation-delay:900ms]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl animate-glow-pulse">🧠</div>
              </div>
              
              {/* Neural network lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <motion.path 
                  d="M50,20 L30,40 L70,60 L50,80" 
                  stroke="#00FF00" 
                  strokeWidth="0.5" 
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M50,20 L70,40 L30,60 L50,80" 
                  stroke="#FF3131" 
                  strokeWidth="0.5" 
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                />
              </svg>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black border border-neonGreen/20 p-6 rounded-md">
              <h3 className="text-2xl font-orbitron text-neonGreen mb-6">Trained on multiple data sources</h3>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-neonGreen">▸</span>
                    <span className="text-white/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 p-5 bg-gradient-to-br from-black to-neonGreen/10 rounded-md border border-neonGreen/20">
                <h4 className="font-orbitron text-neonGreen mb-3">Credora AI Accuracy</h4>
                <div className="relative h-6 bg-black/60 rounded-full overflow-hidden border border-neonGreen/30">
                  <motion.div 
                    className="absolute h-full bg-gradient-to-r from-neonGreen/70 to-neonGreen rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-end pr-2">
                    <span className="text-xs font-orbitron text-white">92%</span>
                  </div>
                </div>
                <p className="mt-2 text-white/70 text-sm">
                  Our AI model outperforms traditional credit scoring by 31% when predicting on-chain repayment behavior.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[150px] rounded-full bg-neonGreen/5" />
    </section>
  );
};

export default AICreditEngineSection;

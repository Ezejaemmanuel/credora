
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const features = [
  {
    title: "Reputation NFTs for good borrowers",
    description: "Earn exclusive NFTs that unlock higher borrowing limits.",
    variant: "green"
  },
  {
    title: "DAO governance and risk markets",
    description: "Community-driven risk parameters and protocol governance.",
    variant: "red"
  },
  {
    title: "Automatic liquidation protections",
    description: "Smart mechanisms to prevent unfair liquidations during market volatility.",
    variant: "green"
  },
  {
    title: "Custom risk curves for lenders",
    description: "Set your own risk tolerance and expected yield parameters.",
    variant: "red"
  },
  {
    title: "Chain abstraction (ZK messaging / LayerZero)",
    description: "Seamless multi-chain operations with unified credit scoring.",
    variant: "green"
  },
  {
    title: "Social recovery and account abstraction",
    description: "Enhanced security and user experience for managing loans.",
    variant: "red"
  }
];

const UpcomingFeaturesSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Upcoming Features" 
          center
          variant="green"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-neonGreen/20 p-6 rounded-md hover:border-neonGreen/50 transition-all duration-300"
            >
              <h3 className={`text-xl font-orbitron mb-3 ${
                feature.variant === "green" ? "text-neonGreen" : "text-neonRed"
              }`}>
                {feature.title}
              </h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-black border border-neonGreen/30 p-6 rounded-md text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-orbitron text-neonGreen mb-4">Roadmap Timeline</h3>
          
          <div className="relative py-8">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-neonGreen/30" />
            
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-black border-2 border-neonGreen mb-2 z-10" />
                <div className="text-neonGreen font-orbitron text-sm">Q2 2025</div>
                <div className="text-white/70 text-xs mt-1">NFTs & DAO</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-black border-2 border-neonGreen mb-2 z-10" />
                <div className="text-neonGreen font-orbitron text-sm">Q3 2025</div>
                <div className="text-white/70 text-xs mt-1">Risk Curves</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-black border-2 border-neonGreen mb-2 z-10" />
                <div className="text-neonGreen font-orbitron text-sm">Q4 2025</div>
                <div className="text-white/70 text-xs mt-1">Multi-chain</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-black border-2 border-neonRed mb-2 z-10" />
                <div className="text-neonRed font-orbitron text-sm">Q1 2026</div>
                <div className="text-white/70 text-xs mt-1">Abstractions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 bottom-20 right-20 w-96 h-96 blur-[120px] rounded-full bg-neonGreen/5" />
    </section>
  );
};

export default UpcomingFeaturesSection;

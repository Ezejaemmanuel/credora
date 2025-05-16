
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const steps = [
  {
    number: 1,
    title: "Connect Wallet",
    description: "Seamlessly connect your crypto wallet to begin the process."
  },
  {
    number: 2,
    title: "AI Analyzes On-Chain Activity",
    description: "Our advanced AI examines your wallet history and DeFi behavior."
  },
  {
    number: 3,
    title: "Optional Off-Chain Document Upload",
    description: "Boost your credit score by providing additional verification."
  },
  {
    number: 4,
    title: "Loan Terms Calculated Instantly",
    description: "Get personalized loan offers based on your unique profile."
  },
  {
    number: 5,
    title: "Borrow USDC or DAI on Ethereum or L2",
    description: "Access liquidity on your preferred network with minimal fees."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const HowBorrowingWorksSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="How Borrowing Works" 
          center
          variant="red"
        />
        
        <motion.div
          className="relative mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-neonGreen/30 transform -translate-x-1/2" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col sm:flex-row items-center gap-6 mb-16 relative ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              {/* Step number */}
              <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full border-2 border-neonGreen flex items-center justify-center bg-black font-orbitron text-neonGreen font-bold text-2xl animate-border-pulse">
                {step.number}
              </div>
              
              {/* Content */}
              <div className={`text-center sm:text-left ${index % 2 !== 0 ? 'sm:text-right' : ''} max-w-sm`}>
                <h3 className="text-xl font-bold mb-2 font-orbitron text-white">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 blur-[100px] rounded-full bg-neonRed/10" />
    </section>
  );
};

export default HowBorrowingWorksSection;

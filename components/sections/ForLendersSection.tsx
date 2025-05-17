
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { GlowingCard } from "../ui/GlowingCard";

const benefits = [
  "ERC-20 LP tokens for your contribution",
  "Transparent repayment schedules",
  "Auto-withdraw & reinvest",
  "Optional staking boosters"
];

const ForLendersSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="For Lenders: Earn Real Yield" 
          subtitle="Support global borrowers. Earn yield secured by smart contract logic and AI scoring."
          variant="green"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full bg-black border border-neonGreen/20 p-6 rounded-md relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.4),transparent_70%)]" />
              
              <h3 className="text-2xl font-orbitron text-neonGreen mb-6">Yield Metrics</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-neonGreen/20 pb-3">
                  <span className="text-white/80">Current APY</span>
                  <span className="text-neonGreen font-orbitron font-bold text-xl">8.2%</span>
                </div>
                <div className="flex justify-between items-center border-b border-neonGreen/20 pb-3">
                  <span className="text-white/80">Total Value Locked</span>
                  <span className="text-neonGreen font-orbitron font-bold text-xl">$12.4M</span>
                </div>
                <div className="flex justify-between items-center border-b border-neonGreen/20 pb-3">
                  <span className="text-white/80">Default Rate</span>
                  <span className="text-neonGreen font-orbitron font-bold text-xl">0.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Risk Assessment</span>
                  <span className="text-neonGreen font-orbitron font-bold text-xl">AA</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full bg-black border border-neonGreen/20 p-6 rounded-md">
              <h3 className="text-2xl font-orbitron text-neonGreen mb-6">Lender Benefits</h3>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-neonGreen text-xl">✓</span>
                    <span className="text-white/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-neonGreen/5 border border-neonGreen/20 rounded-md">
                <p className="text-white/90 text-sm">
                  &quot;Lending on Credora has provided consistent yields higher than traditional DeFi protocols, with the security of knowing borrowers are thoroughly vetted.&quot;
                </p>
                <p className="text-right text-neonGreen mt-2 text-sm">— Crypto Yield Farmer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -z-10 top-1/2 left-1/4 w-64 h-64 blur-[120px] rounded-full bg-neonGreen/10" />
    </section>
  );
};

export default ForLendersSection;

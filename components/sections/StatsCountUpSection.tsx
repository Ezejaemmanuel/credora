
import { motion } from "framer-motion";
import { BadgeDollarSign, Users, Activity, BarChart } from "lucide-react";
import CountUp from "../CountUp";

const StatsCountUpSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Total USDC Borrowed */}
          <motion.div
            className="bg-black border border-neonGreen p-6 rounded-md relative"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.02, borderColor: "#00FF00" }}
          >
            <div className="absolute -right-3 -top-3 bg-black p-2 rounded-full border border-neonGreen">
              <BadgeDollarSign className="w-6 h-6 text-neonGreen" />
            </div>
            <h3 className="text-white/70 text-sm mb-2">Total USDC Borrowed</h3>
            <p className="text-3xl text-neonGreen font-orbitron">
              $<CountUp end={12450000} duration={2.5} decimals={0} />
            </p>
            <div className="mt-4 pt-4 border-t border-neonGreen/20">
              <p className="text-white/50 text-xs">
                <span className="text-neonGreen">↑ 24.5%</span> from last month
              </p>
            </div>
          </motion.div>

          {/* Active Borrowers */}
          <motion.div
            className="bg-black border border-neonRed p-6 rounded-md relative"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.02, borderColor: "#FF3131" }}
          >
            <div className="absolute -right-3 -top-3 bg-black p-2 rounded-full border border-neonRed">
              <Users className="w-6 h-6 text-neonRed" />
            </div>
            <h3 className="text-white/70 text-sm mb-2">Active Borrowers</h3>
            <p className="text-3xl text-neonRed font-orbitron">
              <CountUp end={3785} duration={2.5} decimals={0} />
            </p>
            <div className="mt-4 pt-4 border-t border-neonRed/20">
              <p className="text-white/50 text-xs">
                <span className="text-neonRed">↑ 18.7%</span> from last month
              </p>
            </div>
          </motion.div>

          {/* Default Rate */}
          <motion.div
            className="bg-black border border-neonGreen p-6 rounded-md relative"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.02, borderColor: "#00FF00" }}
          >
            <div className="absolute -right-3 -top-3 bg-black p-2 rounded-full border border-neonGreen">
              <Activity className="w-6 h-6 text-neonGreen" />
            </div>
            <h3 className="text-white/70 text-sm mb-2">Default Rate</h3>
            <p className="text-3xl text-neonGreen font-orbitron">
              <CountUp end={0.8} duration={2.5} decimals={1} suffix="%" />
            </p>
            <div className="mt-4 pt-4 border-t border-neonGreen/20">
              <p className="text-white/50 text-xs">
                <span className="text-neonGreen">↓ 0.3%</span> from last month
              </p>
            </div>
          </motion.div>

          {/* Lender APY */}
          <motion.div
            className="bg-black border border-neonRed p-6 rounded-md relative"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.02, borderColor: "#FF3131" }}
          >
            <div className="absolute -right-3 -top-3 bg-black p-2 rounded-full border border-neonRed">
              <BarChart className="w-6 h-6 text-neonRed" />
            </div>
            <h3 className="text-white/70 text-sm mb-2">Avg Lender APY</h3>
            <p className="text-3xl text-neonRed font-orbitron">
              <CountUp end={8.2} duration={2.5} decimals={1} suffix="%" />
            </p>
            <div className="mt-4 pt-4 border-t border-neonRed/20">
              <p className="text-white/50 text-xs">
                <span className="text-neonRed">↑ 0.4%</span> from last month
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neonGreen to-transparent opacity-50" />
      
      {/* Glowing particles */}
      <motion.div 
        className="absolute z-[-1] top-1/2 left-1/4 w-32 h-32 rounded-full blur-[80px]"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        style={{ background: "radial-gradient(circle, rgba(0,255,0,0.4) 0%, rgba(0,255,0,0) 70%)" }}
      />
      
      <motion.div 
        className="absolute z-[-1] top-1/3 right-1/4 w-24 h-24 rounded-full blur-[60px]"
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
        style={{ background: "radial-gradient(circle, rgba(255,49,49,0.4) 0%, rgba(255,49,49,0) 70%)" }}
      />
    </section>
  );
};

export default StatsCountUpSection;

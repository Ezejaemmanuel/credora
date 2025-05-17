
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { useState, useEffect } from "react";
import CountUp from "../CountUp";

const testimonials = [
  {
    quote: "I borrowed $3,000 using only my DeFi activity. No bank, no paperwork. Credora trusted my on-chain history.",
    author: "Crypto merchant, Lagos"
  },
  {
    quote: "As a small business owner in Mumbai, traditional banks wouldn't even look at me. Credora gave me a $5,000 loan based on my wallet history.",
    author: "DeFi entrepreneur, Mumbai"
  },
  {
    quote: "My regular trading activity on DEXs qualified me for a loan. This capital helped me expand my online business without selling my crypto.",
    author: "Digital artist, Philippines"
  },
  {
    quote: "I've been using DeFi for years but couldn't leverage that history until Credora. Now I can borrow against my on-chain reputation.",
    author: "Web3 developer, Argentina"
  }
];

const GlobalImpactSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Global Impact Story" 
          center
          variant="red"
        />
        
        <motion.div 
          className="mt-12 max-w-4xl mx-auto relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden">
            <div className="bg-black border-2 border-neonRed/30 p-8 sm:p-12 rounded-md">
              <div className="absolute -top-6 -left-6 text-6xl">❝</div>
              <div className="absolute -bottom-6 -right-6 text-6xl rotate-180">❝</div>
              
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="min-h-[150px] flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="text-xl sm:text-2xl text-white mb-6 italic">
                    &#34;{testimonials[activeIndex].quote}&quot;
                  </p>
                  <p className="text-neonRed font-orbitron">
                    — {testimonials[activeIndex].author}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-neonRed' : 'bg-neonRed/30'
                } transition-all duration-300`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-black border border-neonRed/20 p-4 rounded-md text-center">
            <div className="text-3xl font-orbitron text-neonRed mb-2">
              <CountUp end={12000} duration={2.5} suffix="+" />
            </div>
            <div className="text-white/70 text-sm">Borrowers Globally</div>
          </div>
          
          <div className="bg-black border border-neonGreen/20 p-4 rounded-md text-center">
            <div className="text-3xl font-orbitron text-neonGreen mb-2">
              $<CountUp end={24} duration={2.5} suffix="M" />
            </div>
            <div className="text-white/70 text-sm">Total Loans Issued</div>
          </div>
          
          <div className="bg-black border border-neonRed/20 p-4 rounded-md text-center">
            <div className="text-3xl font-orbitron text-neonRed mb-2">
              <CountUp end={42} duration={2.5} />
            </div>
            <div className="text-white/70 text-sm">Countries Reached</div>
          </div>
          
          <div className="bg-black border border-neonGreen/20 p-4 rounded-md text-center">
            <div className="text-3xl font-orbitron text-neonGreen mb-2">
              <CountUp end={97} duration={2.5} suffix="%" />
            </div>
            <div className="text-white/70 text-sm">Repayment Rate</div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -z-10 top-40 left-0 w-64 h-64 blur-[100px] rounded-full bg-neonRed/10" />
    </section>
  );
};

export default GlobalImpactSection;

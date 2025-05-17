
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { CyberButton } from "../ui/CyberButton";

const DevelopersSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Developers & Audits" 
          subtitle="Open-source. Audited. Ready to build with."
          center
          variant="red"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black border border-neonRed/30 p-6 rounded-md h-full">
              <h3 className="text-2xl font-orbitron text-neonRed mb-6">Security Audits</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-neonRed/20 pb-4">
                  <div className="w-12 h-12 rounded-full bg-black border border-neonRed/50 flex items-center justify-center font-orbitron text-neonRed">C1</div>
                  <div>
                    <h4 className="font-orbitron text-white">Certik</h4>
                    <p className="text-white/70 text-sm">March 2025</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 bg-neonRed/10 text-neonRed text-xs rounded-full border border-neonRed/30">
                      Passed
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 border-b border-neonRed/20 pb-4">
                  <div className="w-12 h-12 rounded-full bg-black border border-neonRed/50 flex items-center justify-center font-orbitron text-neonRed">R1</div>
                  <div>
                    <h4 className="font-orbitron text-white">Runtime Verification</h4>
                    <p className="text-white/70 text-sm">April 2025</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 bg-neonRed/10 text-neonRed text-xs rounded-full border border-neonRed/30">
                      Passed
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black border border-neonRed/50 flex items-center justify-center font-orbitron text-neonRed">O1</div>
                  <div>
                    <h4 className="font-orbitron text-white">OpenZeppelin</h4>
                    <p className="text-white/70 text-sm">May 2025</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 bg-neonRed/10 text-neonRed text-xs rounded-full border border-neonRed/30">
                      In Progress
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-black border border-neonRed/20 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80 text-sm">Critical Vulnerabilities</span>
                  <span className="text-neonRed font-orbitron font-bold">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Code Coverage</span>
                  <span className="text-neonRed font-orbitron font-bold">97%</span>
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
            <div className="bg-black border border-neonGreen/30 p-6 rounded-md h-full flex flex-col">
              <h3 className="text-2xl font-orbitron text-neonGreen mb-6">Developer Resources</h3>
              
              <div className="flex-1">
                <div className="font-mono bg-black/80 border border-neonGreen/30 p-4 rounded-md text-white/90 text-sm mb-6 overflow-x-auto">
                  <pre><code>{`// Sample contract integration
import { ICredora } from "@credora/contracts";

function checkCreditworthiness(address _user) 
  external view returns (uint256 score) {
  return ICredora.getScore(_user);
}`}</code></pre>
                </div>
                
                <p className="text-white/80 mb-6">
                  Integrate Credora&lsquo;s scoring system into your own DeFi protocols or applications. Our comprehensive API and SDK make it easy to leverage our AI credit engine.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-3 py-1 bg-neonGreen/10 text-neonGreen text-xs rounded-full border border-neonGreen/30">
                    Solidity
                  </span>
                  <span className="px-3 py-1 bg-neonGreen/10 text-neonGreen text-xs rounded-full border border-neonGreen/30">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-neonGreen/10 text-neonGreen text-xs rounded-full border border-neonGreen/30">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-neonGreen/10 text-neonGreen text-xs rounded-full border border-neonGreen/30">
                    GraphQL
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <CyberButton variant="green" className="w-full">
                  Read the Docs
                </CyberButton>
                <CyberButton variant="green" className="w-full">
                  Explore GitHub
                </CyberButton>
                <CyberButton variant="red" className="w-full" disabled>
                  Get API Key (Soon)
                </CyberButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -z-10 top-1/3 right-1/4 w-80 h-80 blur-[120px] rounded-full bg-neonRed/5" />
    </section>
  );
};

export default DevelopersSection;

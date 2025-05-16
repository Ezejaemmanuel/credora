
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { CyberButton } from "../ui/CyberButton";

const ConnectSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Connect" 
          subtitle="Join the future of decentralized credit."
          center
          variant="green"
        />
        
        <motion.div 
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <CyberButton variant="green" className="min-w-[160px]">
              Borrow Now
            </CyberButton>
            <CyberButton variant="red" className="min-w-[160px]">
              Become a Lender
            </CyberButton>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
            <a href="#" className="group">
              <div className="bg-black p-5 rounded-md border border-neonGreen/30 flex items-center justify-center transition-all duration-300 group-hover:border-neonGreen">
                <span className="text-neonGreen text-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-telegram">
                    <path d="M21.5 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                    <path d="m10 15 5.5-3.5"/>
                    <path d="m10 9 5.5 3.5"/>
                    <path d="M10 15V9"/>
                    <path d="M2.5 12A9.5 9.5 0 1 0 12 2.5"/>
                  </svg>
                </span>
              </div>
              <div className="mt-2 text-center text-white/80 text-sm group-hover:text-neonGreen transition-colors duration-300">Telegram</div>
            </a>
            
            <a href="#" className="group">
              <div className="bg-black p-5 rounded-md border border-neonGreen/30 flex items-center justify-center transition-all duration-300 group-hover:border-neonGreen">
                <span className="text-neonGreen text-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord">
                    <path d="M10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                    <path d="M18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 16v.1"/>
                    <path d="M16 16v.1"/>
                  </svg>
                </span>
              </div>
              <div className="mt-2 text-center text-white/80 text-sm group-hover:text-neonGreen transition-colors duration-300">Discord</div>
            </a>
            
            <a href="#" className="group">
              <div className="bg-black p-5 rounded-md border border-neonGreen/30 flex items-center justify-center transition-all duration-300 group-hover:border-neonGreen">
                <span className="text-neonGreen text-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" x2="8" y1="13" y2="13"/>
                    <line x1="16" x2="8" y1="17" y2="17"/>
                    <line x1="10" x2="8" y1="9" y2="9"/>
                  </svg>
                </span>
              </div>
              <div className="mt-2 text-center text-white/80 text-sm group-hover:text-neonGreen transition-colors duration-300">Mirror</div>
            </a>
            
            <a href="#" className="group">
              <div className="bg-black p-5 rounded-md border border-neonGreen/30 flex items-center justify-center transition-all duration-300 group-hover:border-neonGreen">
                <span className="text-neonGreen text-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </span>
              </div>
              <div className="mt-2 text-center text-white/80 text-sm group-hover:text-neonGreen transition-colors duration-300">GitHub</div>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-white/60 text-sm">
              Copyright © 2025 Credora
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 bottom-0 left-0 w-full h-48 bg-gradient-to-t from-neonGreen/5 to-transparent" />
    </section>
  );
};

export default ConnectSection;


import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const CountUp = ({ end, duration = 2, prefix = "", suffix = "", decimals = 0 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  
  useEffect(() => {
    startTimeRef.current = null;
    countRef.current = 0;
    
    const animateCount = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1);
      const currentCount = progress * end;
      
      countRef.current = currentCount;
      setCount(currentCount);
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animateCount);
      }
    };
    
    rafRef.current = requestAnimationFrame(animateCount);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
    };
  }, [end, duration]);
  
  const formattedCount = count.toFixed(decimals);
  
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("font-orbitron")}
    >
      {prefix}{formattedCount}{suffix}
    </motion.span>
  );
};

export default CountUp;

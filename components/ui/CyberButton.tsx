
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface CyberButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "green" | "red";
  glowEffect?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const CyberButton = forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = "green", glowEffect = true, children, disabled, ...props }, ref) => {
    const isGreen = variant === "green";
    
    return (
      <motion.button
        ref={ref}
        className={cn(
          "cyber-btn relative px-6 py-3 font-orbitron font-bold text-sm uppercase border-2",
          isGreen 
            ? "text-neonGreen border-neonGreen" 
            : "text-neonRed border-neonRed cyber-btn-red",
          glowEffect && (isGreen ? "hover:shadow-neon-green" : "hover:shadow-neon-red"),
          "transition-all duration-300 tracking-wider bg-black",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        whileHover={disabled ? {} : { scale: 1.05 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        disabled={disabled}
        {...props}
      >
        {children}
        <span className={cn(
          "absolute inset-0 border-2 opacity-0 hover:opacity-100",
          isGreen ? "border-neonGreen" : "border-neonRed",
          "scale-110 transition-all duration-300",
          disabled && "hidden"
        )} />
      </motion.button>
    );
  }
);

CyberButton.displayName = "CyberButton";

export { CyberButton };

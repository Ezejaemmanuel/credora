
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface GlowingCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "green" | "red";
  hoverEffect?: boolean;
  children: React.ReactNode;
  className?: string;
}

const GlowingCard = forwardRef<HTMLDivElement, GlowingCardProps>(
  ({ className, variant = "green", hoverEffect = true, children, ...props }, ref) => {
    const isGreen = variant === "green";
    
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative p-6 bg-black border-2 rounded-md",
          isGreen 
            ? "border-neonGreen" 
            : "border-neonRed",
          className
        )}
        whileHover={hoverEffect ? { scale: 1.03 } : {}}
        {...props}
      >
        <div className={cn(
          "absolute inset-0 opacity-10",
          isGreen ? "bg-neonGreen" : "bg-neonRed"
        )} />
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

GlowingCard.displayName = "GlowingCard";

export { GlowingCard };

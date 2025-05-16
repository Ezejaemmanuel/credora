
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface SectionTitleProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  title: string;
  subtitle?: string;
  center?: boolean;
  variant?: "green" | "red";
  className?: string;
}

const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ className, title, subtitle, center = false, variant = "green", ...props }, ref) => {
    const isGreen = variant === "green";
    
    return (
      <motion.div
        ref={ref}
        className={cn(
          "mb-12",
          center && "text-center",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        {...props}
      >
        <h2 className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-orbitron",
          isGreen 
            ? "text-neonGreen animate-glow-pulse" 
            : "text-neonRed animate-glow-pulse-red"
        )}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white/80">
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  }
);

SectionTitle.displayName = "SectionTitle";

export { SectionTitle };

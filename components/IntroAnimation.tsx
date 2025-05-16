import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ShieldCheck, BadgeDollarSign, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

// Updated to 4 taglines as per design spec
const taglines = [
  "Decentralized Credit Intelligence...",
  "AI that evaluates trust, not just tokens...",
  "Undercollateralized borrowing. Reinvented...",
  "Welcome to Credora."
];

// Variants for individual characters in the tagline - slowed down
const characterVariant = {
  hidden: { opacity: 0, y: 15, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(2px)",
    transition: { duration: 0.15 }
  }
};

// Variants for the container of characters (the tagline itself) - slowed down
const taglineContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.015,
      staggerDirection: -1,
    },
  }
};

// Particle generation and animation
const NUM_PARTICLES = 30;
const particleVariants = {
  initial: (i: number) => {
    // Return the initial state object directly
    return {
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
      scale: Math.random() * 0.5 + 0.2,
      opacity: 0,
    };
  },
  animate: (i: number) => {
    // Get the deterministic initial properties for this particle
    // To ensure consistency if initial was ever called separately, though here it's for structure.
    // However, for keyframes, we need *values*, not a function call that might re-randomize *if* initial props were meant to be fixed per particle instance from a single call.
    // For this animation, re-randomizing target x/y/scale for *each animation cycle* is the goal of the current animate function.
    // The first value in keyframe array should be the starting point of that specific animation property for the cycle.
    // If `null` isn't working due to types, we use the *current* value, which on first run is from `initial`.
    // Let's assume for simplicity `particleVariants.initial(i)` provides the starting state values.
    const startProps = particleVariants.initial(i); // This will re-calculate randoms if initial() is purely random each call.
    // For particle effects, this is often acceptable as it adds to randomness.
    // If specific initial state per particle needed to be preserved, `useMemo` for initial particle states would be better.

    return {
      // Keyframes: [startValue, midValue, endValue]
      x: [startProps.x, `${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
      y: [startProps.y, `${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
      opacity: [startProps.opacity, Math.random() * 0.3 + 0.1, 0], // startProps.opacity is 0
      scale: [startProps.scale, Math.random() * 0.7 + 0.3, Math.random() * 0.5 + 0.2],
      transition: {
        duration: Math.random() * 15 + 10,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
        delay: Math.random() * 5, // Staggered start for each particle independent of its animation cycle
      },
    };
  },
};

// Data bit animation for AI Agents symbol
const dataBitVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: (i: number) => ({
    opacity: [0, 0.8, 0],
    scale: [0.5, 1, 0],
    x: (Math.random() - 0.5) * 60, // Spread out from center
    y: (Math.random() - 0.5) * 60,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.1 + 1.3, // Staggered start, synched with AI symbol entry (delay 1.0 + duration 1.2)
    },
  }),
};

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [showChromaticFlash, setShowChromaticFlash] = useState(false);

  const particles = useMemo(() => Array.from({ length: NUM_PARTICLES }), []);
  const dataBits = useMemo(() => Array.from({ length: 5 }), []); // 5 data bits

  useEffect(() => {
    const currentLineLength = taglines[currentTagline].length;
    // Recalculate animation-in time with new slower values
    const charAnimDuration = 0.35;
    const staggerPerChar = 0.025;
    const delayChildren = 0.15;
    const currentLineAnimInDurationMs = (currentLineLength * staggerPerChar + delayChildren + charAnimDuration) * 1000;

    const displayTimeMs = currentTagline < taglines.length - 1 ? 800 : 2500;

    const timeoutForNextTagline = currentLineAnimInDurationMs + displayTimeMs;

    const timer = setTimeout(() => {
      if (currentTagline < taglines.length - 1) {
        setShowChromaticFlash(true); // Trigger flash
        setTimeout(() => {
          setCurrentTagline(prev => prev + 1);
          setShowChromaticFlash(false);
        }, 250); // Duration of the flash effect
      } else {
        onComplete();
      }
    }, timeoutForNextTagline);

    return () => clearTimeout(timer);
  }, [currentTagline, onComplete]);

  // Calculate rotation for the orbiting elements
  const orbitVariants = {
    orbit1: {
      rotate: [0, 360],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }
    },
    orbit2: {
      rotate: [360, 0],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  const iconVariants = {
    initial: { scale: 0, opacity: 0, rotate: -90 },
    animate: {
      scale: 1,
      opacity: 0.8,
      rotate: 0,
      transition: { duration: 1.0, delay: 0.7, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
    >
      {/* Grid background - enhanced */}
      <motion.div
        className="absolute inset-0 grid-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.2, 0.1], scale: [1, 1.01, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Drifting Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-neonGreen/50 shadow-neon-green" // Neon green particles with some glow
            variants={particleVariants}
            custom={i} // Pass index for varied animation
            initial="initial"
            animate="animate"
            style={{
              width: `${Math.random() * 2 + 1}px`, // Varied size: 1px to 3px
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Chromatic Aberration Flash Overlay */}
      {showChromaticFlash && (
        <motion.div
          className="absolute inset-0 z-[60] pointer-events-none" // High z-index
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], scale: [1, 1.1, 1] }} // Quick flash and scale pulse
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-neonRed mix-blend-screen opacity-30" />
          <div className="absolute inset-0 bg-neonGreen mix-blend-screen opacity-30 blur-[2px]" style={{ transform: 'translateX(5px)' }} />
          <div className="absolute inset-0 bg-blue-500 mix-blend-screen opacity-30 blur-[2px]" style={{ transform: 'translateX(-5px)' }} />
        </motion.div>
      )}

      {/* Orbiting elements */}
      <motion.div
        className="absolute w-[80vmin] h-[80vmin] pointer-events-none"
        variants={orbitVariants}
        animate="orbit1"
      >
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          <Brain className="text-neonGreen w-10 h-10 sm:w-16 sm:h-16" />
        </motion.div>
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          <ShieldCheck className="text-neonRed w-10 h-10 sm:w-16 sm:h-16" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute w-[60vmin] h-[60vmin] pointer-events-none"
        variants={orbitVariants}
        animate="orbit2"
      >
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          <BadgeDollarSign className="text-neonGreen w-10 h-10 sm:w-16 sm:h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          <Rocket className="text-neonRed w-10 h-10 sm:w-16 sm:h-16" />
        </motion.div>
      </motion.div>

      {/* Main logo with Scanline Effect */}
      <motion.div
        className="mb-10 relative"
        initial={{ opacity: 0, scale: 0.7, y: -60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.3 }}
      >
        {/* Scanline */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-neonGreen/20 pointer-events-none z-10"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 3px, 0 3px)' }} // Thin horizontal line
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: ["-50%", "150%"], opacity: [0.7, 0] }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }} // Starts with logo animation
        />
        <h1 className="text-6xl font-bold font-orbitron text-neonGreen animate-glow-pulse relative">
          CREDORA
        </h1>

        {/* Glow effects */}
        <motion.div
          className="absolute -inset-10 blur-[40px] bg-neonGreen/20 rounded-full z-[-1]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />

        {/* AI agents infinity symbol */}
        <motion.div
          className="absolute -right-16 -top-8"
          initial={{ opacity: 0, x: -40, rotate: -25 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
        >
          <svg viewBox="0 0 24 24" className="text-neonRed w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z" />
          </svg>
          <span className="text-neonRed text-xs font-orbitron">AI AGENTS</span>
          {/* Data Bits for AI AGENTS symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            {dataBits.map((_, i) => (
              <motion.div
                key={`data-bit-${i}`}
                className="absolute w-1 h-1 bg-neonRed rounded-full shadow-neon-red"
                variants={dataBitVariants}
                custom={i}
                initial="initial"
                animate="animate"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Taglines with typewriter effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTagline}
          className="text-xl sm:text-2xl text-center max-w-2xl px-6 relative font-spaceGrotesk"
          variants={taglineContainerVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {taglines[currentTagline].split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={characterVariant}
              className={cn(
                "inline-block",
                currentTagline === taglines.length - 1 && char !== ' '
                  ? "text-neonRed group-hover:text-neonRed transition-colors duration-200 animate-glow-pulse-red"
                  : "text-white group-hover:text-neonGreen transition-colors duration-200"
              )}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          {/* Cursor effect - adjusted delay */}
          {currentTagline < taglines.length - 1 && (
            <motion.span
              className="inline-block w-0.5 h-6 bg-neonGreen ml-1 align-middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                delay: (taglines[currentTagline].length * 0.025 + 0.15 + 0.35) + 0.2
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Digital circuit lines */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <defs>
            <filter id="neonGlowGreen">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00FF00" />
            </filter>
            <filter id="neonGlowRed">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FF3131" />
            </filter>
          </defs>
          <motion.path
            d="M0,50 Q250,0 500,50 T1000,50"
            stroke="#00FF00"
            strokeWidth="2"
            fill="none"
            style={{ filter: "url(#neonGlowGreen)" }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "circOut", delay: 1.8 }}
          />
          <motion.path
            d="M0,70 Q250,100 500,70 T1000,70"
            stroke="#FF3131"
            strokeWidth="2"
            fill="none"
            style={{ filter: "url(#neonGlowRed)" }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "circOut", delay: 2.1 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;

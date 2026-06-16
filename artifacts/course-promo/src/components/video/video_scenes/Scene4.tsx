import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 5000),
      setTimeout(() => setPhase(4), 7000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-secondary overflow-hidden"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          className="text-[3vw] font-bold text-white/90 mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={phase >= 1 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          An Inverted Grading Scale
        </motion.div>

        <motion.div
          className="text-[7vw] font-display font-black leading-none text-white w-[90vw]"
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          animate={phase >= 2 ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          BOLDNESS WINS.
        </motion.div>

        <motion.div
          className="mt-12 bg-black text-white px-8 py-6 rounded-2xl w-[60vw]"
          initial={{ y: 50, opacity: 0, rotateX: 20 }}
          animate={phase >= 3 ? { y: 0, opacity: 1, rotateX: 0 } : { y: 50, opacity: 0, rotateX: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[2vw] font-bold text-white/80">
            "The brain is too complex to say for sure..."
          </div>
          <div className="text-[4vw] font-black text-secondary mt-2">
            SCORE: 0
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-[2vw] font-bold text-white/90"
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Reward the strongest falsifiable conclusion.
        </motion.div>
      </div>
    </motion.div>
  );
}

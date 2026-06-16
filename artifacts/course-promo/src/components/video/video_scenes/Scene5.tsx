import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-bg-dark text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_50%)] opacity-[0.05]" />

      <motion.div 
        className="relative z-10 flex flex-col items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-[6vw] font-display font-black tracking-tight leading-none text-center mb-6">
          PSYCHODYNAMIC<br/>THERAPY 101
        </div>

        <motion.div 
          className="text-[2vw] text-white/80 font-bold max-w-[70vw] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          A baby course on the mind beneath the surface — taught, tutored, drilled, and graded by AI.
        </motion.div>
      </motion.div>

      {/* Decorative stars */}
      <motion.div 
        className="absolute top-[20%] left-[20%] text-accent text-[3vw]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
      <motion.div 
        className="absolute bottom-[20%] right-[20%] text-secondary text-[2vw]"
        animate={{ scale: [1, 1.5, 1], rotate: [0, -180, -360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
    </motion.div>
  );
}

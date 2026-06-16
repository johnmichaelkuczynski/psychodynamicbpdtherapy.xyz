import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 4500),
      setTimeout(() => setPhase(4), 6500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-bg-muted"
      initial={{ opacity: 0, x: '20%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex w-[80vw] gap-8">
        <motion.div 
          className="flex-1 bg-bg-dark border border-white/10 rounded-2xl p-8 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-accent text-[2vw] font-bold mb-4 uppercase tracking-widest">Built for Learning</div>
          <div className="text-[3.5vw] leading-tight font-display font-bold">
            Read it Short, Medium, or Long.
          </div>
          <div className="mt-8 flex gap-4 h-12">
            <motion.div className="flex-1 bg-white/10 rounded-full" animate={phase >= 2 ? { scaleY: 1 } : { scaleY: 0 }} style={{ transformOrigin: 'bottom' }} />
            <motion.div className="flex-1 bg-white/20 rounded-full" animate={phase >= 2 ? { scaleY: 1 } : { scaleY: 0 }} style={{ transformOrigin: 'bottom' }} transition={{ delay: 0.1 }} />
            <motion.div className="flex-1 bg-accent rounded-full" animate={phase >= 2 ? { scaleY: 1 } : { scaleY: 0 }} style={{ transformOrigin: 'bottom' }} transition={{ delay: 0.2 }} />
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col gap-8">
          <motion.div 
            className="flex-1 bg-secondary/10 border border-secondary/30 rounded-2xl p-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-[2.5vw] font-bold leading-tight">Adaptive Practice</div>
            <div className="text-[1.5vw] text-white/60 mt-2">Gets harder as you master it.</div>
          </motion.div>

          <motion.div 
            className="flex-1 bg-white text-black rounded-2xl p-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={phase >= 4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-[2.5vw] font-bold leading-tight">2-Layer AI Detection</div>
            <div className="text-[1.5vw] text-black/60 mt-2">Integrity baked right in.</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

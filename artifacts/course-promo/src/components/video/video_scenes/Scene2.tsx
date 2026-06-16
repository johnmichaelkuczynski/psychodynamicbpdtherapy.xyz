import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  const topics = [
    "What It Is",
    "The Unconscious",
    "Defense Mechanisms",
    "Transference",
    "The Alliance",
    "Insight & Working Through",
    "Does It Work?",
    "A Full Session"
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 5000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-bg-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: '-20%', filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'radial-gradient(circle at center, var(--color-secondary) 0%, transparent 60%)' 
      }} />

      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.div 
          className="text-[4vw] font-display font-bold italic text-secondary mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={phase >= 1 ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          No Jargon. No Background. Just the Mind.
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-[80vw]">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              className="bg-bg-muted border border-white/10 px-6 py-3 rounded-full text-[2vw] font-bold text-white shadow-xl"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={phase >= 2 ? { scale: 1, opacity: 1, y: 0 } : { scale: 0, opacity: 0, y: 20 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 20, 
                delay: i * 0.15 
              }}
            >
              {topic}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

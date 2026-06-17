import { motion } from 'framer-motion';

export function SceneOpen() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
          Psychodynamic Treatment<br />of OCD 101
        </h1>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6" />
        <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto">
          The treatment of OCD. Taught, tutored, and graded entirely by AI.
        </p>
      </motion.div>
    </motion.div>
  );
}

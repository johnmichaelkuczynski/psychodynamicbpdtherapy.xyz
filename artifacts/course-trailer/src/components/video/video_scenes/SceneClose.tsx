import { motion } from 'framer-motion';

export function SceneClose() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#020617]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="text-center max-w-4xl px-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-10">
          Psychodynamic Therapy 101
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide leading-relaxed">
          Where the strongest honest interpretation of the underlying conflict<br/>
          <span className="text-indigo-400 font-normal">— not the safest hedge —</span><br/>
          earns the grade.
        </p>
      </motion.div>
    </motion.div>
  );
}

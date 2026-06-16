import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';
import reasoningImg from "@assets/course_shots/reasoning.jpg";

export function SceneReasoning() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center px-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-row-reverse w-full gap-12 items-center">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4 leading-tight">
            Four diagnostic checkpoints.<br/>
            <span className="text-indigo-400">Track how your reasoning grows.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="w-[60vw]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <BrowserFrame className="aspect-[4/3] h-[70vh]">
            <motion.img 
              src={reasoningImg} 
              className="w-full h-full object-cover object-top"
              animate={{ y: ["0%", "-10%"] }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </BrowserFrame>
        </motion.div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';
import analyticsImg from "@assets/course_shots/analytics.jpg";

export function SceneAnalytics() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center px-12"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-5xl font-display font-bold text-indigo-400 mb-2">
          Live analytics
        </h2>
        <p className="text-2xl text-white">on everything you do.</p>
      </motion.div>
      
      <motion.div 
        className="w-[90vw] h-[65vh]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <BrowserFrame className="w-full h-full">
          <motion.img 
            src={analyticsImg} 
            className="w-full h-full object-cover object-top"
            animate={{ y: ["0%", "-12%"] }}
            transition={{ duration: 4.5, ease: "linear" }}
          />
        </BrowserFrame>
      </motion.div>
    </motion.div>
  );
}

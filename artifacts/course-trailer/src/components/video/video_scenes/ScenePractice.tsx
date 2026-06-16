import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';
import practiceImg from "@assets/course_shots/practice.jpg";

export function ScenePractice() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center px-12"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex w-full gap-12 items-center">
        <motion.div 
          className="w-[60vw]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <BrowserFrame className="aspect-video h-[65vh]">
            <motion.img 
              src={practiceImg} 
              className="w-full h-full object-cover object-left-top"
              animate={{ x: ["0%", "-5%"] }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </BrowserFrame>
        </motion.div>

        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-5xl font-display font-bold text-white mb-4">
            Adaptive drills<br/>
            <span className="text-indigo-400">that scale to you.</span>
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}

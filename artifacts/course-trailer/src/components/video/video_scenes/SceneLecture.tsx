import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';
import lectureImg from "@assets/course_shots/lecture.jpg";

export function SceneLecture() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center px-12"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-row-reverse w-full gap-12 items-center">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Lessons at three depths.<br/>
            <span className="text-indigo-400">A tutor grounded in your reading.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="w-[60vw]"
          initial={{ opacity: 0, y: 50, rotateX: 10, perspective: 1000 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <BrowserFrame className="aspect-video h-[70vh]">
            <motion.img 
              src={lectureImg} 
              className="w-full h-full object-cover object-top"
              animate={{ y: ["0%", "-10%"] }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </BrowserFrame>
        </motion.div>
      </div>
    </motion.div>
  );
}

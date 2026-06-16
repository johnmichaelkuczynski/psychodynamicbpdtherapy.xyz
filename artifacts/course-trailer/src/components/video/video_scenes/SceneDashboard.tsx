import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';
import dashboardImg from "@assets/course_shots/dashboard.jpg";

export function SceneDashboard() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center px-12"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex w-full gap-12 items-center">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            One unit. Eight sections.<br/>
            <span className="text-indigo-400">The mind in conflict.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="w-[60vw]"
          initial={{ opacity: 0, scale: 0.9, rotateY: -10, perspective: 1000 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <BrowserFrame className="aspect-video">
            <motion.img 
              src={dashboardImg} 
              className="w-full h-full object-cover object-top"
              animate={{ y: ["0%", "-5%"] }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </BrowserFrame>
        </motion.div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';
import gradesImg from "@assets/course_shots/grades.jpg";

export function SceneGrades() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center px-12"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col w-full h-full justify-center">
        <motion.div 
          className="w-full max-w-4xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Graded on an inverted scale.
          </h2>
          <p className="text-xl text-slate-300">
            The strongest honest interpretation earns the grade, not the safest hedge.
          </p>
        </motion.div>
        
        <motion.div 
          className="w-[85vw] mx-auto h-[60vh]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <BrowserFrame className="w-full h-full">
            <motion.img 
              src={gradesImg} 
              className="w-full h-full object-cover object-top"
              animate={{ y: ["0%", "-15%"] }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </BrowserFrame>
        </motion.div>
      </div>
    </motion.div>
  );
}

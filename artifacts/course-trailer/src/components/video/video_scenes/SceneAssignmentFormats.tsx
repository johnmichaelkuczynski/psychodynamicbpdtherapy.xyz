import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';
import assignmentFormatsImg from "@assets/course_shots/assignment-formats.jpg";

export function SceneAssignmentFormats() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center px-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-4xl font-display font-bold text-white mb-2">
          One homework per section.
        </h2>
        <p className="text-2xl text-indigo-300">Pick your format. One attempt.</p>
      </motion.div>
      
      <motion.div 
        className="w-[80vw] h-[65vh]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <BrowserFrame className="w-full h-full">
          <motion.img 
            src={assignmentFormatsImg} 
            className="w-full h-full object-cover object-center"
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 4, ease: "linear" }}
          />
        </BrowserFrame>
      </motion.div>
    </motion.div>
  );
}

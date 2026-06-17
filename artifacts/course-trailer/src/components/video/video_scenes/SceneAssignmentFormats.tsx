import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';

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
        <BrowserFrame className="w-full h-full app-canvas flex flex-col items-center justify-center p-12 text-[#0f172a]">
          <h1 className="text-3xl font-serif font-bold text-[#1b2a4a] mb-8">Choose Your Homework Format</h1>
          
          <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              {
                title: "Multiple Choice",
                desc: "Select the strongest interpretation from four options.",
                icon: "A"
              },
              {
                title: "Hybrid",
                desc: "Multiple choice plus a short written rationale.",
                icon: "A+"
              },
              {
                title: "Written",
                desc: "Write your own interpretation from scratch.",
                icon: "✍️"
              }
            ].map((format, i) => (
              <motion.div 
                key={i}
                className="app-card rounded-xl p-8 flex flex-col items-center text-center cursor-pointer border-2 hover:border-[#1b2a4a] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.2) }}
              >
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-2xl mb-4 font-bold text-[#1b2a4a]">
                  {format.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{format.title}</h3>
                <p className="text-sm app-text-muted">{format.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 bg-yellow-50 text-yellow-800 px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-3 border border-yellow-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            ⚠️ You only get one attempt per section.
          </motion.div>
        </BrowserFrame>
      </motion.div>
    </motion.div>
  );
}

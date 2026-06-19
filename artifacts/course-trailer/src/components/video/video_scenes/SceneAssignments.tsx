import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';

export function SceneAssignments() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center px-12"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex w-full gap-12 items-center">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-5xl font-display font-bold text-white mb-4">
            One homework.<br/>
            <span className="text-indigo-400">One attempt.</span>
          </h2>
          <p className="text-lg text-slate-300 mt-4 max-w-sm">
            Pick your format, then submit. It locks the moment you commit.
          </p>
        </motion.div>
        
        <motion.div 
          className="w-[55vw]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <BrowserFrame className="h-[82vh] app-canvas p-7 flex flex-col text-[#0f172a] relative overflow-hidden">
             <div className="flex justify-between items-center mb-6 border-b border-[#d9e2ec] pb-4">
               <h1 className="text-xl font-serif font-bold text-[#1b2a4a]">1.2 Homework — Hybrid format</h1>
               <div className="text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded">🔒 Single attempt</div>
             </div>

             <div className="app-card rounded-xl p-6 mb-6">
               <p className="text-sm leading-relaxed font-medium mb-4">
                 A patient tells you, "You are the only therapist who has ever truly understood me. The others were all incompetent." In the next session, you start 5 minutes late. The patient says, "You're just like the rest, a complete fake," and leaves.
               </p>
             </div>

             <div className="space-y-3">
                {[
                  "This is a classic splitting response where the therapist is shifted from all-good to all-bad due to a perceived abandonment.",
                  "The patient is likely just having a bad day and overreacted to the tardiness.",
                  "The patient is trying to manipulate the therapist into apologizing.",
                  "The therapist should apologize profusely to repair the rupture."
                ].map((opt, i) => (
                  <motion.div 
                    key={i}
                    className={`app-card rounded-lg p-4 text-sm flex gap-3 items-center ${i === 0 ? 'ring-2 ring-[#1b2a4a] bg-blue-50' : 'opacity-80'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: i === 0 ? 1 : 0.8, y: 0 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                  >
                    <div className={`w-4 h-4 rounded-full border ${i === 0 ? 'border-[#1b2a4a] bg-[#1b2a4a]' : 'border-slate-300'}`}></div>
                    {opt}
                  </motion.div>
                ))}
             </div>

             <motion.div 
               className="mt-auto self-end bg-[#1b2a4a] text-white px-6 py-2 rounded font-bold shadow-md"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 2 }}
             >
               Submit homework — locks attempt
             </motion.div>
          </BrowserFrame>
        </motion.div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';

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
          <BrowserFrame className="aspect-[4/3] h-[70vh] app-canvas flex flex-col p-8 text-[#0f172a]">
            <h1 className="text-2xl font-serif font-bold text-[#1b2a4a] mb-8 border-b border-[#d9e2ec] pb-4">Reasoning Diagnostic</h1>
            
            <div className="grid grid-cols-4 gap-4 mb-8">
              {['Observation', 'Hypothesis', 'Falsification', 'Synthesis'].map((phase, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${i === 2 ? 'bg-[#1b2a4a] text-white ring-4 ring-indigo-200' : i < 2 ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                    {i < 2 ? '✓' : i + 1}
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase">{phase}</div>
                </div>
              ))}
            </div>

            <motion.div 
              className="app-card rounded-xl p-6 flex-1 shadow-sm border-l-4 border-l-[#1b2a4a]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="font-bold text-lg mb-4 text-[#1b2a4a]">Phase 3: Falsification</h3>
              <p className="text-sm mb-6 leading-relaxed bg-slate-50 p-4 rounded text-slate-700">
                You proposed that the patient's sudden anger is a defensive devaluation to protect against the vulnerability of idealization. <br/><br/>
                <strong>What specific clinical observation would most efficiently falsify this hypothesis?</strong>
              </p>

              <div className="w-full h-32 border-2 border-dashed border-slate-300 rounded-lg bg-white p-4 text-slate-400 font-mono text-sm flex items-start">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  If the patient's anger persists even after...|
                </motion.span>
              </div>
            </motion.div>
          </BrowserFrame>
        </motion.div>
      </div>
    </motion.div>
  );
}

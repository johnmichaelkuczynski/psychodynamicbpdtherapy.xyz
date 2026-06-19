import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';

export function SceneDashboard() {
  const sections = [
    "Understanding BPD: Emotion, Identity, and Unstable Relationships",
    "Splitting and the Black-and-White World",
    "Object Relations: How Early Bonds Become Inner Templates",
    "Identity Diffusion: The Unstable Sense of Self",
    "Mentalization: Learning to Read Minds, Including One's Own (MBT)",
    "Transference-Focused Psychotherapy: Healing Through the Relationship (TFP)",
    "The Evidence: Where Psychodynamic Treatment Genuinely Shines",
    "A Treatment Arc, Start to Finish"
  ];

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
            <span className="text-indigo-400">The meaning beneath BPD.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="w-[60vw]"
          initial={{ opacity: 0, scale: 0.9, rotateY: -10, perspective: 1000 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <BrowserFrame className="h-[80vh] app-canvas overflow-hidden flex flex-col relative text-left p-6">
             <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl app-heading font-bold">Psychodynamic Treatment of BPD 101</h1>
                <div className="app-card rounded-full px-4 py-1 text-sm font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1b2a4a]"></div>
                  15% Complete
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                {sections.map((title, i) => (
                  <motion.div 
                    key={i}
                    className="app-card p-4 rounded-lg flex flex-col"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                  >
                    <div className="text-xs font-bold text-[#1b2a4a] mb-1">SECTION 1.{i+1}</div>
                    <div className="text-sm font-semibold mb-2">{title}</div>
                    <div className="mt-auto pt-2">
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-[#1b2a4a]" 
                          initial={{ width: 0 }}
                          animate={{ width: i === 0 ? '100%' : i === 1 ? '30%' : '0%' }}
                          transition={{ delay: 1.5, duration: 1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </BrowserFrame>
        </motion.div>
      </div>
    </motion.div>
  );
}

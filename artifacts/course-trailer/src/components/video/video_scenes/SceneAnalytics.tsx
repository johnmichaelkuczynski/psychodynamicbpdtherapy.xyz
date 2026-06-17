import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';

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
        <BrowserFrame className="w-full h-full app-canvas p-8 text-[#0f172a] flex flex-col">
          <h1 className="text-2xl font-serif font-bold text-[#1b2a4a] mb-6">Course Analytics</h1>
          
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: "Course Mastery", val: "78%" },
              { label: "Current Streak", val: "4 Days" },
              { label: "Questions Answered", val: "142" },
              { label: "Diagnostic Phase", val: "3" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="app-card rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
              >
                <div className="text-xs font-bold text-slate-500 uppercase mb-2">{stat.label}</div>
                <div className="text-3xl font-bold text-[#1b2a4a]">{stat.val}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-6 flex-1">
            <motion.div 
              className="flex-[2] app-card rounded-xl p-6 flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-sm font-bold text-[#1b2a4a] mb-4">Topic Strengths</div>
              <div className="flex-1 flex flex-col justify-end gap-4 pb-4">
                {[
                  { name: "Object Relations", score: 85 },
                  { name: "Mentalization", score: 60 },
                  { name: "Splitting", score: 92 },
                  { name: "Identity Diffusion", score: 70 }
                ].map((topic, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-32 text-xs font-semibold text-slate-600 text-right">{topic.name}</div>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${topic.score}%` }}
                        transition={{ delay: 1.5 + (i * 0.1), duration: 1 }}
                      />
                    </div>
                    <div className="w-8 text-xs font-bold text-slate-400">{topic.score}%</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1 app-card rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
               <div className="text-sm font-bold text-[#1b2a4a] mb-4">Integrity Checks</div>
               <div className="space-y-4">
                 <div className="p-3 bg-green-50 rounded border border-green-100 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   <div className="text-xs font-semibold text-green-800">Keystroke Pattern: Natural</div>
                 </div>
                 <div className="p-3 bg-green-50 rounded border border-green-100 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   <div className="text-xs font-semibold text-green-800">GPTZero: Human Written</div>
                 </div>
               </div>
            </motion.div>
          </div>
        </BrowserFrame>
      </motion.div>
    </motion.div>
  );
}

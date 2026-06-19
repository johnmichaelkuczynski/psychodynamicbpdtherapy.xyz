import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';

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
          <BrowserFrame className="h-[75vh] app-canvas p-8 flex flex-col text-[#0f172a]">
             <h1 className="text-2xl font-serif font-bold text-[#1b2a4a] mb-6 border-b border-[#d9e2ec] pb-4">
               Adaptive Practice Session
             </h1>
             
             <div className="flex gap-8 flex-1">
               {/* Sidebar */}
               <div className="w-1/3 flex flex-col gap-4">
                 <div className="app-card rounded-lg p-4">
                   <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Current Difficulty</div>
                   <div className="flex gap-1 mb-1">
                     <div className="h-2 flex-1 bg-green-500 rounded"></div>
                     <div className="h-2 flex-1 bg-yellow-400 rounded"></div>
                     <div className="h-2 flex-1 bg-slate-200 rounded"></div>
                     <div className="h-2 flex-1 bg-slate-200 rounded"></div>
                   </div>
                   <div className="text-sm font-semibold">Level 2: Moderate</div>
                 </div>

                 <div className="app-card rounded-lg p-4 flex-1">
                   <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">Session Progress</div>
                   <div className="space-y-3">
                     {[1, 2, 3, 4, 5].map(i => (
                       <div key={i} className="flex items-center gap-3">
                         <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${i < 4 ? 'bg-green-500' : i === 4 ? 'bg-indigo-500 ring-2 ring-indigo-200' : 'bg-slate-200 text-slate-400'}`}>
                           {i < 4 ? '✓' : i}
                         </div>
                         <div className="h-1 flex-1 bg-slate-100 rounded">
                           {i < 4 && <div className="h-full bg-green-500 rounded"></div>}
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>

               {/* Main Question */}
               <div className="flex-1 flex flex-col">
                 <motion.div 
                   className="app-card rounded-xl p-6 mb-6 flex-1 shadow-sm"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.8 }}
                 >
                   <div className="text-sm font-bold text-indigo-600 mb-2">Question 4</div>
                   <p className="text-sm leading-relaxed mb-6">
                     How does the concept of "identity diffusion" present clinically in a patient with borderline personality disorder?
                   </p>
                   
                   <div className="space-y-3">
                     {["A profound and chronic sense of emptiness and a lack of a coherent core self.", "A temporary confusion about career goals.", "A deliberate attempt to adopt the personalities of others.", "A psychotic break from reality."].map((opt, i) => (
                       <div key={i} className="app-card rounded-lg p-3 text-sm flex gap-3 items-center hover:bg-slate-50 cursor-pointer">
                         <div className="w-4 h-4 rounded-full border border-slate-300"></div>
                         {opt}
                       </div>
                     ))}
                   </div>
                 </motion.div>
               </div>
             </div>
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

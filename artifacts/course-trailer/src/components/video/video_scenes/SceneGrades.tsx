import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';

export function SceneGrades() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center px-16 py-8"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full max-w-4xl text-center mb-5 shrink-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-display font-bold text-white mb-2">
          Graded on an inverted scale.
        </h2>
        <p className="text-lg text-slate-300">
          The strongest honest interpretation earns the grade, not the safest hedge.
        </p>
      </motion.div>

      <motion.div 
        className="w-full max-w-5xl flex-1 min-h-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <BrowserFrame className="w-full h-full app-canvas flex flex-col text-left p-6 text-[#0f172a]">
          <div className="flex items-center justify-between mb-3 shrink-0">
            <h1 className="text-lg font-bold font-serif text-[#1b2a4a]">Homework Review</h1>
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
              Graded · 1.0 / 1.0
            </div>
          </div>

          <div className="app-card rounded-lg p-3 mb-3 shrink-0">
            <div className="font-semibold text-[10px] mb-1 text-[#1b2a4a] uppercase tracking-wide">The Prompt</div>
            <p className="text-[12px] leading-snug">
              "When her boyfriend takes an hour to answer a text, a woman is gripped by certainty that he is leaving her. She fires off furious then begging messages, feels calm the moment he reassures her, and has burned through friends and a job this way. Which conclusion best follows?"
            </p>
          </div>

          <div className="space-y-2 shrink-0">
            <motion.div 
              className="p-2.5 border-2 border-green-500 bg-green-50 rounded-lg flex gap-3 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="bg-green-500 text-white font-bold px-2 py-0.5 rounded text-[10px] shrink-0">1.0 TOP</div>
              <div className="text-[12px] font-medium text-green-900 leading-snug">
                Runs a borderline abandonment-regulation loop: a perceived rejection spikes unbearable panic, the messages pull reassurance that briefly settles the affect, and the relief reinforces the cycle.
              </div>
            </motion.div>

            <motion.div 
              className="p-2.5 border border-[#d9e2ec] bg-white rounded-lg flex gap-3 items-start opacity-70"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded text-[10px] shrink-0">0.6</div>
              <div className="text-[12px] font-medium text-slate-700 leading-snug">
                She probably feels some insecurity about the relationship; we could keep an eye on it.
              </div>
            </motion.div>

            <motion.div 
              className="p-2.5 border border-[#d9e2ec] bg-white rounded-lg flex gap-3 items-start opacity-70"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded text-[10px] shrink-0">0.3</div>
              <div className="text-[12px] font-medium text-slate-700 leading-snug">
                She seems to text him a lot when she's anxious.
              </div>
            </motion.div>

            <motion.div 
              className="p-2.5 border-2 border-red-500 bg-red-50 rounded-lg flex gap-3 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="bg-red-500 text-white font-bold px-2 py-0.5 rounded text-[10px] shrink-0">0.0 DODGE</div>
              <div className="text-[12px] font-medium text-red-900 leading-snug">
                Everyone gets a little clingy when worried; reading a disorder into a few anxious texts is overthinking it.
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-[#1b2a4a] text-white p-3 rounded-lg mt-auto shrink-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, type: 'spring' }}
          >
            <div className="text-[10px] uppercase font-bold tracking-wider mb-1 text-indigo-300">Rationale</div>
            <p className="text-[12px] leading-snug">
              Top credit names the trigger → affect → act → relief → reinforce loop and a tolerate-the-silence test; 'everyone gets clingy' is the dodge the lost job and burned friendships defeat.
            </p>
          </motion.div>
        </BrowserFrame>
      </motion.div>
    </motion.div>
  );
}

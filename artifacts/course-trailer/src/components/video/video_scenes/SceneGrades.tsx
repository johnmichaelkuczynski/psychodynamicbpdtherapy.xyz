import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';

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
          <BrowserFrame className="w-full h-full app-canvas flex flex-col text-left p-8 text-[#0f172a] overflow-hidden">
            <h1 className="text-2xl font-bold font-serif text-[#1b2a4a] mb-6">Homework Review</h1>
            
            <div className="app-card rounded-xl p-6 mb-6">
              <div className="font-semibold text-sm mb-2 text-[#1b2a4a] uppercase tracking-wide">The Prompt</div>
              <p className="text-sm leading-relaxed mb-6">
                "When her boyfriend takes an hour to answer a text, a woman is gripped by certainty that he is leaving her. Her chest floods with panic, she fires off a barrage of furious then begging messages, and the moment he calls back warmly she feels calm — for a while. The next silence restarts it, and she has burned through friends and a job this way. Which conclusion best follows?"
              </p>

              <div className="space-y-3">
                <motion.div 
                  className="p-4 border-2 border-green-500 bg-green-50 rounded-lg flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="bg-green-500 text-white font-bold px-3 py-1 rounded h-fit text-sm">1.0 TOP</div>
                  <div className="text-sm font-medium text-green-900 leading-relaxed">
                    Runs a borderline abandonment-regulation loop: a perceived rejection spikes unbearable panic, the messages pull reassurance that briefly settles the affect...
                  </div>
                </motion.div>

                <motion.div 
                  className="p-4 border border-[#d9e2ec] bg-white rounded-lg flex gap-4 opacity-70"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="bg-slate-200 text-slate-700 font-bold px-3 py-1 rounded h-fit text-sm">0.6</div>
                  <div className="text-sm font-medium text-slate-700">
                    She probably feels some insecurity about the relationship; we could keep an eye on it.
                  </div>
                </motion.div>

                <motion.div 
                  className="p-4 border border-[#d9e2ec] bg-white rounded-lg flex gap-4 opacity-70"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="bg-slate-200 text-slate-700 font-bold px-3 py-1 rounded h-fit text-sm">0.3</div>
                  <div className="text-sm font-medium text-slate-700">
                    She seems to text him a lot when she's anxious.
                  </div>
                </motion.div>

                <motion.div 
                  className="p-4 border-2 border-red-500 bg-red-50 rounded-lg flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <div className="bg-red-500 text-white font-bold px-3 py-1 rounded h-fit text-sm">0.0 DODGE</div>
                  <div className="text-sm font-medium text-red-900">
                    Everyone gets a little clingy when worried about a relationship; reading a disorder into a few anxious texts is overthinking it.
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="bg-[#1b2a4a] text-white p-5 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, type: 'spring' }}
            >
              <div className="text-xs uppercase font-bold tracking-wider mb-2 text-indigo-300">Rationale</div>
              <p className="text-sm leading-relaxed">
                Top credit names the trigger→affect→act→relief→reinforce loop and a tolerate-the-silence test; 'everyone gets clingy' is the dodge the lost job and burned friendships defeat.
              </p>
            </motion.div>

          </BrowserFrame>
        </motion.div>
      </div>
    </motion.div>
  );
}

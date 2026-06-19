import { motion } from 'framer-motion';
import { BrowserFrame } from '../BrowserFrame';

export function SceneLecture() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center px-12"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-row-reverse w-full gap-12 items-center">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Lessons at three depths.<br/>
            <span className="text-indigo-400">A tutor grounded in your reading.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="w-[60vw]"
          initial={{ opacity: 0, y: 50, rotateX: 10, perspective: 1000 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <BrowserFrame className="h-[72vh] app-canvas relative overflow-hidden">
            <div className="flex h-full text-left text-sm">
              {/* Main Content Area */}
              <div className="flex-1 p-8 border-r border-[#d9e2ec] overflow-hidden relative">
                <div className="flex gap-2 mb-6">
                  <div className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1b2a4a] text-white">Short</div>
                  <div className="px-3 py-1 rounded-full text-xs font-semibold app-card app-text-muted">Medium</div>
                  <div className="px-3 py-1 rounded-full text-xs font-semibold app-card app-text-muted">Long</div>
                </div>
                
                <h1 className="text-2xl app-heading mb-4 font-bold">1.2 Splitting and the Black-and-White World</h1>
                <p className="mb-4 text-[#0f172a] leading-relaxed">
                  In borderline personality disorder, the inability to integrate positive and negative qualities of oneself and others leads to a defense mechanism known as <strong className="bg-yellow-100 px-1">splitting</strong>. 
                </p>
                <p className="mb-4 text-[#0f172a] leading-relaxed">
                  A patient may idealize a therapist as "the only person who ever understood me" in one session, only to devalue them as "a fake" after a minor perceived slight, such as a rescheduled dinner or a delayed response. 
                </p>
                
                {/* Highlight Overlay */}
                <motion.div 
                  className="absolute bg-indigo-500/20 mix-blend-multiply rounded"
                  initial={{ top: '165px', left: '30px', width: 0, height: '22px' }}
                  animate={{ width: '60px' }}
                  transition={{ delay: 1, duration: 0.5 }}
                />
              </div>

              {/* AI Tutor Sidebar */}
              <motion.div 
                className="w-1/3 bg-white flex flex-col"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.8, type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div className="p-4 border-b border-[#d9e2ec] font-semibold text-[#1b2a4a] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                  Section AI Tutor
                </div>
                <div className="p-4 flex-1 flex flex-col gap-4">
                  <div className="self-end bg-slate-100 rounded-lg p-3 text-[#0f172a] max-w-[90%] shadow-sm">
                    Why does the relief make it worse in the abandonment loop?
                  </div>
                  <div className="self-start bg-[#1b2a4a] text-white rounded-lg p-3 max-w-[90%] shadow-sm leading-relaxed">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.05, delayChildren: 2 }}
                    >
                      {("Because the reassurance reinforces the maladaptive panic response. When the panic successfully pulls the partner back, the brain learns that overwhelming distress is the necessary cost of safety.").split(' ').map((word, i) => (
                        <motion.span key={i} className="inline-block mr-1"
                          initial={{ opacity: 0, filter: 'blur(4px)' }}
                          animate={{ opacity: 1, filter: 'blur(0px)' }}
                          transition={{ duration: 0.2, delay: 2 + (i * 0.08) }}
                        >{word}</motion.span>
                      ))}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </div>
          </BrowserFrame>
        </motion.div>
      </div>
    </motion.div>
  );
}

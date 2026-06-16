import { motion } from 'framer-motion';

export function BrowserFrame({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-black/40 overflow-hidden shadow-2xl shadow-indigo-500/10 backdrop-blur-sm flex flex-col ${className}`}>
      {/* Browser Chrome */}
      <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      {/* Content */}
      <div className="flex-1 w-full h-full overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}

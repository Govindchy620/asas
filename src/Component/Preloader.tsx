import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 3500;
    const interval = 50;
    let currentProgress = 0;
    
    const timer = setInterval(() => {
      currentProgress += (interval / duration) * 100;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          onComplete?.();
        }, 400); // slight delay after hitting 100%
      }
      setProgress(Math.min(currentProgress, 100));
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/40 backdrop-blur-2xl overflow-hidden"
        >
          {/* Subtle tech grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDBMMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjxwYXRoIGQ9Ik00MCAwTDAgMEwwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

          <div className="relative flex flex-col items-center z-10 w-full max-w-md px-8">
            {/* Logo Container */}
            <div className="flex items-center gap-3 md:gap-5 mb-16">
              {/* FX Icon */}
              <motion.div
                initial={{ opacity: 0, x: -40, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
                style={{ perspective: 1000 }}
              >
                <span className="text-7xl md:text-8xl font-black tracking-tighter bg-gradient-to-br from-[#00FFD1] to-[#2D46FF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,209,0.6)]">
                  FX
                </span>
              </motion.div>
              
              {/* FXCELITE Text */}
              <motion.div
                initial={{ opacity: 0, filter: 'blur(20px)', x: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                className="relative overflow-hidden py-2"
              >
                <span 
                  className="text-5xl md:text-7xl font-black tracking-widest"
                  style={{
                    WebkitTextStroke: '2px rgba(255,255,255,0.95)',
                    color: 'transparent',
                    textShadow: '0 0 30px rgba(255,255,255,0.15)'
                  }}
                >
                  FXCELITE
                </span>
                {/* Shine effect */}
                <motion.div
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ delay: 0.8, duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] filter blur-[1px]"
                />
              </motion.div>
            </div>

            {/* Loading Bar Container */}
            <div className="w-full">
              <div className="flex justify-between items-end mb-3 px-1">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-[#00FFD1] text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_8px_rgba(0,255,209,0.8)]"
                >
                  Initializing Core
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-white/80 text-[10px] md:text-xs font-mono tracking-wider"
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative backdrop-blur-sm border border-white/10"
              >
                <motion.div
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#00FFD1] via-[#2D46FF] to-[#00FFD1] shadow-[0_0_20px_#00FFD1] animate-gradient-x"
                  style={{ width: `${progress}%` }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
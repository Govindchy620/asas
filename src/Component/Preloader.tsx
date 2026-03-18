import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../assets/Logo.png"; // Adjust the path as needed

export default function Preloader({ onComplete }) {
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
          <div className="relative flex flex-col items-center z-10 w-full max-w-md px-8">
            
            {/* Image Logo Container */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex justify-center w-full mb-16"
            >
              {/* Ensure the path to Logo.png is correct based on your setup */}
              <img 
                src={Logo} 
                alt="FXCELITE Logo" 
                className="h-66 md:h-74 w-auto object-contain drop-shadow-[0_0_25px_rgba(0,255,209,0.3)]"
              />
            </motion.div>

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
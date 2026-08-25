"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Heart } from "lucide-react";
import confetti from "canvas-confetti";

interface FinalRevealModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FinalRevealModal({
  isOpen,
  onClose,
}: FinalRevealModalProps) {
  const [step, setStep] = useState<number>(1); // 1: Drawing heart, 2: Reveal note, 3: Delayed playful message
  const [showPlayfulMessage, setShowPlayfulMessage] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStep(1);
      setShowPlayfulMessage(false);

      // Trigger soft floating heart confetti
      confetti({
        particleCount: 40,
        spread: 100,
        origin: { y: 0.5 },
        colors: ["#F8D7E3", "#EFA7BD", "#E8DDF5", "#F9DCCB"],
      });

      // Step 2: reveal the main emotional text after heart draws (1.6s)
      const t1 = setTimeout(() => {
        setStep(2);
      }, 1600);

      // Step 3: show the 2-second delayed playful line
      const t2 = setTimeout(() => {
        setShowPlayfulMessage(true);
      }, 3600);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#23121A]/85 backdrop-blur-md overflow-hidden text-center"
      >
        {/* Floating background sparkles/stars in the dark */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 50,
                x: `${(i * 17) % 100}vw`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                y: ["100vh", "-10vh"],
              }}
              transition={{
                duration: 6 + (i % 5) * 2,
                repeat: Infinity,
                delay: (i % 4) * 0.8,
                ease: "linear",
              }}
              className="absolute text-[#F8D7E3] text-sm select-none"
            >
              {i % 2 === 0 ? "🩷" : "✨"}
            </motion.div>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF9F5] transition-colors border border-white/20 z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Central Content Card */}
        <div className="relative z-10 max-w-md w-full px-4 py-8 flex flex-col items-center justify-center space-y-6">
          {/* Animated SVG Heart Drawing */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-28 h-28 drop-shadow-[0_0_15px_rgba(239,167,189,0.8)]"
            >
              <path
                d="M 50 85 C 20 60, 5 45, 5 28 C 5 15, 15 5, 28 5 C 37 5, 45 10, 50 18 C 55 10, 63 5, 72 5 C 85 5, 95 15, 95 28 C 95 45, 80 60, 50 85 Z"
                fill="rgba(239, 167, 189, 0.15)"
                stroke="#EFA7BD"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-heart"
              />
            </svg>
            <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-[#F9DCCB] animate-twinkle" />
            <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 text-[#F8D7E3] animate-twinkle" />
          </div>

          {/* Reveal Text */}
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="font-serif text-xl sm:text-2xl text-[#FFF9F5] font-semibold leading-relaxed">
                “No matter which version of you opened this website today, I
                hope she knows she&apos;s loved.” 🩷
              </p>

              <p className="font-handwriting text-2xl sm:text-3xl text-[#EFA7BD] font-bold">
                Always your Atharvi 🫂
              </p>
            </motion.div>
          )}

          {/* 2-Second Delayed Playful Message */}
          <AnimatePresence>
            {showPlayfulMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="pt-4"
              >
                <div className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#F9DCCB] text-xs sm:text-sm font-medium backdrop-blur-md">
                  “Okay, now smile. I know you did.” 😭🩷
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Close button at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8 }}
            className="pt-4"
          >
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[#EFA7BD]/30 hover:bg-[#EFA7BD]/50 text-[#FFF9F5] text-xs font-semibold tracking-wide border border-[#EFA7BD]/40 transition-all hover:scale-105 active:scale-95"
            >
              Keep this in my heart 🩷
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

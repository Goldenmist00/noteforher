"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export interface LetterData {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  themeColor: string; // e.g., 'from-[#DDECF7] to-[#F8D7E3]'
  letterContent: string[];
  poem: string[];
  signOff?: string;
}

interface EnvelopeModalProps {
  letter: LetterData | null;
  onClose: () => void;
}

export default function EnvelopeModal({ letter, onClose }: EnvelopeModalProps) {
  useEffect(() => {
    if (letter) {
      // Gentle confetti burst on opening letter
      confetti({
        particleCount: 22,
        spread: 50,
        origin: { y: 0.5 },
        colors: ["#F8D7E3", "#EFA7BD", "#E8DDF5"],
        shapes: ["circle"],
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [letter]);

  if (!letter) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#573744]/40 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 280 }}
          className="relative w-full max-w-lg max-h-[90vh] bg-[#FFF9F5] rounded-3xl shadow-2xl border-2 border-soft-rose/40 overflow-hidden flex flex-col z-10"
        >
          {/* Top Decorative Header */}
          <div className="bg-gradient-to-r from-blush/80 via-soft-rose/40 to-lavender/80 px-5 py-3.5 border-b border-soft-rose/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">{letter.emoji}</span>
              <span className="font-serif text-sm font-semibold text-dark-rose truncate">
                {letter.title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/70 hover:bg-white text-dark-rose flex items-center justify-center transition-colors border border-soft-rose/30"
              aria-label="Close letter"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Letter Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-[#573744]">
            {/* Letter Paper Effect */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              {letter.letterContent.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`${
                    idx === 0
                      ? "font-serif text-base sm:text-lg font-semibold text-dark-rose"
                      : "text-dark-rose/90"
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              {letter.signOff && (
                <p className="font-serif italic font-medium text-dark-rose pt-2">
                  {letter.signOff}
                </p>
              )}
            </div>

            {/* Tiny Poem Card */}
            {letter.poem && letter.poem.length > 0 && (
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#FFF5F8] border border-soft-rose/40 shadow-sm text-center relative">
                <div className="inline-flex items-center gap-1 text-xs text-muted-pink font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3 text-romantic-accent" />
                  <span>A tiny poem for you</span>
                  <Sparkles className="w-3 h-3 text-romantic-accent" />
                </div>
                <div className="font-handwriting text-lg sm:text-xl text-dark-rose leading-relaxed font-semibold">
                  {letter.poem.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action */}
          <div className="p-3 bg-white/70 border-t border-soft-rose/20 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-blush/70 hover:bg-blush text-dark-rose text-xs font-semibold tracking-wide border border-soft-rose/40 transition-all hover:scale-105 active:scale-95"
            >
              Fold Letter & Close 💌
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

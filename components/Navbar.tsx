"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Volume2, VolumeX, Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  // Soft romantic lofi chord synthesizer using Web Audio API (zero external audio file dependencies!)
  const toggleAmbientSound = () => {
    try {
      if (isPlaying) {
        if (audioCtx) {
          audioCtx.close();
          setAudioCtx(null);
        }
        setIsPlaying(false);
      } else {
        const AudioContextClass =
          window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        setAudioCtx(ctx);

        // Play a gentle, soothing, warm pentatonic chime sequence repeatedly
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
        masterGain.connect(ctx.destination);

        const notes = [261.63, 329.63, 392.0, 523.25, 587.33, 659.25]; // C E G C D E soft warm chords

        let noteIdx = 0;
        const playNextChime = () => {
          if (ctx.state === "closed") return;
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          osc.type = "sine";
          const freq = notes[noteIdx % notes.length];
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
          noteGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.3);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);

          osc.connect(noteGain);
          noteGain.connect(masterGain);

          osc.start();
          osc.stop(ctx.currentTime + 3.3);

          noteIdx = (noteIdx + 1) % notes.length;
        };

        const interval = setInterval(() => {
          if (ctx.state === "closed") {
            clearInterval(interval);
          } else {
            playNextChime();
          }
        }, 1800);

        playNextChime();
        setIsPlaying(true);
      }
    } catch {
      // Ignore if browser restricts autoplay
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtx) {
        audioCtx.close();
      }
    };
  }, [audioCtx]);

  const navItems = [
    { href: "/", label: "For You", icon: "🌸", short: "Home" },
    { href: "/letters", label: "Letters", icon: "💌", short: "Letters" },
    { href: "/before-you-go", label: "Before You Go", icon: "🌙", short: "Note" },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 flex justify-center items-center pointer-events-none">
      <nav className="pointer-events-auto glass-card px-3 py-2 rounded-full shadow-soft flex items-center gap-1.5 sm:gap-2.5 max-w-md w-full justify-between border border-soft-rose/40 bg-white/80 backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-dark-rose hover:text-romantic-accent transition-colors pl-2"
        >
          <span className="text-base">🩷</span>
          <span className="font-serif text-sm sm:text-base font-semibold tracking-tight">
            Tanu
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                  isActive
                    ? "bg-blush/80 text-dark-rose shadow-sm font-semibold"
                    : "text-muted-pink hover:text-dark-rose hover:bg-cream/70"
                }`}
              >
                <span>{item.icon}</span>
                <span className="hidden xs:inline">{item.label}</span>
                <span className="xs:hidden">{item.short}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-soft-rose rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Ambient music synthesizer toggle */}
        <button
          onClick={toggleAmbientSound}
          title={isPlaying ? "Mute soothing chimes" : "Play soothing chimes"}
          className={`p-2 rounded-full transition-all duration-200 ${
            isPlaying
              ? "bg-soft-rose/40 text-dark-rose animate-pulse"
              : "text-muted-pink hover:text-dark-rose hover:bg-cream"
          }`}
          aria-label="Toggle ambient chimes"
        >
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-romantic-accent" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
        </button>
      </nav>
    </header>
  );
}

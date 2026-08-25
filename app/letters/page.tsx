"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Heart,
  Sparkles,
  CloudRain,
  Sun,
  Cloud,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import EnvelopeModal, { LetterData } from "../../components/EnvelopeModal";
import confetti from "canvas-confetti";

const letters: LetterData[] = [
  {
    id: "sad",
    emoji: "🌧️",
    title: "Open When You're Sad",
    subtitle: "A tiny hug in words.",
    themeColor: "from-[#DDECF7]/80 via-[#FFF9F5] to-[#F8D7E3]/60",
    letterContent: [
      "Hey Tanu,",
      "If you're reading this because today feels a little heavy, come here for a minute. You don't have to fix everything right now.",
      "You're allowed to have bad days. You're allowed to be quiet, irritated, emotional, confused or just not okay. None of those versions make you any less lovable.",
      "Take a breath. Let the day be what it is. Tomorrow doesn't need to be solved tonight.",
      "And if I could be there right now, you'd probably be getting the tightest hug ever. 🫂",
    ],
    signOff: "Your Atharvieee 🩷",
    poem: [
      "Bad days may cloud your skies,",
      "but they'll never change the way",
      "this boy looks at your eyes. 🩷",
    ],
  },
  {
    id: "happy",
    emoji: "☀️",
    title: "Open When You're Happy",
    subtitle: "Because I want to celebrate your happiness too.",
    themeColor: "from-[#F9DCCB]/80 via-[#FFF9F5] to-[#F8D7E3]/60",
    letterContent: [
      "Hey pretty girl,",
      "You're happy?? GOOD. 😭🩷",
      "Whatever happened, enjoy it properly. Don't rush past the good feeling. Laugh loudly, take pictures, tell me everything later, and be proud of yourself.",
      "Your happiness is genuinely one of my favourite things to see.",
      "And if I'm not there beside you right now, imagine me looking at that smile and thinking:",
      "“Hehehe, that's my Tanu.” 😭🩷",
    ],
    poem: [
      "When your smile finds its way to your eyes,",
      "even ordinary moments feel like sunrise. ☀️",
    ],
  },
  {
    id: "overwhelmed",
    emoji: "☁️",
    title: "Open When Everything Feels Too Much",
    subtitle: "Pause here for a minute.",
    themeColor: "from-[#E8DDF5]/80 via-[#FFF9F5] to-[#DDECF7]/60",
    letterContent: [
      "Hey Tanu,",
      "Pause.",
      "You don't have to solve everything right now.",
      "One thing at a time. One breath at a time.",
      "Whatever is stressing you can wait for a few minutes while you take care of yourself.",
      "You don't have to be perfect while figuring things out.",
      "And if your brain is being dramatic again, tell it to sit quietly for five minutes. 😭",
      "You've got this.",
      "I'm rooting for you, always. 🩷",
    ],
    poem: [
      "Slow down, little heart,",
      "not every storm needs chasing.",
      "Some things get lighter",
      "when you simply stop racing. ☁️",
    ],
  },
  {
    id: "miss-me",
    emoji: "🫂",
    title: "Open When You Miss Me",
    subtitle: "Your virtual hug is waiting.",
    themeColor: "from-[#F8D7E3]/80 via-[#FFF9F5] to-[#EFA7BD]/60",
    letterContent: [
      "Hi dumbo.",
      "So you miss me? Obviously. 😭",
      "Consider this your tiny virtual hug until the real one arrives.",
      "Think about all our random conversations, stupid jokes, walks, photos, hugs, bakchodi and those tiny moments that somehow became our favourite memories.",
      "And if you really miss me, close your eyes for a second and imagine me saying:",
      "“Come here.” 🫂",
      "That's your hug for now.",
      "The real one is pending.",
    ],
    poem: [
      "Miles can keep two people apart,",
      "but they can't make distance",
      "out of a heart. 🩷",
    ],
  },
];

export default function LettersPage() {
  const router = useRouter();
  const [activeLetter, setActiveLetter] = useState<LetterData | null>(null);
  const [isFinalCardOpen, setIsFinalCardOpen] = useState(false);
  const [animatingFinal, setAnimatingFinal] = useState(false);

  const handleOpenFinalCard = () => {
    setAnimatingFinal(true);
    // Envelope gathering effect with hearts and confetti
    confetti({
      particleCount: 35,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F8D7E3", "#EFA7BD", "#E8DDF5"],
    });

    setTimeout(() => {
      setAnimatingFinal(false);
      setIsFinalCardOpen(true);
    }, 1400);
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 pt-2"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush/60 text-dark-rose text-xs font-semibold tracking-wide border border-soft-rose/30">
          <Mail className="w-3.5 h-3.5 text-romantic-accent" />
          <span>Open When Collection</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-dark-rose">
          Little letters for my little Tanu 💌
        </h1>

        <p className="text-xs sm:text-sm text-muted-pink max-w-md mx-auto">
          No particular order. Just pick whichever one your heart needs.
        </p>
      </motion.div>

      {/* 4 Envelope Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {letters.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            onClick={() => setActiveLetter(item)}
            className="text-left w-full glass-card glass-card-hover rounded-3xl p-5 sm:p-6 relative overflow-hidden group border border-soft-rose/30 bg-gradient-to-br from-white/90 to-cream/80 shadow-soft focus:outline-none focus:ring-2 focus:ring-soft-rose"
          >
            {/* Stamp / Decorative Seal */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blush/60 border border-soft-rose/50 flex items-center justify-center text-xs group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              💌
            </div>

            <div className="space-y-3">
              <div className="text-3xl sm:text-4xl">{item.emoji}</div>
              <div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-dark-rose group-hover:text-romantic-accent transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-muted-pink font-normal mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-romantic-accent group-hover:translate-x-1 transition-transform">
                <span>Tap to unfold letter</span>
                <span>→</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* FINAL CARD ON PAGE 2: "Open When You've Read Everything" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pt-4"
      >
        <div className="glass-card rounded-3xl p-6 sm:p-7 border-2 border-dashed border-soft-rose/60 bg-gradient-to-r from-blush/40 via-cream to-lavender/40 shadow-soft relative overflow-hidden text-center">
          {/* Animated envelopes gathering into a heart */}
          {animatingFinal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 bg-blush/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <motion.span
                  animate={{
                    x: [-30, 0],
                    y: [-30, 0],
                    opacity: [0.8, 0],
                    scale: [1, 0.4],
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute text-2xl"
                >
                  🌧️
                </motion.span>
                <motion.span
                  animate={{
                    x: [30, 0],
                    y: [-30, 0],
                    opacity: [0.8, 0],
                    scale: [1, 0.4],
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute text-2xl"
                >
                  ☀️
                </motion.span>
                <motion.span
                  animate={{
                    x: [-30, 0],
                    y: [30, 0],
                    opacity: [0.8, 0],
                    scale: [1, 0.4],
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute text-2xl"
                >
                  ☁️
                </motion.span>
                <motion.span
                  animate={{
                    x: [30, 0],
                    y: [30, 0],
                    opacity: [0.8, 0],
                    scale: [1, 0.4],
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute text-2xl"
                >
                  🫂
                </motion.span>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.4, 1] }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-4xl"
                >
                  🩷
                </motion.div>
              </div>
              <p className="font-serif text-sm font-semibold text-dark-rose mt-2">
                Folding all little letters into a heart...
              </p>
            </motion.div>
          )}

          {!isFinalCardOpen ? (
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-soft-rose/30 border border-soft-rose flex items-center justify-center mx-auto text-xl">
                💗
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-dark-rose">
                Open When You&apos;ve Read Everything
              </h2>
              <p className="text-xs sm:text-sm text-muted-pink">
                You actually made it to the end.
              </p>
              <button
                onClick={handleOpenFinalCard}
                className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-soft-rose to-peach text-dark-rose font-medium text-xs sm:text-sm shadow-soft hover:shadow-soft-lg hover:scale-105 active:scale-95 transition-all border border-white/60"
              >
                <span>Unlock Final Note</span>
                <Heart className="w-3.5 h-3.5 fill-dark-rose text-dark-rose" />
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream text-muted-pink text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-romantic-accent" />
                <span>All letters collected</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark-rose">
                One last thing before you go…
              </h3>
              <p className="text-xs sm:text-sm text-muted-pink max-w-sm mx-auto">
                There is a quiet, personal note waiting for you on the next page.
              </p>
              <Link
                href="/before-you-go"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blush via-soft-rose to-peach text-dark-rose font-semibold text-sm shadow-soft hover:shadow-soft-lg hover:scale-105 active:scale-95 transition-all border border-white/70"
              >
                <span>Open it</span>
                <ArrowRight className="w-4 h-4 text-dark-rose group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Envelope Modal */}
      <EnvelopeModal
        letter={activeLetter}
        onClose={() => setActiveLetter(null)}
      />
    </div>
  );
}

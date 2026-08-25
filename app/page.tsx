"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Smile,
  MessageCircle,
  Flame,
  Star,
  Coffee,
  Volume2,
  Laugh,
  Zap,
  HeartHandshake,
  Eye,
  Camera,
  Compass,
  Infinity as InfinityIcon,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";

const thingsILike = [
  {
    id: 1,
    icon: Smile,
    title: "1. Your smile",
    desc: "Especially that smile you try to hide sometimes.",
    tag: "Cute 🌸",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "2. Your random bakbak",
    desc: "You can somehow turn the most random topic into a full conversation.",
    tag: "Talkative 🗣️",
  },
  {
    id: 3,
    icon: Flame,
    title: "3. Your grumpy face",
    desc: "Honestly, annoyingly cute. 😭",
    tag: "Angry bird 😤",
  },
  {
    id: 4,
    icon: Star,
    title: "4. The way you get completely invested in things",
    desc: "Especially when you're doing something you genuinely care about.",
    tag: "Passionate ✨",
  },
  {
    id: 5,
    icon: Coffee,
    title: "5. Your little habits",
    desc: "The tiny things you probably don't even realise you do.",
    tag: "Adorably you ☕",
  },
  {
    id: 6,
    icon: Heart,
    title: "6. The way you say my name",
    desc: "Especially when you randomly call me “Atharvi.” 🥹",
    tag: "My fav 🥹",
  },
  {
    id: 7,
    icon: Laugh,
    title: "7. Your laugh",
    desc: "The real one, especially when you completely lose it.",
    tag: "Pure joy 🕊️",
  },
  {
    id: 8,
    icon: Zap,
    title: "8. Your excitement",
    desc: "The way your whole energy changes when you're excited about something.",
    tag: "Sunshine ☀️",
  },
  {
    id: 9,
    icon: HeartHandshake,
    title: "9. The way you care about people",
    desc: "Even when you pretend you're not that emotional about it.",
    tag: "Soft heart 🫂",
  },
  {
    id: 10,
    icon: Eye,
    title: "10. Your focused face",
    desc: "Especially when you're completely lost in whatever you're doing.",
    tag: "Serious mode 🧐",
  },
  {
    id: 11,
    icon: Camera,
    title: "11. Your little expressions",
    desc: "The faces you make without even realising you're making them.",
    tag: "1000 emojis in 1 🙈",
  },
  {
    id: 12,
    icon: Compass,
    title: "12. The way you can make ordinary moments fun",
    desc: "Even doing absolutely nothing can somehow become a whole memory.",
    tag: "Magic 🪄",
  },
  {
    id: 13,
    icon: Sparkles,
    title: "13. Your ability to be completely yourself",
    desc: "The chaotic, cute, irritated, happy, sleepy and random versions included.",
    tag: "All versions 🎀",
  },
  {
    id: 14,
    icon: InfinityIcon,
    title: "14. Just you",
    desc: "Because sometimes there isn't a specific reason. I just like you because you're you.",
    tag: "My Tanu 🩷",
  },
];

export default function HomePage() {
  const thingsSectionRef = useRef<HTMLDivElement>(null);

  const handleComeInside = () => {
    // Little romantic heart burst
    confetti({
      particleCount: 28,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#F8D7E3", "#EFA7BD", "#E8DDF5", "#F9DCCB"],
      shapes: ["circle"],
      scalar: 0.9,
    });

    if (thingsSectionRef.current) {
      thingsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center space-y-6 pt-4 pb-8"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 border border-soft-rose/30 text-dark-rose text-xs font-medium tracking-wide shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-romantic-accent animate-pulseSlow" />
          <span>A tiny private corner for you</span>
          <Sparkles className="w-3.5 h-3.5 text-romantic-accent animate-pulseSlow" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-dark-rose tracking-tight"
        >
          Hey Tanuuu 🩷
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-dark-rose/90 font-normal leading-relaxed max-w-lg mx-auto"
        >
          I made you a tiny little corner of the internet because apparently
          annoying you in real life wasn&apos;t enough. 😭🩷
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-sm sm:text-base text-muted-pink leading-relaxed max-w-md mx-auto italic font-serif"
        >
          &ldquo;For your happy days, your grumpy days, your chaotic days, your
          quiet days, and every little version of you in between.&rdquo;
        </motion.p>

        {/* Cute animated pulsing heart */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center py-2"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blush via-soft-rose/40 to-lavender flex items-center justify-center shadow-soft border border-soft-rose/50">
            <span className="text-2xl select-none">🩷</span>
          </div>
        </motion.div>

        {/* Rounded breathing button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-2"
        >
          <button
            onClick={handleComeInside}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blush via-soft-rose to-peach text-dark-rose font-medium text-sm sm:text-base shadow-soft hover:shadow-soft-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-white/60 animate-pulseSlow"
          >
            <span>Come inside</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </motion.div>
      </motion.section>

      {/* THINGS I LIKE ABOUT YOU */}
      <section
        ref={thingsSectionRef}
        className="space-y-6 pt-4 scroll-mt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-pink font-semibold">
            Confessions & Observations
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark-rose">
            A few things I really like about you 💗
          </h2>
          <p className="text-xs sm:text-sm text-muted-pink max-w-sm mx-auto">
            Just 14 out of the 10,000 tiny reasons you&apos;re special.
          </p>
        </motion.div>

        {/* 14 Staggered Animated Cards */}
        <div className="grid grid-cols-1 gap-3.5 sm:gap-4">
          {thingsILike.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.45,
                  delay: (index % 4) * 0.08,
                  ease: "easeOut",
                }}
                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 relative overflow-hidden group border border-soft-rose/30 bg-white/75"
              >
                {/* Subtle soft gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blush/20 via-transparent to-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-blush/60 flex items-center justify-center shrink-0 border border-soft-rose/30 text-romantic-accent group-hover:scale-110 group-hover:bg-soft-rose/30 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-base sm:text-lg font-semibold text-dark-rose">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-cream text-muted-pink border border-soft-rose/20 whitespace-nowrap">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-dark-rose/85 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Playful lines after list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-1.5 py-4"
        >
          <p className="text-sm sm:text-base font-serif italic text-dark-rose font-medium">
            &ldquo;And yes, I could keep going…&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-muted-pink">
            …but then this page would never end. 😭🩷
          </p>
        </motion.div>

        {/* Small Poem Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-6 sm:p-7 text-center relative overflow-hidden border border-soft-rose/40 bg-gradient-to-b from-[#FFF9F5]/90 to-[#F8D7E3]/40 shadow-soft"
        >
          <div className="text-xl mb-3">🌷</div>
          <div className="font-handwriting text-xl sm:text-2xl text-dark-rose leading-relaxed space-y-1 font-semibold">
            <p>You are sunshine on ordinary days,</p>
            <p>a little chaos in the sweetest ways,</p>
            <p>and somewhere between every laugh and fight,</p>
            <p>you somehow make everything feel right. 🩷</p>
          </div>
        </motion.div>

        {/* Navigation to Page 2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-2 pb-6"
        >
          <Link
            href="/letters"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-dark-rose font-medium text-sm shadow-soft hover:shadow-soft-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-soft-rose/40 hover:bg-blush/40"
          >
            <span>Okay, enough about you</span>
            <ArrowRight className="w-4 h-4 text-romantic-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

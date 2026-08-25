"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Sparkles, Moon, ArrowLeft } from "lucide-react";
import FinalRevealModal from "../../components/FinalRevealModal";

export default function BeforeYouGoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [revealedPastry, setRevealedPastry] = useState(false);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Calm Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-3 pt-2"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender/60 text-dark-rose text-xs font-semibold tracking-wide border border-lavender">
          <Moon className="w-3.5 h-3.5 text-romantic-accent" />
          <span>A gentle closing note</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-dark-rose tracking-tight">
          Hey baby… 🩷
        </h1>
      </motion.div>

      {/* Main Emotional Letter Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="glass-card rounded-3xl p-6 sm:p-8 space-y-5 border border-soft-rose/40 bg-gradient-to-b from-[#FFF9F5]/90 to-[#E8DDF5]/30 shadow-soft"
      >
        <p className="text-sm sm:text-base text-dark-rose leading-relaxed">
          I&apos;ve noticed a little that you&apos;ve seemed kind of down today,
          and I just wanted to leave this here for you. I&apos;m not overthinking
          it, and I&apos;m definitely not trying to become your little mood
          detective 😭. I just want you to know that if there&apos;s something on
          your mind, whether it&apos;s the stupidest little thing, something
          really important, something about me or the way I&apos;ve acted, or
          just something completely different, I&apos;m here.
        </p>

        <p className="text-sm sm:text-base text-dark-rose leading-relaxed">
          I know your head is paining so much right now, so please eat some good
          food, and if you&apos;re reading this after you already ate, it&apos;s
          okay, you&apos;ll feel good soon. Just pack up your bags and rest
          plenty today, okay baby?
        </p>

        <p className="text-sm sm:text-base text-dark-rose leading-relaxed">
          You can talk to me whenever you feel like it. You don&apos;t have to
          figure out the perfect words, and you don&apos;t have to worry about how
          I&apos;ll react. Just tell me whatever is on your mind whenever
          you&apos;re ready. And if you need to talk, I&apos;m just here. I love
          you. And if you just want me to stay silent and just stay with you on
          the call, I&apos;m right here for that too, okay baby? 🫂🩷
        </p>

        <p className="text-sm sm:text-base text-dark-rose leading-relaxed">
          And please know, I&apos;m not asking for reassurance from you at all,
          noo—I made this purely because you should know that I love you.
        </p>

        <p className="text-sm sm:text-base text-dark-rose leading-relaxed">
          And I know you&apos;ve been missing home a lot. You&apos;ve told me so
          many times that you wanted to go home, even last week and a couple of
          weeks ago, so I&apos;m genuinely really happy that tomorrow you
          finally get to go home and be with your family.
        </p>

        <p className="text-sm sm:text-base text-dark-rose leading-relaxed">
          I know how much you&apos;ve missed them, and I hope you enjoy every
          little moment there. Eat all your favourite food, spend lots of time
          with your people, laugh a lot, and just enjoy being home again. You
          deserve that, Tanu. 🩷
        </p>
      </motion.section>

      {/* Tiny Hearts Divider */}
      <div className="flex items-center justify-center gap-2 py-2">
        <span className="text-xs text-soft-rose">🩷</span>
        <span className="w-10 h-px bg-soft-rose/40" />
        <span className="text-sm text-romantic-accent">🩷</span>
        <span className="w-10 h-px bg-soft-rose/40" />
        <span className="text-xs text-soft-rose">🩷</span>
      </div>

      {/* EVERY VERSION OF YOU SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-soft-rose/40 bg-gradient-to-b from-[#FFF9F5]/90 to-[#F8D7E3]/35 shadow-soft"
      >
        <div className="text-center space-y-1">
          <span className="text-xs uppercase tracking-widest text-muted-pink font-semibold">
            Reassurance
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark-rose">
            And one more thing…
          </h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-dark-rose leading-relaxed">
          <p>
            I remember you telling me that sometimes when you&apos;re irritated
            or angry and I call you, you react by bursting out at me or getting
            angry because you&apos;re irritated, and it&apos;s fine. When I said
            I shouldn&apos;t have called you because you only irritate me or get
            angry at me, it&apos;s okay because I love you regardless. I know
            how irritated you become because of some things or how angry you
            get because of some things, and it&apos;s completely all right
            because I love you.
          </p>

          <p className="font-serif italic font-medium text-romantic-accent">
            So baby, please always remember this.
          </p>

          <p className="font-semibold text-dark-rose">
            I love you no matter what version of you I get.
          </p>

          <p>I&apos;m here for the complete you.</p>

          <p className="text-muted-pink">Not just the happy you.</p>
          <p className="text-muted-pink">
            Not just the cute, lovey-dovey you.
          </p>

          <p className="font-medium text-dark-rose">
            I&apos;m here for the angry you, the irritated you, the sad you, the
            overwhelmed you, the grumpy you, the chaotic you, and every version
            in between.
          </p>

          <p>
            You don&apos;t have to hide parts of yourself from me just because
            you&apos;re scared of how I&apos;ll react.
          </p>

          <p>I want to be someone you can come to even when you&apos;re not okay.</p>

          <p className="font-serif text-lg font-bold text-dark-rose">
            I love all of you.
          </p>
        </div>

        {/* Cute Animated Text Reveal */}
        <div className="pt-4 border-t border-soft-rose/30 text-center space-y-3">
          <button
            onClick={() => setRevealedPastry(true)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blush/60 hover:bg-blush text-dark-rose text-xs font-semibold transition-all border border-soft-rose/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-romantic-accent" />
            <span>{revealedPastry ? "Special Nickname 🌸" : "Tap for secret nickname ✨"}</span>
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: revealedPastry ? 1 : 0.4,
              filter: revealedPastry ? "blur(0px)" : "blur(4px)",
              scale: revealedPastry ? 1 : 0.98,
            }}
            transition={{ duration: 0.5 }}
            className="font-serif text-xl sm:text-2xl font-bold text-romantic-accent"
          >
            “My cute, cute truffle pastry…” 🥹🩷
          </motion.div>

          <div className="space-y-1 pt-2 font-serif text-base sm:text-lg font-medium text-dark-rose">
            <p>My baby.</p>
            <p>My Tanishka.</p>
            <p>My Tanu.</p>
            <p className="text-romantic-accent font-bold pt-1">
              I love you so, so, so much.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Handwritten Style Poem Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden border border-soft-rose/50 bg-[#FFF9F5] shadow-soft"
      >
        <div className="text-2xl mb-3">🌸</div>
        <div className="font-handwriting text-xl sm:text-2xl text-dark-rose leading-relaxed space-y-1.5 font-semibold max-w-sm mx-auto">
          <p>Come as you are,</p>
          <p>with your smiles and your storms,</p>
          <p>your quiet little moments,</p>
          <p>and all your different forms.</p>
          <div className="h-2" />
          <p>You don&apos;t have to hide,</p>
          <p>you don&apos;t have to pretend,</p>
          <p>just come as you are,</p>
          <p>and let me be there. 🩷</p>
        </div>
      </motion.div>

      {/* FINAL INTERACTION BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center pt-2 pb-8 space-y-4"
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blush via-soft-rose to-peach text-dark-rose font-serif text-base sm:text-lg font-bold shadow-glow-pink hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 animate-pulseSlow"
        >
          <span className="text-xl">💖</span>
          <span>One last little thing…</span>
          <Heart className="w-5 h-5 fill-romantic-accent text-romantic-accent group-hover:scale-125 transition-transform" />
        </button>
      </motion.div>

      {/* Final Intimate Interactive Modal */}
      <FinalRevealModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

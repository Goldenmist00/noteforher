"use client";

import React, { useEffect, useState } from "react";

interface FloatingItem {
  id: number;
  type: "heart" | "star" | "sparkle" | "flower";
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingBackground() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Generate subtle floating items on client-side to prevent SSR mismatch
    const generated: FloatingItem[] = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      type: (["heart", "star", "sparkle", "flower"] as const)[i % 4],
      x: Math.random() * 100, // percentage across screen
      size: Math.random() * 14 + 10, // 10px to 24px
      duration: Math.random() * 12 + 14, // 14s to 26s
      delay: Math.random() * 10, // 0s to 10s
      opacity: Math.random() * 0.35 + 0.15, // 0.15 to 0.5
    }));
    setItems(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Soft animated gradient orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#F8D7E3]/60 via-[#EFA7BD]/30 to-transparent blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-gradient-to-bl from-[#E8DDF5]/60 via-[#DDECF7]/40 to-transparent blur-3xl animate-float" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#F9DCCB]/50 via-[#F8D7E3]/40 to-transparent blur-3xl animate-float-slow" />

      {/* Floating subtle elements */}
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="absolute bottom-[-10%]"
            style={{
              left: `${item.x}%`,
              animation: `floatUp ${item.duration}s linear infinite`,
              animationDelay: `${item.delay}s`,
              opacity: item.opacity,
              fontSize: `${item.size}px`,
            }}
          >
            {item.type === "heart" && (
              <span className="text-[#EFA7BD] select-none">🩷</span>
            )}
            {item.type === "star" && (
              <span className="text-[#F9DCCB] select-none">✨</span>
            )}
            {item.type === "sparkle" && (
              <span className="text-[#E8DDF5] select-none">✦</span>
            )}
            {item.type === "flower" && (
              <span className="text-[#EFA7BD] select-none">🌸</span>
            )}
          </div>
        );
      })}

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.5;
          }
          85% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-110vh) rotate(45deg) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

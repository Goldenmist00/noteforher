/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F8D7E3",
        "soft-rose": "#EFA7BD",
        cream: "#FFF9F5",
        "warm-white": "#FFFCFA",
        lavender: "#E8DDF5",
        "powder-blue": "#DDECF7",
        peach: "#F9DCCB",
        "dark-rose": "#573744",
        "muted-pink": "#946477",
        "romantic-accent": "#D4738C",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(239, 167, 189, 0.25)",
        "soft-lg": "0 20px 40px -15px rgba(212, 115, 140, 0.2)",
        "glow-pink": "0 0 25px rgba(239, 167, 189, 0.6)",
        "glow-lavender": "0 0 25px rgba(232, 221, 245, 0.8)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.06)", opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "0.9", transform: "scale(1.2)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingBackground from "../components/FloatingBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "For Tanu 🩷",
  description: "A little private digital corner made specifically for Tanu.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🩷</text></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#F8D7E3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FFFCFA] text-[#573744] antialiased selection:bg-blush selection:text-dark-rose min-h-screen flex flex-col relative overflow-x-hidden font-sans">
        <FloatingBackground />
        <Navbar />
        <main className="flex-1 w-full max-w-xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

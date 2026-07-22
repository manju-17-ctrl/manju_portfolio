import { useRef, useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

const SampleBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-black via-zinc-900 to-black" />
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-md border-b border-white/5">
    <div className="text-xl font-bold font-display tracking-wider">
      <span className="text-white">MANJU</span>
      <span className="text-primary ml-1">D</span>
    </div>
    <div className="hidden md:flex items-center space-x-6 text-xs font-medium tracking-widest text-gray-400">
      {["HOME", "ABOUT", "EDUCATION", "SKILLS", "PROJECTS", "ACHIEVEMENTS", "CONTACT"].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors cursor-pointer">
          {item}
        </a>
      ))}
    </div>
  </nav>
);

export default function Home() {
  return (
    <div className="min-h-screen relative text-foreground selection:bg-primary selection:text-white">
      <SampleBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <CTA />
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center border-t border-white/5 bg-black/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground font-mono">
            SYSTEM STATUS: <span className="text-green-500">OPTIMAL</span> • DEVELOPED WITH REACT & TAILWIND
          </p>
        </footer>
      </main>
    </div>
  );
}

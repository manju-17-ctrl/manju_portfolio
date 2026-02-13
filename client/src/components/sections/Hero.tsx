import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 flex items-center gap-2"
            >
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <p className="text-primary font-mono tracking-widest text-sm md:text-base">
                    SYSTEM ONLINE // WELCOME USER
                </p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-8"
            >
                <div className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-none"
                    style={{ textShadow: '0 0 50px rgba(214, 0, 255, 0.2)' }}>
                    <span className="block text-white mb-2">MANJU</span>
                    <span className="block text-white mb-2">D</span>
                </div>
                <div className="text-2xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mt-4 tracking-wide">
                    CS STUDENT // SOFTWARE TECHIE
                </div>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-muted-foreground max-w-2xl text-center px-4 mb-12 text-lg font-light font-body"
            >
                Motivated Computer Science student with solid programming fundamentals and project-based experience.
                Eager to learn and grow in a challenging technical environment.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-6"
            >
                <a href="#projects" className="group relative px-8 py-4 bg-primary text-black font-bold font-display tracking-widest text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center gap-2">
                        VIEW PROJECTS <Terminal className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white mix-blend-overlay" />
                </a>

                <a href="#contact" className="px-8 py-4 border border-secondary text-secondary font-bold font-display tracking-widest text-lg transition-all hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(0,234,255,0.3)] active:scale-95 flex items-center gap-2">
                    CONTACT ME <ArrowRight className="w-5 h-5" />
                </a>
            </motion.div>
        </section>
    );
};

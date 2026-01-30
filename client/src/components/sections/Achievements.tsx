import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

export const Achievements = () => {
    return (
        <section id="achievements" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">ACHIEVEMENTS</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognition received for technical innovation and problem solving.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="p-1 rounded-2xl bg-gradient-to-r from-yellow-500/50 via-orange-500/50 to-yellow-500/50"
                    >
                        <div className="bg-black/90 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                            <div className="p-6 bg-yellow-500/10 rounded-full ring-2 ring-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                <Trophy className="w-16 h-16 text-yellow-500" />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2 justify-center md:justify-start">
                                    <span className="text-yellow-500 font-bold tracking-widest text-sm border border-yellow-500/30 px-3 py-1 rounded-full bg-yellow-500/5 uppercase">
                                        1st Runner-up
                                    </span>
                                    <span className="text-muted-foreground font-mono text-sm">Oct 24, 2025</span>
                                </div>

                                <h3 className="text-3xl font-display font-bold text-white mb-4">
                                    NMIT Sparklab Designathon 2025
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Awarded at the National-Level Designathon Event organized by NMIT Sparklab 2K25.
                                    Designed an innovative model focused on reducing food waste in society through sustainable and technology-driven solutions.
                                </p>

                                <div className="flex items-center gap-2 justify-center md:justify-start text-sm text-yellow-500/80">
                                    <Award className="w-4 h-4" />
                                    <span>National Level Competition</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

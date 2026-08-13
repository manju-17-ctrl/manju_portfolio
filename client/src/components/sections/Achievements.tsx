import { motion } from "framer-motion";
import { Trophy, Award, CheckCircle2 } from "lucide-react";

export const Achievements = () => {
    const certifications = [
        {
            title: "Programming with JavaScript",
            issuer: "Meta (Coursera)",
            category: "Frontend & Web Scripting"
        },
        {
            title: "Blockchain Basics",
            issuer: "University at Buffalo (SUNY)",
            category: "Distributed Ledger Tech"
        },
        {
            title: "Developing Front-End Apps with React",
            issuer: "IBM (Coursera)",
            category: "React Application Dev"
        },
        {
            title: "Cyber Security Technologies",
            issuer: "Illinois Tech (Coursera)",
            category: "Information & Network Security"
        },
        {
            title: "Python (Basics)",
            issuer: "Ethnotech",
            category: "Core Programming"
        }
    ];

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
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">CERTIFICATIONS</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Professional certifications and specialized training verified across global institutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-1 rounded-2xl bg-gradient-to-br from-yellow-500/30 via-amber-500/10 to-transparent hover:from-yellow-500/50 transition-all duration-300"
                        >
                            <div className="bg-black/90 rounded-xl p-6 h-full flex flex-col justify-between border border-white/10 hover:border-yellow-500/40 transition-colors">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <div className="p-3 bg-yellow-500/10 rounded-lg">
                                            <Trophy className="w-6 h-6 text-yellow-500" />
                                        </div>
                                        <span className="text-xs font-mono text-yellow-400/90 bg-yellow-500/10 px-2.5 py-1 rounded-full border border-yellow-500/20">
                                            {cert.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-white mb-2">
                                        {cert.title}
                                    </h3>
                                    
                                    <p className="text-secondary font-medium text-sm mb-4">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-emerald-400 pt-4 border-t border-white/10 mt-2 font-mono">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>VERIFIED CERTIFICATION</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

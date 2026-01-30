import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
    const education = [
        {
            title: "Bachelor of Engineering [CSE]",
            institution: "Maharaja Institute of Technology, Mysore",
            period: "08/2023 – Present",
            location: "Mysuru",
            score: "CGPA: 8.3",
            current: true
        },
        {
            title: "Pre-University Course",
            institution: "HDK PU College Besagarahalli",
            period: "2021 – 2023",
            location: "Mandya",
            score: "Percentage: 86.66%",
            current: false
        }
    ];

    return (
        <section id="education" className="py-20 bg-black/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-[2px] w-12 bg-secondary"></span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">EDUCATION_LOG</h2>
                    </div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Cyber Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary opacity-30 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_var(--primary)] md:-translate-x-1.5 z-10" />

                                <div className="flex-1 md:w-1/2">
                                    <div className={`p-6 border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-primary/50 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        {/* Background Glitch Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

                                        <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? "md:items-start" : "md:items-end"
                                            }`}>
                                            <div className="flex items-center gap-2 text-primary text-sm font-mono mb-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{item.period}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold font-display text-white">{item.title}</h3>
                                            <p className="text-lg text-secondary font-medium">{item.institution}</p>
                                        </div>

                                        <div className={`space-y-2 text-muted-foreground ${index % 2 === 0 ? "md:items-start" : "md:items-end flex flex-col"
                                            }`}>
                                            <p className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                                                {item.location}
                                            </p>
                                            <p className="font-mono text-white bg-primary/10 inline-block px-3 py-1 rounded border border-primary/20">
                                                {item.score}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for the other side of timeline */}
                                <div className="flex-1 md:w-1/2 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

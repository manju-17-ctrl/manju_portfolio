import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
    const education = [
        {
            title: "Bachelor of Engineering (CSE)",
            institution: "Maharaja Institute of Technology, Mysore",
            period: "2023 – 2025",
            location: "Mysore",
            score: "7th Sem CGPA: 8.3",
            current: true
        },
        {
            title: "PUC (Pre-University Course)",
            institution: "MASVS Gurukula Pre-University College",
            period: "2022 – 2023",
            location: "Mysore",
            score: "Percentage: 93.2%",
            current: false
        },
        {
            title: "S.S.L.C (Secondary School Leaving Cert)",
            institution: "Vivekananda English Medium School",
            period: "2021",
            location: "Bannur",
            score: "Percentage: 87%",
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

                <div className="max-w-3xl mx-auto space-y-6">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-primary/50 transition-colors rounded-xl">
                                {/* Background Glitch Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <h3 className="text-2xl font-bold font-display text-white">{item.title}</h3>
                                        <p className="font-mono text-white bg-primary/10 inline-block px-3 py-1 rounded border border-primary/20 shrink-0">
                                            {item.score}
                                        </p>
                                    </div>
                                    
                                    <p className="text-lg text-secondary font-medium">{item.institution}</p>
                                    
                                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5 mt-2">
                                        <div className="flex items-center gap-2 text-primary text-sm font-mono">
                                            <Calendar className="w-4 h-4" />
                                            <span>{item.period}</span>
                                        </div>
                                        <p className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import { motion } from "framer-motion";
import { User, MapPin, Mail, Phone, Gamepad2, Plane, Sprout, BookOpen } from "lucide-react";

export const About = () => {
    const interests = [
        { icon: Gamepad2, label: "Kabbaddi" },
        { icon: Plane, label: "Traveling" },
        { icon: Sprout, label: "Farming" },
        { icon: BookOpen, label: "Reading" },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-[2px] w-12 bg-primary"></span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">ABOUT_ME</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-none relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <p className="text-lg text-muted-foreground leading-relaxed font-body mb-6 relative z-10">
                            I am a motivated Computer Science student with a passion for building software that solves real-world problems.
                            My journey involves mastering solid programming fundamentals and applying them in project-based experiences.
                            I possess strong analytical and logical thinking skills and I am eager to learn and grow in a challenging technical environment.
                        </p>

                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-4 text-white">
                                <div className="p-2 bg-primary/10 rounded">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-mono text-sm tracking-wide">India, Mysore</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="p-2 bg-primary/10 rounded">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <a href="mailto:Manju539550560@gmail.com" className="font-mono text-sm tracking-wide hover:text-primary transition-colors">
                                    Manju539550560@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="p-2 bg-primary/10 rounded">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-mono text-sm tracking-wide">9741308634</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {interests.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                                className="p-6 border border-secondary/20 bg-secondary/5 hover:bg-secondary/10 transition-all flex flex-col items-center justify-center gap-4 group cursor-default"
                            >
                                <item.icon className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-display font-medium tracking-wider text-white">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

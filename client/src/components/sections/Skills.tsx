import { motion } from "framer-motion";
import { Code2, Cpu, Brain, Layout } from "lucide-react";

export const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: Code2,
            skills: ["C", "Python", "Problem Solving"],
            color: "text-primary",
            borderColor: "border-primary/20",
            bgHover: "hover:bg-primary/5"
        },
        {
            title: "Web Design",
            icon: Layout,
            skills: ["HTML", "CSS", "JavaScript", "React", "MERN Stack"],
            color: "text-secondary",
            borderColor: "border-secondary/20",
            bgHover: "hover:bg-secondary/5"
        },
        {
            title: "Soft Skills",
            icon: Brain,
            skills: ["Analytical Thinking", "Continuous Learning", "Team Collaboration", "Adaptability"],
            color: "text-green-400",
            borderColor: "border-green-400/20",
            bgHover: "hover:bg-green-400/5"
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-[2px] w-12 bg-white"></span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">TECH_SPECS</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 border border-white/10 bg-white/5 backdrop-blur-sm relative group overflow-hidden ${category.bgHover} transition-colors duration-300`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <category.icon className="w-24 h-24" />
                            </div>

                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <category.icon className={`w-8 h-8 ${category.color}`} />
                                <h3 className="text-2xl font-display font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="space-y-4 relative z-10">
                                {category.skills.map((skill, i) => (
                                    <div key={skill} className="relative">
                                        <div className="flex justify-between text-sm font-mono text-muted-foreground mb-1">
                                            <span>{skill}</span>
                                            <span className={`${category.color}`}>100%</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                viewport={{ once: true }}
                                                className={`h-full ${category.color.replace('text-', 'bg-')}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

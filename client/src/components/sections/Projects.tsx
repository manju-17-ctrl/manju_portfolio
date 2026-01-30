import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Activity } from "lucide-react";

export const Projects = () => {
    const projects = [
        {
            title: "Pneumonia Detection",
            date: "11/2025 – Present",
            description: "Developed a pneumonia detection system using deep learning to classify chest X-ray images as pneumonia or normal. Implemented data preprocessing, model training, and evaluation enabling accurate automated medical image analysis.",
            tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "CNN"],
            icon: Activity,
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Cow Database Management System",
            date: "08/2025 – 09/2025",
            description: "Built a web-based Cow Database Management System to manage cattle records including health, vaccination, and breeding details. Implemented a responsive React frontend, RESTful APIs, and MongoDB for secure data storage.",
            tags: ["MERN Stack", "React", "Node.js", "MongoDB", "Express"],
            icon: Database,
            color: "from-primary to-purple-400"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-black/40">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-[2px] w-12 bg-primary"></span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">PROJECT_MODULES</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-primary/50 hover:to-secondary/50 transition-all duration-500"
                        >
                            <div className="bg-background h-full rounded-xl p-8 relative overflow-hidden">
                                {/* Cyber Glitch Decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"
                                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--primary), var(--secondary))` }}
                                />

                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                        <project.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="font-mono text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded">
                                        {project.date}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded border border-primary/20">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover overlay actions - optional based on content, added for style */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <button className="p-3 bg-primary text-black rounded-full hover:scale-110 transition-transform">
                                        <Github className="w-6 h-6" />
                                    </button>
                                    <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                                        <ExternalLink className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

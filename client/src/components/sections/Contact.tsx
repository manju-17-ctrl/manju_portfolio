import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export const Contact = () => {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!res.ok) throw new Error("Failed to send message");

            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you shortly.",
                duration: 5000,
            });
            form.reset();
        } catch (error) {
            toast({
                title: "Transmission Failed",
                description: "Could not send message. Please try again later.",
                variant: "destructive",
            });
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
                >
                    {/* Info Side */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-[2px] w-12 bg-primary"></span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">CONTACT_UPLINK</h2>
                        </div>

                        <p className="text-muted-foreground mb-12 text-lg">
                            Ready to collaborate on the next big project? Initialize communication through the channel below.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-bold text-lg mb-1">Email</h3>
                                    <a href="mailto:Manju539550560@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
                                        Manju539550560@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                                    <Phone className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-bold text-lg mb-1">Phone</h3>
                                    <span className="text-muted-foreground">
                                        9741308634
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                    <MapPin className="w-6 h-6 text-purple-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-bold text-lg mb-1">Base of Operations</h3>
                                    <span className="text-muted-foreground">
                                        India, Mysore
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links (Placeholders based on resume) */}
                        <div className="flex gap-4 mt-12">
                            <a href="https://www.linkedin.com/in/pavan-kumar-29a9162b7" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded hover:bg-white/5 transition-colors group">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                            </a>
                            <a href="https://github.com/pavankumar2503-sys" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded hover:bg-white/5 transition-colors group">
                                <span className="sr-only">GitHub</span>
                                <Github className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">CODENAME / IDENTITY</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your name" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">DIGITAL ADDRESS</FormLabel>
                                            <FormControl>
                                                <Input placeholder="name@example.com" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">TRANSMISSION DATA</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Type your message here..."
                                                    className="min-h-[150px] bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary text-black font-bold font-display tracking-widest hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    INITIATE TRANSMISSION
                                </button>
                            </form>
                        </Form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

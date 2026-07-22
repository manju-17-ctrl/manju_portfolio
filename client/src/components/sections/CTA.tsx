import { motion } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const CTA = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-teal-400 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full border-2 border-white/30 bg-white/10 shrink-0" />
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ready to Build Something Amazing?</h2>
                            <p className="text-white/90 text-lg">I'm available for freelance projects, full-time roles, and exciting collaborations.</p>
                        </div>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="shrink-0 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:scale-105 active:scale-95 text-lg">
                                Hire Me Now
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl bg-[#f8f9fa] border-none text-slate-800 rounded-3xl p-8 shadow-2xl">
                            <DialogHeader>
                                <DialogTitle className="text-3xl font-black text-center text-slate-900 mb-2">Let's Build Something Great</DialogTitle>
                                <p className="text-center text-slate-500 mb-6">Fill in the details below and I'll connect with you on WhatsApp.</p>
                            </DialogHeader>
                            <form 
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const fd = new FormData(e.currentTarget);
                                    const text = `Hello! I'm ${fd.get('firstName')} ${fd.get('lastName')} from ${fd.get('company') || 'a company'}.\nEmail: ${fd.get('email')}\nPhone: ${fd.get('phone')}\nBudget: ${fd.get('budget') || 'Not specified'}\n\nProject Description:\n${fd.get('message')}`;
                                    const phoneNumber = fd.get('phone')?.toString().replace(/\D/g, '') || '919741308634';
                                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
                                    window.open(whatsappUrl, "_blank");
                                }} 
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-slate-700 font-semibold">First Name <span className="text-red-500">*</span></Label>
                                        <Input id="firstName" name="firstName" required placeholder="John" className="bg-white border-slate-200 rounded-xl py-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-slate-700 font-semibold">Last Name <span className="text-red-500">*</span></Label>
                                        <Input id="lastName" name="lastName" required placeholder="Doe" className="bg-white border-slate-200 rounded-xl py-6" />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone Number <span className="text-red-500">*</span></Label>
                                        <Input id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" type="tel" className="bg-white border-slate-200 rounded-xl py-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address <span className="text-red-500">*</span></Label>
                                        <Input id="email" name="email" required placeholder="you@gmail.com" type="email" className="bg-white border-slate-200 rounded-xl py-6" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-slate-700 font-semibold">Company Name <span className="text-slate-400 font-normal">(optional)</span></Label>
                                        <Input id="company" name="company" placeholder="Your company" className="bg-white border-slate-200 rounded-xl py-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="budget" className="text-slate-700 font-semibold">Project Budget <span className="text-slate-400 font-normal">(optional)</span></Label>
                                        <Input id="budget" name="budget" placeholder="e.g. ₹5,000 - ₹15,000" className="bg-white border-slate-200 rounded-xl py-6" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-slate-700 font-semibold">Message / Project Description <span className="text-red-500">*</span></Label>
                                    <Textarea id="message" name="message" required placeholder="Describe your project, goals, and timeline in detail..." className="bg-white border-slate-200 rounded-xl min-h-[120px] resize-none" />
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
                                    <span className="text-sm text-slate-400">Protected against spam. Required fields marked <span className="text-red-500">*</span></span>
                                    <div className="flex gap-4 w-full md:w-auto">
                                        <DialogTrigger asChild>
                                            <button type="button" className="px-8 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors">
                                                Cancel
                                            </button>
                                        </DialogTrigger>
                                        <button type="submit" className="px-8 py-3 bg-[#10b981] hover:bg-[#059669] text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/30 w-full md:w-auto">
                                            Send to WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </motion.div>
            </div>
        </section>
    );
};

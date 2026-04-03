import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Paintbrush, Sparkles } from 'lucide-react';

const BrandingShowcase = ({ setContactOpen }) => {
    return (
        <section className="py-16 bg-slate-950 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                    {/* Left: Content Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >                        
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-10">
                            Why Choose <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Digital To Infinity</span> <br />
                            for Branding?
                        </h2>

                        <div className="relative mb-6">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-violet-600 via-indigo-600 to-transparent rounded-full opacity-60" />
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed pl-10 max-w-2xl">
                                Branding isn't just about how you look—it's about how people <span className="text-white font-bold italic underline decoration-violet-500/50 underline-offset-8">remember you.</span> At Karagrey Media, we combine creativity, strategy, and technology to deliver solutions that fuel business growth.
                            </p>
                        </div>

                        <div className="space-y-4 mb-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="group flex gap-6 p-4 rounded-3xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform duration-500">
                                        <Sparkles className="w-7 h-7 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Strategic Foundation</h4>
                                    <p className="text-slate-400 leading-relaxed">Every branding project starts with research and insights to position your brand where it matters most.</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="group flex gap-6 p-4 rounded-3xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                                        <CheckCircle2 className="w-7 h-7 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Creative Excellence</h4>
                                    <p className="text-slate-400 leading-relaxed">Designs that not only look stunning but also resonate with your audience on an emotional level.</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="mt-4">
                            <motion.button
                                onClick={() => setContactOpen(true)}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-950 font-black rounded-2xl transition-all hover:bg-violet-600 hover:text-white overflow-hidden cursor-pointer"
                            >
                                <span className="relative z-10">Get Started Today</span>
                                <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right: Visual Showcase Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative min-h-[500px] lg:min-h-full"
                    >
                        {/* Floating elements */}
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-6 z-20 hidden md:block"
                        >
                            <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center">
                                        <Paintbrush className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Brand Quality</p>
                                        <p className="text-white font-black text-lg text-nowrap uppercase italic tracking-tighter">Premium Design</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative group h-full">
                            {/* Animated Background Rings */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-white/50 to-indigo-600 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                            
                            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 h-full">
                                <img 
                                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Luxury Brand Stationery Mockup" 
                                    className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                                />
                                
                                {/* Inner Glassmorphism Card */}
                                <div className="absolute inset-x-8 bottom-8 p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="flex gap-1 mb-3">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                                                ))}
                                            </div>
                                            <h5 className="text-white font-black text-2xl tracking-tight mb-1">Visual Identity</h5>
                                            <p className="text-slate-300 text-sm">Strategic Brand Evolution</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-white font-black text-3xl">100%</span>
                                            <span className="text-violet-400 text-[10px] font-bold uppercase tracking-widest">Custom Craft</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Decorative Blobs */}
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl -z-10 animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrandingShowcase;

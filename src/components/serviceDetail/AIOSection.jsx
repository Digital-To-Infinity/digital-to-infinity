import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const AIOSection = ({ setContactOpen }) => {
    const features = [
        "AI-based keyword clustering & intent analysis",
        "Automated content scoring for relevance & quality",
        "Predictive trend monitoring to stay ahead",
        "Smart dashboards with actionable SEO insights"
    ];

    return (
        <section className="py-16 max-[426px]:py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="space-y-6 max-[426px]:space-y-4 max-[769px]:text-center">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-6xl max-[426px]:text-[46px] font-black text-slate-950 leading-[1.1] tracking-tight"
                            >
                                AI-Optimized <span className="text-violet-600">SEO</span>
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-slate-600 text-lg md:text-xl max-[426px]:text-base leading-relaxed max-w-xl max-[769px]:max-w-5xl font-medium"
                            >
                                AI is reshaping search, and we bring that power into your SEO campaigns. 
                                Our AI-driven approach combines predictive analytics with human expertise 
                                to identify ranking opportunities, optimize content in real time, 
                                and adapt to algorithm changes faster than competitors. With automation
                                reducing guesswork, you get a future-ready strategy designed for long-term growth.
                            </motion.p>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start max-[769px]:items-center gap-3">
                                    <div className="mt-1 p-0.5 rounded-full bg-violet-100 text-violet-600">
                                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                    </div>
                                    <p className="text-slate-700 font-semibold text-sm leading-tight">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <button
                                onClick={() => setContactOpen(true)}
                                className="group relative inline-flex items-center gap-3 bg-slate-950 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-violet-600 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-violet-500/20 active:scale-95 cursor-pointer"
                            >
                                <span>Get Started Now</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Decorative background for image */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500/20 to-blue-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200">
                            <img 
                                src="/ai_seo_interface.png" 
                                alt="AI Optimized SEO Interface"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* Overlay for premium look */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                            
                            {/* Interactive Floating Badge */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 hidden sm:flex"
                            >
                                <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold">
                                    AI
                                </div>
                                <div className="pr-4">
                                    <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">Status</p>
                                    <p className="text-slate-900 font-bold">Optimizing Live</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AIOSection;

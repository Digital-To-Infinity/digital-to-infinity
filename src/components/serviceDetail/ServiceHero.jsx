import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, CheckCircle2, Phone, MousePointer2 } from 'lucide-react';
import { useRef } from 'react';

const ServiceHero = ({ service, setContactOpen }) => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    if (!service) return null;
    const Icon = service.icon;

    return (
        <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

                {/* Dynamic Blurs */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
            </div>

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-violet-400 text-sm font-bold tracking-wider uppercase mb-8 shadow-xl shadow-black/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                        </span>
                        <Sparkles className="w-4 h-4 fill-violet-500/20" />
                        Premium {service.title} Agency
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8">
                        Transform Your
                        <span className="relative inline-block mt-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 animate-gradient bg-[length:200%_auto]">
                                {service.title}
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-violet-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 font-medium">
                        {service.desc} We don't just provide a service; we build a <span className="text-white font-semibold">performance-focused growth engine</span> that propels your brand to the next level of digital excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setContactOpen(true)}
                            className="group relative px-10 py-5 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-violet-600/30 w-full sm:w-auto flex items-center justify-center gap-3 overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            Get a Free Audit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://wa.me/919594222334"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 w-full sm:w-auto group"
                        >
                            <Phone className="w-5 h-5 text-green-500 group-hover:animate-bounce" />
                            Chat on WhatsApp
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceHero;

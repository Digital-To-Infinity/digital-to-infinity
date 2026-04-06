import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useRef } from 'react';

const BlogsHero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effects for background elements
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section ref={containerRef} className="relative pt-30 pb-6 overflow-hidden bg-slate-950">
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0">
                {/* Grid Pattern with Fade */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

                {/* Animated Gradient Orbs */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[100px] mix-blend-screen"
                />

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/5 text-violet-400 text-sm font-bold tracking-wider uppercase mb-8 shadow-2xl"
                    >
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                        </div>
                        <BookOpen className="w-4 h-4" />
                        Knowledge & Insights
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-8xl max-[426px]:text-[52px] font-black text-white leading-[1.05] tracking-tight mb-10"
                    >
                        Mastering the <br />
                        <span className="relative inline-block mt-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">
                                Digital Universe
                            </span>
                            {/* Decorative underline */}
                            <motion.svg
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                                className="absolute -bottom-4 left-0 w-full h-4 text-violet-500/40"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                            >
                                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                            </motion.svg>
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-xl max-[426px]:text-base text-slate-400 max-w-5xl max-[426px]:w-full mx-auto leading-relaxed mb-12 font-medium"
                    >
                        Dive deep into our latest thoughts on marketing, technology, and branding. We transform complex data into actionable strategies for <span className="text-white font-semibold">infinite growth</span>.
                    </motion.p>

                    {/* Floating Decorative Elements */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 max-[769px]:hidden left-10 md:left-20 pointer-events-none"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 blur-sm" />
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute max-[769px]:hidden bottom-1/4 right-10 md:right-20 pointer-events-none"
                    >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-md" />
                    </motion.div>
                </div>
            </div>

            {/* Elegant Bottom Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default BlogsHero;

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const AboutPartner = () => {
    return (
        <section className="py-32 max-[769px]:py-16 max-[426px]:py-12 bg-violet-50/50 overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ willChange: "transform" }}
                    animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-20 top-20 w-96 h-96 bg-violet-200/40 rounded-full blur-[100px] mix-blend-multiply"
                />
                <motion.div
                    style={{ willChange: "transform" }}
                    animate={{ x: [0, -70, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -right-20 bottom-20 w-96 h-96 bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 max-[376px]:px-2 sm:px-6 lg:px-8 relative z-10">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-violet-200/20 border border-white/40 flex flex-col min-[769px]:flex-row items-center gap-16">
                    <div className="flex-1 w-full flex justify-center">
                        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative group w-full max-w-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 blur-3xl rounded-full group-hover:opacity-130 transition-opacity duration-700" />
                            <div className="relative bg-white/90 backdrop-blur-xl px-10 max-[321px]:px-4 py-14 max-[321px]:py-8 rounded-3xl shadow-xl border border-red-50/50 flex flex-col items-center text-center transform transition-transform duration-500 group-hover:scale-[1.02]">
                                <div className="relative z-10 mb-6">
                                    <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="relative z-20">
                                        <Heart className="w-20 max-[321px]:w-16 h-20 max-[321px]:h-16 text-red-500 fill-red-500 drop-shadow-[0_10px_15px_rgba(239,68,68,0.3)]" />
                                    </motion.div>
                                </div>
                                <h3 className="text-3xl max-[426px]:text-2xl font-black text-gray-900 leading-tight">I <span className="text-red-500 inline-block">Love</span><br />Navi Mumbai</h3>
                                <div className="mt-4 px-4 py-1.5 bg-red-50 rounded-full border border-red-100"><p className="text-xs text-red-600 font-bold tracking-widest uppercase">Official Partner</p></div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 space-y-8 text-center md:text-left">
                        <motion.div variants={itemVariants}><span className="inline-block px-4 py-1.5 bg-gradient-to-r from-red-50 to-pink-50 text-red-600 rounded-full text-xs font-bold tracking-wider border border-red-100/50 shadow-sm">COMMUNITY POWERHOUSE</span></motion.div>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl max-[426px]:text-2xl font-bold text-gray-900 leading-tight">The Heartbeat of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-[length:200%_auto] animate-gradient">The City.</span></motion.h2>
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-gray-600 text-lg max-[321px]:text-base leading-relaxed font-medium">We are the proud official digital partners of <strong className="inline-flex items-center text-gray-900 px-2 py-1 bg-red-50 rounded-lg mx-1">I <Heart className="w-5 h-5 text-red-500 fill-red-500 mx-1.5 animate-pulse" /> Navi Mumbai</strong>, the largest community platform in the city.</p>
                            <p className="text-gray-600 text-lg max-[321px]:text-base leading-relaxed">Connecting brands with the pulse of Navi Mumbai, we manage the digital presence that brings millions of citizens together every single day.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPartner;

import { motion } from 'framer-motion';
import {  Palette, Monitor, Blocks, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const DevelopmentApproach = ({ setContactOpen }) => {
    const steps = [
        {
            title: "UI/UX Development",
            description: "Creating user-friendly designs that blend creativity with intuitive navigation to keep your visitors engaged.",
            icon: Palette,
            color: "from-blue-500 to-indigo-500",
            lightColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            title: "Responsive Development",
            description: "Websites optimized for mobile, tablet, and desktop with future-proof scalability and lightning-fast speeds.",
            icon: Monitor,
            color: "from-violet-500 to-purple-500",
            lightColor: "bg-violet-50",
            iconColor: "text-violet-600"
        },
        {
            title: "Content & Integrations",
            description: "Seamless integration of ecommerce, booking, CRM, or AI-driven features that support your business goals.",
            icon: Blocks,
            color: "from-emerald-500 to-teal-500",
            lightColor: "bg-emerald-50",
            iconColor: "text-emerald-600"
        },
        {
            title: "Testing & Launch",
            description: "Rigorous performance checks, security validation, and smooth deployment for a flawless, high-impact launch.",
            icon: Rocket,
            color: "from-rose-500 to-orange-500",
            lightColor: "bg-rose-50",
            iconColor: "text-rose-600"
        }
    ];

    return (
        <section className="py-16 max-[426px]:py-12 bg-slate-950 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-transparent -z-10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-violet-500/10 to-transparent -z-10 blur-[120px]" />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl max-[769px]:text-[58px] max-[426px]:text-[42px] font-bold text-white mb-6 tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Development Approach</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg max-[426px]:text-base text-slate-400 leading-relaxed"
                    >
                        We build more than just websites. We create digital experiences that drive growth, 
                        scale with your business, and dominate your competition.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-slate-800 -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 overflow-hidden z-10"
                        >
                            {/* Card Background Accent */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 -mr-16 -mt-16 rounded-full transition-opacity duration-500`} />
                            
                            {/* Step Number */}
                            <div className="absolute top-6 right-8 text-4xl font-black text-slate-800 group-hover:text-slate-700 transition-colors duration-300 pointer-events-none">
                                0{index + 1}
                            </div>

                            <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10 shadow-lg`}>
                                <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                {step.title}
                            </h3>
                            
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {step.description}
                            </p>

                            <div className="flex items-center gap-2 pt-4 border-t border-slate-800/50">
                                <CheckCircle2 className={`w-4 h-4 ${step.iconColor} opacity-70`} />
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Flawless execution</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-white/10 text-white text-center relative overflow-hidden group cursor-pointer"
                    onClick={() => setContactOpen(true)}
                >
                    {/* Animated Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
                        <h4 className="text-2xl font-bold tracking-tight">Ready to build something extraordinary?</h4>
                        <button className="px-8 max-[769px]:px-4 py-3 bg-white text-slate-900 rounded-full font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors duration-300 shadow-xl shadow-white/5 group">
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DevelopmentApproach;

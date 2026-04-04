import { motion } from 'framer-motion';
import { Zap, Shield, Rocket, CheckCircle2 } from 'lucide-react';

const ServiceBenefits = () => {
    const benefits = [
        { 
            icon: Zap, 
            title: "Fast Delivery", 
            desc: "We move at the speed of your business, ensuring rapid deployment and results without sacrificing quality.",
            color: "from-cyan-400 to-blue-500",
            lightColor: "text-cyan-400"
        },
        { 
            icon: Shield, 
            title: "Premium Quality", 
            desc: "No compromises on quality. We follow strict industry best practices and quality benchmarks for every project.",
            color: "from-blue-400 to-indigo-600",
            lightColor: "text-blue-400"
        },
        { 
            icon: Rocket, 
            title: "Scalable Results", 
            desc: "Our solutions are built to evolve with your growing needs. Scale your digital presence without any technical limits.",
            color: "from-violet-400 to-fuchsia-600",
            lightColor: "text-violet-400"
        }
    ];

    return (
        <section className="relative py-16 lg:py-24 max-[769px]:py-8 max-[426px]:py-6 bg-slate-950 overflow-hidden">
            {/* Background Decorative Pulses */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-violet-400 text-sm font-medium mb-4"
                    >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Why Choose Digital To Infinity</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl max-[769px]:text-6xl font-black text-white"
                    >
                        Core Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Guarantees</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 hover:border-violet-500/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Glassmorphism Background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            {/* Icon Container with Glow */}
                            <div className="relative mb-8">
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                                <div className={`relative w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center ${benefit.lightColor} group-hover:scale-110 transition-transform duration-500`}>
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                            </div>

                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {benefit.desc}
                                </p>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-[0.02] group-hover:opacity-[0.05] rounded-bl-full transition-opacity`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceBenefits;

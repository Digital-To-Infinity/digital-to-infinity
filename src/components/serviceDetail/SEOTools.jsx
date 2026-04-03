import { motion } from 'framer-motion';
import { LineChart, PieChart, ExternalLink, Command, ShieldCheck, Zap, Target, Search } from 'lucide-react';

const SEOTools = () => {
    const tools = [
        {
            name: "Semrush",
            icon: <LineChart className="w-8 h-8" />,
            description: "Industry-leading keyword research, competitor analysis, and market insights updated in real-time.",
            color: "from-orange-500 to-red-600",
            shadow: "shadow-orange-500/20"
        },
        {
            name: "Google Analytics",
            icon: <PieChart className="w-8 h-8" />,
            description: "Deep-dive data into user behavior, conversion tracking, and traffic sources to refine strategy.",
            color: "from-blue-500 to-indigo-600",
            shadow: "shadow-blue-500/20"
        },
        {
            name: "Ahrefs",
            icon: <ExternalLink className="w-8 h-8" />,
            description: "Comprehensive backlink checking, site audits, and organic search ranking tracking for maximum growth.",
            color: "from-blue-400 to-cyan-500",
            shadow: "shadow-cyan-500/20"
        },
        {
            name: "Search Console",
            icon: <Command className="w-8 h-8" />,
            description: "Direct insights from Google on indexing health, search queries, and technical performance optimization.",
            color: "from-emerald-500 to-teal-600",
            shadow: "shadow-emerald-500/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-16 bg-slate-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
                    >
                        Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">SEO Infrastructure</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-4xl mx-auto text-lg leading-relaxed"
                    >
                        We leverage the world's most powerful search intelligence tools to ensure your business stays ahead of the competition and dominates search results.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-[1px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl group-hover:from-violet-500/50 group-hover:to-blue-500/50 transition-all duration-300 opacity-50 group-hover:opacity-100" />
                            
                            <div className="relative h-full p-8 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-800/50 flex flex-col items-start gap-6">
                                <div className={`p-4 rounded-xl bg-gradient-to-br ${tool.color} ${tool.shadow} text-white shadow-lg`}>
                                    {tool.icon}
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {tool.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors">
                                    <Zap className="w-3 h-3 text-violet-500" />
                                    Active Integration
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900/50 to-violet-900/20 border border-slate-800 text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                                <Target className="w-6 h-6 text-violet-400" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-lg">99th Percentile</p>
                                <p className="text-slate-500 text-sm italic">Reporting Accuracy</p>
                            </div>
                        </div>
                        <div className="w-px h-12 bg-slate-800 hidden md:block" />
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                <Search className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-lg">Daily Audits</p>
                                <p className="text-slate-500 text-sm italic">Continuous Monitoring</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SEOTools;

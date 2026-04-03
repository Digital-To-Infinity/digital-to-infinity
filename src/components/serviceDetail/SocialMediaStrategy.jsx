import { motion } from 'framer-motion';
import { Target, BarChart3, TrendingUp, Users, Share2, MessageSquare, Zap, ArrowUpRight } from 'lucide-react';

const SocialMediaStrategy = () => {
    const strategies = [
        {
            title: "Better Audiences",
            description: "Explores strategies for reaching and engaging the most relevant and responsive audiences through advanced targeting and behavioral mapping.",
            icon: Users,
            color: "from-blue-500 to-cyan-400",
            delay: 0.1
        },
        {
            title: "Better Analytics",
            description: "Focuses on enhancing data analysis to provide more accurate decision-making and real-time campaign optimization.",
            icon: BarChart3,
            color: "from-purple-500 to-pink-400",
            delay: 0.2
        },
        {
            title: "Paid Social ROI",
            description: "Maximize your ad spend with conversion-focused campaigns across Meta, LinkedIn, and TikTok using precision bidding.",
            icon: TrendingUp,
            color: "from-orange-500 to-amber-400",
            delay: 0.3
        },
        {
            title: "Viral Storytelling",
            description: "Creating thumb-stopping content that resonates emotionally and drives organic sharing across your niche communities.",
            icon: Share2,
            color: "from-emerald-500 to-teal-400",
            delay: 0.4
        }
    ];

    return (
        <section className="relative py-16 bg-slate-950 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8">
                        Strategic Social Media <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">
                            That Drives Real Business.
                        </span>
                    </h2>

                    <p className="text-xl text-slate-400 leading-relaxed max-w-6xl mx-auto">
                        We’re not just posting—we’re building pipelines. With a mix of creative storytelling, platform mastery, and data-backed decisions, our A-Team scales your social into a <span className="text-white font-semibold">predictable growth engine</span>. Whether you need conversions, brand love, or both—we make social deliver measurable business impact.
                    </p>
                </motion.div>

                {/* Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {strategies.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col items-start text-left"
                        >
                            {/* Spotlight Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-3.5 mb-6 shadow-lg shadow-black/20`}>
                                <item.icon className="w-full h-full text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors mb-6">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialMediaStrategy;

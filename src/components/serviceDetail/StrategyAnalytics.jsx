import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Zap, Search, Shield } from 'lucide-react';

const StrategyAnalytics = () => {
    const analyticsFeatures = [
        {
            id: '01',
            title: "Digital Marketing Strategy",
            subtitle: "Strategic Growth Roadmap",
            description: "A comprehensive digital growth roadmap designed to maximize your brand's reach and impact across all channels. We don't just plan; we architect systems for long-term scalability.",
            icon: TrendingUp,
            color: "from-blue-500 to-cyan-400",
            details: [
                "Omnichannel Planning",
                "Growth Hacking Strategies",
                "Platform Selection & ROI Focus",
                "Market Entry Blueprints"
            ],
            delay: 0.1
        },
        {
            id: '02',
            title: "Competitor Analysis",
            subtitle: "Market Intelligence",
            description: "In-depth research into your competition's digital activities to identify opportunities for your brand to out-perform them. We turn their weaknesses into your competitive advantages.",
            icon: Search,
            color: "from-violet-500 to-purple-400",
            details: [
                "Market Benchmarking",
                "SEO & Keyword Audits",
                "Ad Strategy Research",
                "Share of Voice Reporting"
            ],
            delay: 0.2
        },
        {
            id: '03',
            title: "Performance Analytics & Reporting",
            subtitle: "Data-Driven Insights",
            description: "Crystal-clear reporting and data-driven insights to help you understand exactly where your marketing budget is working. We provide clarity in a world of complex data.",
            icon: BarChart3,
            color: "from-orange-500 to-amber-400",
            details: [
                "ROI & ROAS Analysis",
                "Custom Real-time Dashboards",
                "Monthly Performance Deep-Dives",
                "Attribution Modeling"
            ],
            delay: 0.3
        },
        {
            id: '04',
            title: "Conversion Rate Optimization (CRO)",
            subtitle: "Efficiency Maximization",
            description: "Continuous scientific testing and optimization of your digital assets to squeeze every drop of value from your traffic. We bridge the gap between traffic and revenue.",
            icon: Zap,
            color: "from-emerald-500 to-teal-400",
            details: [
                "User Behavior Analysis",
                "Heatmap & Session Recording",
                "A/B & Multivariate Testing",
                "Landing Page Funnel Tuning"
            ],
            delay: 0.4
        }
    ];

    return (
        <section className="relative py-16 bg-slate-950 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] animate-pulse delay-1000" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8">
                        Data-First {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
                            Strategy Deployment.
                        </span>
                    </h2>

                    <p className="text-xl text-slate-400 leading-relaxed max-w-6xl mx-auto">
                        In the age of information, data is the new oil. We don't just provide reports; we provide <span className="text-white font-semibold italic">actionable intelligence</span>.
                        Our Strategy & Analytics vertical is designed to eliminate guesswork and replace it with predictable, data-backed growth.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {analyticsFeatures.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            className="group relative"
                        >
                            <div className="relative h-full p-8 md:p-10 rounded-[3rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                                {/* Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
                                    {/* Icon Container */}
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-4 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                        <item.icon className="w-full h-full text-white" />
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors uppercase italic">
                                                {item.id}
                                            </span>
                                            <span className="text-xs font-bold text-blue-400/80 uppercase tracking-tighter bg-blue-400/10 px-3 py-1 rounded-full">
                                                {item.subtitle}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                                            {item.description}
                                        </p>

                                        {/* Tag list */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {item.details.map((detail, dIdx) => (
                                                <div key={dIdx} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats/Trust Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 px-10 py-6 rounded-3xl bg-gradient-to-r from-blue-600/10 to-violet-600/10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-slate-900 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-1">Zero Guesswork.</h4>
                            <p className="text-slate-400">Our reporting is unified, transparent, and built for real-time tracking.</p>
                        </div>
                    </div>

                    <div className="flex gap-12">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white italic">100%</span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Transparency</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white italic">24/7</span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Data Access</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StrategyAnalytics;

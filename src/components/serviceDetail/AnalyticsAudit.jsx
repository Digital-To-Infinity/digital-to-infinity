import { motion } from 'framer-motion';
import { ShieldCheck, LayoutDashboard, MousePointer2, Settings, ArrowUpRight, Microscope } from 'lucide-react';

const AnalyticsAudit = () => {
    const auditSteps = [
        {
            title: "Data Integrity Audit",
            description: "We begin by auditing your current tracking setup to ensure data accuracy. No more 'ghost' conversions or missing sessions. We fix tracking gaps across GA4, GTM, and Meta Pixel.",
            icon: ShieldCheck,
            color: "from-blue-600 to-indigo-600",
            tags: ["GA4 Audit", "GTM Setup", "Pixel Fix"]
        },
        {
            title: "Advanced Event Tracking",
            description: "Moving beyond simple page views. We implement granular event tracking to capture every button click, form submission, scroll depth, and video interaction that matters to your business.",
            icon: MousePointer2,
            color: "from-violet-600 to-purple-600",
            tags: ["Custom Events", "User Journeys", "Goal Flow"]
        },
        {
            title: "Heatmap & Behavior Mapping",
            description: "See exactly where users are getting stuck. Through heatmaps and session recordings, we identify high-friction areas on your website that are killing your conversion rate.",
            icon: Microscope,
            color: "from-emerald-600 to-teal-600",
            tags: ["Hotjar/CrazyEgg", "UI Friction", "User Intent"]
        },
        {
            title: "Custom BI Dashboards",
            description: "Stop logging into 10 different platforms. We build unified, real-time Business Intelligence dashboards (Looker Studio/PowerBI) that show your actual ROI in one place.",
            icon: LayoutDashboard,
            color: "from-orange-600 to-amber-600",
            tags: ["ROI Reports", "Real-time Sync", "Executive Views"]
        }
    ];

    const metrics = [
        { label: "Data Accuracy", value: "99.9%" },
        { label: "Insights Generated", value: "500+" },
        { label: "Conversion Lift", value: "25%+" },
        { label: "Reports Unified", value: "All-in-One" }
    ];

    return (
        <section className="relative py-16 lg:py-24 max-[769px]:py-8 max-[426px]:py-6 bg-white overflow-hidden">
            {/* Soft decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-50 rounded-full blur-[120px] -z-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-top">
                    {/* Left Side: Content & Headline */}
                    <div className="lg:w-1/3 lg:sticky lg:top-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[56px] max-[426px]:text-[40px] font-black text-slate-900 leading-[1.2] mb-8 max-[426px]:mb-4 max-[769px]:text-center">
                                How We Turn <br className='max-[769px]:hidden' />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                                    Raw Data Into <br className='max-[769px]:hidden' /> Revenue.
                                </span>
                            </h2>
                            <p className="text-lg max-[426px]:text-base text-slate-700 leading-relaxed mb-10 max-[769px]:text-center">
                                Most agencies provide numbers. We provide answers. Our multi-stage implementation process ensures your tracking is robust, your insights are actionable, and your growth is predictable.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                {metrics.map((stat, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <span className="text-2xl font-black text-slate-900">{stat.value}</span>
                                        <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-10 w-full py-4 px-8 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 group transition-all cursor-pointer"
                            >
                                Get a Free Data Audit
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Side: Step Cards */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {auditSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 relative group overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.color} opacity-[0.03] rounded-bl-[100px] group-hover:opacity-[0.08] transition-opacity`} />

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-3.5 mb-6 text-white`}>
                                    <step.icon className="w-full h-full" />
                                </div>

                                <h3 className="text-[22px] font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-slate-600 text-base leading-relaxed mb-8">
                                    {step.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {step.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-[12px] font-bold uppercase tracking-wider border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* Interactive Feature: Success Cycle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 px-10 py-6 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative group"
                >
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500/20 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 max-[426px]:w-16 h-14 max-[426px]:h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <Settings className="w-6 h-6 text-blue-400" />
                                </motion.div>
                            </div>
                            <h4 className="text-2xl font-bold italic tracking-tight">The Loop of Continuous Optimization</h4>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl font-black text-blue-500/30">01</div>
                                <div>
                                    <p className="font-bold text-white text-xl mb-1">Audit</p>
                                    <p className="text-slate-400 text-sm">Verify tracking integrity</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-3xl font-black text-blue-500/30">02</div>
                                <div>
                                    <p className="font-bold text-white text-lg mb-1">Analyze</p>
                                    <p className="text-slate-400 text-xs">Uncover user trends</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-3xl font-black text-blue-500/30">03</div>
                                <div>
                                    <p className="font-bold text-white text-lg mb-1">Act</p>
                                    <p className="text-slate-400 text-xs">Implement findings</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Text Overlay */}
                    <div className="absolute -bottom-10 -right-10 text-[120px] font-black text-white/[0.02] select-none pointer-events-none italic">
                        GROWTH
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AnalyticsAudit;

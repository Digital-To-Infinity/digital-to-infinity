import { motion } from 'framer-motion';
import { 
    Cpu, Layers, ShieldCheck, Zap, Search, Users, BadgeIndianRupee, ArrowRight
} from 'lucide-react';

const WebWhyChoose = ({ setContactOpen }) => {
    const reasons = [
        {
            title: "AI-Powered Solutions",
            description: "From AI-driven chatbots to personalized user experiences, we integrate intelligence into every line of code.",
            icon: Cpu,
            bg: "bg-slate-950",
            text: "text-slate-400",
            titleText: "text-white",
            iconBg: "bg-violet-600"
        },
        {
            title: "Full-Service Approach",
            description: "Design, development, and performance tracking—we handle everything under one roof for a seamless experience.",
            icon: Layers,
            bg: "bg-white",
            text: "text-slate-600",
            titleText: "text-slate-900",
            iconBg: "bg-blue-600"
        },
        {
            title: "Proven Credibility & Trust",
            description: "Backed by a growing list of satisfied clients and measurable case studies that prove our impact.",
            icon: ShieldCheck,
            bg: "bg-slate-950",
            text: "text-slate-400",
            titleText: "text-white",
            iconBg: "bg-indigo-600"
        },
        {
            title: "Future-Ready Performance",
            description: "We ensure your website is fast, secure, and ready to scale with the increasing digital demands of tomorrow.",
            icon: Zap,
            bg: "bg-white",
            text: "text-slate-600",
            titleText: "text-slate-900",
            iconBg: "bg-violet-600"
        },
        {
            title: "SEO-Optimized",
            description: "Every site we build is architected to rank higher on search engines and attract organic, high-value traffic.",
            icon: Search,
            bg: "bg-white",
            text: "text-slate-600",
            titleText: "text-slate-900",
            iconBg: "bg-blue-600"
        },
        {
            title: "Targeted Audience",
            description: "We craft websites that resonate deeply with your specific customer base, driving higher conversions.",
            icon: Users,
            bg: "bg-slate-950",
            text: "text-slate-400",
            titleText: "text-white",
            iconBg: "bg-indigo-600"
        },
        {
            title: "Cost-Effective Solutions",
            description: "Transparent pricing and value-driven services designed to provide the best ROI for your business.",
            icon: BadgeIndianRupee,
            bg: "bg-white",
            text: "text-slate-600",
            titleText: "text-slate-900",
            iconBg: "bg-violet-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section className="py-16 max-[426px]:py-12 bg-white overflow-hidden relative">
            {/* Subtle Gradient Orbs */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-violet-50/50 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl max-[769px]:text-[52px] max-[426px]:text-[42px] font-bold text-slate-900 mb-6 max-[426px]:mb-2 tracking-tight"
                    >
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">Digital to Infinity?</span>
                    </motion.h2>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, rotate: 1 }}
                            className={`p-8 rounded-[2.5rem] ${item.bg} ${item.bg === 'bg-white' ? 'border border-slate-100 shadow-2xl shadow-slate-200/50' : 'shadow-2xl shadow-violet-950/20'} transition-all duration-500 flex flex-col items-start group`}
                        >
                            <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                                <item.icon className="w-8 h-8 text-white" />
                            </div>
                            
                            <h3 className={`text-xl font-bold ${item.titleText} mb-4 leading-tight group-hover:text-violet-500 transition-colors`}>
                                {item.title}
                            </h3>
                            
                            <p className={`${item.text} text-sm leading-relaxed`}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Final CTA Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.02 }}
                        onClick={() => setContactOpen(true)}
                        className="p-8 rounded-[2.5rem] bg-gradient-to-br from-violet-600 to-blue-600 flex flex-col justify-between group cursor-pointer shadow-xl shadow-violet-500/30 overflow-hidden relative"
                    >
                        {/* Decorative Circle */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                        
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">Start Your Digital Journey Today</h3>
                            <p className="text-white/80 text-sm leading-relaxed mb-8">
                                Let's build a website that doesn't just look good but performs even better.
                            </p>
                        </div>
                        
                        <div className="relative z-10 flex items-center gap-3 text-white font-bold group-hover:translate-x-2 transition-all transition-duration-300">
                            <span>Get Started Now</span>
                            <ArrowRight className="w-6 h-6" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WebWhyChoose;

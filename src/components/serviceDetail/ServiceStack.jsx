import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { subServiceData } from '../../data/mock';

const ServiceStack = ({ service, setContactOpen }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    if (!service) return null;

    const stackItems = service.features?.map(feature => {
        const data = subServiceData[feature] || {
            icon: Sparkles,
            desc: "Experience high-end digital excellence with our specialized solution tailored for your unique business needs.",
            points: ["Premium Quality", "Expert Team"]
        };
        return {
            title: feature,
            icon: data.icon,
            desc: data.desc,
            points: data.points
        };
    }) || [];

    const serviceColors = [
        { iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
        { iconBg: 'bg-indigo-50', iconColor: 'text-indigo-500' },
        { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
        { iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
    ];

    return (
        <section className="relative py-16 lg:py-24 max-[769px]:py-8 max-[426px]:py-6 overflow-hidden bg-white">
            {/* Soft Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Clean Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-[70%] max-[769px]:text-center"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl max-[426px]:text-6xl max-[769px]:text-center font-black text-slate-900 leading-[1.05] tracking-tight mb-2 w-full">
                            Solve Your <br />
                            <span className="relative text-4xl md:text-5xl lg:text-6xl max-[769px]:text-[56px] max-[426px]:text-[54px] text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 animate-gradient bg-[length:200%_auto] pb-4 inline-block">
                                {service.title}.
                                <svg className="absolute -bottom-2 left-0 w-full h-4 text-violet-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="6" className="opacity-40" />
                                </svg>
                            </span>
                        </h1>
                    </motion.div>

                    <div className="w-full lg:w-[30%] flex lg:justify-end">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={() => setContactOpen(true)}
                            className="w-full lg:w-auto px-10 py-5 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl font-bold shadow-2xl shadow-violet-200 transition-all hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3 group"
                        >
                            Get Free Analysis
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start px-2">
                    {/* Left Column: Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:sticky lg:top-32"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] max-[426px]:aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                                alt="Marketing Team"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Service Stack */}
                    <div className="flex flex-col gap-5">
                        {stackItems.map((item, index) => {
                            const Icon = item.icon;
                            const isExpanded = expandedIndex === index;
                            const colors = serviceColors[index % serviceColors.length];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                                    className={`group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${isExpanded
                                        ? 'bg-white border-violet-200 shadow-[0_20px_50px_rgba(139,92,246,0.12)]'
                                        : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-lg'
                                        }`}
                                >
                                    <div className="p-6 md:p-8 max-[426px]:p-4 flex items-center gap-6 max-[426px]:gap-2">
                                        <div className={`w-14 max-[426px]:w-10 h-14 max-[426px]:h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isExpanded ? 'bg-violet-600 text-white scale-110 shadow-lg shadow-violet-200' : `${colors.iconBg} ${colors.iconColor}`
                                            }`}>
                                            <Icon className="w-7 max-[426px]:w-5 h-7 max-[426px]:h-5" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className={`text-xl md:text-2xl max-[426px]:text-base font-bold transition-colors ${isExpanded ? 'text-slate-900' : 'text-slate-700 group-hover:text-violet-600'
                                                }`}>
                                                {item.title}
                                            </h3>
                                        </div>

                                        <div className={`transition-all duration-500 ${isExpanded ? 'rotate-180 text-violet-600' : 'text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1'
                                            }`}>
                                            <ChevronRight className="w-6 max-[426px]:w-5 h-6 max-[426px]:h-5" />
                                        </div>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                            >
                                                <div className="px-8 pb-8 md:pl-[104px]">
                                                    <p className="text-slate-600 text-lg max-[426px]:text-base mb-6 leading-relaxed">
                                                        {item.desc}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.points?.map((point, pIdx) => (
                                                            <div key={pIdx} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 text-sm font-semibold hover:bg-violet-50 hover:border-violet-100 transition-colors">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                                                {point}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceStack;

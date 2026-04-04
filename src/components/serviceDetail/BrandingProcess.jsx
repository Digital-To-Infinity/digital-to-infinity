import { motion } from 'framer-motion';
import { 
    PenTool, ShieldCheck, RefreshCw, Briefcase, UserCircle, Sparkles, Layers, Zap, Compass
} from 'lucide-react';

const BrandingProcess = ({ setContactOpen }) => {
    const steps = [
        { num: '01', title: 'Client Vision', desc: 'Understanding your story and aligning strategy with your goals.' },
        { num: '02', title: 'Brand Positioning', desc: 'Analyzing competitors and defining your unique market identity.' },
        { num: '03', title: 'Creative Design', desc: 'Developing compelling brand elements, colors, and imagery.' },
        { num: '04', title: 'Logo Creation', desc: 'Crafting impactful logos using psychology and market insights.' },
        { num: '05', title: 'Strategic Messaging', desc: 'Crafting narratives that connect emotionally with your audience.' },
        { num: '06', title: 'Digital Presence', desc: 'Extending your brand across web and social platforms.' },
        { num: '07', title: 'Consistent Guidelines', desc: 'Documenting rules to ensure brand uniformity everywhere.' },
        { num: '08', title: 'Ongoing Evaluation', desc: 'Long-term partnership to adapt your brand to growth.' },
        { num: '09', title: 'Brand Storytelling', desc: 'Developing a compelling narrative that resonates with human emotions.' },
        { num: '10', title: 'Final Asset Delivery', desc: 'Providing a complete library of high-res files for every platform.' },
    ];

    const solutions = [
        { title: 'Brand Strategy', icon: Compass, color: 'text-violet-600', bg: 'bg-violet-50' },
        { title: 'Brand Design', icon: Layers, color: 'text-pink-600', bg: 'bg-pink-50' },
        { title: 'Brand Guidelines', icon: ShieldCheck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'Brand Repositioning', icon: RefreshCw, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Logo Designing', icon: PenTool, color: 'text-orange-600', bg: 'bg-orange-50' },
        { title: 'Corporate Stationery', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { title: 'Company Profile', icon: UserCircle, color: 'text-rose-600', bg: 'bg-rose-50' }
    ];

    return (
        <section className="py-16 max-[426px]:py-12 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Branding Roadmap (Compact) */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h2 className="text-6xl max-[426px]:text-[35px] font-black text-slate-900 mb-4 tracking-tight">
                                The Branding <span className="text-violet-600">Roadmap</span>
                            </h2>
                            <p className="text-slate-700 text-xl max-[426px]:text-base">
                                A structured 10-step journey from initial vision to long-term market excellence.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ x: 5 }}
                                    className="flex gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-violet-300 hover:bg-white transition-all group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sm font-black text-black group-hover:bg-black group-hover:text-white transition-colors">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-black mb-1 group-hover:text-violet-600 transition-colors uppercase tracking-tight">{step.title}</h4>
                                        <p className="text-slate-700 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Core Services (Compact) */}
                    <div className="lg:col-span-12 xl:col-span-5 bg-slate-50 rounded-[3rem] p-8 md:p-12 max-[426px]:p-6 border border-slate-200/50 relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <Sparkles className="w-5 h-5 text-violet-600" />
                                <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">Core Solutions</h3>
                            </div>

                            <div className="space-y-3 mb-10">
                                {solutions.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/50 hover:border-violet-300 hover:shadow-lg transition-all cursor-default"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                                    <Icon className={`w-5 h-5 ${item.color}`} />
                                                </div>
                                                <span className="font-bold text-slate-800 tracking-tight">{item.title}</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <motion.button
                                onClick={() => setContactOpen && setContactOpen(true)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-violet-600 transition-all flex items-center justify-center gap-3 group overflow-hidden relative cursor-pointer"
                            >
                                <span className="relative z-10 uppercase tracking-widest text-sm">Start Your Branding Project</span>
                                <Zap className="w-4 h-4 relative z-10 group-hover:animate-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>
                        </motion.div>

                        {/* Decorative floating icon */}
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-xl flex items-center justify-center animate-bounce duration-[3000ms]">
                            <PenTool className="w-8 h-8 text-violet-600" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BrandingProcess;

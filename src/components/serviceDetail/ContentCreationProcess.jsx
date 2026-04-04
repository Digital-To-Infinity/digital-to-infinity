import { motion } from 'framer-motion';
import { 
    Video, Share2, Megaphone, FileBarChart, FileText, Palette, Monitor, Flag, Film, Sparkles, Zap
} from 'lucide-react';

const ContentCreationProcess = ({ setContactOpen }) => {
    const steps = [
        { num: '01', title: 'Client Consultation', desc: 'Understanding your brand, audience, and creative goals to define the right visual direction.' },
        { num: '02', title: 'Creative Concepting', desc: 'Developing design concepts and video storyboards aligned with campaign objectives.' },
        { num: '03', title: 'Video Storytelling', desc: 'Crafting compelling narratives with precise editing, transitions, and sound design.' },
        { num: '04', title: 'Design & Branding', desc: 'Delivering brand-consistent creatives that strengthen recognition and trust.' },
        { num: '05', title: 'Content Optimization', desc: 'Refining visuals and videos for different formats and platforms to maximize reach.' },
        { num: '06', title: 'Audience Targeting', desc: 'Designs and videos tailored to resonate with your audience\'s preferences and behavior.' },
        { num: '07', title: 'Platform Integration', desc: 'Optimizing creatives for social, web, and ad platforms for seamless use.' },
        { num: '08', title: 'Performance Review', desc: 'Analyzing creative performance and refining designs/videos based on audience engagement.' },
        { num: '09', title: 'Brand Storytelling', desc: 'Developing a compelling narrative that resonates with human emotions.' },
        { num: '10', title: 'Final Asset Delivery', desc: 'Providing a complete library of high-res files for every platform.' },
    ];

    const solutions = [
        { title: 'Social Media Creatives', icon: Share2, color: 'text-violet-600', bg: 'bg-violet-50' },
        { title: 'Ad Creatives', icon: Megaphone, color: 'text-pink-600', bg: 'bg-pink-50' },
        { title: 'Infographics', icon: FileBarChart, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'Brochures', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Logo Designing', icon: Palette, color: 'text-orange-600', bg: 'bg-orange-50' },
        { title: 'Web Graphics', icon: Monitor, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { title: 'Promotional Banners', icon: Flag, color: 'text-rose-600', bg: 'bg-rose-50' },
        { title: 'Video Editing', icon: Film, color: 'text-amber-600', bg: 'bg-amber-50' }
    ];

    return (
        <section className="py-16 max-[426px]:py-12 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Content Roadmap (Compact) */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10 max-[769px]:text-center"
                        >
                            <h2 className="text-4xl md:text-6xl max-[426px]:text-[36px] font-black text-slate-900 mb-4 tracking-tight">
                                The Creative <span className="text-violet-600">Roadmap</span>
                            </h2>
                            <p className="text-slate-700 text-xl max-[426px]:text-lg">
                                A structured 10-step journey from strategic vision to high-impact content delivery.
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

                    {/* Right: Core Solutions (Compact) */}
                    <div className="lg:col-span-12 xl:col-span-5 bg-slate-50 rounded-[3rem] p-8 md:p-12 max-[426px]:p-6 border border-slate-200/50 relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <Sparkles className="w-5 h-5 text-violet-600" />
                                <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">Creation Solutions</h3>
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
                                <span className="relative z-10 uppercase tracking-widest text-sm">Start Your Content Project</span>
                                <Zap className="w-4 h-4 relative z-10 group-hover:animate-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>
                        </motion.div>

                        {/* Decorative floating icon */}
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-xl flex items-center justify-center animate-bounce duration-[3000ms]">
                            <Video className="w-8 h-8 text-violet-600" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContentCreationProcess;

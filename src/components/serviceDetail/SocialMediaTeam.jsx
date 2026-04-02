import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target, BarChart3, ShieldCheck, Camera } from 'lucide-react';
import socialMediaTeamImg from '../../assets/social-media-team.png';

const SocialMediaTeam = ({ setContactOpen }) => {
    const features = [
        {
            title: "Full-funnel growth",
            desc: "awareness, acquisition, and retention mapped to revenue.",
            icon: Target,
            color: "text-violet-600",
            bg: "bg-violet-50"
        },
        {
            title: "Platform-native creative",
            desc: "formats that match how people actually scroll.",
            icon: Camera,
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            title: "AI-assisted production",
            desc: "idea generation, rapid variants, and caption testing at scale.",
            icon: Zap,
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            title: "Performance loop",
            desc: "creative → data → iteration—weekly lifts, not yearly overhauls.",
            icon: BarChart3,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            title: "Brand safety + compliance",
            desc: "approvals, checklists, and zero-drama launches.",
            icon: ShieldCheck,
            color: "text-rose-600",
            bg: "bg-rose-50"
        },
    ];

    return (
        <section className="relative py-16 overflow-hidden bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-100 rounded-full blur-3xl opacity-60 animate-pulse" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60 animate-pulse delay-700" />

                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                            <img
                                src={socialMediaTeamImg}
                                alt="Social Media Strategy"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />

                            {/* Floating Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center text-white">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">Monthly Reach</p>
                                    <p className="text-lg font-bold text-slate-900">+124k Growth</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-[53px] font-black text-slate-900 leading-[1.2] mb-2">
                                Grow Your Brand With <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                                    <span className='text-slate-900'>Our</span> Social Media Team.
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-xl">
                                Senior strategists, performance traders, and creators under one roof—built for speed, aligned to outcomes.
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Features:</h3>
                            <div className="flex flex-col gap-5">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex items-start gap-5 group"
                                        >
                                            <div className={`mt-1 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${feature.bg} ${feature.color} group-hover:scale-110 shadow-sm border border-slate-100`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-lg text-slate-800 leading-snug">
                                                    <span className="font-bold">{feature.title}</span>{" "}
                                                    <span className="text-slate-500">{feature.desc}</span>
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="pt-4"
                        >
                            <motion.button
                                onClick={() => setContactOpen(true)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 overflow-hidden cursor-pointer w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/10 to-violet-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                Book a Strategy Call
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaTeam;

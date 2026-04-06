import { motion } from "framer-motion";
import { Phone, ArrowRight, Award, Users, ShieldCheck, Zap } from "lucide-react";

const CompanyPromo = () => {
    return (
        <div className="w-full h-fit sticky top-32">
            <aside className="w-72 mt-12 lg:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-[2.5rem] bg-slate-950 text-white border border-white/5 relative overflow-hidden group shadow-2xl shadow-violet-500/10"
                >
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 rounded-full -mr-16 -mt-16 blur-[60px] group-hover:bg-violet-600/40 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-600/20 rounded-full -ml-12 -mb-12 blur-[50px]" />

                    {/* Company Branding */}
                    <div className="relative mb-8 flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6 rounded-[1.25rem] bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center p-4">
                            <Zap className="w-full h-full text-violet-400 fill-violet-400/20" />
                        </div>
                        <h4 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-2">
                            Digital <span className="text-violet-400">Infinity</span>
                        </h4>
                        <div className="h-1 w-8 bg-violet-500 rounded-full" />
                    </div>

                    <div className="space-y-6 relative z-10 text-center">
                        <div>
                            <p className="text-[10px] font-black text-violet-400 uppercase tracking-[0.3em] mb-3">Scale Your Brand</p>
                            <h5 className="text-xl font-bold text-white leading-tight">
                                Ready to Achieve <br /> Infinite Growth?
                            </h5>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed">
                            Transform your business with data-driven performance marketing and bold creative strategies.
                        </p>

                        <div className="pt-4 space-y-3">
                            <button className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-violet-600/25 flex items-center justify-center gap-3 group/btn cursor-pointer">
                                Get Free Audit
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>

                            <button className="w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3 cursor-pointer">
                                <Phone className="w-4 h-4 text-violet-400" />
                                Talk to Expert
                            </button>
                        </div>
                    </div>

                    {/* Trust Stats */}
                    <div className="mt-10 pt-10 border-t border-white/5 grid grid-cols-3 gap-2">
                        {[
                            {
                                icon: Award,
                                value: "98%",
                                label: "Retention",
                                color: "text-violet-400 bg-violet-400/10"
                            },
                            {
                                icon: Users,
                                value: "250+",
                                label: "Clients",
                                color: "text-indigo-400 bg-indigo-400/10"
                            },
                            {
                                icon: ShieldCheck,
                                value: "Top",
                                label: "Agency",
                                color: "text-emerald-400 bg-emerald-400/10"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                                    <item.icon size={18} />
                                </div>
                                <span className="block text-[12px] font-black text-white">{item.value}</span>
                                <span className="block text-[8px] font-black text-slate-500 uppercase mt-1 tracking-wider">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </aside>
        </div>
    );
};

export default CompanyPromo;

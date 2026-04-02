import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceHero = ({ service, setContactOpen }) => {
    const navigate = useNavigate();
    if (!service) return null;
    const Icon = service.icon;

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-bold tracking-wider uppercase mb-6">
                            <Sparkles className="w-4 h-4" />
                            Premium Solution
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                            {service.title}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                                For Your Brand
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                            {service.desc} We don't just provide a service; we build a growth engine for your business.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <button 
                                onClick={() => setContactOpen(true)}
                                className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-violet-600/20 hover:scale-105"
                            >
                                Get a Free Audit
                            </button>
                            <a 
                                href="https://wa.me/919594222334" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/5 hover:bg-white border border-white/10 text-white hover:text-green-500 rounded-2xl font-bold transition-all flex items-center gap-2 cursor-pointer"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group lg:ml-auto"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                        <div className="relative aspect-square w-full max-w-md bg-slate-900 border border-slate-800 rounded-[3rem] flex items-center justify-center p-12 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
                            <Icon className="w-40 h-40 text-violet-500 relative z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;

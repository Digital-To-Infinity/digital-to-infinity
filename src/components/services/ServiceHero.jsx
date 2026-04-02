import { motion } from 'framer-motion';
import Antigravity from '../common/Antigravity';

const ServiceHero = () => {
    return (
        <section className="relative pt-32 pb-10 overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0 opacity-60">
                <Antigravity particleShape="tetrahedron" />
            </div>
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] opacity-50" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-semibold mb-6 backdrop-blur-md">All-In-One Features</span>
                    <h1 className="text-2xl max-[426px]:text-3xl max-[376px]:text-2xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
                        Everything Your Business <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                            Needs to Grow Online
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">We don't just give you tools. We show you how they help you get more customers, leads, and revenue.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceHero;

import { motion } from 'framer-motion';
import { techStack } from '../../data/mock';

const TechMarquee = () => {
    return (
        <div className="w-full relative overflow-hidden">
            <div className="flex flex-col gap-8">
                <div className="flex w-full">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-6 pr-6 whitespace-nowrap"
                    >
                        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                            <div key={i} className="group flex items-center gap-3 px-6 max-[426px]:px-4 py-3 max-[426px]:py-1 rounded-full bg-slate-950 border border-slate-600 hover:border-white transition-all duration-300 backdrop-blur-sm cursor-default">
                                <tech.icon className="w-5 max-[426px]:w-4 h-5 max-[426px]:h-4 text-slate-400 group-hover:text-white transition-colors" />
                                <span className="text-lg max-[426px]:text-base font-bold text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="flex w-full">
                    <motion.div
                        initial={{ x: "-50%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-6 pr-6 whitespace-nowrap"
                    >
                        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                            <div key={`rev-${i}`} className="group flex items-center gap-3 px-6 max-[426px]:px-4 py-3 max-[426px]:py-1 rounded-full bg-slate-950 border border-slate-600 hover:border-white hover:text-white transition-all duration-300 backdrop-blur-sm cursor-default">
                                <tech.icon className="w-5 max-[426px]:w-4 h-5 max-[426px]:h-4 text-slate-400 group-hover:text-white transition-colors" />
                                <span className="text-lg max-[426px]:text-base font-bold text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TechMarquee;

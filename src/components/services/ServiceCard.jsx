import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, desc, features, index, slug }) => {
    const navigate = useNavigate();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="h-full cursor-pointer group"
            onMouseMove={handleMouseMove}
            onClick={() => navigate(`/services/${slug}`)}
        >
            <div className="relative h-full rounded-[2.5rem] border border-slate-800 bg-slate-950 p-8 md:p-10 max-[376px]:p-6 shadow-2xl transition-all duration-500 overflow-hidden flex flex-col hover:border-violet-500/50">
                {/* Mobile-Friendly Background Interaction: Subtle Looping Glow */}
                <div className="absolute inset-0 z-0 block md:hidden">
                    <motion.div
                        animate={{
                            opacity: [0.05, 0.15, 0.05],
                            scale: [1, 1.2, 1],
                            x: ['-10%', '10%', '-10%'],
                            y: ['-10%', '10%', '-10%']
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8b5cf6,transparent_60%)] blur-3xl"
                    />
                </div>

                {/* Spotlight Cursor Effect - Desktop Only */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 md:group-hover:opacity-100 transition duration-300 z-0 hidden md:block"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                450px circle at ${mouseX}px ${mouseY}px,
                                rgba(139, 92, 246, 0.15),
                                transparent 80%
                            )
                        `,
                    }}
                />

                {/* Mesh Gradient Background (Top Spotlight) */}
                <div className="absolute inset-x-0 top-0 h-64 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_-20%,#8b5cf6,transparent_70%)]" />

                <div className="relative flex flex-col h-full z-10">
                    {/* Icon Container with Pulsing Glow on Hover */}
                    <div className="mb-6 md:mb-8 relative shrink-0">
                        {/* Always show a subtle glow on mobile, pulsing on hover */}
                        <div className="absolute -inset-4 bg-violet-600/10 md:bg-violet-600/20 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 blur-2xl transition duration-500 md:animate-pulse" />
                        <div className="relative inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-xl md:group-hover:bg-violet-600 md:group-hover:border-violet-400 md:group-hover:scale-110 transition-all duration-300">
                            <Icon className="h-7 w-7 md:h-8 md:w-8 text-violet-400 group-hover:text-white transition-colors rotate-0 group-hover:rotate-12 duration-500" />
                        </div>
                    </div>

                    <h3 className="mb-3 text-[23px] max-[426px]:text-[20px] max-[376px]:text-[18px] max-[321px]:text-[16px] font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors uppercase md:normal-case">{title}</h3>
                    <p className="text-slate-400 mb-4 text-[15px] max-[376px]:text-[14px] max-[321px]:text-[13px] leading-relaxed flex-grow">{desc}</p>

                    {/* Features List - Always readable on mobile */}
                    <ul className="space-y-3 md:space-y-4 mt-auto border-t border-white/5 pt-6 md:pt-8 pb-4">
                        {features.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1, x: 5 }}
                                className="flex items-start gap-3 text-sm max-[376px]:text-[14px] max-[321px]:text-[13px] text-slate-400 md:hover:text-white transition-all duration-300"
                            >
                                <div className="mt-1.5 flex-shrink-0 h-1 w-3 md:w-3 md:group-hover:w-4 rounded-full bg-slate-700 md:group-hover:bg-violet-500 transition-all duration-300" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>

                    {/* Footer  */}
                    <div className="pt-6 mt-2 relative border-t border-white/5 flex items-center justify-between group/btn">
                        <div className="flex">
                            <span className="text-sm font-bold text-slate-300 md:group-hover:text-violet-400 transition-colors">Explore Solution</span>
                        </div>

                        <div className="relative">
                            {/* Spinning Orbit Effect on Hover (Hidden on mobile or subtle) */}
                            <div className="absolute inset-0 rounded-full border border-violet-500/20 md:border-violet-500/0 md:group-hover:border-violet-500/50 md:group-hover:animate-[spin_3s_linear_infinite] scale-150 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700" />
                            <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-violet-600/20 md:bg-white/5 border border-white/10 md:group-hover:bg-violet-600 md:group-hover:border-violet-400 md:group-hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-500 relative z-10">
                                <ArrowRight className="w-5 h-5 text-white md:group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Scanning Line (Hidden on mobile) */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full md:w-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent md:group-hover:w-full transition-all duration-1000 ease-in-out opacity-20 md:opacity-0 md:group-hover:opacity-100 blur-[1px]" />
            </div>
        </motion.div>
    );
};

export default ServiceCard;

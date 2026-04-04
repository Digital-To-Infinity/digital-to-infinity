import { motion } from 'framer-motion';
import { Video, Image, Sparkles, PenTool, Layout, Figma, Zap, Target, Camera } from 'lucide-react';

const ContentCreationTools = () => {
    const tools = [
        {
            name: "Adobe Premiere Pro",
            icon: <Video className="w-8 h-8" />,
            description: "Industry-standard video editing software for creating high-end cinematic content and professional social media reels.",
            color: "from-purple-600 to-indigo-700",
            shadow: "shadow-purple-500/20"
        },
        {
            name: "Adobe Photoshop",
            icon: <Image className="w-8 h-8" />,
            description: "Powerful image editing and manipulation tool for creating stunning brand visuals and high-impact marketing assets.",
            color: "from-blue-600 to-cyan-700",
            shadow: "shadow-blue-500/20"
        },
        {
            name: "Adobe After Effects",
            icon: <Sparkles className="w-8 h-8" />,
            description: "Advanced motion graphics and visual effects software to bring life to your brand with dynamic, scroll-stopping animations.",
            color: "from-indigo-600 to-blue-800",
            shadow: "shadow-indigo-500/20"
        },
        {
            name: "Adobe Illustrator",
            icon: <PenTool className="w-8 h-8" />,
            description: "The gold standard for vector graphics, used to design scalable logos, custom icons, and sophisticated brand illustrations.",
            color: "from-orange-500 to-amber-600",
            shadow: "shadow-orange-500/20"
        },
        {
            name: "Canva",
            icon: <Layout className="w-8 h-8" />,
            description: "Versatile design platform for rapid creation of engaging social media posts, stories, and modern presentation materials.",
            color: "from-cyan-400 to-blue-500",
            shadow: "shadow-cyan-400/20"
        },
        {
            name: "Figma",
            icon: <Figma className="w-8 h-8" />,
            description: "Leading collaborative interface design tool for creating modern, user-centric web and mobile UI/UX layouts.",
            color: "from-rose-500 to-purple-600",
            shadow: "shadow-rose-500/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-16 max-[426px]:py-12 bg-slate-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-7xl max-[426px]:text-[44px] font-bold text-white mb-6 max-[426px]:mb-2 tracking-tight leading-tight"
                    >
                        Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Tech Stack</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-4xl mx-auto text-lg max-[426px]:text-base leading-relaxed"
                    >
                        We utilize the industry's most powerful creative software to ensure your brand stands out with high-quality, professional-grade content that drives results.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-[1px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl group-hover:from-violet-500/50 group-hover:to-blue-500/50 transition-all duration-300 opacity-50 group-hover:opacity-100" />
                            
                            <div className="relative h-full p-8 rounded-3xl bg-slate-900/80 backdrop-blur-sm border border-slate-800/50 flex flex-col items-start gap-6">
                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${tool.color} ${tool.shadow} text-white shadow-lg transformation group-hover:scale-110 transition-transform duration-300`}>
                                    {tool.icon}
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {tool.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors uppercase">
                                    <Zap className="w-3 h-3 text-violet-500" />
                                    Professional Suite
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-8 rounded-[2.5rem] bg-gradient-to-r from-slate-900/50 to-violet-900/20 border border-slate-800/50 text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                                <Camera className="w-7 h-7 text-violet-400" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-xl">4K Resolution</p>
                                <p className="text-slate-500 text-sm italic">Production Quality</p>
                            </div>
                        </div>
                        <div className="w-px h-14 bg-slate-800 hidden md:block" />
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                <Target className="w-7 h-7 text-blue-400" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-xl">Brand Aligned</p>
                                <p className="text-slate-500 text-sm italic">Strategic Creativity</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContentCreationTools;

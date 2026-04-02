import { motion } from 'framer-motion';
import FeatureCard from '../home/FeatureCard';
import { values } from '../../data/mock';

const AboutWhyChooseUs = () => {
    return (
        <section className="relative py-32 max-[769px]:py-20 max-[426px]:py-12 max-[376px]:py-16 overflow-hidden bg-slate-950">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <motion.div
                    style={{ willChange: "transform" }}
                    animate={{ x: [0, 100, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[128px]"
                />
                <motion.div
                    style={{ willChange: "transform" }}
                    animate={{ x: [0, -100, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[128px]"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl max-[376px]:text-3xl max-[321px]:text-2xl font-bold mb-6 text-white">Why Brands <span className="text-violet-500">Trust Us</span></motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto text-lg max-[321px]:text-base">We combine the agility of a startup with the expertise of an enterprise agency.</motion.p>
                </div>
                <div className="grid grid-cols-1 min-[769px]:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <FeatureCard key={idx} icon={val.icon} title={val.title} desc={val.desc} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutWhyChooseUs;

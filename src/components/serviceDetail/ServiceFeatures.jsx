import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceFeatures = ({ service }) => {
    if (!service || !service.features) return null;
    
    return (
        <section className="py-24 bg-white/5 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What's Included?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Comprehensive strategies tailored for your specific goals. Every feature is designed to deliver measurable results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {service.features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center mb-6">
                                <Check className="text-violet-500 w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{feature}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                We optimize every aspect to ensure maximum engagement and conversion.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, MessageCircle, Zap, Shield, Rocket, Sparkles } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ContactPopup from '../components/contact/ContactPopup';
import { servicesData } from '../data/mock';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isContactOpen, setContactOpen] = useState(false);
    const [service, setService] = useState(null);

    useEffect(() => {
        const foundService = servicesData.find(s => s.slug === slug);
        if (foundService) {
            setService(foundService);
        } else {
            navigate('/services');
        }
    }, [slug, navigate]);

    if (!service) return null;

    const Icon = service.icon;

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-violet-500/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <button 
                        onClick={() => navigate('/services')}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </button>

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
                            <div className="flex flex-wrap gap-4">
                                <button 
                                    onClick={() => setContactOpen(true)}
                                    className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-violet-600/20 hover:scale-105"
                                >
                                    Get Started Now
                                </button>
                                <button 
                                    className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all"
                                >
                                    View Casestudy
                                </button>
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

            {/* Features Section */}
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

            {/* Benefits Scroller */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Fast Delivery", desc: "We move at the speed of your business, ensuring rapid deployment and results." },
                            { icon: Shield, title: "Premium Quality", desc: "No compromises on quality. We follow industry best practices for every project." },
                            { icon: Rocket, title: "Scalable Results", desc: "Our solutions are built to grow with you. Scale your business without limits." }
                        ].map((benefit, i) => (
                            <div key={i} className="flex gap-6 p-8 rounded-[2rem] bg-slate-900/50 border border-white/5">
                                <benefit.icon className="w-10 h-10 text-violet-500 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-slate-400">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                            Ready to scale your <br /> {service.title}?
                        </h2>
                        <p className="text-violet-100 text-xl mb-12 max-w-2xl mx-auto">
                            Join over 50+ businesses that have transformed their digital presence with our expert strategies.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button 
                                onClick={() => setContactOpen(true)}
                                className="px-10 py-5 bg-white text-violet-600 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all hover:scale-105"
                            >
                                Get a Free Audit
                            </button>
                            <a 
                                href="https://wa.me/9594222334" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white font-bold text-lg hover:text-green-400 transition-colors"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <ContactPopup 
                isOpen={isContactOpen}
                onClose={() => setContactOpen(false)}
            />
        </div>
    );
};

export default ServiceDetail;

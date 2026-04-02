import ServiceCard from '../services/ServiceCard';
import { service } from '../../data/mock';

const AboutServices = () => {
    return (
        <section className="py-24 max-[426px]:py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/30 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-semibold tracking-wider uppercase text-sm mb-4 backdrop-blur-sm border border-white/20">Services</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">What We Do Best</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            desc={service.desc}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutServices;

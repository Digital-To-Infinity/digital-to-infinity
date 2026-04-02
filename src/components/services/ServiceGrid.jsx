import ServiceCard from './ServiceCard';
import { servicesData } from '../../data/mock';

const ServiceGrid = () => {
    return (
        <section className="py-24 max-[426px]:py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-violet-600/10 border border-violet-600/20 text-violet-600 font-bold text-sm tracking-widest uppercase mb-4">Expertise & Growth</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                        Digital Solutions for Every <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Business Need</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        From strategy to execution, we provide end-to-end digital services designed to scale your brand and maximize ROI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;

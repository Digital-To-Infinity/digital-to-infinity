import { Zap, Shield, Rocket } from 'lucide-react';

const ServiceBenefits = () => {
    const benefits = [
        { icon: Zap, title: "Fast Delivery", desc: "We move at the speed of your business, ensuring rapid deployment and results." },
        { icon: Shield, title: "Premium Quality", desc: "No compromises on quality. We follow industry best practices for every project." },
        { icon: Rocket, title: "Scalable Results", desc: "Our solutions are built to grow with you. Scale your business without limits." }
    ];

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
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
    );
};

export default ServiceBenefits;

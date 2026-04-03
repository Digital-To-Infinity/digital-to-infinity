import { MessageCircle } from 'lucide-react';

const ServiceCTA = ({ service, setContactOpen }) => {
    if (!service) return null;

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[3rem] p-12 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight relative z-10">
                        Ready to scale your <br /> {service.title}?
                    </h2>
                    <p className="text-violet-100 text-xl mb-12 max-w-2xl mx-auto relative z-10">
                        Join over 50+ businesses that have transformed their digital presence with our expert strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <button
                            onClick={() => setContactOpen(true)}
                            className="px-10 py-4 bg-white text-violet-600 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all hover:scale-105 cursor-pointer"
                        >
                            Get a Free Audit
                        </button>
                        <a
                            href="https://wa.me/919594222334"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/5 border border-white/10 flex items-center gap-3 text-white font-bold text-lg hover:bg-white hover:text-green-500 rounded-2xl transition-all cursor-pointer"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCTA;

import { Rocket } from 'lucide-react';

const ServiceCTA = ({ onContactClick }) => {
    return (
        <section className="py-24 max-[426px]:py-14">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 max-[426px]:p-8 max-[376px]:p-6 text-center text-white shadow-2xl shadow-violet-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                    <h2 className="text-3xl md:text-5xl max-[376px]:text-2xl max-[321px]:text-xl font-bold mb-6 max-[376px]:mb-3 relative z-10">Ready to Grow Online?</h2>
                    <p className="text-violet-100 text-lg max-[376px]:text-base max-[321px]:text-sm mb-8 max-[376px]:mb-6 max-w-2xl mx-auto relative z-10">Don't let your competitors take your customers. Start your digital transformation today.</p>
                    <button onClick={onContactClick} className="bg-white text-violet-600 hover:bg-gray-50 px-8 py-3 rounded-xl font-bold text-lg max-[426px]:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 relative z-10 cursor-pointer">
                        <Rocket className="w-5 max-[426px]:w-4 h-5 max-[426px]:h-4" /> Get Started Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServiceCTA;

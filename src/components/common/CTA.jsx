import { Rocket } from 'lucide-react';
import ReactPixel from 'react-facebook-pixel';

const AboutCTA = ({ setContactOpen }) => {
    return (
        <section className="py-24 max-[426px]:py-14">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 max-[426px]:p-8 max-[376px]:p-6 text-center text-white shadow-2xl shadow-violet-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y/2" />
                    <h2 className="text-3xl md:text-5xl max-[426px]:text-2xl max-[321px]:text-base font-bold mb-6 max-[376px]:mb-3 relative z-10">Ready to Scale to Infinity?</h2>
                    <p className="text-violet-100 text-lg max-[376px]:text-base max-[321px]:text-sm mb-8 max-[376px]:mb-6 max-w-2xl mx-auto relative z-10">Let's build a strategy that puts your brand ahead of the curve. Schedule your free audit today.</p>
                    <button
                        onClick={() => {
                            setContactOpen(true);
                            ReactPixel.track('InitiateCheckout', { content_name: 'CTA Journey Start' });
                        }}
                        className="bg-white text-violet-600 hover:bg-gray-50 px-8 py-3 rounded-xl font-bold text-lg max-[426px]:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 relative z-10 cursor-pointer">
                        <Rocket className="w-5 h-5 max-[426px]:w-4 h-5 max-[426px]:h-4" /> Start Your Journey
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;

import { CheckCircle2 } from 'lucide-react';

const AboutMission = () => {
    return (
        <section className="py-24 max-[426px]:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 max-[769px]:gap-12 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl rotate-3 opacity-20 transform scale-105" />
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                            alt="Team working"
                            className="relative rounded-2xl shadow-2xl object-cover h-[500px] max-[769px]:h-[400px] max-[426px]:h-[350px] max-[321px]:h-[300px] w-full"
                            loading="lazy"
                        />
                    </div>
                    <div className="space-y-8 max-[769px]:space-y-6">
                        <h2 className="text-3xl max-[769px]:text-2xl font-bold">Our Mission is Simple: <br /><span className="text-violet-600">Your Success is Our Fuel.</span></h2>
                        <p className="text-gray-600 text-lg max-[769px]:text-base leading-relaxed max-[769px]:leading-normal">We started Digital Infinity because we were tired of agencies that promised the moon but delivered generic reports. We believe in <strong>radical transparency</strong> and results that you can actually see in your bank account.</p>
                        <div className="space-y-4">
                            {["Data-Driven decisions, not guesswork.", "Creative strategies that actually convert.", "Full transparency in reporting.", "A partnership, not just a service."].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 max-[769px]:w-5 max-[321px]:w-4 h-6 max-[769px]:h-5 max-[321px]:h-4 text-violet-600 shrink-0" />
                                    <span className="text-gray-700 font-medium max-[769px]:text-base max-[321px]:text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;

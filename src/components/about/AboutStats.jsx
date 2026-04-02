import { Wallet, TrendingUp, Smile, Trophy } from 'lucide-react';
import StatCard from '../home/StatCard';

const AboutStats = () => {
    return (
        <section className="py-20 max-[426px]:py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-950 skew-y-1 transform origin-top-left scale-110" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatCard icon={Wallet} value={10} prefix="₹" suffix="L+" label="Ad Spend Managed" delay={0} />
                    <StatCard icon={TrendingUp} value={30} prefix="₹" suffix="L+" label="Revenue Generated" delay={0.2} />
                    <StatCard icon={Smile} value={150} suffix="+" label="Happy Clients" delay={0.4} />
                    <StatCard icon={Trophy} value={120} suffix="%" label="Growth Rate" delay={0.6} />
                </div>
            </div>
        </section>
    );
};

export default AboutStats;

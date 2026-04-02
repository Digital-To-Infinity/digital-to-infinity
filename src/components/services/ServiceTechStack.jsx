import TechMarquee from './TechMarquee';

const ServiceTechStack = () => {
    return (
        <section className="py-20 max-[426px]:py-12 bg-slate-950 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
                <p className="text-sm font-bold text-white uppercase tracking-[0.2em]">Powered By Modern Tech</p>
            </div>
            <TechMarquee />
        </section>
    );
};

export default ServiceTechStack;

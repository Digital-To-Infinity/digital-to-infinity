import Antigravity from '../common/Antigravity';

const AboutHero = () => {
    return (
        <section className="relative pt-32 max-[426px]:pt-28 pb-20 max-[426px]:pb-12 overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0 opacity-60">
                <Antigravity />
            </div>
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-violet-50 text-violet-600 text-sm font-semibold mb-6">
                    Who We Are
                </span>
                <h1 className="text-6xl max-[769px]:text-5xl max-[426px]:text-3xl max-[376px]:text-2xl max-[321px]:text-xl font-extrabold tracking-tight mb-6">
                    We Don't Just Run Ads. <br />
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                        We Ignite Infinite Growth.
                    </span>
                </h1>
                <p className="text-xl max-[426px]:text-lg max-[321px]:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed max-[426px]:leading-normal">
                    Digital Infinity is a new-age performance marketing agency bridging the gap between data-driven strategy and scroll-stopping creativity.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;

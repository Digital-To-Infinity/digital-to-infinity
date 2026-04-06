import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, BookOpen, MapPin, BarChart3, Wallet, Check } from "lucide-react";

const categories = [
    { name: "All", icon: TrendingUp },
    { name: "Market Insights", icon: BarChart3 },
    { name: "Branding Guide", icon: BookOpen },
    { name: "Investment", icon: Wallet },
    { name: "Lifestyle", icon: MapPin },
];

export default function BlogFilters({ activeCategory, setActiveCategory }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategoryChange = useCallback((category) => {
        const newParams = new URLSearchParams(searchParams);
        if (category === "All") {
            newParams.delete("category");
        } else {
            newParams.set("category", category);
        }

        setActiveCategory(category);
        setSearchParams(newParams);
    }, [searchParams, setSearchParams, setActiveCategory]);


    return (
        <section className="bg-white py-4 max-[426px]:py-2 relative z-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Compact Filter Scroll */}
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 sm:pb-0 w-full sm:w-auto">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.name;
                            const Icon = cat.icon;

                            return (
                                <button
                                    key={cat.name}
                                    onClick={() => handleCategoryChange(cat.name)}
                                    className={`relative flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 outline-none cursor-pointer group ${isActive
                                        ? "text-white"
                                        : "text-slate-500 hover:text-black hover:bg-slate-50"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilterPill"
                                            className="absolute inset-0 bg-violet-600 rounded-full z-0"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                        />
                                    )}

                                    <span className="relative z-10 flex items-center gap-2">
                                        <Icon
                                            size={16}
                                            className={`transition-colors ${isActive ? "text-white" : "text-violet-500 group-hover:scale-110 duration-300"}`}
                                        />
                                        {cat.name}
                                        {isActive && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="ml-0.5"
                                            >
                                                <Check size={14} strokeWidth={3} />
                                            </motion.span>
                                        )}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, BookOpen, MapPin, BarChart3, Wallet, Check } from "lucide-react";
import { blogPosts } from "../../data/blogData";

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

    const getCount = (cat) => {
        if (cat === "All") return blogPosts.length;
        return blogPosts.filter(post => post.category === cat).length;
    };

    return (
        <section className="bg-white py-4 border-b border-slate-100 relative z-20">
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
                                    className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 outline-none cursor-pointer group ${
                                        isActive 
                                        ? "text-white" 
                                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilterPill"
                                            className="absolute inset-0 bg-violet-600 rounded-xl z-0 shadow-lg shadow-violet-600/20"
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

                    {/* Results Counter */}
                    <div className="flex items-center gap-3 px-4 py-2 bg-slate-50/50 rounded-xl border border-slate-100 hidden md:flex">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200" />
                            ))}
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-tight text-slate-400">
                            <span className="text-violet-600 font-black">{getCount(activeCategory)}</span> Articles available
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

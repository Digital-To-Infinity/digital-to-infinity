import BlogCard from "./BlogCard";
import { blogPosts } from "../../data/blogData";
import { SearchX, ArrowRight, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const BlogGrid = ({ searchQuery, setSearchQuery, activeCategory, setActiveCategory }) => {

    // Filtering logic
    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <section id="blog-posts" className="bg-white py-16 max-[426px]:py-8 relative overflow-hidden">
            {/* Animated Background Accents */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 45, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, -45, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[90px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <AnimatePresence mode="wait">
                    {filteredPosts.length > 0 ? (
                        <motion.div
                            key={activeCategory + searchQuery}
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit={{ opacity: 0, y: 20 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                        >
                            {filteredPosts.map((post, index) => (
                                <BlogCard key={post.id} post={post} index={index} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center justify-center py-12 text-center"
                        >
                            <div className="relative mb-10">
                                <div className="absolute inset-0 bg-violet-600/10 rounded-full blur-2xl animate-pulse" />
                                <div className="relative w-28 h-28 bg-white border border-slate-100 rounded-[2.5rem] flex items-center justify-center shadow-xl shadow-black/5">
                                    <SearchX className="w-12 h-12 text-violet-400" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4">No results found</h3>
                            <p className="text-slate-600 font-medium max-w-sm mb-12 opacity-60 leading-relaxed">
                                We couldn't find any articles matching "{searchQuery || activeCategory}". Try broadening your search or choosing another category.
                            </p>

                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All");
                                }}
                                className="group relative flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-2xl font-black hover:bg-violet-600 transition-all duration-500 shadow-xl shadow-black/10 hover:shadow-violet-600/20 mb-20 cursor-pointer"
                            >
                                Reset All Filters
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="w-full pt-20 border-t border-slate-100">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                                        <Flame size={20} className="animate-pulse" />
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900">
                                        Most Popular <span className="text-violet-600 italic">Insights</span>
                                    </h4>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                                    {blogPosts.slice(0, 3).map((post, index) => (
                                        <BlogCard key={`popular-${post.id}`} post={post} index={index} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Load More Button */}
                {filteredPosts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center mt-20 max-[426px]:mt-12"
                    >
                        <button className="group relative cursor-pointer outline-none">
                            <div className="absolute inset-0 bg-violet-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative px-16 py-4 bg-white border-2 border-slate-100 text-slate-900 font-black rounded-[2rem] group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-500 shadow-sm overflow-hidden flex items-center gap-4">
                                <span className="relative z-10 text-[13px] uppercase tracking-[0.2em]">
                                    Load More Articles
                                </span>
                                <div className="relative w-7 h-7 rounded-full bg-violet-600/10 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors duration-500">
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default BlogGrid;

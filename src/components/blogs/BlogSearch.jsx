import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogSearch = ({ searchQuery, setSearchQuery }) => {
    return (
        <section className="bg-white pt-10 pb-6 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative group"
                >
                    {/* Glowing background effect on focus */}
                    <div className="absolute inset-0 bg-violet-600/5 rounded-2xl blur-xl group-focus-within:bg-violet-600/10 transition-colors duration-500" />
                    
                    <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-full p-2 focus-within:border-violet-600/30 focus-within:bg-white focus-within:shadow-2xl focus-within:shadow-violet-600/5 transition-all duration-300">
                        {/* Icon */}
                        <div className="p-3 text-slate-500 group-focus-within:text-violet-600 transition-colors">
                            <Search size={22} strokeWidth={2.5} />
                        </div>

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search for articles, strategies, or insights..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-none outline-none text-black placeholder:text-slate-500 font-medium py-1 px-2 text-lg"
                        />

                        {/* Clear Functionality */}
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery("")}
                                className="px-4 py-2 mr-2 text-sm font-bold uppercase text-slate-500 hover:text-violet-600 transition-colors cursor-pointer"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSearch;

import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogSearch = ({ searchQuery, setSearchQuery }) => {
    return (
        <section className="bg-white pt-10 pb-6 relative z-10">
            <div className="max-w-3xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative group"
                >
                    {/* Glowing background effect on focus */}
                    <div className="absolute inset-0 bg-violet-600/5 rounded-2xl blur-xl group-focus-within:bg-violet-600/10 transition-colors duration-500" />
                    
                    <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-2xl p-2 focus-within:border-violet-600/30 focus-within:bg-white focus-within:shadow-2xl focus-within:shadow-violet-600/5 transition-all duration-300">
                        {/* Icon */}
                        <div className="p-3 text-slate-400 group-focus-within:text-violet-600 transition-colors">
                            <Search size={22} strokeWidth={2.5} />
                        </div>

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search for articles, strategies, or insights..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 font-medium py-3 px-2 text-lg"
                        />

                        {/* Clear Functionality */}
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery("")}
                                className="px-4 py-2 mr-2 text-sm font-black uppercase text-slate-400 hover:text-violet-600 transition-colors cursor-pointer"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {/* Quick helper text below search */}
                    <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>Marketing</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                        <span>SEO</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                        <span>Branding</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                        <span>Growth</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSearch;

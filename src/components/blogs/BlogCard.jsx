import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Share2, Check } from "lucide-react";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.21, 1.11, 0.81, 0.99]
        }
    }
};

const BlogCard = ({ post, index }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `${window.location.origin}/blogs/${post.slug}`;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.article
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group/card relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-violet-600/30 transition-all duration-700"
        >
            {/* Image Section */}
            <div className="relative aspect-[16/11] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-[1.5s] ease-out"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                {/* Glass Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <div className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/40 flex items-center justify-center">
                        <span className="text-[11px] font-black text-violet-600 uppercase tracking-[0.1em]">
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Share Utility */}
                <button
                    onClick={handleCopyLink}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-slate-500 hover:text-violet-600 transition-all duration-300 group/share overflow-hidden cursor-pointer"
                    title="Copy Article Link"
                >
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.div
                                key="check"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Check size={18} className="text-emerald-500" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="share"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-2"
                            >
                                <Share2 size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Content Section */}
            <div className="p-4 relative">
                <h2 className="text-2xl font-black text-black mb-4 leading-[1.2] group-hover/card:text-violet-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                </h2>

                <p className="text-slate-600 text-[15px] mb-6 line-clamp-3 font-medium leading-relaxed">
                    {post.excerpt}
                </p>

                {/* Meta Section */}
                <div className="pt-4 border-t border-slate-200 space-y-6">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center group/meta">
                            <div className="w-8 h-8 rounded-xl bg-violet-600/5 flex items-center justify-center text-violet-600 group-hover/meta:bg-violet-600 group-hover/meta:text-white transition-colors duration-500 mr-3">
                                <Calendar className="w-4 h-4" />
                            </div>
                            <span className="text-[12px] font-bold text-slate-600 uppercase tracking-wider">
                                {post.date}
                            </span>
                        </div>
                        <div className="flex items-center group/meta">
                            <div className="w-8 h-8 rounded-xl bg-violet-600/5 flex items-center justify-center text-violet-600 group-hover/meta:bg-violet-600 group-hover/meta:text-white transition-colors duration-500 mr-3">
                                <Clock className="w-4 h-4" />
                            </div>
                            <span className="text-[12px] font-bold text-slate-600 uppercase tracking-wider">
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <Link
                        to={`/blogs/${post.slug}`}
                        className="group/btn relative w-full flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-700 text-white py-4 px-6 rounded-2xl font-black transition-all duration-500 overflow-hidden"
                    >
                        <span className="relative z-10 text-sm uppercase tracking-widest">Read Article</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;

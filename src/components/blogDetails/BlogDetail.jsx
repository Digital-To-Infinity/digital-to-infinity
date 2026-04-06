import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogData";
import BlogSidebar from "./BlogSidebar";
import BlogMainContent from "./BlogMainContent";
import CompanyPromo from "./CompanyPromo";

const BlogDetail = ({ post }) => {
    // Related posts
    const relatedBlogs = blogPosts
        .filter(p => p.slug !== post.slug && p.category === post.category)
        .slice(0, 3);

    return (
        <article className="relative min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full bg-slate-50/50 py-16 max-[769px]:py-8 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                        <div className="lg:w-1/2 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-violet-600 mb-6 px-4 py-1.5 rounded-full bg-violet-600/10">
                                    {post.category}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight uppercase"
                            >
                                {post.title}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-wrap items-center gap-6 py-4 max-[426px]:gap-4"
                            >
                                {/* Author Block */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-3 max-[426px]:w-full max-[426px]:bg-white max-[426px]:p-5 max-[426px]:rounded-[2rem] max-[426px]:border max-[426px]:border-slate-100 max-[426px]:shadow-[0_15px_35px_rgba(0,0,0,0.03)] group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center text-sm font-black shadow-lg shadow-violet-500/20 shrink-0 group-hover:rotate-12 transition-transform duration-300">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-black text-slate-900 uppercase tracking-wide">
                                            {post.author}
                                        </span>
                                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                            {post.authorRole || 'Team Member'}
                                        </span>
                                    </div>
                                    <div className="ml-auto hidden max-[426px]:block">
                                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                                            <ShieldCheck size={14} className="text-green-600" />
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="h-4 w-px bg-slate-200 hidden sm:block" />

                                {/* Metadata Grid */}
                                <div className="flex flex-wrap items-center gap-6 max-[426px]:grid max-[426px]:grid-cols-2 max-[426px]:w-full max-[426px]:gap-4">
                                    <div className="flex flex-col max-[426px]:bg-white max-[426px]:p-5 max-[426px]:rounded-[2rem] max-[426px]:border max-[426px]:border-slate-100 max-[426px]:shadow-[0_15px_35px_rgba(0,0,0,0.03)]">
                                        <div className="flex items-center gap-2 mb-1.5 hidden max-[426px]:flex">
                                            <Calendar size={12} className="text-violet-600" />
                                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Published</span>
                                        </div>
                                        <span className="text-xs font-bold text-slate-900 uppercase tracking-widest max-[426px]:text-[11px]">{post.date}</span>
                                    </div>

                                    <div className="h-4 w-px bg-slate-200 hidden sm:block" />

                                    <div className="flex flex-col max-[426px]:bg-white max-[426px]:p-5 max-[426px]:rounded-[2rem] max-[426px]:border max-[426px]:border-slate-100 max-[426px]:shadow-[0_15px_35px_rgba(0,0,0,0.03)]">
                                        <div className="flex items-center gap-2 mb-1.5 hidden max-[426px]:flex">
                                            <Clock size={12} className="text-violet-600" />
                                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Read Time</span>
                                        </div>
                                        <span className="text-xs font-bold text-slate-900 uppercase tracking-widest max-[426px]:text-[11px]">{post.readTime}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <main className="max-w-7xl mx-auto p-12 max-[426px]:p-6 max-[321px]:p-4 text-left">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left: Table of Contents */}
                    <div className="hidden lg:block w-64 shrink-0 sticky top-32">
                        <BlogSidebar content={post.content} />
                    </div>

                    {/* Middle: Main Content */}
                    <div className="flex-1 min-w-0">
                        <BlogMainContent content={post.content} tags={post.tags} />
                    </div>

                    {/* Right: Company Promotion */}
                    <div className="hidden xl:block w-72 shrink-0 sticky top-32">
                        <CompanyPromo />
                    </div>
                </div>
            </main>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
                <section className="py-20 max-[426px]:py-10 bg-slate-50/50 border-t border-slate-100 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-16 max-[426px]:flex-col max-[426px]:items-start max-[426px]:gap-8 max-[426px]:mb-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="max-w-xl text-left"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-1.5 bg-violet-600 rounded-full" />
                                    <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.3em]">More Insights</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                                    Continue <span className="text-violet-600">Reading</span>
                                </h2>
                                <p className="text-slate-500 font-bold uppercase text-lg tracking-[0.1em]">
                                    Handpicked articles on <span className="text-slate-900 border-b-2 border-violet-600/30">{post.category}</span>
                                </p>
                            </motion.div>

                            <Link
                                to="/blogs"
                                className="hidden md:flex items-center justify-center px-8 py-4 bg-white text-slate-900 text-[13px] font-black uppercase tracking-widest transition-all rounded-2xl border-2 border-slate-100 hover:border-violet-600 hover:text-violet-600 shadow-sm hover:shadow-xl hover:shadow-violet-600/10 cursor-pointer"
                            >
                                View All Articles
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {relatedBlogs.map((relatedPost, idx) => (
                                <motion.div
                                    key={relatedPost.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-violet-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[9px] font-black text-violet-600 uppercase tracking-widest">
                                                {relatedPost.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 text-left">
                                        <h3 className="text-xl font-black text-slate-900 mb-6 line-clamp-2 leading-[1.3] group-hover:text-violet-600 transition-colors uppercase tracking-tight">
                                            <Link to={`/blogs/${relatedPost.slug}`}>{relatedPost.title}</Link>
                                        </h3>
                                        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{relatedPost.date}</span>
                                            <Link to={`/blogs/${relatedPost.slug}`} className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                                                <ArrowLeft className="rotate-180 w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile View All Button */}
                        <div className="mt-12 md:hidden">
                            <Link
                                to="/blogs"
                                className="flex items-center justify-center px-8 py-4 bg-white text-slate-900 text-[13px] font-black uppercase tracking-widest transition-all rounded-2xl border-2 border-slate-100 hover:border-violet-600 hover:text-violet-600 shadow-sm"
                            >
                                View All Articles
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </article>
    );
};

export default BlogDetail;

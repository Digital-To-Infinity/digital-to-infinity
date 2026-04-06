import { useState } from 'react';
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import BlogsHero from "../components/blogs/BlogsHero";
import CTA from "../components/common/CTA";
import BlogFilters from "../components/blogs/BlogFilters";
import BlogGrid from "../components/blogs/BlogGrid";
import BlogSearch from "../components/blogs/BlogSearch";

const Blogs = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="min-h-screen selection:bg-violet-500/30">
            <Navbar />
            <main>
                <BlogsHero />

                <BlogSearch
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <BlogFilters
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <BlogGrid
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <CTA />
            </main>
            <Footer />
        </div>
    )
}

export default Blogs;

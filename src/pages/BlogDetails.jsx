import { useParams, Navigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import BlogDetail from "../components/blogDetails/BlogDetail";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CTA from "../components/common/CTA";

const BlogDetailsPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blogs" replace />;
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-20">
                <BlogDetail post={post} />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetailsPage;
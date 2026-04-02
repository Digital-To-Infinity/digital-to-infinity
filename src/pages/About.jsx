import { useState, lazy, Suspense } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { motion } from 'framer-motion';
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutMission from "../components/about/AboutMission";
import AboutWhyChooseUs from "../components/about/AboutWhyChooseUs";
import AboutPartner from "../components/about/AboutPartner";
import AboutServices from "../components/about/AboutServices";
import CTA from "../components/common/CTA";

// OPTIMIZATION: Lazy load the popup
const ContactPopup = lazy(() => import("../components/contact/ContactPopup"));

const About = () => {
    const [isContactOpen, setContactOpen] = useState(false);

    return (
        <>
            <Navbar />
            <motion.div
                onViewportEnter={() => ReactPixel.track('ViewContent', { content_name: 'About Us Page' })}
                className="min-h-screen bg-white font-sans text-gray-900"
            >
                <AboutHero />
                <AboutStats />
                <AboutMission />
                <AboutWhyChooseUs />
                <AboutPartner />
                <AboutServices />
                <CTA setContactOpen={setContactOpen} />
            </motion.div>
            <Footer />

            {/* RENDER POPUP COMPONENT (Lazy Loaded) */}
            <Suspense fallback={null}>
                <ContactPopup
                    isOpen={isContactOpen}
                    onClose={() => setContactOpen(false)}
                />
            </Suspense>
        </>
    );
};

export default About;
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/services/ServicesSection";
import StarterPackSection from "../components/plans/StarterPackSection";
import StatsSection from "../components/home/StatsSection";
import PricingSection from "../components/pricing/PricingSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/common/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <StarterPackSection />  
            <StatsSection />
            <PricingSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home;
import { useState } from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import ServiceHero from "../components/services/ServiceHero";
import ServiceGrid from "../components/services/ServiceGrid";
import ServiceTechStack from "../components/services/ServiceTechStack";
import ServiceCTA from "../components/services/ServiceCTA";
import ContactPopup from "../components/contact/ContactPopup";

const Services = () => {
    const [isContactOpen, setContactOpen] = useState(false);

    return (
        <>
            <Navbar />
            <div className="font-sans text-gray-900 selection:bg-violet-500/30">
                <div className="bg-slate-950 relative">
                    <ServiceHero />
                </div>
                <div className="bg-white">
                    <ServiceGrid />
                </div>
                <ServiceTechStack />
                <ServiceCTA onContactClick={() => setContactOpen(true)} />
            </div>
            <Footer />

            <ContactPopup
                isOpen={isContactOpen}
                onClose={() => setContactOpen(false)}
            />
        </>
    )
}

export default Services;
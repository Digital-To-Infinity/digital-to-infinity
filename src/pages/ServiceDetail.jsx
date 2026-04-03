import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ContactPopup from '../components/contact/ContactPopup';
import { servicesData } from '../data/mock';
import ServiceHero from '../components/serviceDetail/ServiceHero';
import ServiceStack from '../components/serviceDetail/ServiceStack';
import ServiceBenefits from '../components/serviceDetail/ServiceBenefits';
import ServiceCTA from '../components/serviceDetail/ServiceCTA';
import SocialMediaTeam from '../components/serviceDetail/SocialMediaTeam';
import SocialMediaStrategy from '../components/serviceDetail/SocialMediaStrategy';
import BrandingShowcase from '../components/serviceDetail/BrandingShowcase';
import BrandingProcess from '../components/serviceDetail/BrandingProcess';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isContactOpen, setContactOpen] = useState(false);
    const [service, setService] = useState(null);

    useEffect(() => {
        const foundService = servicesData.find(s => s.slug === slug);
        if (foundService) {
            setService(foundService);
        } else {
            navigate('/services');
        }
    }, [slug, navigate]);

    if (!service) return null;

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-violet-500/30">
            <Navbar />
            
            <ServiceHero 
                service={service} 
                setContactOpen={setContactOpen} 
            />

            <ServiceStack 
                service={service} 
                setContactOpen={setContactOpen} 
            />

            {service.slug === 'social-media-marketing' && (
                <>
                    <SocialMediaStrategy />
                    <SocialMediaTeam setContactOpen={setContactOpen} />
                </>
            )}

            {service.slug === 'branding-creative-design' && (
                <>
                    <BrandingShowcase setContactOpen={setContactOpen} />
                    <BrandingProcess setContactOpen={setContactOpen} />
                </>
            )}

            <ServiceBenefits />

            <ServiceCTA 
                service={service} 
                setContactOpen={setContactOpen} 
            />

            <Footer />

            <ContactPopup 
                isOpen={isContactOpen}
                onClose={() => setContactOpen(false)}
            />
        </div>
    );
};

export default ServiceDetail;

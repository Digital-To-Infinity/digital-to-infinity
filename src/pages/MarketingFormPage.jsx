import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MarketingPlanForm from '../components/pricing/MarketingPlanForm';

const MarketingFormPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <Navbar />
            <MarketingPlanForm />
            <Footer />
        </div>
    );
};

export default MarketingFormPage;

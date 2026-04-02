import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import FreeMarketingPlan from '../components/pricing/FreeMarketingPlan';

const FreeMarketingPlanPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <Navbar />
            <FreeMarketingPlan />
            <Footer />
        </div>
    );
};

export default FreeMarketingPlanPage;

import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import AboutUsIntroduction from './AboutUsIntroduction';
import CertificateBanner from './CertificateBanner';
import EducationForEveryone from './EducationForEveryone';
import Faq from './Faq';
import OurInstructors from './OurInstructors';
import ProjectsVideo from './ProjectsVideo';

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <AboutUsIntroduction />
            <ProjectsVideo />
            <EducationForEveryone />
            <OurInstructors />
            <Faq />
            <CertificateBanner />
        </div>
    );
};

export default AboutUs;
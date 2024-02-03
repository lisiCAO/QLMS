import React from 'react';
import AboutUsSection from './aboutUs/AboutUsSection';
import FeaturesSection from './aboutUs/FeatureSection';
import ContactUsSection from './aboutUs/ContactUsSection';
import { Navbar } from 'react-bootstrap';
import Footer from './aboutUs/AboutUsFooter';

function AboutUs() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" />
      <AboutUsSection />
      <FeaturesSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default AboutUs;

import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/About';
// import SegmentNavigator from '../components/home/SegmentNavigator';
import CoursesSection from '../components/home/CoursesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import ExploreMoreSection from '../components/home/ExploreMoreSection';
import DownloadAppSection from '../components/home/DownloadAppSection';
import CTASection from '../components/home/CTASection';
import ContactSection from '../components/home/ContactUs';
import FAQSection from '../components/home/FAQSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUsSection />
      {/* <ExploreMoreSection /> */}
      <DownloadAppSection />
      <FAQSection />
      {/* <ContactSection /> */}
      <CTASection />
      {/* <SegmentNavigator /> */}
    </div>
  );
}
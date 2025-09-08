import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/common/Navbar';
import { SocialSidebar } from '@/components/common/SocialSidebar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/common/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 'hero', title: 'Hero' },
    { id: 'about', title: 'About' },
    { id: 'stats', title: 'Stats' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' }
  ];

  const scrollToSection = (index) => {
    const section = document.getElementById(sections[index].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.floor((scrollPosition + windowHeight / 2) / windowHeight); // Adjust for more accurate section detection
      setCurrentSection(Math.min(newSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <>
      <Helmet>
        <title>VOF Studio - Professional Photography & Photoshoot Services</title>
        <meta name="description" content="Professional photography studio specializing in creative photoshoots, architectural photography, and visual storytelling. Bringing your vision to life through innovative photography." />
        <meta property="og:title" content="VOF Studio - Professional Photography & Photoshoot Services" />
        <meta property="og:description" content="Professional photography studio specializing in creative photoshoots, architectural photography, and visual storytelling. Bringing your vision to life through innovative photography." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden pt-16">
        <Navbar />
        <SocialSidebar />
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <StatsSection />
        <PortfolioSection />
        <ContactSection />
        <Footer scrollToSection={scrollToSection} />
        <Toaster />
      </div>
    </>
  );
}

export default App;
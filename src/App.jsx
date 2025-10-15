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
  <title>VOF Design Studio - Interior Design, Architecture & Custom Furniture</title>
  <meta 
    name="description" 
    content="VOF Design Studio specializes in modern interior design, innovative architecture, and bespoke furniture. Transforming spaces into elegant, functional, and timeless designs tailored to your lifestyle." 
  />
  
  {/* Open Graph / Facebook */}
  <meta 
    property="og:title" 
    content="VOF Design Studio - Interior Design, Architecture & Custom Furniture" 
  />
  <meta 
    property="og:description" 
    content="Explore VOF Design Studio’s expertise in interiors, architecture, and furniture design. We create luxurious, functional spaces that reflect your personality and vision." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vofdesignstudio.com/" />
  <meta property="og:image" content="https://yourwebsiteurl.com/preview-image.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta 
    name="twitter:title" 
    content="VOF Design Studio - Interior Design, Architecture & Custom Furniture" 
  />
  <meta 
    name="twitter:description" 
    content="Modern interiors, innovative architecture, and elegant furniture — all designed by VOF Design Studio to elevate your space." 
  />
  <meta name="twitter:image" content="https://yourwebsiteurl.com/preview-image.jpg" />
</Helmet>


      <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
  <Navbar />
  
  {/* Hide sidebar on mobile */}
  <div className="hidden md:block">
    <SocialSidebar />
  </div>

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
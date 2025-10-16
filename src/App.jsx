import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/common/Navbar";
import { SocialSidebar } from "@/components/common/SocialSidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/common/Footer";
import  Services  from './components/sections/ServicesSection';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: "hero", title: "Hero" },
    { id: "about", title: "About" },
    { id: "stats", title: "Stats" },
    { id: "portfolio", title: "Portfolio" },
    { id: "contact", title: "Contact" },
  ];

  const scrollToSection = (index) => {
    const section = document.getElementById(sections[index].id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.floor(
        (scrollPosition + windowHeight / 2) / windowHeight
      );
      setCurrentSection(Math.min(newSection, sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  return (
    <Router>
      <Helmet>
        <title>
          VOF Design Studio - Interior Design, Architecture & Custom Furniture
        </title>
        <meta
          name="description"
          content="VOF Design Studio specializes in modern interior design, innovative architecture, and bespoke furniture. Transforming spaces into elegant, functional, and timeless designs tailored to your lifestyle."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
        <Navbar />
        <Routes>
          {/* MAIN SITE */}
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />

          {/* SERVICES PAGE */}
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

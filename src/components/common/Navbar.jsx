import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { label: "HOME", id: "hero" },
    { label: "ABOUT US", id: "about" },
    { label: "STATS", id: "stats" },
    { label: "PORTFOLIO", id: "portfolio" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let current = activeSection;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, activeSection]);

  return (
    <>
      {/* ✅ NAVBAR */}
<nav className="bg-black w-[100%] sm:w-[70%] fixed top-0 left-0 right-0 z-50 backdrop-blur-lg text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left - Logo */}
         <motion.div
  className="text-2xl font-light tracking-wider cursor-pointer flex-shrink-0 text-center"
 style={{ fontFamily: "'CyrillicBodoniCondensed', serif" }}
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  onClick={() => handleNavClick("hero")}
>
  <span  style={{
      transform: 'scaleY(1.4) scaleX(1.1)',  
      display: 'inline-block',
    }} className="text-white block">VOF</span>
  <span className="text-white text-[8px] block -mt-3">DESIGN STUDIO</span>
</motion.div>


          {/* Center - Navigation Tabs */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-light tracking-wider transition-colors relative group ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.button>
            ))}
          </div>

          {/* Right - Contact + Quote */}
          <div className="hidden md:flex items-center flex-shrink-0">
          <motion.button
                    
                     className="w-4 h-4 border border-gray-400 flex items-center justify-center hover:border-gray-800 transition-colors"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }}
                   >
                     <div className="w-2 h-2 bg-gray-800"></div>
                   </motion.button>
       
            <Button
              onClick={() => setIsModalOpen(true)}
              className="text-gray-400 hover:text-white text-sm font-semibold px-4 py-2"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 border-t border-gray-800 backdrop-blur-lg"
            >
              <div className="flex flex-col py-4 space-y-4 px-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-sm font-light tracking-wider ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gray-100 text-black py-2 px-4 rounded-md text-sm font-semibold"
                >
                  Get Free Quote
                </button>
               
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ✅ MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white text-black p-6 rounded-lg shadow-xl w-11/12 max-w-md relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold mb-4 text-center">
                Get Free Quote
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsModalOpen(false);
                  alert("Thank you! We'll contact you soon.");
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <input
                  type="email"
                  placeholder="Email or Phone"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

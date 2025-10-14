import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection({ scrollToSection }) {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with slow cinematic zoom */}
      <motion.img
        alt="Modern architectural house with pool at night"
        src="https://res.cloudinary.com/do5dyebav/image/upload/v1760454944/VOF/home-page/FLora_s_Hillside_Villa_35_page-0028_c8dqev.jpg"
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-gray-900/40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white">
       {/* <motion.div
  className="cursor-pointer flex-shrink-0 text-center"
  style={{ fontFamily: 'CyrillicBodoniCondensed' }}
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  onClick={() => handleNavClick("hero")}
>
  <span
    className="text-white text-7xl block leading-none"
    style={{
      transform: 'scaleY(1.1) scaleX(0.8)',  
      display: 'inline-block',
    }}
  >
    VOF
  </span>
  <span className="text-white text-2xl block mt-1 tracking-[0.15em]">
    DESIGN STUDIO
  </span>
</motion.div> */}

        {/* <motion.p
          className="text-xl md:text-2xl font-light tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          PHOTOSHOOT
        </motion.p> */}
      </div>

      {/* Scroll Button */}
      <motion.button
        onClick={() => scrollToSection(1)}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.button>
    </section>
  );
}

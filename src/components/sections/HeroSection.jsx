import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection({ scrollToSection }) {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with slow cinematic zoom */}
      <motion.img
        alt="Modern architectural house with pool at night"
        src="https://res.cloudinary.com/do5dyebav/image/upload/v1760443275/VOF/2/Mr.Sunil_Project.pdf-image-000_sa1xln.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-gray-900/40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-4xl  font-bold tracking-wider mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          VOF STUDIO
        </motion.h1>
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

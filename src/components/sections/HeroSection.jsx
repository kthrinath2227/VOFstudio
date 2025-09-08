import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection({ scrollToSection }) {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center ml-20">
      <div className="absolute inset-0">
        <img
          alt="Modern architectural house with pool at night"
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757333796/photo-1599777560450-e462cffc5368_akzbvy.jpg"
        />
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>

      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-6xl md:text-8xl font-light tracking-wider mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          VOF STUDIO
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-light tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          PHOTOSHOOT
        </motion.p>
      </div>

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
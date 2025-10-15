import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export function AboutSection() {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="about" className="min-h-screen bg-gray-100 text-gray-800 relative">
      {/* 👆 Added 'relative' so absolute children are positioned within this section */}
      
      <div className="w-full max-w-6xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">
            <span className="opacity-70">WELCOME WE</span>{' '}
            <span className="font-bold">ARE VOF STUDIO</span>
          </h2>

          <p className="text-sm leading-relaxed mb-8 text-gray-900">
            At VOF Studio, we bring spaces to life through timeless and innovative interior design.
            Our mission is to craft environments that reflect your personality, enhance functionality,
            and radiate elegance. From concept to creation, we blend aesthetics with practicality,
            ensuring each space tells a story of sophistication and comfort.
          </p>

          <div className="w-16 h-2 bg-black mb-12"></div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-8">Our Design Process</h3>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-px bg-gray-800 mr-4 transition-transform duration-300 hover:rotate-60 origin-left"></div>
                <span className="text-sm text-black tracking-wider">CONCEPT & PLANNING</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-px bg-gray-800 mr-4 transition-transform ease-in-out duration-500 hover:rotate-60 origin-left"></div>
                <span className="text-sm text-black tracking-wider">DESIGN & VISUALIZATION</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-px bg-gray-800 mr-4 transform transition-transform ease-in-out duration-500 origin-left hover:rotate-60"></div>
                <span className="text-sm text-black tracking-wider">EXECUTION & STYLING</span>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="border-gray-800 text-gray-800 hover:bg-black hover:text-white"
            onClick={handleButtonClick}
          >
            View Our Portfolio
          </Button>
        </motion.div>

        {/* 🔸 Section-local bottom-right 01 */}
        <motion.div
          className="absolute bottom-10 right-10 inline-block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="hidden md:block text-9xl font-bold text-gray-300 relative z-10 select-none">
            01
          </div>

          <div className="absolute top-1/2  flex items-center z-20">
            <div className="h-px bg-gray-400 w-[140px]"></div>
            <div className="h-2 w-2 bg-black rounded-full ml-1"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

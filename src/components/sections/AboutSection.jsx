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
    <section id="about" className="min-h-screen bg-gray-100 text-gray-800 flex items-center ml-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-8">
              WELCOME WE <span className="font-normal">ARE VOF STUDIO</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations. All our projects incorporate a unique artistic image and functional solutions. Client is the soul of the project. Our main goal is to illustrate his/hers values and individuality through photography.
            </p>
            <div className="w-16 h-1 bg-gray-800 mb-12"></div>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-8">Our process</h3>
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-px bg-gray-800 mr-4"></div>
                  <span className="text-sm tracking-wider">IDEA & START</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-px bg-gray-800 mr-4"></div>
                  <span className="text-sm tracking-wider">LIGHT & PHOTOSHOOT</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-px bg-gray-800 mr-4"></div>
                  <span className="text-sm tracking-wider">EDITING & FINISH</span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
              onClick={handleButtonClick}
            >
              View Our portfolio
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-9xl font-light text-gray-300 absolute -top-16 -right-8 z-0">01</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
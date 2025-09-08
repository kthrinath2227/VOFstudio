import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

export function ContactSection() {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 relative text-white ml-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800 to-transparent"></div>
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none">
            <polygon points="200,200 400,100 600,200 500,400 300,400" />
            <polygon points="600,300 800,200 900,400 700,500 500,400" />
            <polygon points="100,600 300,500 400,700 200,800 100,700" />
            <polygon points="500,600 700,500 800,700 600,800 400,700" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl font-light tracking-wider mb-8">
              <span className="text-white">VOF</span>
              <div className="text-gray-400 text-sm mt-2 tracking-widest">STUDIO</div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="w-16 h-px bg-white mb-4"></div>
              <h3 className="text-sm tracking-wider mb-4">CALL</h3>
              <p className="text-lg">+91 8106257980</p>
            </div>

            <div>
              <div className="w-16 h-px bg-white mb-4"></div>
              <h3 className="text-sm tracking-wider mb-4">WRITE</h3>
              <p className="text-lg">CONTACT@VOFSTUDIO.COM</p>
            </div>

            <div>
              <div className="w-16 h-px bg-white mb-4"></div>
              <h3 className="text-sm tracking-wider mb-4">VISIT</h3>
              <p className="text-lg leading-relaxed">
                Botanical Garden road, Kondapur, Hyderabad, Telangana 548001
              </p>
              <button
                onClick={handleButtonClick}
                className="text-sm tracking-wider mt-4 hover:text-gray-300 transition-colors underline"
              >
                VIEW ON MAP
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

export function Footer({ scrollToSection }) {
  const { toast } = useToast();

  const handleMapButtonClick = () => {
    toast({
      title: "📍 Feature not fully implemented yet!",
      description: "This would ideally open the location in Google Maps.",
    });
  };

  return (
    <footer className="relative z-10 w-full px-4 py-8 md:px-8 lg:px-16 xl:px-24 md:ml-10 lg:ml-12">
      {/* Google Maps Section */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <button
            onClick={handleMapButtonClick}
            className="text-sm tracking-wider mt-2 hover:text-gray-500 transition-colors underline"
          >
            VIEW ON MAP
          </button>
        </div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-800 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d259.4042321483805!2d78.3548072367766!3d17.459921095836258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1760447810967!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VOF Studio Location"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-700">
        <span className="text-sm text-black text-center md:text-left">
          Made with ❤️ by{" "}
          <a
            href="https://www.thedevstechnologies.online"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            TheDevsTechnologies
          </a>
        </span>

        <button
          onClick={() => scrollToSection(0)}
          className="text-sm tracking-wider hover:text-gray-500 transition-colors flex items-center"
        >
          TO TOP
          <span className="w-2 h-2 bg-black rounded-full ml-2"></span>
        </button>
      </div>
    </footer>
  );
}

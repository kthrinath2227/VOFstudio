import React from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export function ContactSection() {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-black relative text-white overflow-hidden md:ml-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800 to-transparent"></div>
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 space-y-16">
        {/* Top Row: Logo + Contact Info */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex-shrink-0 text-6xl font-light tracking-wider mb-4 md:mb-0">
            <span className="text-white font-bold">VOF</span>
            <div className="text-gray-400 text-sm mt-2 tracking-widest">STUDIO</div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-12 text-white">
            <div>
               <div className="w-16 h-px bg-white mb-4"></div>
              <h3 className="text-sm tracking-wider mb-2">CALL</h3>
              <p className="text-lg">+91 8106257980</p>
            </div>

            <div>
               <div className="w-16 h-px bg-white mb-4"></div>
              <h3 className="text-sm tracking-wider mb-2">WRITE</h3>
              <p className="text-lg">CONTACT@VOFSTUDIO.COM</p>
            </div>

            <div>
               <div className="w-16 h-px bg-white mb-4"></div>
              <h3 className="text-sm tracking-wider mb-2">VISIT</h3>
              <p className="text-lg leading-relaxed">
                Botanical Garden road, Kondapur, Hyderabad, Telangana 548001
              </p>
              <button
                onClick={handleButtonClick}
                className="text-sm tracking-wider mt-2 hover:text-gray-300 transition-colors underline"
              >
                VIEW ON MAP
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row: Google Map */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d259.4042321483805!2d78.3548072367766!3d17.459921095836258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1760447810967!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VOF Studio Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

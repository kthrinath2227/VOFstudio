import React from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function ContactSection() {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title:
        "🚧 Map feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="contact"
      className="md:ml-20 px-10 relative bg-black text-white overflow-hidden border-t border-gray-800"
    >
      {/* ✅ Soft Floating Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: {
              value: 100, // more visible
              density: { enable: true, area: 800 },
            },
            color: { value: "#ffffff" },
            opacity: {
              value: 0.6, // brighter dots
              random: true,
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
            },
            links: { enable: false },
          },
          detectRetina: true,
        }}
      />

      {/* ✅ Content on top */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-24">
        {/* Left Logo */}
        <motion.div
          className="text-center md:text-left flex-shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="flex flex-col items-center md:items-start"
            style={{ fontFamily: "'CyrillicBodoniCondensed', serif" }}
          >
            <span
              style={{
                transform: "scaleY(1.5) scaleX(1.2)",
                display: "inline-block",
              }}
              className="text-white text-5xl md:text-6xl lg:text-7xl leading-none"
            >
              VOF
            </span>
            <span className="text-white text-[14px] sm:text-[15px] md:text-sm block mt-1 tracking-[0.3em]">
              DESIGN STUDIO
            </span>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-20 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="w-16 h-px bg-white mb-4"></div>
            <h3 className="text-sm tracking-wider font-semibold mb-2">CALL</h3>
            <p className="text-lg font-light">+91 8106257980</p>
          </div>

          <div>
            <div className="w-16 h-px bg-white mb-4"></div>
            <h3 className="text-sm tracking-wider font-semibold mb-2">WRITE</h3>
            <p className="text-lg font-light">CONTACT@VOFSTUDIO.COM</p>
          </div>

          <div>
            <div className="w-16 h-px bg-white mb-4"></div>
            <h3 className="text-sm tracking-wider font-semibold mb-2">VISIT</h3>
            <p className="text-lg font-light leading-relaxed max-w-xs">
              Botanical Garden Road, Kondapur,
              <br />
              Hyderabad, Telangana 548001
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

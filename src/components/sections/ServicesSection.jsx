import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/common/Navbar";
import { SocialSidebar } from "@/components/common/SocialSidebar";
import { ContactSection } from "@/components/sections/ContactSection";

export function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Architecture",
      description:
        "Crafting timeless spaces that balance form, function, and emotion — where every line tells a story of design clarity.",
      image:
        "https://res.cloudinary.com/do5dyebav/image/upload/v1760598632/download_zc54jd.jpg",
    },
    {
      id: 2,
      title: "Interior",
      description:
        "We design interiors that breathe warmth and sophistication, reflecting individuality through textures, tones, and light.",
      image:
        "https://res.cloudinary.com/do5dyebav/image/upload/v1760598631/Iconic_Indianness__Signature_Elements_for_Your_Living_Room_wa3xaz.jpg",
    },
    {
      id: 3,
      title: "Furniture",
      description:
        "Each piece is handcrafted with precision — merging art and utility to create bespoke furniture that defines your space.",
      image:
        "https://res.cloudinary.com/do5dyebav/image/upload/v1760598632/download_1_miqbmg.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 relative min-h-screen flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />
      <div className="hidden md:block">
        <SocialSidebar />
      </div>

      {/* ✅ Services Section */}
      <section
        id="services"
        className=" md:ml-20 flex-1 flex flex-col px-6 sm:px-10 md:px-10 lg:px-10 py-20 mt-16"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light mb-3 text-black">
          <span className="opacity-70">OUR</span>{" "}
          <span className="font-bold">SERVICES</span>
        </h2>
        <div className="w-16 h-1.5 bg-black mb-10"></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1600px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full 
                  h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] xl:h-[400px] 
                  object-cover 
                  transform transition-transform duration-700 group-hover:scale-110
                "
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white transition duration-500 group-hover:bg-black/60">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base opacity-90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Footer / Contact Section */}
      <ContactSection />
    </div>
  );
}

export default ServicesPage;

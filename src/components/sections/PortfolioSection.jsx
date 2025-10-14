import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Play, Pause } from "lucide-react";

const projects = [
  {
    id: 1,
    date: "SEPTEMBER 15, 2025",
    title: "THE MINIMAL ABODE",
    description: "A calm 3BHK retreat with neutral tones and handcrafted wooden details.",
    images: [
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760438502/VOF/Mr.Nisanth_Project_1.pdf-image-000_mflmdl.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440689/VOF/Mr.Nisanth_Project.pdf-image-001_ri0jzs.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440688/VOF/Mr.Nisanth_Project.pdf-image-002_ieq5mn.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440687/VOF/Mr.Nisanth_Project.pdf-image-004_mzxipt.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440686/VOF/Mr.Nisanth_Project.pdf-image-003_xhggom.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440685/VOF/Mr.Nisanth_Project.pdf-image-005_guvb7d.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440683/VOF/Mr.Nisanth_Project.pdf-image-006_dislix.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440682/VOF/Mr.Nisanth_Project.pdf-image-007_h3gzxt.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440680/VOF/Mr.Nisanth_Project.pdf-image-011_acsz3v.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440682/VOF/Mr.Nisanth_Project.pdf-image-008_pxloxp.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440682/VOF/Mr.Nisanth_Project.pdf-image-009_q8rmoj.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440681/VOF/Mr.Nisanth_Project.pdf-image-010_d8gryn.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440679/VOF/Mr.Nisanth_Project.pdf-image-012_zh7zzt.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440678/VOF/Mr.Nisanth_Project.pdf-image-014_kitcfl.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440678/VOF/Mr.Nisanth_Project.pdf-image-015_to97ds.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440678/VOF/Mr.Nisanth_Project.pdf-image-017_el401b.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440678/VOF/Mr.Nisanth_Project.pdf-image-014_kitcfl.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440678/VOF/Mr.Nisanth_Project.pdf-image-017_el401b.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440678/VOF/Mr.Nisanth_Project.pdf-image-016_kkw6dv.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760440678/VOF/Mr.Nisanth_Project.pdf-image-018_eodlol.jpg",
    ],
  },
  {
    id: 2,
    date: "AUGUST 30, 2025",
    title: "LUXE MODERN LIVING ROOM",
    description: "A blend of marble, brass, and warm light for cozy luxury.",
    images: [
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760441921/VOF/1/Mr.vamsi_Project.pdf-image-003_ruzfwc.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760441920/VOF/1/Mr.vamsi_Project.pdf-image-000_blcyev.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441921/VOF/1/Mr.vamsi_Project.pdf-image-001_vpej3o.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441922/VOF/1/Mr.vamsi_Project.pdf-image-004_btepm6.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441924/VOF/1/Mr.vamsi_Project.pdf-image-005_vaeefm.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441925/VOF/1/Mr.vamsi_Project.pdf-image-006_ue58gm.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441925/VOF/1/Mr.vamsi_Project.pdf-image-007_skz0i4.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441926/VOF/1/Mr.vamsi_Project.pdf-image-008_zsubxw.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441928/VOF/1/Mr.vamsi_Project.pdf-image-009_rbwhqa.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441928/VOF/1/Mr.vamsi_Project.pdf-image-010_rkr7bx.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441929/VOF/1/Mr.vamsi_Project.pdf-image-011_hbgeav.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441931/VOF/1/Mr.vamsi_Project.pdf-image-012_ciliid.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441932/VOF/1/Mr.vamsi_Project.pdf-image-013_qyw0bh.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441933/VOF/1/Mr.vamsi_Project.pdf-image-014_nhuzat.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441936/VOF/1/Mr.vamsi_Project.pdf-image-015_akpxve.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441936/VOF/1/Mr.vamsi_Project.pdf-image-016_tvqieo.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441939/VOF/1/Mr.vamsi_Project.pdf-image-018_hoxkan.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441940/VOF/1/Mr.vamsi_Project.pdf-image-019_f8gxph.jpg",
     "https://res.cloudinary.com/do5dyebav/image/upload/v1760441938/VOF/1/Mr.vamsi_Project.pdf-image-017_j2cnxg.jpg",
    ],
  },
  {
    id: 3,
    date: "JULY 10, 2025",
    title: "EARTHEN ELEGANCE RESIDENCE",
    description: "Natural textures and earthy tones create timeless charm.",
    images: [
    "https://res.cloudinary.com/do5dyebav/image/upload/v1760443275/VOF/2/Mr.Sunil_Project.pdf-image-000_sa1xln.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443277/VOF/2/Mr.Sunil_Project.pdf-image-002_h7o3tl.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443277/VOF/2/Mr.Sunil_Project.pdf-image-003_uorm0e.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443279/VOF/2/Mr.Sunil_Project.pdf-image-004_vz5hvp.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443280/VOF/2/Mr.Sunil_Project.pdf-image-005_vvvazq.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443282/VOF/2/Mr.Sunil_Project.pdf-image-006_kbdrpc.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443283/VOF/2/Mr.Sunil_Project.pdf-image-007_thfvtv.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443285/VOF/2/Mr.Sunil_Project.pdf-image-008_vmp0vo.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443287/VOF/2/Mr.Sunil_Project.pdf-image-009_x7penk.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443288/VOF/2/Mr.Sunil_Project.pdf-image-010_di9d0k.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443290/VOF/2/Mr.Sunil_Project.pdf-image-011_weehll.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443291/VOF/2/Mr.Sunil_Project.pdf-image-012_amoixk.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443293/VOF/2/Mr.Sunil_Project.pdf-image-013_gbkbtd.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443294/VOF/2/Mr.Sunil_Project.pdf-image-014_dj9dvo.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443299/VOF/2/Mr.Sunil_Project.pdf-image-017_qmiltd.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443300/VOF/2/Mr.Sunil_Project.pdf-image-015_yjo2j8.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443303/VOF/2/Mr.Sunil_Project.pdf-image-019_hkri4q.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443306/VOF/2/Mr.Sunil_Project.pdf-image-020_cnknuf.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443311/VOF/2/Mr.Sunil_Project.pdf-image-022_ototng.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443313/VOF/2/Mr.Sunil_Project.pdf-image-023_xkoxx7.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443318/VOF/2/Mr.Sunil_Project.pdf-image-025_zs5tlr.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443322/VOF/2/Mr.Sunil_Project.pdf-image-027_vpezyr.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443323/VOF/2/Mr.Sunil_Project.pdf-image-028_r4cz3t.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443325/VOF/2/Mr.Sunil_Project.pdf-image-029_fnyyem.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443327/VOF/2/Mr.Sunil_Project.pdf-image-030_zakbvq.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443331/VOF/2/Mr.Sunil_Project.pdf-image-032_kskioa.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443334/VOF/2/Mr.Sunil_Project.pdf-image-033_ac19r3.jpg",
    ],
  },
  {
    id: 4,
    date: "MAY 20, 2025",
    title: "CONTEMPORARY KITCHEN SUITE",
    description: "A sleek, functional kitchen with refined modern finishes.",
    images: [
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443923/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-035_q6l53c.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443922/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-034_pt2e2d.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443918/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-026_jbddhh.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443917/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-025_gdikpc.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443911/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-020_i4vb8o.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443911/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-019_godtni.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443877/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-014_tfsp2t.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443876/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-013_q475lk.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443872/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-010_zeydzk.jpg",
      "https://res.cloudinary.com/do5dyebav/image/upload/v1760443868/VOF/3/MAGADHA_SUBBARAO_COLONY.pdf-image-005_unzmce.jpg",
    
    ],
  },
  // {
  //   id: 5,
  //   date: "MARCH 02, 2025",
  //   title: "SCANDINAVIAN BEDROOM RETREAT",
  //   description: "Soft whites and wood tones bring cozy Scandinavian warmth.",
  //   images: [
  //     "/images/scandi1.jpg",
  //     "/images/scandi2.jpg",
  //     "/images/scandi3.jpg",
  //   ],
  // },
];

export function PortfolioSection() {
  const { toast } = useToast();

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
    setZoom(1);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setZoom(1);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    setCurrentIndex((prev) => (prev + 1) % selectedProject.images.length);
    setZoom(1);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    setCurrentIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
    setZoom(1);
  };

  // const togglePlay = () => setIsPlaying(!isPlaying);

  // useEffect(() => {
  //   if (!isPlaying || !selectedProject) return;
  //   const timer = setInterval(() => {
  //     handleNext();
  //   }, 4000);
  //   return () => clearInterval(timer);
  // }, [isPlaying, selectedProject]);

  return (
    <section id="portfolio" className="bg-white text-gray-900 md:ml-20">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24">
          <div className="text-right">
            <h2 className="text-2xl md:text-3xl tracking-wide text-right">
              <span className="font-light">OUR FEATURED </span>
              <span className="font-bold">WORKS</span>
            </h2>
            <div className="w-16 h-[3px] bg-black mt-2 ml-auto"></div>
          </div>
        </div>

        {/* --- Projects --- */}
        <div className="flex flex-col gap-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              {/* Date */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-gray-800"></div>
                <p className="text-[11px] tracking-[0.2em] font-semibold text-gray-800">
                  {project.date}
                </p>
              </div>

              {/* Image + Text */}
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 md:items-center`}
              >
                <div className="flex-1 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center px-2">
                  <h3 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed max-w-md">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-black text-gray-800 hover:bg-black hover:text-white rounded-none px-6 py-4 text-xs w-[200px]"
                    onClick={() => handleOpenModal(project)}
                  >
                    VIEW PROJECT
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Modal --- */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 px-4"
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white hover:opacity-70"
                onClick={handleCloseModal}
              >
                <X size={28} />
              </button>

              {/* Image Container */}
              <div className="relative w-full max-w-4xl flex flex-col items-center">
                <motion.img
                  key={currentIndex}
                  src={selectedProject.images[currentIndex]}
                  alt={selectedProject.title}
                  style={{ transform: `scale(${zoom})` }}
                  className="max-h-[80vh] object-contain rounded-md transition-transform duration-300"
                />

                {/* Controls */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={handlePrev}
                    className="bg-black/40 hover:bg-black/70 text-white p-3 rounded-full ml-4"
                  >
                    <ChevronLeft size={28} />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={handleNext}
                    className="bg-black/40 hover:bg-black/70 text-white p-3 rounded-full mr-4"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="flex items-center gap-4 mt-6 text-white">
                <button onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}>
                  <ZoomIn />
                </button>
                <button onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}>
                  <ZoomOut />
                </button>
                {/* <button onClick={togglePlay}>
                  {isPlaying ? <Pause /> : <Play />}
                </button> */}
                <span className="text-sm opacity-70">
                  {currentIndex + 1} / {selectedProject.images.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

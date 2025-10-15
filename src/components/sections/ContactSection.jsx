import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleButtonClick = () => {
    toast({
      title:
        "🚧 Map feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section
      id="contact"
      className="md:ml-20 px-10 relative bg-black text-white overflow-hidden border-t border-gray-800"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: "#000000" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-start justify-between gap-32 md:gap-48">
        <motion.div
          className="text-2xl font-light tracking-wider cursor-pointer flex-shrink-0 text-center"
         style={{ fontFamily: "'CyrillicBodoniCondensed', serif" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => handleNavClick("hero")}
        >
          <span  style={{
              transform: 'scaleY(1.4) scaleX(1.1)',  
              display: 'inline-block',
            }} className="text-5xl block">VOF</span>
          <span className="text-white text-sm block -mt-0">DESIGN STUDIO</span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="w-16 h-px bg-white mb-3"></div>
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "400",
                letterSpacing: "0.15em",
              }}
              className="text-[11px] md:text-xs uppercase mb-2"
            >
              CALL
            </h3>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: "300",
              }}
              className="text-base text-sm"
            >
              +91 8106257980
            </p>
          </div>

          <div>
            <div className="w-16 h-px bg-white mb-3"></div>
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "400",
                letterSpacing: "0.15em",
              }}
              className="text-[11px] md:text-xs uppercase mb-2"
            >
              WRITE
            </h3>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: "300",
              }}
              className="text-base text-sm uppercase"
            >
              VOFDESIGNSTUDIO@GMAIL.COM
            </p>
          </div>

          <div>
            <div className="w-16 h-px bg-white mb-3"></div>
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "400",
                letterSpacing: "0.15em",
              }}
              className="text-[11px] md:text-xs uppercase mb-2"
            >
              VISIT
            </h3>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: "300",
                lineHeight: "1.6",
              }}
              className="text-base text-SM max-w-xs"
            >
              SHIVAM BUILDING, 3RD FLOOR, BOTANICAL GARDEN ROAD
              <br />
              KONDAPUR, HYDERABAD, TELANGANA, 500084
            </p>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
}
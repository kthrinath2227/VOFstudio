import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: 2090, label: 'Finished Projects' },
    { number: 500, label: 'Happy Customers' },
    { number: 10000, label: 'Design & Styling Hours' },
  ];

  const [displayNumbers, setDisplayNumbers] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // total animation time (ms)
    const intervalTime = 50; // how fast digits roll
    const steps = duration / intervalTime;

    const interval = setInterval(() => {
      setDisplayNumbers(prev =>
        prev.map((_, i) => {
          // Random rolling digits while animating
          return Math.floor(Math.random() * stats[i].number);
        })
      );
    }, intervalTime);

    // After animation completes, show actual numbers
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setDisplayNumbers(stats.map(s => s.number));
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isInView]);

  return (
    <section
      id="stats"
      ref={ref}
      className="bg-black text-white flex items-center md:ml-20 py-16 px-10"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center lg:text-left relative"
>
  {/* Number with line & dot */}
  <div className="text-6xl md:text-8xl font-bold text-gray-600 mb-4 hidden md:block relative inline-block">
    02
    {/* Line + dot perfectly across 02 */}
    <div className="absolute top-1/2 left-0 flex items-center z-20">
      <div className="h-px bg-gray-400 w-[120px]"></div>
      <div className="h-2 w-2 bg-white rounded-full ml-1"></div>
    </div>
  </div>

  {/* Headings below */}
  <h2 className="text-3xl sm:text-3xl md:text-5xl font-light mb-2">
    SOME INTERESTING
  </h2>
  <div className="w-12 sm:w-16 h-1 bg-white mx-auto lg:mx-0 mb-3"></div>
  <h3 className="text-3xl sm:text-4xl font-bold mb-8">FACTS</h3>
</motion.div>


          {/* Right Stats with rolling effect */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-1 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tabular-nums">
                  {displayNumbers[i].toLocaleString()}
                </div>
                <p className="text-gray-400 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

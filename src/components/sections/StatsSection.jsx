import React from 'react';
import { motion } from 'framer-motion';

export function StatsSection() {
  return (
    <section id="stats" className="min-h-screen bg-gray-900 text-white flex items-center ml-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-9xl font-light text-gray-600 mb-8">02</div>
            <h2 className="text-4xl font-light mb-4">SOME INTERESTING</h2>
            <h3 className="text-4xl font-normal mb-12">FACTS</h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4">2090</div>
              <p className="text-gray-400">Finished projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4">500</div>
              <p className="text-gray-400">Happy customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4">10000</div>
              <p className="text-gray-400">Photoshoot & Editing hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
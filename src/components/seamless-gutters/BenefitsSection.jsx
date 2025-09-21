import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Zap, Wind } from "lucide-react";

const keyBenefits = [
  { icon: Droplets, title: "Zero Leak Guarantee", description: "Seamless design eliminates joints and weak points where traditional gutters fail and leak." },
  { icon: Shield, title: "Ultimate Protection", description: "Safeguards your foundation, landscaping, and exterior from costly water damage." },
  { icon: Wind, title: "Extreme Weather Resistance", description: "Built to withstand severe weather, including high winds, heavy snow, and ice." },
  { icon: Zap, title: "Low Maintenance", description: "Smooth interior surface prevents debris buildup and makes cleaning effortless." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-neutral-800 via-gray-100 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20">
          
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div className="w-20 h-1.5 bg-gradient-to-r from-red-500 to-red-400 rounded-full shadow-lg shadow-red-500/30" />
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-neutral-900 uppercase mb-8 leading-tight">
            WHY SEAMLESS GUTTERS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700">DOMINATE</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="font-open-sans text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unlike sectional gutters, our seamless systems are custom-made on-site for superior, leak-proof performance.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {keyBenefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-gradient-to-b from-white to-gray-50/80 rounded-2xl p-8 border border-gray-200/60 hover:border-red-400/60 hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-red-50/20 to-red-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600/10 to-red-700/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <benefit.icon className="w-10 h-10 text-red-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="font-montserrat font-bold text-xl md:text-2xl text-gray-900 mb-4 leading-tight group-hover:text-red-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight, Droplets, Clock, Home, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function LifetimeWarrantySpotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const warrantyFeatures = [
    {
      icon: Shield,
      title: "Materials & Workmanship",
      description: "Complete coverage on all materials and installation craftsmanship"
    },
    {
      icon: Droplets,
      title: "Weather-Related Damage",
      description: "Protection against hurricane-force winds, hail, and storm damage"
    },
    {
      icon: Home,
      title: "Transferable to New Owners",
      description: "Full warranty transfers with property sale, adding significant value"
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-br from-red-800 via-neutral-900 to-black"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Image Integration */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop')",
          filter: 'contrast(1.1) brightness(0.4)'
        }}
      />

      {/* Premium Red-to-Black Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-800/90 via-neutral-900/95 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-red-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-black/60" />

      {/* Content Container - Centered Layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

        {/* Main Headline - Dramatically Enhanced */}
        <motion.div variants={itemVariants} className="space-y-8 mb-16">
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-[0.9] tracking-tight">
            <span className="block">LIFETIME</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              TRANSFERABLE
            </span>
            <span className="block">WARRANTY</span>
          </h2>

          {/* Impactful Quote - Refined Presentation */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-600 to-red-800 rounded-full" />
            <blockquote className="pl-8 font-open-sans text-xl sm:text-2xl lg:text-3xl text-gray-200 italic font-light leading-relaxed">
              "If you can't stand behind your work,<br />
              <span className="text-red-400 font-semibold">you shouldn't be doing it."</span>
            </blockquote>
          </div>
        </motion.div>

        {/* Enhanced Feature Cards Grid - Centered */}
        <motion.div variants={itemVariants} className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {warrantyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-red-500/60 hover:bg-white/20 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-900/30"
            >
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <div className="relative text-center">
                {/* Premium Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/30 to-red-700/20 rounded-xl border border-red-500/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 group-hover:border-red-400 transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-red-400 group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="space-y-4">
                  <h3 className="font-montserrat font-bold text-xl text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-open-sans text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Link to={createPageUrl("Quote")}>
            <Button className="group w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-lg font-montserrat font-bold text-lg sm:text-xl uppercase shadow-2xl shadow-red-600/40 hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center justify-center gap-4">
                Contact Us
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Elegant Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
    </motion.section>
  );
}
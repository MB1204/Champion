
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Shield, Award, Clock, Star, Zap, Home, Eye, Wind, Paintbrush, Recycle, Bolt } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import QuoteForm from "../components/QuoteForm";
import LifetimeWarrantySpotlight from "../components/LifetimeWarrantySpotlight";
import RecentWorkGallery from "../components/RecentWorkGallery";
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const keyBenefits = [
  {
    icon: Clock,
    title: "70+ Year Lifespan",
    description: "Enjoy unparalleled durability with a roofing system engineered to last for generations."
  },
  {
    icon: Zap,
    title: "30% Energy Savings per month",
    description: "Our advanced reflective coatings can reduce your cooling costs by up to 30% each month."
  },
  {
    icon: Wind,
    title: "200MPH Wind Rating",
    description: "Engineered and tested to withstand hurricane-force winds, ensuring your home is protected."
  },
  {
    icon: Shield,
    title: "Lifetime Transferrable Warranty",
    description: "Our comprehensive warranty is fully transferable, adding significant long-term value to your property."
  },
  {
    icon: Paintbrush,
    title: "Kynar® 500 Coating",
    description: "Advanced paint system with a 40-year warranty, resisting fading, chalking, and UV damage for lasting beauty."
  },
  {
    icon: Recycle,
    title: "98% Recyclable Material",
    description: "Environmentally friendly, American-made metal roofing, unlike asphalt shingles that end up in landfills."
  },
  {
    icon: Bolt,
    title: "Hidden Fastener System",
    description: "Unlike common exposed fastener roofs prone to leaks, our concealed system offers superior weather protection and a sleek, modern finish."
  },
  {
    icon: Home,
    title: "Increased Home Value",
    description: "Exceptional ROI; metal roofs are a premium upgrade that significantly boosts your property's market value."
  }
];

const colorOptions = [
  { name: "Charcoal Gray", color: "#36454F", popular: true },
  { name: "Slate Blue", color: "#6A5ACD", popular: false },
  { name: "Forest Green", color: "#228B22", popular: true },
  { name: "Copper Penny", color: "#AD6F69", popular: false },
  { name: "Weathered Zinc", color: "#87A2A6", popular: true },
  { name: "Classic Black", color: "#1C1C1C", popular: false }
];

export default function StandingSeamRoofs() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Charcoal Gray");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Optimized for Mobile */}
      <section className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/a308dc19f_85.jpg')"
          }} />

        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

        <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl space-y-6 sm:space-y-8">

              {/* Premium Badge - Mobile Responsive */}
              <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/30">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
              </motion.div>

              {/* Title - Mobile Responsive Typography */}
              <motion.h1 variants={itemVariants} className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl uppercase leading-[0.9] text-white tracking-tight">
                STANDING<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                  SEAM ROOFS
                </span>
              </motion.h1>

              {/* Description - Mobile Responsive */}
              <motion.p variants={itemVariants} className="font-open-sans text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-3xl">
                The most superior roofing system available. Built to last, backed for life!
              </motion.p>

              {/* CTA Button - Mobile Responsive */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 sm:gap-6 pt-6 sm:pt-8">
                <Link to={createPageUrl("Quote")}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-lg sm:text-xl font-montserrat font-bold uppercase shadow-2xl shadow-red-600/30 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                    GET A FREE QUOTE
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section - Mobile Optimized */}
      <section ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-black via-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-12 sm:mb-16 md:mb-20">

            <motion.h2
              variants={itemVariants}
              className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white uppercase mb-6 sm:mb-8 leading-tight px-2">
              An Investment in<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700">Uncompromising Performance</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="font-open-sans text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-2">
              Standing seam technology delivers performance that conventional materials simply cannot match, protecting your investment for generations.
            </motion.p>
          </motion.div>

          {/* Benefits Grid - Mobile Responsive */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {keyBenefits.map((benefit, index) =>
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-b from-neutral-800/80 to-neutral-900/50 rounded-2xl p-6 sm:p-8 border border-neutral-700/60 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600/20 to-red-700/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500 shadow-lg group-hover:shadow-xl mx-auto sm:mx-0">
                    <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
                  </div>
                </div>
                
                <div className="relative z-10 text-center sm:text-left">
                  <h3 className="font-montserrat font-bold text-xl sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 leading-tight group-hover:text-red-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="font-open-sans text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Recent Work Gallery Section */}
      <RecentWorkGallery />

      {/* Lifetime Warranty Section */}
      <LifetimeWarrantySpotlight />

      {/* CTA Section - Mobile Optimized */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-red-800 via-neutral-900 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-white uppercase mb-8 sm:mb-12 leading-tight px-2">
            READY FOR THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">ULTIMATE ROOF?</span>
          </h2>

          <p className="font-open-sans text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto leading-relaxed px-2">
            Join thousands of discerning homeowners who've chosen excellence.
            Get your comprehensive assessment and detailed quote today.
          </p>

          <div className="bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-700">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}

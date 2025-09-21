
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Gem, TrendingUp, Leaf, Droplets, Wind, Home, Star } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils"; // Corrected import for createPageUrl
import QuoteForm from "../components/QuoteForm";
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const keyBenefits = [
{
  icon: Award,
  title: "100+ Year Lifespan",
  description: "A true legacy material, copper roofing and gutters can last for over a century with minimal maintenance."
},
{
  icon: Gem,
  title: "Unmatched Beauty",
  description: "The stunning, evolving patina of copper adds a level of character and prestige no other material can replicate."
},
{
  icon: TrendingUp,
  title: "Increases Property Value",
  description: "Copper is a premium feature that significantly boosts your home's curb appeal and market value."
},
{
  icon: Leaf,
  title: "Naturally Antimicrobial",
  description: "Copper naturally resists the growth of moss, algae, and fungi, keeping your systems clean and functional."
}];


export default function CopperSystems() {
  const [isVisible, setIsVisible] = useState(false);
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
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/847c4377c_copp1.jpg')"
          }} />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent" />
        
        <div className="relative z-10 min-h-screen flex items-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl space-y-8">

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/30">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
                  <Star className="w-6 h-6 text-red-400" />
                </div>
              </motion.div>

              <motion.h1 variants={itemVariants} className="font-montserrat font-black text-5xl md:text-6xl lg:text-8xl uppercase leading-[0.9] text-white tracking-tight">
                COPPER<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                  SYSTEMS
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="font-open-sans text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-3xl">Elevate your home or business with the timeless elegance of custom copper.

              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-8">
                <Link to={createPageUrl("Quote")}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-xl font-montserrat font-bold uppercase shadow-2xl shadow-red-600/30 transform hover:scale-105 transition-all duration-300">
                    GET A FREE QUOTE
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black via-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20">

            <motion.h2 variants={itemVariants} className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-8 leading-tight">
              An Investment in<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700">Perfection</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="font-open-sans text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Copper is more than a material; it's a declaration of quality, craftsmanship, and enduring style that appreciates over time.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {keyBenefits.map((benefit, index) =>
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-b from-neutral-800/80 to-neutral-900/50 rounded-2xl p-8 border border-neutral-700/60 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600/20 to-red-700/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <benefit.icon className="w-10 h-10 text-red-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-montserrat font-bold text-xl md:text-2xl text-white mb-4 leading-tight group-hover:text-red-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="font-open-sans text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
       <section className="py-32 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h2 variants={itemVariants} className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-8 leading-tight">
                Mastery in Every Detail
            </motion.h2>
            <motion.p variants={itemVariants} className="font-open-sans text-xl text-gray-400 max-w-3xl mx-auto mb-20">From Roofs, to gutters and even to the finest accents, we can handle any custom job you need.

          </motion.p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
                {[
            { title: "Roofing", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/ddc2a75f2_copp1.jpg" },
            { title: "Gutters", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/58e548046_copp.jpg" },
            { title: "Trim & Accents", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/b9d3bc0ae_DJI_0638.jpg" }].

            map((app) =>
            <div key={app.title} className="group relative rounded-lg overflow-hidden shadow-lg h-96">
                        <img src={app.img} alt={`Custom copper ${app.title}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                            <div className="w-1/4 border-t-2 border-red-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <h3 className="font-montserrat font-bold text-2xl md:text-3xl uppercase text-white drop-shadow-md">{app.title}</h3>
                        </div>
                    </div>
            )}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-red-800 via-neutral-900 to-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2 variants={itemVariants} className="font-montserrat font-black text-4xl md:text-5xl lg:text-7xl text-white uppercase mb-12 leading-tight">
            Ready for a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Timeless Masterpiece?</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="font-open-sans text-xl md:text-2xl text-gray-300 mb-20 max-w-4xl mx-auto leading-relaxed">Discuss your vision with our copper specialists. Let's create a work of art for your home or business that will last for generations to come.

          </motion.p>
          
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12 rounded-3xl shadow-2xl border border-neutral-700">
            <QuoteForm />
          </motion.div>
        </div>
      </section>
    </div>);

}

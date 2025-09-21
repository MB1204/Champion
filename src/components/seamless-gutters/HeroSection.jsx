
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

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

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/770829ac0_gutters.jpg')"
        }} />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
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
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
                <Star className="w-6 h-6 text-red-400" />
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-montserrat font-black text-5xl md:text-6xl lg:text-8xl uppercase leading-[0.9] text-white tracking-tight">
              SEAMLESS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                GUTTERS
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="font-open-sans text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-3xl">Custom-manufactured on-site for perfect fit and flawless performance. Zero seams, zero leaks, zero compromises.
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
  );
}

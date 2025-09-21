import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Modern Residence",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/a083e9fcb_85.jpg"
  },
  {
    title: "Lakeside Retreat",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/306ee8f17_standingseamsolar1.png"
  },
  {
    title: "Historic Copper Accent",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/847c4377c_copp1.jpg"
  },
  {
    title: "Luxury Estate with Copper Accents",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/2be5d96c3_87.jpg"
  },
  {
    title: "Custom Dormer Features",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/4fe149791_90.jpg"
  },
  {
    title: "Standing Seam with Solar",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/8067639ad_93.jpg"
  },
  {
    title: "Contemporary Design",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/ea249b523_88.jpg"
  },
  {
    title: "Executive Home",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/ccd0fd04a_84.jpg"
  },
  {
    title: "Modern Farmhouse",
    imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/3a9d5e189_100.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export default function RecentWorkGallery() {
  return (
    <motion.section
      className="pt-8 pb-20 bg-gradient-to-b from-neutral-800 via-neutral-900 to-red-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-4 leading-tight">
            Our Quality<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              Speaks For Itself
            </span>
          </h2>
        </motion.div>

        {/* Gallery Grid - Static Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-neutral-700/60"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
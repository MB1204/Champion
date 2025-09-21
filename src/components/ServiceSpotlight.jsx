
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const spotlightVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServiceSpotlight({
  title,
  description,
  features,
  buttonText,
  buttonLink,
  houseImage,
  orientation = 'left',
}) {
  const isTextLeft = orientation === 'left';

  return (
    <motion.section
      className="bg-gradient-to-br from-neutral-900 to-black text-white overflow-hidden"
      variants={spotlightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20 items-center">

          {/* ======== HIGH-END IMAGE PANEL ======== */}
          <motion.div
            className={`relative group ${isTextLeft ? 'lg:order-last' : ''}`}
            variants={itemVariants}
          >
            {/* Decorative Corner Accents - MOVED OUTSIDE */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-red-500/70 rounded-tl-lg transition-all duration-300 group-hover:border-red-500 group-hover:scale-110"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-red-500/70 rounded-br-lg transition-all duration-300 group-hover:border-red-500 group-hover:scale-110"></div>

            <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-red-900/20">
              <img
                src={houseImage}
                alt={`${title} service`}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* Refined Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 transition-all duration-300 group-hover:from-black/70"></div>
            </div>
          </motion.div>

          {/* ======== HIGH-END TEXT CONTENT PANEL ======== */}
          <motion.div className="space-y-10" variants={itemVariants}>
            <div>
              <motion.span
                className="inline-block bg-red-600 text-white font-montserrat font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-red-500/30 mb-5"
                variants={itemVariants}
              >
                Our Expertise
              </motion.span>
              <motion.h2
                className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-tight drop-shadow-md"
                variants={itemVariants}
              >
                {title}
              </motion.h2>
            </div>

            <motion.p
              className="font-open-sans text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            {/* Premium Feature List - Updated for consistent sizing */}
            <motion.div className="grid sm:grid-cols-2 gap-5 min-h-[280px]" variants={itemVariants}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-6 rounded-lg border border-white/10 group hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-center h-[130px]"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center gap-4 w-full">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center border border-red-500/30 group-hover:bg-red-600 transition-colors duration-300">
                      <CheckCircle className="w-6 h-6 text-red-400 group-hover:text-white" />
                    </div>
                    <p className="font-open-sans text-base text-gray-200 leading-tight">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="pt-4" variants={itemVariants}>
              <Link to={buttonLink}>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold text-lg uppercase tracking-wider px-10 py-7 rounded-lg shadow-xl shadow-red-500/20 hover:shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  {buttonText}
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

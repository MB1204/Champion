
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Ruler, Scale, Weight } from "lucide-react";

const gutterStyles = {
  'copper': {
    title: 'Copper Gutters',
    description: 'Premium copper gutters that develop a beautiful patina over time, adding timeless elegance and exceptional durability to your home. Naturally antimicrobial and virtually maintenance-free.',
    icon: Droplets,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/b9d29bf92_Untitleddesign1.png',
    sizes: {
      '5-inch': {
        title: '5-Inch Copper',
        thickness: '0.027 Aluminum',
        capacity: 'Standard Capacity',
        idealFor: 'Historic homes and properties seeking premium aesthetic appeal with excellent performance.',
      },
      '6-inch': {
        title: '6-Inch Copper',
        thickness: '0.032 Aluminum',
        capacity: 'High Capacity (+40%)',
        idealFor: 'Luxury homes and properties requiring maximum water flow with unmatched visual appeal.',
      }
    }
  },
  'k-style': {
    title: 'K-Style Gutters',
    description: 'The most popular choice for modern homes, K-style gutters feature a decorative crown molding profile that complements many architectural designs. Their flat back allows for seamless installation against the fascia.',
    icon: Droplets,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/f8f48ddcc_k.jpg', // Updated image URL
    sizes: {
      '5-inch': {
        title: '5-Inch K-Style',
        thickness: '0.027 Aluminum',
        capacity: 'Standard Capacity',
        idealFor: 'Most residential homes with average roof sizes and moderate rainfall.',
      },
      '6-inch': {
        title: '6-Inch K-Style',
        thickness: '0.032 Aluminum',
        capacity: 'High Capacity (+40%)',
        idealFor: 'Larger homes, steep roofs, or areas with heavy rainfall and debris.',
      }
    }
  },
  'half-round': {
    title: 'Half-Round Gutters',
    description: 'Offering a classic, traditional look, half-round gutters are often found on historic homes. Their semi-circular shape is less prone to corrosion and makes cleaning easier.',
    icon: Droplets,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/8c9e8e89b_Untitleddesign2.png', // Updated image URL
    sizes: {
      '5-inch': {
        title: '5-Inch Half-Round',
        thickness: '0.027 Aluminum',
        capacity: 'Standard Capacity',
        idealFor: 'Smaller homes or historic renovations where maintaining a classic aesthetic is key.',
      },
      '6-inch': {
        title: '6-Inch Half-Round',
        thickness: '0.032 Aluminum',
        capacity: 'High Capacity',
        idealFor: 'Larger historic homes or properties needing greater water flow with a traditional look.',
      }
    }
  },
  'box': {
    title: 'Box Gutters',
    description: 'Designed for commercial buildings or modern homes with flat roofs, box gutters are large, high-capacity systems that are often built into the roof structure itself, offering a clean, hidden look.',
    icon: Droplets,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/f6366e011_box.jpg',
    sizes: {
      'custom': {
        title: 'Custom Sized',
        thickness: 'Custom gauges available based on project needs.',
        capacity: 'Maximum Capacity',
        idealFor: 'Commercial buildings, industrial facilities, and custom architectural homes requiring massive water diversion.',
      },
    }
  },
  'gutter-guards': {
    title: 'Gutter Guards',
    description: 'Protect your gutter system from leaves, debris, and pests with our high-performance gutter guards. Reduce maintenance and prevent clogs that can lead to water damage.',
    icon: Droplets,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/b8c5d8402_guards1.jpg',
    sizes: {
      'custom': {
        title: 'Custom Fit Protection',
        thickness: '20+ Styles Available',
        capacity: 'Maintains Full Gutter Capacity',
        idealFor: 'Any home with surrounding trees or homeowners looking to eliminate the hassle of gutter cleaning permanently.',
      },
    }
  },
  'rain-chains': {
    title: 'Rain Chains',
    description: 'An elegant and artistic alternative to traditional downspouts, rain chains guide water gracefully from your gutters to the ground, creating a visually appealing water feature.',
    icon: Droplets,
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/9210bb427_rainchain.png',
    sizes: {
      'custom': {
        title: 'Various Styles Available',
        thickness: '20+ Styles Available',
        capacity: 'Decorative Water Flow',
        idealFor: 'Homes seeking a unique, aesthetic touch to their water management system, often used in gardens or entryways.',
      },
    }
  }
};

export default function StyleGuideSection() {
  const [selectedStyle, setSelectedStyle] = useState('copper');

  return (
    <section className="py-32 bg-gradient-to-br from-neutral-800 via-red-700 to-red-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-7xl uppercase mb-8 leading-tight">
            Find Your Perfect<br />
            <span className="text-red-200">Gutter Style</span>
          </h2>
          <p className="font-open-sans text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
            Explore styles and sizes to find the perfect match for your home's architecture and water management needs.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-4">
            {Object.keys(gutterStyles).map((styleKey) => {
              const GutterIcon = gutterStyles[styleKey].icon;
              return (
                <button
                  key={styleKey}
                  onClick={() => setSelectedStyle(styleKey)}
                  className={`w-full flex items-center gap-4 text-left p-6 rounded-lg border-2 transition-all duration-300 ${
                    selectedStyle === styleKey
                      ? 'bg-white/20 border-red-400 shadow-2xl shadow-red-900/40'
                      : 'bg-white/5 border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    selectedStyle === styleKey ? 'bg-red-600' : 'bg-white/10'
                  }`}>
                    <GutterIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-white">
                      {gutterStyles[styleKey].title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStyle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <h3 className="font-montserrat font-black text-3xl md:text-4xl text-red-300 uppercase mb-4">
                  {gutterStyles[selectedStyle].title}
                </h3>
                
                {/* Reference Image */}
                <div className="mb-8 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={gutterStyles[selectedStyle].imageUrl} 
                    alt={`${gutterStyles[selectedStyle].title} reference`}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <p className="font-open-sans text-lg text-gray-200 mb-8 leading-relaxed">
                  {gutterStyles[selectedStyle].description}
                </p>
                <div className="border-t border-white/20 my-8"></div>
                <h4 className="font-montserrat font-bold text-2xl text-white mb-6">Details & Specifications</h4>
                <div className={`grid gap-6 ${Object.keys(gutterStyles[selectedStyle].sizes).length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
                  {Object.entries(gutterStyles[selectedStyle].sizes).map(([sizeKey, sizeDetails]) => (
                    <div key={sizeKey} className="bg-white/5 p-6 rounded-lg">
                      <h5 className="font-montserrat font-bold text-xl text-red-400 mb-3">{sizeDetails.title}</h5>
                      <div className="space-y-3 font-open-sans text-gray-300">
                        <div className="flex items-start gap-3">
                          <Weight className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                          {/* Conditional rendering for 'Thickness' vs 'Styles' label */}
                          <div><strong>{selectedStyle === 'gutter-guards' || selectedStyle === 'rain-chains' ? 'Styles:' : 'Thickness:'}</strong> {sizeDetails.thickness}</div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Scale className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                          <div><strong>Capacity:</strong> {sizeDetails.capacity}</div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Ruler className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                          <div><strong>Ideal For:</strong> {sizeDetails.idealFor}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

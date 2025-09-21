
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Star, Shield, Award, Clock, CheckCircle, ArrowRight, Phone, Zap } from "lucide-react";
import QuoteForm from "../components/QuoteForm";
import ServiceSpotlight from "../components/ServiceSpotlight";
import AnimatedStatsSection from "../components/AnimatedStatsSection";
import TypewriterHeadline from "../components/TypewriterHeadline";
import LifetimeWarrantySpotlight from "../components/LifetimeWarrantySpotlight";

const services = [
{
  title: "Standing Seam Roofs",
  description: "Premium metal roofing systems designed for longevity and beauty, providing unmatched protection against the elements.",
  features: ["70+ Year Lifespan", "30% Energy Savings", "200mph Wind Rating", "Lifetime Warranty"],
  houseImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/306ee8f17_standingseamsolar1.png",
  buttonText: "Get Free Quote",
  buttonLink: createPageUrl("Quote")
},
{
  title: "Seamless Gutters",
  description: "Custom fit seamless gutters that protect your home or business and its foundation by effectively managing rainwater, preventing costly water damage.",
  features: ["50+ Year Lifespan", "Custom Colors & Styles", "Leaf Guard Systems", "Lifetime Warranty"],
  houseImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/ecdefd44c_seamless2.png",
  buttonText: "Get Free Quote",
  buttonLink: createPageUrl("Quote")
},
{
  title: "Copper Systems",
  description: "Elegant copper roofing, gutters and accents that develop a beautiful patina over time, adding timeless character and value to your home.",
  features: ["100+ Year Lifespan", "Custom Roofs, Gutters & More", "Boosts Home Value Significantly", "Natural Developing Patina"],
  houseImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8384aa7f1_copperroof.png",
  buttonText: "Get Free Quote",
  buttonLink: createPageUrl("Quote")
}];

export default function Homepage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-r from-neutral-900 to-neutral-700">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/98201f986_SEAMLESS3.jpg')"
          }} />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-4 pt-32 text-center">
          <div className="max-w-4xl mx-auto w-full">
            <div className="grid lg:grid-cols-1 gap-12 items-center">
              {/* Hero Content */}
              <div className="text-white space-y-6">
                
                <TypewriterHeadline />
                
                <div className="flex flex-wrap items-center justify-center gap-x-2 text-gray-200 w-full text-center">
                  <span className="font-open-sans text-xs sm:text-sm whitespace-nowrap">Premium Materials</span>
                  <span className="text-red-400 text-sm">+</span>
                  <span className="font-open-sans text-xs sm:text-sm whitespace-nowrap">Lifetime Transferrable Warranty</span>
                  <span className="text-red-400 text-sm">=</span>
                  <span className="font-open-sans text-xs sm:text-sm font-semibold whitespace-nowrap">Guaranteed Satisfaction</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center w-full">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-montserrat font-bold text-sm sm:text-base md:text-lg uppercase transition-colors w-full sm:w-auto max-w-xs sm:max-w-none">
                    CALL NOW: (734) 347-9802
                  </button>
                  <Link to={createPageUrl("Quote")}>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-montserrat font-bold text-sm sm:text-base md:text-lg uppercase transition-colors w-full sm:w-auto max-w-xs sm:max-w-none">
                      SCHEDULE FREE INSPECTION
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedStatsSection />

      {/* NEW Quote Form Section - Updated with Premium Gradient */}
      <section className="py-20 bg-gradient-to-br from-red-800 via-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4">READY TO JOIN OUR HAPPY CUSTOMERS?
            </h2>
            <p className="font-open-sans text-lg md:text-xl text-red-100">Experience the Champion difference and see why our work speaks for itself.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div>
        {services.map((service, index) =>
        <ServiceSpotlight
          key={index}
          {...service}
          orientation={index % 2 === 0 ? 'left' : 'right'} />
        )}
      </div>

      {/* NEW Lifetime Warranty Spotlight */}
      <LifetimeWarrantySpotlight />

      {/* Financing Available - Updated with Premium Gradient */}
      <section className="py-20 bg-gradient-to-br from-red-800 via-neutral-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-black text-4xl lg:text-5xl uppercase mb-6">
              FINANCING AVAILABLE
            </h2>
            <p className="font-open-sans text-xl text-gray-300 mb-12">
              Don't let budget constraints delay your roofing project. We offer flexible financing
              options to help make your dream roof a reality.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl mb-3">0% Interest</h3>
                <p className="font-open-sans text-gray-300">0% Interest Forever, 
No Strings Attached</p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl mb-3">Quick Approval</h3>
                <p className="font-open-sans text-gray-300">Fast processing with same-day approval available</p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl mb-3">Flexible Terms</h3>
                <p className="font-open-sans text-gray-300">Payment plans designed to fit your budget</p>
              </div>
            </div>

            <Link to={createPageUrl("Quote")}>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-montserrat font-bold text-lg uppercase transition-colors flex items-center justify-center mx-auto">
                GET YOUR FREE QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Updated to 3 items with subtle separation */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-red-500/30">
            
            <div className="text-center py-8 md:py-0 px-8">
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">Licensed and Insured</h3>
              <p className="font-open-sans text-red-100 leading-relaxed">Fully licensed and insured for your complete protection and peace of mind.</p>
            </div>

            <div className="text-center py-8 md:py-0 px-8">
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">24/7 Emergency Service</h3>
              <p className="font-open-sans text-red-100 leading-relaxed">Storm damage or urgent repairs? Our emergency response team is available around the clock to protect your home.</p>
            </div>

            <div className="text-center py-8 md:py-0 px-8">
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">Lifetime  Warranty</h3>
              <p className="font-open-sans text-red-100 leading-relaxed">Our comprehensive lifetime warranty transfers with your home or business, adding significant long-term value to your property investment.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Storm Damage Section - Updated with Premium Gradient */}
      <section className="py-16 bg-gradient-to-br from-red-800 via-neutral-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-black text-3xl lg:text-4xl uppercase mb-4">
            Storm Damage? We're Here to Help.
          </h2>
          <p className="font-open-sans text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't wait for a small leak to become a big problem. Our emergency response team
            is available 24/7 to protect your home and family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-montserrat font-bold text-lg uppercase transition-colors">
              CALL FOR EMERGENCY: (734) 347-9802
            </button>
          </div>
        </div>
      </section>
    </div>);
}
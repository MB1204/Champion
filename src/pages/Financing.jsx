
import React from "react";
import { CreditCard, Clock, Percent, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Financing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 via-neutral-900 to-black py-20 md:py-28 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-[#DB4444] rounded-full flex items-center justify-center mb-8 shadow-lg">
            <CreditCard className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
            Flexible Financing Options
          </h1>
          <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">Investing in your home improvement project is a crucial decision.
We believe that financial constraints shouldn't stand in the way of a safe and reliable home.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={createPageUrl("Quote")}>
              <Button className="bg-[#DB4444] hover:bg-[#C03939] text-white font-montserrat font-bold py-4 px-8 rounded-full text-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-md">
                GET FREE QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Coming Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white uppercase mb-6">
              Our Financing <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Highlights</span>
            </h2>
            <p className="font-open-sans text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">We partner with leading financial institutions to provide you with competitive financing options tailored to your project.

            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative bg-gradient-to-b from-neutral-800/80 to-neutral-900/50 rounded-2xl p-8 border border-neutral-700/60 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-700/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500">
                  <Percent className="w-8 h-8 text-red-500 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-3 group-hover:text-red-400 transition-colors duration-300">0% Interest. Period</h3>
                <p className="font-open-sans text-red-300 group-hover:text-red-200 transition-colors duration-300">0% Interest Forever.
Because Interest is predatory and we're not</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-neutral-800/80 to-neutral-900/50 rounded-2xl p-8 border border-neutral-700/60 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-700/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500">
                  <Clock className="w-8 h-8 text-red-500 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-3 group-hover:text-red-400 transition-colors duration-300">Quick Approval</h3>
                <p className="font-open-sans text-red-300 group-hover:text-red-200 transition-colors duration-300">Get approved in minutes with our streamlined online application process</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-neutral-800/80 to-neutral-900/50 rounded-2xl p-8 border border-neutral-700/60 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-700/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500">
                  <Shield className="w-8 h-8 text-red-500 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-3 group-hover:text-red-400 transition-colors duration-300">Flexible Terms</h3>
                <p className="font-open-sans text-red-300 group-hover:text-red-200 transition-colors duration-300">Low monthly payments designed to fit your budget and lifestyle</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-neutral-800/80 to-neutral-900/50 rounded-2xl p-8 border border-neutral-700/60 hover:border-red-500/60 hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-700/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 transition-all duration-500">
                  <CheckCircle className="w-8 h-8 text-red-500 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-3 group-hover:text-red-400 transition-colors duration-300">No Hidden Fees</h3>
                <p className="font-open-sans text-red-300 group-hover:text-red-200 transition-colors duration-300">Transparent pricing with no surprises or prepayment penalties options. What you see is what you pay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with Premium Gradient */}
      <section className="bg-gradient-to-br from-red-800 via-neutral-900 to-black py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl uppercase mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-open-sans text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Don't let budget concerns hold you back. Contact us today to discuss your financing options and get your metal project started.

          </p>
          <Link to={createPageUrl("Quote")}>
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-montserrat font-bold py-4 px-8 rounded-full text-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-md">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>);
}

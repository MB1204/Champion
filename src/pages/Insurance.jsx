
import React from "react";
import { Shield, Phone, FileText, ArrowRight, Home, Search, DollarSign, Wrench, CheckCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Insurance() {
  return (
    <div className="bg-white">
      {/* New Hero Section: Navigating Your Insurance Claim */}
      <section className="bg-gradient-to-br from-red-800 via-neutral-900 to-black py-20 md:py-28 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-8 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
            Navigating Your Insurance Claim
          </h1>
          <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Let Champion Roofing guide you through every step of the storm damage insurance claims process, ensuring a smooth and hassle-free experience.
          </p>
          <Link to={createPageUrl("Quote")}>
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-montserrat font-bold py-4 px-8 rounded-full text-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-md">
              GET FREE INSPECTION
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

            {/* Step 1: Assess The Damage */}
            <div className="bg-neutral-900 p-8 rounded-lg shadow-md relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-8 h-8 text-orange-600" />
                  <h2 className="font-montserrat font-black text-2xl md:text-3xl text-white">
                    Assess The Damage
                  </h2>
                </div>
                <p className="font-open-sans text-gray-300 leading-relaxed">
                  Sometimes roof damage is as obvious as a fallen tree on your home or a section of missing shingles, telling you right away repairs are necessary. This is not always the case, however, which is why it's important to call a trained roof inspector like Champion Roofing as soon as possible. This inspection will tell you how much damage you have and whether repairs or replacement are necessary.
                </p>
              </div>
            </div>

            {/* Step 2: Claims Adjustment */}
            <div className="bg-neutral-800 p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <h2 className="font-montserrat font-black text-2xl md:text-3xl text-white">
                    Claims Adjustment
                  </h2>
                </div>
                <p className="font-open-sans text-gray-300 leading-relaxed">
                  Insurance companies typically send a claims adjuster to inspect the roof and determine the value of the roof. Because our experts are also versed in insurance terms and claims, we assist with this step of the process and provide an initial valuation of the roof and cost estimate for repairs or replacement. We will also meet with your insurance adjuster to address concerns and questions.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Insurance Company Approval */}
          <div className="bg-neutral-900 p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h2 className="font-montserrat font-black text-2xl md:text-3xl text-white">
                Insurance Company Approval
              </h2>
            </div>
            <p className="font-open-sans text-gray-300 leading-relaxed">
              Once the claim is submitted to the insurance company, they will provide you with a check to initiate the repair or replacement process. This check is for the amount of the estimate minus the depreciation and deductible. This is important to note because the first check will likely be for less than you were expecting (more on that later).
            </p>
          </div>

          {/* Step 4: Roof Repairs Or Replacement */}
          <div className="bg-neutral-800 p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-red-600" />
              <h2 className="font-montserrat font-black text-2xl md:text-3xl text-white">
                Roof Repairs Or Replacement
              </h2>
            </div>
            <p className="font-open-sans text-gray-300 leading-relaxed">
              After everything is cleared with the insurance company, we will provide you with complete roof repairs or full roof replacement. Our experts work with a variety of quality materials and will give you a complete solution.
            </p>
          </div>

          {/* Step 5: Completing The Process */}
          <div className="bg-neutral-900 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-purple-600" />
              <h2 className="font-montserrat font-black text-2xl md:text-3xl text-white">
                Completing The Process
              </h2>
            </div>
            <p className="font-open-sans text-gray-300 leading-relaxed">
              Once the work is completed, we send a final invoice to the insurance company. The insurer will then release the remainder of the money and give you a second check that covers the remaining cost of the work done to your home. After a storm, in many cases, you'll get a visit from "door-to-door" roofers or "storm chasers," offering to inspect your roof. When you choose Champion Roofing instead, you choose peace of mind knowing you're working with a licensed, insured, and experienced roofing company that can help you through the entire claims and repair process.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-red-800 via-neutral-900 to-black py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl uppercase mb-6">
            Ready To Start Your Claim?
          </h2>
          <p className="font-open-sans text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't navigate the insurance claims process alone. Let our experienced team guide you through every step and ensure you get the settlement you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-white text-red-600 hover:bg-gray-100 font-montserrat font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-md">
              <a href="tel:7343479802" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span className="sm:hidden">Call for Emergency</span>
                <span className="hidden sm:inline">Call for Emergency: (734) 347-9802</span>
              </a>
            </Button>
            <Link to={createPageUrl("Quote")}>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-md">
                GET FREE INSPECTION
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

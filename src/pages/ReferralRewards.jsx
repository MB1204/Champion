
import React from "react";
import { Gift, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const features = [
  {
    icon: Gift,
    title: "Generous Rewards",
    description: "Earn substantial rewards for each successful referral"
  },
  {
    icon: Users,
    title: "Easy Sharing",
    description: "Simple process to refer friends and family"
  },
  {
    icon: Award,
    title: "Exclusive Benefits",
    description: "Special perks for our referring customers"
  }
];

export default function ReferralRewards() {
  return (
    <div className="bg-white">
      {/* Dark "Coming Soon" Section - Updated with Premium Gradient */}
      <section className="bg-gradient-to-br from-red-800 via-neutral-900 to-black py-20 md:py-28 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-8 shadow-lg">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
            Referral Rewards Program
          </h1>
          <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Exciting referral rewards program coming soon! Stay tuned for details on how you can earn rewards for referring friends and neighbors to Champion Roofing.
          </p>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold py-4 px-8 rounded-full text-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            <Gift className="w-5 h-5 mr-3" />
            Coming Soon
          </Button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-16">
            <Users className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              We're Building Something Special
            </h2>
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
              Our referral rewards program is currently under development. We're working to create an amazing program that will reward our loyal customers for spreading the word about Champion Roofing's exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="font-open-sans text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

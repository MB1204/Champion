
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function QuoteForm({ className = "" }) {
  const [state, handleSubmit] = useForm("xjkakkaz");

  if (state.succeeded) {
    return (
      <div className={`bg-neutral-900 p-8 rounded-lg text-center ${className}`}>
        <div className="flex flex-col items-center gap-4">
          <CheckCircle className="w-12 h-12 text-green-500" />
          <h3 className="font-montserrat font-black text-2xl text-white">
            Thanks for your submission!
          </h3>
          <p className="text-gray-300">
            Our team will get back to you shortly.
          </p>
        </div>
      </div>
    );
  }


  return (
    <div className={`bg-neutral-900 p-8 rounded-lg ${className}`}>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Text */}
        <div className="space-y-4">
          <h3 className="font-montserrat font-black text-2xl text-white">
            Let Our Team Earn Your Trust
          </h3>
          <p className="text-gray-300 flex items-center justify-center gap-2 text-xs whitespace-nowrap">
            <CheckCircle className="w-5 h-5 text-red-500" />
            We Offer{" "}
            <span className="text-red-500 font-bold">24/7</span>{" "}
            <span className="text-gray-100">EMERGENCY SERVICE</span>
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                id="firstName"
                name="firstName"
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
              <Input
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                id="phone"
                name="phone"
                placeholder="Phone"
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
              <Input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs sm:col-span-2" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="ZIP Code"
                id="zip"
                name="zip"
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
              {/* Using a native select for easier integration with Formspree */}
              <select
                id="service"
                name="service"
                defaultValue=""
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500 rounded-md px-3 py-2 text-sm w-full"
              >
                <option value="" disabled>Service Needed</option>
                <option value="roofing">Roofing</option>
                <option value="gutters">Gutters</option>
                <option value="copper">Copper Systems</option>
                <option value="inspection">Inspection</option>
                <option value="repair">Repair</option>
              </select>
            </div>

            <p className="text-xs text-gray-400">
              By submitting this form, you consent to receive marketing communications from Champion Metal Contracting.
            </p>

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold py-4 text-lg uppercase transition-colors disabled:bg-gray-500"
            >
              GET A FREE QUOTE
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function QuoteForm({ className = "" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
    service: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Quote request:", formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
              <Input
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={(e) => handleInputChange("zip", e.target.value)}
                className="bg-black border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              />
              <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger className="bg-black border-gray-600 text-white focus:border-red-500">
                  <SelectValue placeholder="Service Needed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="roofing">Roofing</SelectItem>
                  <SelectItem value="gutters">Gutters</SelectItem>
                  <SelectItem value="copper">Copper Systems</SelectItem>
                  <SelectItem value="inspection">Inspection</SelectItem>
                  <SelectItem value="repair">Repair</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <p className="text-xs text-gray-400">
              By submitting this form, you consent to receive marketing communications from Champion.
            </p>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold py-4 text-lg uppercase transition-colors"
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

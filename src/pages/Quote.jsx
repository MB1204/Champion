
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Quote() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
    service: "",
    urgency: "",
    description: "",
    contactPreference: "",
    contactTime: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Quote request:", formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-montserrat font-black text-2xl text-gray-900 mb-4">
            QUOTE REQUEST RECEIVED!
          </h2>
          <p className="font-open-sans text-gray-600 mb-6">
            Thank you for your interest in Bone Dry Roofing. Our team will review your request 
            and contact you within 24 hours to schedule your free inspection.
          </p>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-500" />
              <span className="font-open-sans text-gray-700">Call us: (941) 555-ROOF</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-500" />
              <span className="font-open-sans text-gray-700">Email: info@bonedryroofing.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-red-500" />
              <span className="font-open-sans text-gray-700">Response time: Within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-black text-4xl lg:text-5xl text-gray-900 uppercase mb-4">
            GET YOUR FREE QUOTE
          </h1>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your project and we'll provide a detailed, no-obligation quote within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-red-600 text-white p-6">
            <h2 className="font-montserrat font-bold text-2xl mb-2">Project Information</h2>
            <p className="font-open-sans text-red-100">
              Please provide as much detail as possible to help us prepare an accurate quote.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  First Name *
                </label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="border-gray-300 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Last Name *
                </label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="border-gray-300 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-gray-300 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Email Address *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-gray-300 focus:border-red-500"
                  required
                />
              </div>
            </div>

            {/* Address Information */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Property Address *
                </label>
                <Input
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="border-gray-300 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  ZIP Code *
                </label>
                <Input
                  value={formData.zip}
                  onChange={(e) => handleInputChange("zip", e.target.value)}
                  className="border-gray-300 focus:border-red-500"
                  required
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Service Needed *
                </label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-red-500">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standing-seam">Standing Seam Metal Roof</SelectItem>
                    <SelectItem value="seamless-gutters">Seamless Gutters</SelectItem>
                    <SelectItem value="copper-systems">Copper Systems</SelectItem>
                    <SelectItem value="roof-repair">Roof Repair</SelectItem>
                    <SelectItem value="inspection">Inspection</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="emergency">Emergency Service</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Project Urgency
                </label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-red-500">
                    <SelectValue placeholder="How urgent is this?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency - ASAP</SelectItem>
                    <SelectItem value="urgent">Urgent - Within 1 week</SelectItem>
                    <SelectItem value="soon">Soon - Within 1 month</SelectItem>
                    <SelectItem value="planning">Planning - 2-3 months</SelectItem>
                    <SelectItem value="exploring">Just exploring options</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                Project Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Please describe your project in detail. Include any specific concerns, preferences, or questions you have."
                className="border-gray-300 focus:border-red-500 h-32"
              />
            </div>

            {/* Contact Preferences */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Preferred Contact Method
                </label>
                <Select value={formData.contactPreference} onValueChange={(value) => handleInputChange("contactPreference", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-red-500">
                    <SelectValue placeholder="How should we contact you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="text">Text Message</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="any">Any method is fine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Best Time to Contact
                </label>
                <Select value={formData.contactTime} onValueChange={(value) => handleInputChange("contactTime", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-red-500">
                    <SelectValue placeholder="When is best to reach you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-open-sans text-sm text-gray-600 mb-4">
                By submitting this form, you consent to receive marketing communications from Bone Dry Roofing. 
                We respect your privacy and will never share your information with third parties.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Free, no-obligation quote</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Licensed and insured professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24-hour response guarantee</span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 font-montserrat font-bold text-lg uppercase"
              >
                GET MY FREE QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </form>
        </div>

        {/* Emergency Contact - Updated with Premium Gradient */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-red-800 via-neutral-900 to-black text-white rounded-lg p-8">
            <h3 className="font-montserrat font-bold text-2xl mb-4 text-red-400">
              NEED EMERGENCY SERVICE?
            </h3>
            <p className="font-open-sans text-lg mb-6">
              Storm damage or urgent repairs? Don't wait - call us now for immediate assistance.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-montserrat font-bold text-lg">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

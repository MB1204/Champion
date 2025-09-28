
import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Phone, Mail, Clock, ArrowRight, User, Home, PhoneCall, AtSign, MapPin, Construction, AlertTriangle, MessageSquare, Hand, Calendar } from "lucide-react";

export default function Quote() {
  const [state, handleSubmit] = useForm("xjkakkaz");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-montserrat font-black text-2xl text-gray-900 mb-4">
            REQUEST RECEIVED!
          </h2>
          <p className="font-open-sans text-gray-600 mb-6">
            Thank you for your interest in Champion Metal. Our team will review your request 
            and contact you within 24 hours to schedule your free inspection.
          </p>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-500" />
              <span className="font-open-sans text-gray-700">Call us: (734) 347-9802</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-500" />
              <span className="font-open-sans text-gray-700">Email: 1337everything@proton.me</span>
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
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  className="border-gray-300 focus:border-red-500"
                />
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  className="border-gray-300 focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border-gray-300 focus:border-red-500"
                />
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="border-gray-300 focus:border-red-500"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            {/* Address Information */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Property Address
                </label>
                <Input
                  id="address"
                  name="address"
                  className="border-gray-300 focus:border-red-500"
                />
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  ZIP Code
                </label>
                <Input
                  id="zip"
                  name="zip"
                  className="border-gray-300 focus:border-red-500"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full border-gray-300 focus:border-red-500 rounded-md p-2 border"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="standing-seam">Standing Seam Metal Roof</option>
                  <option value="seamless-gutters">Seamless Gutters</option>
                  <option value="copper-systems">Copper Systems</option>
                  <option value="roof-repair">Roof Repair</option>
                  <option value="inspection">Inspection</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Project Urgency
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  defaultValue=""
                  className="w-full border-gray-300 focus:border-red-500 rounded-md p-2 border"
                >
                  <option value="" disabled>How urgent is this?</option>
                  <option value="emergency">Emergency - ASAP</option>
                  <option value="urgent">Urgent - Within 1 week</option>
                  <option value="soon">Soon - Within 1 month</option>
                  <option value="planning">Planning - 2-3 months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                Project Description
              </label>
              <Textarea
                id="description"
                name="description"
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
                <select
                  id="contactPreference"
                  name="contactPreference"
                  defaultValue=""
                  className="w-full border-gray-300 focus:border-red-500 rounded-md p-2 border"
                >
                  <option value="" disabled>How should we contact you?</option>
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                  <option value="email">Email</option>
                  <option value="any">Any method is fine</option>
                </select>
              </div>
              <div>
                <label className="font-open-sans font-semibold text-gray-700 mb-2 block">
                  Best Time to Contact
                </label>
                <select
                  id="contactTime"
                  name="contactTime"
                  defaultValue=""
                  className="w-full border-gray-300 focus:border-red-500 rounded-md p-2 border"
                >
                  <option value="" disabled>When is best to reach you?</option>
                  <option value="morning">Morning (8 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-open-sans text-sm text-gray-600 mb-4">
                By submitting this form, you consent to receive marketing communications from Champion Metal. 
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
                disabled={state.submitting}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 font-montserrat font-bold text-lg uppercase disabled:bg-gray-500"
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
            <a href="tel:7343479802">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-montserrat font-bold text-lg">
                CALL (734) 347-9802
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

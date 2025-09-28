

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Award,
  Shield,
  CreditCard,
  Users,
  Accessibility,
  ArrowRight,
  Home,
  Clock,
  Briefcase,
  Droplets
} from "lucide-react";

const topBarItems = [
{ title: "Referral Rewards", icon: Award, url: createPageUrl("ReferralRewards") },
{ title: "Insurance", url: createPageUrl("Insurance"), icon: Shield },
{ title: "Financing", url: createPageUrl("Financing"), icon: CreditCard }];

const mainNavItems = [
{ id: 'Roofs', titleLines: ["STANDING SEAM", "ROOFS"], url: createPageUrl("StandingSeamRoofs"), icon: Home },
{ id: 'Gutters', titleLines: ["SEAMLESS", "GUTTERS"], url: createPageUrl("SeamlessGutters"), icon: Home },
{ id: 'Copper', titleLines: ["COPPER", "SYSTEMS"], url: createPageUrl("CopperSystems"), icon: Home }];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800;900&family=Open+Sans:wght@400;600;700&display=swap');

        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#1C1C1C] text-white shadow-lg">
        {/* Top utility bar */}
        <div className="bg-[#1C1C1C]">
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center h-10 text-sm">
            <div className="hidden md:flex items-center gap-6 font-open-sans">
              {topBarItems.map((item) =>
              <Link
                key={item.title}
                to={item.url || "#"}
                className="flex items-center gap-2 text-white hover:text-red-300 transition-colors">
                  <item.icon className="w-5 h-5 text-red-500" />
                  {item.title}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Main Navigation Row */}
        <div className="max-w-7xl mx-auto px-4 flex items-center py-5">
          {/* Logo */}
          <Link to={createPageUrl("Homepage")} className="flex-shrink-0">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/fd0dbc91f_Champion_I-01-removebg-preview.png"
              alt="Champion Metal Contracting Logo"
              className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Main Navigation - Right Side */}
          <div className="hidden lg:flex items-center gap-16 pr-4 ml-auto">
            {mainNavItems.map((item) =>
            <Link
              key={item.id}
              to={item.url}
              className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#262626] rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-montserrat font-bold text-base uppercase leading-tight text-white text-center group-hover:text-red-500 transition-colors">
                  {item.titleLines.map((line) => <div key={line}>{line}</div>)}
                </div>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              className="p-2 text-white hover:text-red-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen &&
        <div className="lg:hidden pb-4 px-4 border-t border-neutral-700">
            <div className="space-y-4 pt-4">
              {mainNavItems.map((item) =>
            <Link
              key={item.titleLines.join(' ')}
              to={item.url}
              className="flex items-center gap-4 group"
              onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-10 h-10 bg-[#262626] rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-montserrat font-bold text-sm uppercase leading-tight text-white">
                    {item.titleLines.map((line) => <div key={line}>{line}</div>)}
                  </div>
                </Link>
            )}
              <div className="border-t border-neutral-700 my-4"></div>
              {topBarItems.map((item) =>
            <Link
              key={item.title}
              to={item.url}
              className="flex items-center gap-3 py-2 font-open-sans text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
                  <item.icon className="w-4 h-4 text-gray-400" />
                  {item.title}
                </Link>
            )}
            </div>
          </div>
        }
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Consistent Bottom Accent for All Pages */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      {/* Accessibility Widget */}
      <button
        className="fixed bottom-6 left-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-800 transition-colors z-50"
        onClick={() => setShowAccessibility(!showAccessibility)}>
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Quote CTA Button */}
      <Link
        to={createPageUrl("Quote")}
        className="fixed bottom-6 right-6 bg-red-600 text-white px-4 md:px-6 py-3 rounded-full font-montserrat font-bold text-sm uppercase hover:bg-red-700 transition-colors shadow-lg z-50 flex items-center gap-2">
        <span className="hidden md:inline">GET QUOTE</span>
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
      </Link>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Services Column */}
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-6 text-[#DB4444]">Services</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("StandingSeamRoofs")} className="block text-gray-300 hover:text-white transition-colors">Standing Seam Roofs</Link>
                <Link to={createPageUrl("SeamlessGutters")} className="block text-gray-300 hover:text-white transition-colors">Seamless Gutters</Link>
                <Link to={createPageUrl("CopperSystems")} className="block text-gray-300 hover:text-white transition-colors">Copper Systems</Link>
                <Link to={createPageUrl("Quote")} className="block text-gray-300 hover:text-white transition-colors">Emergency Repairs</Link>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-6 text-[#DB4444]">Company</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("ReferralRewards")} className="block text-gray-300 hover:text-white transition-colors">Referral Program</Link>
                <Link to={createPageUrl("Financing")} className="block text-gray-300 hover:text-white transition-colors">Financing</Link>
                <Link to={createPageUrl("Insurance")} className="block text-gray-300 hover:text-white transition-colors">Insurance</Link>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-6 text-[#DB4444]">Contact</h3>
              <div className="space-y-4 text-gray-300">
                <a href="tel:9415557663" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-[#DB4444] flex-shrink-0" />
                  <span className="">(734)-347-9802</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#DB4444] flex-shrink-0" />
                  <span className="">Ann Arbor, MI</span>
                </div>
                <a href="mailto:office@customfitmetal.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-[#DB4444] flex-shrink-0" />
                  <span>office@customfitmetal.com</span>
                </a>
              </div>
            </div>

            {/* Emergency Service Column */}
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-6 text-[#DB4444]">Emergency Service</h3>
              <p className="font-open-sans text-gray-300 mb-4">
                Storm damage? We're here to help 24/7.
              </p>
              <a href="tel:9415557663">
                <button className="bg-[#DB4444] hover:bg-[#C03939] text-white font-montserrat font-bold w-full py-3 rounded-md flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  CALL NOW
                </button>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
             <div className="flex justify-center mb-6">
                <Link to={createPageUrl("Homepage")}>
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa4517a991adb8ec86d5aa/fd0dbc91f_Champion_I-01-removebg-preview.png" 
                    alt="Champion Metal Contracting Logo"
                    className="h-16 w-auto"
                  />
                </Link>
            </div>
            <p className="">© 2025 Champion Metal Contracting. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>);
}

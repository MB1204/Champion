import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, features, image, buttonText, buttonLink, className = "" }) {
  return (
    <div className={`group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${className}`}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="font-montserrat font-black text-2xl text-gray-900 mb-3">
          {title}
        </h3>
        <p className="font-open-sans text-gray-600 mb-4">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Link to={buttonLink}>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold py-3 uppercase group-hover:bg-red-700 transition-colors">
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
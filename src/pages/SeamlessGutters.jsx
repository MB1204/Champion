import React from "react";
import HeroSection from "../components/seamless-gutters/HeroSection";
import BenefitsSection from "../components/seamless-gutters/BenefitsSection";
import StyleGuideSection from "../components/seamless-gutters/StyleGuideSection";
import CtaSection from "../components/seamless-gutters/CtaSection";

export default function SeamlessGutters() {
  return (
    <div>
      <HeroSection />
      <StyleGuideSection />
      <BenefitsSection />
      <CtaSection />
    </div>
  );
}
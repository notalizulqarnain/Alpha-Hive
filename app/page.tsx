import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import MoreThanAdvice from "@/components/sections/MoreThanAdvice";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import HowWeHelpMountain from "@/components/sections/HowWeHelpMountain";
import TeamPreview from "@/components/sections/TeamPreview";
import InstitutionalStrength from "@/components/sections/InstitutionalStrength";
import InTheNewsSection from "@/components/sections/InTheNewsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-8 sm:space-y-16">
      <HeroSection />
      <MoreThanAdvice />
      <WhoWeHelp />
      <HowWeHelpMountain />
      <TeamPreview />
      <InstitutionalStrength />
      <InTheNewsSection />
    </div>
  );
}

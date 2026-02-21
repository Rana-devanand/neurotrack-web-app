import React from "react";
import HeroSection from "../Component/home/HeroSection";
import StatsBar from "../Component/home/StatsBar";
import FeaturesSection from "../Component/home/FeaturesSection";
import UseCasesSection from "../Component/home/UseCasesSection";
import HowItWorksSection from "../Component/home/HowItWorksSection";
import PricingSection from "../Component/home/PricingSection";
import DownloadCTA from "../Component/home/DownloadCTA";

/**
 * HomePage
 * Thin page-level orchestrator that composes all home sections.
 * Business logic and state live inside each child component.
 */
const HomePage: React.FC = () => (
  <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
    <HeroSection />
    {/* <StatsBar /> */}
    <FeaturesSection />
    <UseCasesSection />
    <HowItWorksSection />
    <PricingSection />
    <DownloadCTA />
  </main>
);

export default HomePage;

import { FeaturesSection } from "@/components/landing/Features";
import HeroSection from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Pricing />
    </>
  );
}

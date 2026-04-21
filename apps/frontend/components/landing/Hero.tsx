import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* "New" Badge */}
      <div className="flex items-center gap-2 mb-8 animate-fade-in">
        <Badge
          variant="outline"
          className="border-[#CCFF00] text-[#CCFF00] rounded-full px-4 py-1"
        >
          NEW
        </Badge>
        <span className="text-sm font-medium text-gray-400 flex items-center hover:text-white cursor-pointer transition">
          AI-Powered Viral Clip Generator{" "}
          <ArrowRight className="ml-1 w-4 h-4" />
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl md:text-6xl font-bold text-center tracking-tight max-w-5xl mb-6">
        Record studio quality <br />
        <span className="text-[#CCFF00]">at the speed of thought.</span>
      </h1>



      <p className="mt-8 text-gray-500 font-extrabold text-sm  tracking-widest">
        Powered by WebRTC & Mediasoup
      </p>
    </section>
  );
}

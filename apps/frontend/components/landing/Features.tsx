import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Scissors, Zap, Share2 } from "lucide-react";

const features = [
  {
    title: "Lossless Local Recording",
    desc: "Studio-grade 4K video and WAV audio recorded locally on each device, then uploaded progressively.",
    icon: <Video className="text-[#CCFF00]" />,
  },
  {
    title: "AI Viral Engine",
    desc: "Automatically turn 1 hour of recording into 20 high-potential Reels, Shorts, and TikToks.",
    icon: <Scissors className="text-[#CCFF00]" />,
  },
  {
    title: "Zero-Latency Stream",
    desc: "Built on Mediasoup for sub-100ms latency during live recordings and guest interaction.",
    icon: <Zap className="text-[#CCFF00]" />,
  },
  {
    title: "One-Click Distribution",
    desc: "Export directly to Spotify, YouTube, and Apple Podcasts without leaving the app.",
    icon: <Share2 className="text-[#CCFF00]" />,
  },
];

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-20 bg-black">
      {features.map((f, i) => (
        <Card key={i} className="bg-[#0A0A0A] border-white/5 hover:border-[#CCFF00]/50 transition duration-300">
          <CardHeader>
            <div className="mb-4">{f.icon}</div>
            <CardTitle className="text-white">{f.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
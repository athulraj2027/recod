"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download, Trash2, Video } from "lucide-react";
import VideoPlayerModal from "../components/VideoPlayerModal";

export default function RecordingsPage() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    id: number;
  } | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/recordings")
      .then((res) => res.json())
      .then((data) => {
        setRecordings(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching recordings:", err));
  }, []);

  const backendBaseUrl = "http://localhost:4000";

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter">
          Your Studio <span className="text-[#CCFF00]">Vault</span>
        </h1>
        <p className="text-gray-400">
          Manage and export your 4K local recordings.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#CCFF00]"></div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recordings.map((rec) => (
            <Card
              key={rec.id}
              onClick={() =>
                setSelectedVideo({
                  url: `${backendBaseUrl}${rec.url}`,
                  id: rec.id,
                })
              }
              className="bg-[#0A0A0A] border-white/5 overflow-hidden group hover:border-[#CCFF00]/30 transition-all duration-300"
            >
              <CardContent className="p-0 relative aspect-video bg-zinc-900 flex items-center justify-center">
                {/* Overlay with Play Button on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <Button
                    size="icon"
                    className="bg-[#CCFF00] hover:bg-[#b8e600] rounded-full h-12 w-12 text-black"
                  >
                    <Play fill="black" />
                  </Button>
                </div>

                {/* Actual Video Preview or Icon */}
                <video
                  src={`${backendBaseUrl}${rec.url}`}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-gray-300 border border-white/10">
                  HD .WEBM
                </div>
              </CardContent>

              <CardFooter className="p-4 flex flex-col items-start gap-4">
                <div className="w-full">
                  <p className="text-sm font-medium text-white truncate">
                    Recording_{rec.id}
                  </p>
                  <p className="text-xs text-gray-500 font-mono">
                    ID: {rec.url.split("/").pop().slice(0, 8)}...
                  </p>
                </div>

                <div className="flex w-full gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 h-9 text-xs"
                  >
                    <Download size={14} className="mr-2" /> Export
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-red-500/10 border-red-500/20 hover:bg-red-500/20 h-9 w-9 p-0 text-red-500"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}

          {/* Empty State / New Recording Prompt */}
          {recordings.length === 0 && (
            <div className="col-span-full py-20 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-3xl">
              <Video size={48} className="text-gray-700 mb-4" />
              <p className="text-gray-500">
                No recordings found in your vault.
              </p>
              <Button className="mt-4 bg-[#CCFF00] text-black">
                Start New Session
              </Button>
            </div>
          )}

          {/* The Modal */}
          <VideoPlayerModal
            isOpen={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
            videoUrl={selectedVideo?.url || ""}
            recordingId={selectedVideo?.id || 0}
          />
        </div>
      )}
    </div>
  );
}

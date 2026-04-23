"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  recordingId: number | string;
}

const VideoPlayerModal = ({
  isOpen,
  onClose,
  videoUrl,
  recordingId,
}: VideoModalProps) => {
  if (!videoUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl bg-[#0A0A0A] border-white/10 p-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <DialogHeader className="p-4 border-b border-white/5 flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-white font-mono text-sm uppercase tracking-widest">
            Reviewing: Recording_{recordingId}.webm
          </DialogTitle>
        </DialogHeader>

        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain shadow-2xl"
          />
        </div>

        <div className="p-4 bg-black/40 backdrop-blur-md flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 uppercase font-bold">
                Resolution
              </span>
              <span className="text-xs text-white">4K Lossless</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase font-bold">
                Format
              </span>
              <span className="text-xs text-white">WebM / Opus</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-[#CCFF00] hover:text-black transition-all"
            >
              <Download size={16} className="mr-2" />
              Download
            </Button>
            <Button
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-white/10"
            >
              <Share2 size={16} />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerModal;

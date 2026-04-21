"use client";
import { RecorderState } from "@/hooks/useRecorder";
import { useEffect, useRef } from "react";

export default function VideoPreview({
  stream,
  previewUrl,
  state,
}: {
  stream: MediaStream | null;
  previewUrl: string | null;
  state: RecorderState;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (state === "stopped" && previewUrl) {
      videoRef.current.srcObject = null; // 👈 IMPORTANT
    } else if (stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, state, previewUrl]);

  return (
    <div className="relative aspect-video bg-[#0A0A0A] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
      {state === "stopped" && previewUrl ? (
        <video
          key={previewUrl} // 🔥 forces re-render
          src={previewUrl}
          controls
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover mirror"
        />
      )}

      {state === "recording" && (
        <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-red-500/50">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Recording
          </span>
        </div>
      )}
    </div>
  );
}

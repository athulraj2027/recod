"use client";
import React, { useEffect, useState } from "react";
import { useRecorder } from "@/hooks/useRecorder";
import { Card } from "@/components/ui/card";
import VideoPreview from "@/VideoRecorder/components/VideoPreview";
import RecordingControls from "@/VideoRecorder/components/RecordingControls";

export default function StudioPage() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const { state, startRecording, stopRecording, previewUrl, uploadRecording } =
    useRecorder();
  const [uploadProgress, setUploadProgress] = useState(100);

  useEffect(() => {
    async function setupCamera() {
      try {
        const s = await navigator.mediaDevices.getUserMedia({
          video: {
            width: 1280,
            height: 720,
          },
          audio: true,
        });
        setStream(s);
      } catch (err) {
        console.error("Camera access denied", err);
      }
    }
    setupCamera();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      {/* Header Info */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold tracking-tight">
          Studio Session #102
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${stream ? "bg-green-500" : "bg-red-500"}`}
            />
            Camera: {stream ? "Active" : "Offline"}
          </span>
        </div>
      </div>

      {/* Main Recording Area */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <VideoPreview stream={stream} previewUrl={previewUrl} state={state} />
        </div>

        {/* Sidebar / Controls */}
        <div className="space-y-4">
          <Card className="bg-[#0A0A0A] border-white/5 p-6 h-full">
            <h3 className="text-sm font-mono text-gray-500 uppercase mb-6">
              Controls
            </h3>
            <RecordingControls
              state={state}
              onUpload={uploadRecording}
              onStart={() => stream && startRecording(stream)}
              onStop={stopRecording}
            />
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                <span>Local Sync</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-[#CCFF00] h-full transition-all duration-500"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

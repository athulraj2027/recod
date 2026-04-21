import { Button } from "@/components/ui/button";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Play,
  Square,
  UploadCloud,
} from "lucide-react";

export default function RecordingControls({
  state,
  onStart,
  onStop,
  onUpload,
}: any) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        {state === "idle" && (
          <Button
            onClick={onStart}
            className="bg-[#CCFF00] hover:bg-[#b8e600] text-black w-full py-8 text-lg font-bold"
          >
            <Play className="mr-2 fill-current" /> Start Studio
          </Button>
        )}

        {state === "recording" && (
          <Button
            onClick={onStop}
            variant="destructive"
            className="w-full py-8 text-lg font-bold"
          >
            <Square className="mr-2 fill-current" /> Stop Session
          </Button>
        )}

        {state === "stopped" && (
          <Button
            onClick={onUpload}
            disabled={state === "uploading"}
            className="bg-blue-600 hover:bg-blue-700 text-white w-full py-8 text-lg font-bold"
          >
            {state === "uploading" ? "Uploading..." : "Upload Tracks"}
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-6">
        <Button
          variant="outline"
          className="bg-white/5 border-white/10 hover:bg-white/20"
        >
          <Mic size={18} />
        </Button>
        <Button
          variant="outline"
          className="bg-white/5 border-white/10 hover:bg-white/20"
        >
          <Video size={18} />
        </Button>
      </div>
    </div>
  );
}

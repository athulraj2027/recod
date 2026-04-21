// hooks/useRecorder.ts
import { useState, useRef } from "react";

export type RecorderState =
  | "idle"
  | "recording"
  | "stopped"
  | "uploading"
  | "uploaded";

export const useRecorder = () => {
  const [state, setState] = useState<RecorderState>("idle");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = (stream: MediaStream) => {
    chunksRef.current = [];
    const recorder = new MediaRecorder(stream, {
      mimeType: "video/webm;codecs=vp9",
    });

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      console.log("NEW URL:", URL.createObjectURL(blob));
      setVideoBlob(blob);
      setPreviewUrl(URL.createObjectURL(blob));
      console.log(previewUrl);
      setState("stopped");
    };

    recorder.start(5000); // Collect chunks every second for progressive upload safety
    mediaRecorderRef.current = recorder;
    setState("recording");
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
  };

  const uploadRecording = async () => {
    if (!videoBlob) return;

    setState("uploading");

    const formData = new FormData();
    formData.append("file", videoBlob, "recording.webm");

    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      console.log("Uploaded:", data);

      setState("uploaded");
    } catch (err) {
      console.error(err);
      setState("stopped");
    }
  };

  return {
    state,
    setState,
    previewUrl,
    startRecording,
    stopRecording,
    uploadRecording,
  };
};

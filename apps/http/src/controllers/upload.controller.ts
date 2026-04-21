import type { Request, Response } from "express";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";

const uploadVideo = async (req: Request, res: Response) => {
  console.log("req file  :", req.file);
  if (!req.file)
    return res.status(400).json({ message: "No video file found" });

  try {
    const uploadDir = path.join(process.cwd(), "uploads");
    await mkdir(uploadDir, { recursive: true });

    // unique filename
    const fileName = `${uuid()}.webm`;
    const filePath = path.join(uploadDir, fileName);

    await writeFile(filePath, req.file.buffer);

    return res.status(200).json({ message: "Video uploaded" });
  } catch (error) {
    console.log("errorr : ", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export default { uploadVideo };

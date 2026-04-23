import type { Request, Response } from "express";
import { readdir } from "fs/promises";
import path from "path";

const getRecordings = async (req: Request, res: Response) => {
  const dir = path.join(process.cwd(), "uploads");

  const files = await readdir(dir);

  const recordings = files.map((file, i) => ({
    id: i,
    url: `/uploads/${file}`,
  }));

  res.json(recordings);
};

const getRecordingById = async (req: Request, res: Response) => {};

export default { getRecordings, getRecordingById };

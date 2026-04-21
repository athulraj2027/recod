import express from "express";
import uploadController from "../../controllers/upload.controller.js";
import { upload } from "../../lib/upload.js";
const router = express.Router();

router.post("/", upload.single("file"), uploadController.uploadVideo);

export default router;

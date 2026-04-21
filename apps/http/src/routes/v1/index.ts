import express from "express";
import meetRoutes from "./meet.routes.js";
import uploadRoutes from "./upload.routes.js";
import recordingRoutes from "./recording.routes.js";

const router = express.Router();

router.use("/meet", meetRoutes);
router.use("/upload", uploadRoutes);
router.use("/recording", recordingRoutes);

export default router;

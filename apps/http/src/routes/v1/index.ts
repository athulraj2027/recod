import express from "express";
import meetRoutes from "./meet.routes.js";
import uploadRoutes from "./upload.routes.js";
import recordingRoutes from "./recording.routes.js";
import authRoutes from "./auth.routes.js";
import otpRoutes from "./otp.routes.js";

const router = express.Router();

router.use("/meet", meetRoutes);
router.use("/upload", uploadRoutes);
router.use("/recordings", recordingRoutes);
router.use("/auth", authRoutes);
router.use("/otp", otpRoutes);

export default router;

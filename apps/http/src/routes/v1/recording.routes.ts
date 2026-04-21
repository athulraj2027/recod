import express from "express";
import recordingController from "../../controllers/recording.controller.js";
const router = express.Router();

router.get("/", recordingController.getRecordings);
router.get("/:id", recordingController.getRecordingById);

export default router;

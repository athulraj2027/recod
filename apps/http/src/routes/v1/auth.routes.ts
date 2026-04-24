import express from "express";
import authController from "../../controllers/auth.controller.js";
const router = express.Router();

router.post("/signin", authController.signin);
router.post("/me", authController.me);
router.post("/logout", authController.logout);

export default router;

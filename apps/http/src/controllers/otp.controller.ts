import type { Request, Response } from "express";

class OtpController {
  sendOtp = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) return res.status(400).json({});
    } catch (error) {}
  };

  verifyOtp = async (req: Request, res: Response) => {};
}

export default new OtpController();

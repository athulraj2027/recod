import type { Request, Response } from "express";

class AuthController {
  signin = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
  };

  me = async (req: Request, res: Response) => {};

  logout = async (req: Request, res: Response) => {};
}

export default new AuthController();

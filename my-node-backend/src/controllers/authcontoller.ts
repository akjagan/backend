import { Request, Response } from "express";

export const signIn = (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.status(200).json({ message: "Sign-In successful!" });
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.status(200).json({ message: "Login successful!" });
};

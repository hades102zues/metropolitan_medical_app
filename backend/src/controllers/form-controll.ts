import { Request, Response, NextFunction } from "express";

exports.getAvailableTimes = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  return res.status(200).json({ message: "Available times" });
};
exports.postContactForm = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  return res.status(200).json({ message: "Contact Form" });
};
exports.postAppForm = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  return res.status(200).json({ message: "App form" });
};

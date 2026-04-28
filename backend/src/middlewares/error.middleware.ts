import type { Request, Response, NextFunction } from "express";
import ApiError from "../utils/ApiError";

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ApiError) {
    res.status(err.statusCodes).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
    return;
  }

  // unknown error
  console.error("Unhandled Error: ", err);

  res.status(500).json({
    success: false,
    message: `Something went wrong: ${err.name} : ${err.message}`,
    errors: [],
  });
};

export default errorMiddleware;

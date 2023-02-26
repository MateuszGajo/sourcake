import { NextFunction, Response, Request } from "express";
import * as yup from "yup";

export const validateCreds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object({
    login: yup.string().required("auth:loginRequired"),
    password: yup
      .string()
      .required("auth:passwordRequired")
      .min(8, "auth:passwordMin8Char"),
  });

  try {
    await schema.validate(req.body);
    next();
  } catch (e) {
    if (e instanceof Error) return res.status(400).json(req.t(e.message));
  }
};

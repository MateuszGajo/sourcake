import { Response, Request, NextFunction } from "express";

const skipCSRFValidationPaths = ["auth/generateCSRD", "auth/verify"];

export default (req: Request, res: Response, next: NextFunction) => {
  if (skipCSRFValidationPaths.includes(req.path)) return next();

  const headerCsrfToken = req.headers.csrftoken;
  const session = (req as any).session;
  const sessionCsrfToken = session.csrfToken;

  if (!sessionCsrfToken || headerCsrfToken !== sessionCsrfToken)
    return res.status(400).json("invalid csrf token");
  next();
};

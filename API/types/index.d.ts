import { Request } from "express";
import { I18NextRequest } from "i18next-http-middleware";
declare global {
  namespace Express {
    interface Request extends I18NextRequest {}
  }
}

export {};

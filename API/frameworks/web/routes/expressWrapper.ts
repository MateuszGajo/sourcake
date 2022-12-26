import { NextFunction, Request, Response } from "express";
import logger from "../../../config/logger";
import { ControllerResponse } from "../../../model/global";

export default (callback: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = {
      ...req.body,
    };

    const response: ControllerResponse = await callback(data);
    res.status(response.status).send(response.data);
  };
};

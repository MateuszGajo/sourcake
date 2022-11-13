import { NextFunction, Request, Response } from "express";
import { ControllerResponse } from "../../../model/global";

export default (callback: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = {
      ...req.body,
    };

    const response: ControllerResponse = callback(data);
    res.status(response.status).send(response.data);
  };
};

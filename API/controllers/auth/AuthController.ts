import { Request, Response, Router } from "express";
import { validateCreds } from "./Validator";
import bcrypt from "bcrypt";
import UserModel from "../../model/User";
import config from "../../config/config";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import ValidateCSRF from "../middlewares/ValidateCSRF";
const crypto = require("crypto");
dotenv.config();
const router = Router();

router.get("/generateCSRF", (req: Request, res: Response) => {
  const date = new Date();

  const session = (req as any).session;
  const generatedCSRFToken = crypto.randomBytes(100).toString("base64");

  session.csrf = generatedCSRFToken;
  console.log("generate csrf", generatedCSRFToken);

  res.cookie("cookie", {});

  res.status(200).json({
    csrfToken: generatedCSRFToken,
  });
});

router.get("/checkCSRF", (req, res) => {
  console.log("cechk csrf");
  const session = (req as any).session;
  console.log(session.csrf);

  res.status(200).json("ok");
});

router.post("/login", async (req, res) => {
  console.log("destroy session??");
  console.log("cechk csrf");
  const session = (req as any).session;
  console.log(session.csrf);

  (req as any).session.regenerate((err: any) => console.log(err));

  const generatedCSRFToken = crypto.randomBytes(100).toString("base64");
  session.csrf = generatedCSRFToken;
  console.log("generate csrf", generatedCSRFToken);

  res.cookie("cookie", {});

  res.status(200).json({
    csrfToken: generatedCSRFToken,
  });
  // (req as any).session.destroy();
  // console.log((req as any).session);
});

router.get("/verify");

router.post("/register", async (req: Request, res: Response) => {
  const { login, password } = req.body;

  const user = await UserModel.findOne({ login });

  if (user) return res.status(409).json(req.t("auth:userAlreadyExists"));

  const newUser = await UserModel.create({ login, password });

  return res.status(200).json({ user: newUser });
});

export default router;

import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");
const cors = require("cors");
var cookies = require("cookie-parser");
const sessions = require("express-session");
const crypto = require("crypto");
import AuthController from "./controllers/auth/AuthController";
import ValidateCSRF from "./controllers/middlewares/ValidateCSRF";

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    ns: ["auth"],
    defaultNS: "auth",
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json",
    },
  });

const app = express();
const port = process.env.PORT ?? 8000;

const loadApp = async () => {
  app.listen(port, () => console.log(`app is listening on port ${port}`));

  app.use(middleware.handle(i18next));
  app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
  app.use(express.json());
  app.use(cookies());
  app.use(express.urlencoded({ extended: true }));
  const path = require("path");
  const oneDay = 1000 * 60 * 60 * 24;
  app.use(
    sessions({
      secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
      saveUninitialized: true,
      cookie: { maxAge: oneDay },
      resave: false,
    })
  );

  app.use(ValidateCSRF);

  const connectionString = `mongodb://0.0.0.0:27017/dev`;

  await mongoose.connect(connectionString);
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use("/auth", AuthController);

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
};

loadApp();

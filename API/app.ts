import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import projectDependencies from "./config/projectDependencies";

const app = express();
const port = process.env.PORT ?? 3000;

const loadApp = () => {
  app.listen(port, () => console.log(`app is listening on port ${port}`));
};

projectDependencies.DatabaseService.initDatabase().then(loadApp);

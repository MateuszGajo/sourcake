import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import projectDependencies from "./config/projectDependencies";
import routes from "./frameworks/web/routes";

const app = express();
const port = process.env.PORT ?? 5000;

const loadApp = () => {
  app.listen(port, () => console.log(`app is listening on port ${port}`));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", routes(projectDependencies));
};

projectDependencies.DatabaseService.initDatabase().then(loadApp);

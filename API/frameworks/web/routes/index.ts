import express from "express";
import projectDependencies from "../../../config/projectDependencies";

export default (dependencies: typeof projectDependencies) => {
  const routes = express.Router();

  routes.use("/user");
};

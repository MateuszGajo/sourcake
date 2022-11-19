import express from "express";
import projectDependencies from "../../../config/projectDependencies";
import user from "./user";

export default (dependencies: typeof projectDependencies) => {
  const routes = express.Router();

  const userRouter = user(dependencies);

  routes.use("/user", userRouter);

  return routes;
};

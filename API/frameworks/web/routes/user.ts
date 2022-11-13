import express from "express";
import UserController from "../../../controllers/user/UserController";
import { ProjectDependencies } from "../../../model/global";
import expressWrapper from "./expressWrapper";

export default (dependencies: ProjectDependencies) => {
  const router = express.Router();

  const controller = UserController(dependencies);

  router.route("/add").post(expressWrapper(controller.addNewUser));

  return router;
};

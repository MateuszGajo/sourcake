import projectDependencies from "../config/projectDependencies";

export type ProjectDependencies = typeof projectDependencies;
export type UserRepository =
  typeof projectDependencies.DatabaseService.userRepository;

export interface ControllerResponse {
  status: number;
  data: any;
}

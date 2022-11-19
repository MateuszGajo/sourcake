import ApiError from "../frameworks/Error/ApiError";
import { ControllerResponse } from "../model/global";

export const catchErrorWrapper = (callback: any) => {
  return async (...args: any): Promise<ControllerResponse> => {
    try {
      const response = await callback.call(args);
      return response;
    } catch (error) {
      if (error instanceof ApiError) {
        return {
          status: error.status,
          data: error.message,
        };
      }
    }

    return {
      status: 500,
      data: "Api error",
    };
  };
};

export const run = <T extends Record<keyof T, Function>>(functions: T): T => {
  return Object.entries(functions).reduce(
    (acc, [key, func]) => ({
      ...acc,
      [key]: catchErrorWrapper(func),
    }),
    {}
  ) as T;
};

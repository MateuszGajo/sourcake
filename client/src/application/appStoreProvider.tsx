import React from "react";
import { Provider } from "react-redux";
import { appStoreImplementation } from "./appStoreImplementation";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const appStoreProvider = ({ children }: IProps) => {
  return <Provider store={appStoreImplementation}>{children}</Provider>;
};

export default appStoreProvider;

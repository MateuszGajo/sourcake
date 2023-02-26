import React from "react";
import { render } from "@testing-library/react";
import AppThemeProvider from "../providers/ThemeProvider";
import { MemoryRouter } from "react-router-dom";

const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <AppThemeProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </AppThemeProvider>
  );
};

const customRender = (ui: JSX.Element, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

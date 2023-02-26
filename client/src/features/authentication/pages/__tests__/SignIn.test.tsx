import SignIn from "../SignIn";
import { MemoryRouter, MemoryRouter as Router } from "react-router-dom";
import { act, screen, waitFor } from "@testing-library/react";
import { fireEvent, render } from "../../../../tests/testUtils";
import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";

describe("login form", () => {
  it("Does form display validation errors", async () => {
    const {} = render(<SignIn />);

    const loginInput = screen.getByRole("textbox", {
      name: "localized:common:form.login",
    });

    await userEvent.type(loginInput, "value");
    // await waitFor(() => expect(loginInput).toHaveValue("value"));
    await userEvent.clear(loginInput);

    expect(
      screen.getByText("localized:common:form.fieldRequired")
    ).toBeInTheDocument();
  });
});

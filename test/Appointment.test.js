import React from "react";
import * as ReactDOM from 'react-dom/client';
import { Appointment } from "../src/Appointment";
import { act } from "react-dom/test-utils";

describe("Appointment", () => {
  let container;
  let customer;
  beforeEach(() => {
    container = document.createElement("div");
  });
  const render = (component) =>
    act(() => ReactDOM.createRoot(container).render(component));

  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Ashley");
  });
  it("renders another customer first name", () => {
    customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Jordan");
  });
});

import React from "react";
import ReactDom from "react-dom/client";
import { Appointment } from "../src/Appointment";
import { act } from "react-dom/test-utils";

describe("Appointment", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };
    const component = <Appointment customer={customer} />;

    act(() => {
      ReactDom.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Ashley");
  });
  it("renders another customer first name", () => {
    const customer = { firstName: "Jordan" };
    const component = <Appointment customer={customer} />;

    act(() => {
      ReactDom.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Jordan");
  });
});

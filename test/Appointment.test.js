import React from "react";
import ReactDom from "react-dom/client";
import { Appointment } from "../src/Appointment";
import { act } from "react-dom/test-utils";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");
    document.body.replaceChildren(container);

    act(() => {
      ReactDom.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Ashley");
  });
});

describe("Appointment", () => {
  it("renders another customer first name", () => {
    const customer = { firstName: "Jordan" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");
    document.body.replaceChildren(container);

    act(() => {
      ReactDom.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Jordan");
  });
});
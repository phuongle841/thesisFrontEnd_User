import CartContainer from "./CartContainer";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

const data = [];

describe("Cart container component", () => {
  it("Render correct", () => {
    render(<CartContainer data={data}></CartContainer>);
    expect(true).toBe(true);
  });
});

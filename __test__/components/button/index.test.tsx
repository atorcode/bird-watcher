import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "@/app/components/button";

test("Button's text is correct", () => {
  render(<Button />);
  const buttonElement = screen.getByRole("button", { name: /^discover$/i });
  expect(buttonElement).toBeInTheDocument();
});

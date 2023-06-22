import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HamburgerMenu } from "@/app/components/hamburger-menu";

test("HamburgerMenu is present", () => {
  render(<HamburgerMenu />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

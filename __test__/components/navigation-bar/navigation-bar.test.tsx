import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavigationBar } from "@/app/components/navigation-bar";

test("Navigation bar is present", () => {
  render(<NavigationBar />);
  const navElement = screen.getByRole("navigation");
  expect(navElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hero } from "@/app/components/hero";

test("Application name's text is correct", () => {
  render(<Hero />);
  const headingElement = screen.getByRole("heading", {
    level: 1,
    name: /^bird watcher$/i,
  });
  expect(headingElement).toBeInTheDocument();
});

test("Tagline's text is correct", () => {
  render(<Hero />);
  const headingElement = screen.getByRole("heading", {
    level: 2,
    name: /^where feathers tell tales$/i,
  });
  expect(headingElement).toBeInTheDocument();
});

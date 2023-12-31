import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchBar } from "@/app/components/search-bar";

test("SearchBar is present", () => {
  render(<SearchBar />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

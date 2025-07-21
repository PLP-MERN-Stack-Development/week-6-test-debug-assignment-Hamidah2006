import { render, screen } from "@testing-library/react";
import Greeting from "../Greetings";

test("renders greeting", () => {
  render(<Greeting name="Hamidah" />);
  expect(screen.getByText("Hello, Hamidah!")).toBeInTheDocument();
});

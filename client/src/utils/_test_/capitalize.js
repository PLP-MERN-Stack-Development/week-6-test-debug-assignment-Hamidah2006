import { capitalize } from "../capitalize";

test("capitalizes first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

import { expect, it } from "vitest";

import { plural } from "./plural";

it.each([
  { count: 2, expected: "2 months" },
  { count: 1, expected: "1 month" },
  { count: 0, expected: "" },
])("Expect correct plural output with $expected", ({ count, expected }) => {
  expect(plural(count, "month")).toEqual(expected);
});

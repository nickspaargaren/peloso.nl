import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { expect, test } from "vitest";

import { difference } from "./difference";

dayjs.extend(duration);

test("Expect correct difference with 1 month", () => {
  expect(difference(dayjs("2022-01-01"), dayjs("2022-02-01"))).toEqual(
    "1 month",
  );
});

test("Expect correct difference with 1 month + 1 day", () => {
  expect(difference(dayjs("2022-01-01"), dayjs("2022-02-02"))).toEqual(
    "1 month",
  );
});

test("Expect correct difference with 11 months", () => {
  expect(difference(dayjs("2021-01-01"), dayjs("2021-12-01"))).toEqual(
    "11 months",
  );
});

test("Expect correct difference with 12 months", () => {
  expect(difference(dayjs("2018-01-01"), dayjs("2019-01-01"))).toEqual(
    "1 year",
  );
});

test("Expect correct difference with 1 year 1 month", () => {
  expect(difference(dayjs("2018-01-01"), dayjs("2019-02-01"))).toEqual(
    "1 year 1 month",
  );
});

test("Expect correct difference (no output) without a difference", () => {
  expect(difference(dayjs("2022-01-01"), dayjs("2022-01-01"))).toEqual("");
});

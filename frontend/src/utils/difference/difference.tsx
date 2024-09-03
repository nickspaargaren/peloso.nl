import dayjs, { Dayjs } from "dayjs";

import { plural } from "..";

export const difference = (datefrom: Dayjs, dateto: Dayjs): string => {
  const [date] = Object.values(dayjs.duration(dateto.diff(datefrom)));

  let { years, months } = date;
  const { days } = date;

  if (days > 1) {
    months += 1;
  }

  if (months === 12) {
    months = 0;
    years += 1;
  }

  if (!years && !months) {
    return "";
  }

  if (!years && months) {
    return plural(months, "month");
  }

  if (years && !months) {
    return plural(years, "year");
  }

  return `${plural(years, "year")} ${plural(months, "month")}`;
};

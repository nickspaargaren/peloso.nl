import dayjs, { Dayjs } from 'dayjs';

import { plural } from '..';

export const difference = (datefrom: Dayjs, dateto: Dayjs): string => {
  const totalDuration = dayjs.duration(dateto.diff(datefrom));

  let { years, months } = Object.values(totalDuration)[0];
  const { days } = Object.values(totalDuration)[0];

  if (days > 0) {
    months += 1;
  }

  if (months === 12) {
    months = 0;
    years += 1;
  }

  return `${plural(years, 'year')} ${plural(months, 'month')}`;
};

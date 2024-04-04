import moment from 'moment';

export const isDateInRange = (dateToCheck, startDate, endDate) => {
  return moment(dateToCheck).isBetween(
    moment(startDate),
    moment(endDate),
    null,
    "[]"
  );
};

export const getDatesRange = (startDate, endDate) => {
  const dates = [];
  let currentDate = moment(startDate);

  while (currentDate <= moment(endDate)) {
    dates.push(moment(currentDate));
    currentDate.add(1, 'day');
  }

  return dates;
};


export const getMinAndMaxDateEvents = (minStart, maxEnd, events) => {
  events.forEach((event) => {
    if (moment(event.start).isBefore(minStart)) {
      minStart = event.start;
    }
    if (moment(event.end).isAfter(maxEnd)) {
      maxEnd = event.end;
    }
  });

  return [minStart, maxEnd];
}

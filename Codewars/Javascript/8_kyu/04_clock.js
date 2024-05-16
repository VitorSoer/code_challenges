/*
    - Clock shows h hours, m minutes and s seconds after midnight.
    - Your task is to write a function which returns the time since midnight in milliseconds.
*/

const calculateMilliseconds = (value, time) => {
  const millisecondsPerTime = {
    second: 1000,
    minute: 60000,
    hour: 3600000,
  };

  return value * millisecondsPerTime[time];
};

const past = (hours, minutes, seconds) => {
  const millisecondsPerHour = calculateMilliseconds(hours, 'hour');
  const millisecondsPerMinute = calculateMilliseconds(minutes, 'minute');
  const millisecondsPerTimeSecond = calculateMilliseconds(seconds, 'second');

  return (
    millisecondsPerHour + millisecondsPerMinute + millisecondsPerTimeSecond
  );
};
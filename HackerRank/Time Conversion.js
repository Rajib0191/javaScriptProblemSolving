function timeConversion(s) {
  let [hour, min, secPeriod] = s.split(":");
  let second = secPeriod.slice(0, 2);
  let period = secPeriod.slice(2);

  hour = Number(hour);

  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  let hourStr = hour < 10 ? `0${hour}` : `${hour}`;

  return `${hourStr}:${min}:${second}`;
}

console.log(timeConversion("12:05:00PM"));

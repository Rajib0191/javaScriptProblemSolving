function getRandomBufferTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adjustTime(timeString, minutes) {
  const [hours, currentMinutes, period] = timeString
    .match(/(\d+):(\d+)([APM]+)/)
    .slice(1);
  const totalMinutes =
    ((hours % 12) + (period === "PM" ? 12 : 0)) * 60 +
    parseInt(currentMinutes) +
    minutes;
  const adjustedHours =
    (Math.floor(totalMinutes / 60) +
      (period === "PM" && totalMinutes < 720 ? 12 : 0)) %
    12;
  const adjustedMinutes = totalMinutes % 60;
  const adjustedPeriod = totalMinutes >= 720 ? "PM" : "AM";
  return `${
    adjustedHours === 0 ? 12 : adjustedHours.toString().padStart(2, "0")
  }:${adjustedMinutes.toString().padStart(2, "0")}${adjustedPeriod}`;
}

function addBufferTime(
  array,
  inBufferMin,
  inBufferMax,
  outBufferMin,
  outBufferMax,
  additionalOutHours,
  applyInBuffer,
  applyOutBuffer
) {
  array.forEach((item) => {
    let newInTime = item.inTime;
    let newOutTime = item.outTime;

    if (!newInTime && item.shiftInTime && applyInBuffer) {
      newInTime = item.shiftInTime;
      //   console.log(newInTime);
    }

    if (!newOutTime && item.shiftOutTime && applyOutBuffer) {
      newOutTime = item.shiftOutTime;
      //   console.log(newOutTime);
    }

    if (applyInBuffer && (!item.inTime || item.inTime === "0")) {
      const inBufferTime = getRandomBufferTime(inBufferMin, inBufferMax);
      //   const [inHours, inMinutes] = newInTime
      //     .split(":")
      //     .map((part) => parseInt(part));
      const [inHours, inMinutes, period] = newInTime
        .match(/(\d+):(\d+)([APM]+)/)
        .slice(1);
      //   console.log(parseInt(inHours), parseInt(inMinutes));
      const inTimeMinutes = parseInt(inHours) * 60 + parseInt(inMinutes);
      const newInTimeMinutes = Math.max(
        Math.min(inTimeMinutes + inBufferTime, 720),
        1
      );

      const hours = Math.floor(newInTimeMinutes / 60);
      const minutes = newInTimeMinutes % 60;
      //   const adjustedPeriod = newInTimeMinutes >= 720 ? "PM" : "AM";

      newInTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}${period}`;
    }

    if (applyOutBuffer && (!item.outTime || item.outTime === "0")) {
      //   newOutTime = adjustTime(newOutTime, additionalOutHours * 60); // Add additional hours to outTime
      const outBufferTime = getRandomBufferTime(outBufferMin, outBufferMax);
      //   const [outHours, outMinutes] = newOutTime
      //     .split(":")
      //     .map((part) => parseInt(part));

      const [outHours, outMinutes, period] = newOutTime
        .match(/(\d+):(\d+)([APM]+)/)
        .slice(1);

      const outTimeMinutes = parseInt(outHours) * 60 + parseInt(outMinutes);
      const newOutTimeMinutes = Math.max(
        Math.min(outTimeMinutes + outBufferTime, 720),
        1
      );
      720;
      const hours = Math.floor(newOutTimeMinutes / 60);
      const minutes = newOutTimeMinutes % 60;

      newOutTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}${period}`;
      newOutTime = adjustTime(newOutTime, additionalOutHours * 60); // Add additional hours to outTime
    }

    if (newInTime === newOutTime) {
      if (applyInBuffer) {
        newInTime = adjustTime(newInTime, 1);
      } else if (applyOutBuffer) {
        newOutTime = adjustTime(newOutTime, 1);
      }
    }

    item.inTime = newInTime;
    item.outTime = newOutTime;
  });
}

const inputArray = [
  {
    id: 1,
    name: "Rajib",
    inTime: "08:40AM",
    outTime: "06:02PM",
    shiftInTime: "09:00AM",
    shiftOutTime: "06:00PM",
  },
  {
    id: 2,
    name: "Rajib",
    inTime: "",
    outTime: "",
    shiftInTime: "9:00AM",
    shiftOutTime: "6:00PM",
  },
  {
    id: 3,
    name: "Rajib",
    inTime: "",
    outTime: "",
    shiftInTime: "8:00PM",
    shiftOutTime: "6:00AM",
  },
];

const inBufferMinTime = 1; // in minutes
const inBufferMaxTime = 10; // in minutes
const outBufferMinTime = 1; // in minutes
const outBufferMaxTime = 5; // in minutes
const additionalOutHours = 2; // Dynamic value (can be 1, 2, 3, etc.)
const applyInTimeBuffer = true; // Checkbox value for inTime buffer
const applyOutTimeBuffer = true; // Checkbox value for outTime buffer

addBufferTime(
  inputArray,
  inBufferMinTime,
  inBufferMaxTime,
  outBufferMinTime,
  outBufferMaxTime,
  additionalOutHours,
  applyInTimeBuffer,
  applyOutTimeBuffer
);
console.log(inputArray);

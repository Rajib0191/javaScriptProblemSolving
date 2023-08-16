// var getSumOfTwoV = function (arrayOfNumbers, targetSums) {
//   let map = {};
//   for (let i = 0; i < arrayOfNumbers.length; i++) {
//     let firstValue = arrayOfNumbers[i];
//     let remainingNumber = targetSums - firstValue;
//     if (map[remainingNumber]) {
//       return [firstValue, remainingNumber];
//     }

//     map[firstValue] = true;
//   }
//   return [];
// };

// console.log(getSumOfTwoV([1, 2, 3, 4, 5, 6], 7));

// var getSumOfTwoV = function (arrayOfNumbers, targetSums) {};

// console.log(getSumOfTwoV([1, 2, 3, 4, 5, 6], 7));

/**
 *
 * Time Convert Problem Solve.
 *
 ***/
function tConv24(time24) {
  var ts = time24;

  if (ts.indexOf(".") !== -1) {
    const [hour, minutes] = ts.split(".");
    var H = +hour;
    var M = +minutes;
  } else {
    var H = +ts.substr(0, 2);
    var M = parseInt(ts.substr(3)) || 0;
  }

  var h = H % 12 || 12;
  h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
  var ampm = H < 12 ? " AM" : " PM";

  var formattedMinutes = M < 10 ? "0" + M : M;

  ts = h + ":" + formattedMinutes + ampm;
  return ts;
}
console.log(tConv24("08.23"));
// moment('20:00', 'hh:mm a').format('hh:mm a')

/**
 *
 * Add Buffer Time In Range
 *
 * **/
// function getRandomBufferTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function addBufferTime(array, minBuffer, maxBuffer) {
//   array.forEach((item) => {
//     const bufferTime = getRandomBufferTime(minBuffer, maxBuffer);

//     // Parse the current inTime to minutes and add the bufferTime
//     const inTimeMinutes =
//       parseInt(item.inTime.split(":")[0]) * 60 +
//       parseInt(item.inTime.split(":")[1]);
//     const newInTimeMinutes = Math.max(
//       Math.min(inTimeMinutes + bufferTime, 600),
//       1
//     ); // Ensure new time is within range

//     // Convert new inTime back to HH:MM format
//     const hours = Math.floor(newInTimeMinutes / 60);
//     const minutes = newInTimeMinutes % 60;
//     const newInTime = `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")}AM`;

//     item.inTime = newInTime;
//   });
// }

// const inputArray = [
//   { id: 1, name: "Rajib", inTime: "08:40AM" },
//   { id: 2, name: "Islam", inTime: "08:45AM" },
//   { id: 3, name: "Azizul", inTime: "08:42AM" },
//   { id: 4, name: "Rajib Islam", inTime: "08:43AM" },
//   { id: 5, name: "Md. Azizul", inTime: "08:59AM" },
//   { id: 6, name: "Azizul Islam", inTime: "08:00AM" },
// ];

// const minBufferTime = 1; // in minutes
// const maxBufferTime = 10; // in minutes

// addBufferTime(inputArray, minBufferTime, maxBufferTime);
// console.log(inputArray);

/**
 *
 * Add Another Way..
 *
 * **/
// function getRandomBufferTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function addBufferTime(
//   array,
//   inBufferMin,
//   inBufferMax,
//   outBufferMin,
//   outBufferMax,
//   applyInBuffer,
//   applyOutBuffer
// ) {
//   for (const item of array) {
//     let newInTime = item.inTime;
//     let newOutTime = item.outTime;

//     if (applyInBuffer) {
//       const inBufferTime = getRandomBufferTime(inBufferMin, inBufferMax);
//       const [inHours, inMinutes] = newInTime
//         .split(":")
//         .map((part) => parseInt(part));
//       const inTimeMinutes = inHours * 60 + inMinutes;
//       const newInTimeMinutes = Math.max(
//         Math.min(inTimeMinutes + inBufferTime, 600),
//         1
//       );
//       const hours = Math.floor(newInTimeMinutes / 60);
//       const minutes = newInTimeMinutes % 60;
//       newInTime = `${hours.toString().padStart(2, "0")}:${minutes
//         .toString()
//         .padStart(2, "0")}AM`;
//     }

//     if (applyOutBuffer) {
//       const outBufferTime = getRandomBufferTime(outBufferMin, outBufferMax);
//       const [outHours, outMinutes] = newOutTime
//         .split(":")
//         .map((part) => parseInt(part));
//       const outTimeMinutes = outHours * 60 + outMinutes;
//       const newOutTimeMinutes = Math.max(
//         Math.min(outTimeMinutes + outBufferTime, 720),
//         1
//       );
//       const hours = Math.floor(newOutTimeMinutes / 60);
//       const minutes = newOutTimeMinutes % 60;
//       newOutTime = `${hours.toString().padStart(2, "0")}:${minutes
//         .toString()
//         .padStart(2, "0")}PM`;
//     }

//     if (newInTime === newOutTime) {
//       if (applyInBuffer) {
//         newInTime = adjustTime(newInTime, 1);
//       } else if (applyOutBuffer) {
//         newOutTime = adjustTime(newOutTime, 1);
//       }
//     }
//     item.inTime = newInTime;
//     item.outTime = newOutTime;
//   }
// }

// function adjustTime(timeString, minutes) {
//   const [hours, currentMinutes, period] = timeString
//     .match(/(\d+):(\d+)([APM]+)/)
//     .slice(1);
//   const totalMinutes =
//     ((hours % 12) + (period === "PM" ? 12 : 0)) * 60 +
//     parseInt(currentMinutes) +
//     minutes;
//   const adjustedHours = Math.floor(totalMinutes / 60) % 12;
//   const adjustedMinutes = totalMinutes % 60;
//   return `${adjustedHours.toString().padStart(2, "0")}:${adjustedMinutes
//     .toString()
//     .padStart(2, "0")}${period}`;
// }

// const inputArray = [
//   { id: 1, name: "Rajib", inTime: "08:40AM", outTime: "06:02PM" },
//   { id: 1, name: "Rajib", inTime: "08:45AM", outTime: "05:59PM" },
//   { id: 1, name: "Rajib", inTime: "08:59AM", outTime: "06:10PM" },
// ];

// const inBufferMinTime = 1; // in minutes
// const inBufferMaxTime = 10; // in minutes
// const outBufferMinTime = 1; // in minutes
// const outBufferMaxTime = 5; // in minutes
// const applyInTimeBuffer = true; // Checkbox value for inTime buffer
// const applyOutTimeBuffer = true; // Checkbox value for outTime buffer

// addBufferTime(
//   inputArray,
//   inBufferMinTime,
//   inBufferMaxTime,
//   outBufferMinTime,
//   outBufferMaxTime,
//   applyInTimeBuffer,
//   applyOutTimeBuffer
// );
// console.log(inputArray);

/**
 *
 *
 * Add Another Way*
 *
 * **/
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
  const adjustedHours = Math.floor(totalMinutes / 60) % 12;
  const adjustedMinutes = totalMinutes % 60;
  return `${adjustedHours.toString().padStart(2, "0")}:${adjustedMinutes
    .toString()
    .padStart(2, "0")}${period}`;
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

    if (applyInBuffer) {
      const inBufferTime = getRandomBufferTime(inBufferMin, inBufferMax);
      const [inHours, inMinutes] = newInTime
        .split(":")
        .map((part) => parseInt(part));
      const inTimeMinutes = inHours * 60 + inMinutes;
      const newInTimeMinutes = Math.max(
        Math.min(inTimeMinutes + inBufferTime, 600),
        1
      );
      const hours = Math.floor(newInTimeMinutes / 60);
      const minutes = newInTimeMinutes % 60;
      newInTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}AM`;
    }

    if (applyOutBuffer) {
      if (applyInBuffer) {
        newOutTime = adjustTime(newOutTime, additionalOutHours * 60); // Add additional hours to outTime
      }

      const outBufferTime = getRandomBufferTime(outBufferMin, outBufferMax);
      const [outHours, outMinutes] = newOutTime
        .split(":")
        .map((part) => parseInt(part));
      const outTimeMinutes = outHours * 60 + outMinutes;
      const newOutTimeMinutes = Math.max(
        Math.min(outTimeMinutes + outBufferTime, 720),
        1
      );
      const hours = Math.floor(newOutTimeMinutes / 60);
      const minutes = newOutTimeMinutes % 60;
      newOutTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}PM`;
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
  { id: 1, name: "Rajib", inTime: "08:40AM", outTime: "06:02PM" },
  { id: 1, name: "Rajib", inTime: "08:45AM", outTime: "06:10PM" },
  { id: 1, name: "Rajib", inTime: "08:42AM", outTime: "06:10PM" },
];

const inBufferMinTime = 1; // in minutes
const inBufferMaxTime = 10; // in minutes
const outBufferMinTime = 1; // in minutes
const outBufferMaxTime = 5; // in minutes
const additionalOutHours = 2; // Dynamic value (can be 1, 2, 3, etc.)
const applyInTimeBuffer = true; // Checkbox value for inTime buffer
const applyOutTimeBuffer = false; // Checkbox value for outTime buffer

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

var d = new Date();
var getTotalDay = daysInMonth(d.getMonth(), d.getFullYear()); //Get total days in a month

let date = [
  {
    id: "1",
    day: "saturday",
    date: [],
  },
  {
    id: "2",
    day: "sunday",
    date: [],
  },
  {
    id: "3",
    day: "monday",
    date: [],
  },
  {
    id: "4",
    day: "tuesday",
    date: [],
  },
  {
    id: "5",
    day: "wednesday",
    date: [],
  },
  {
    id: "6",
    day: "thursday",
    date: [],
  },
  {
    id: "7",
    day: "friday",
    date: [],
  },
];

for (var i = 1; i <= getTotalDay; i++) {
  var newDate = new Date(d.getFullYear(), d.getMonth(), i);
  if (newDate.getDay() == 6) {
    //if Saturday
    let saturday = date.find((item) => item.day === "saturday");
    saturday.date.push(`${i}-${d.getMonth() + 1}-${d.getFullYear()}`);
  }
  if (newDate.getDay() == 0) {
    //if Sunday
    const sunday = date.find((item) => item.day === "sunday");
    sunday.date.push(`${i}-${d.getMonth() + 1}-${d.getFullYear()}`);
  }
  if (newDate.getDay() == 1) {
    //if Monday
    let monday = date.find((item) => item.day === "monday");
    monday.date.push(`${i}-${d.getMonth() + 1}-${d.getFullYear()}`);
  }
  if (newDate.getDay() == 2) {
    //if Tuesday
    let tuesday = date.find((item) => item.day === "tuesday");
    tuesday.date.push(`${i}-${d.getMonth() + 1}-${d.getFullYear()}`);
  }
  if (newDate.getDay() == 3) {
    //if Wednesday
    let wednesday = date.find((item) => item.day === "wednesday");
    wednesday.date.push(`${i}-${d.getMonth() + 1}-${d.getFullYear()}`);
  }
  if (newDate.getDay() == 4) {
    //if Thursday
    let thursday = date.find((item) => item.day === "thursday");
    thursday.date.push(`${i}-${d.getMonth() + 1}-${d.getFullYear()}`);
  }
  if (newDate.getDay() == 5) {
    //if Friday
    let friday = date.find((item) => item.day === "friday");
    friday.date.push(`${i}-${d.getMonth() + 1}-${d.getFullYear()}`);
  }
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

console.log(date);

// Date objects = objects that contain vlaues that represnt dates and times
//                These date objects can be chnaged and formateed

//Date(year, month,day,hour,minute,second,ms)

const date = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date); //Mon Jan 01 2024 02:03:04 GMT+0530 (India Standard Time)

const date2 = new Date("2024-12-01T12:00:00Z");
console.log(date2); //Sun Dec 01 2024 17:30:00 GMT+0530 (India Standard Time)

const date3 = new Date(1700000000000); //1.7 billion milliseconds
console.log(date3); // Wed Nov 15 2023 03:43:20 GMT+0530 (India Standard Time)

const date4 = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
const dayOfWeek = date.getDay();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(dayOfWeek);

const date5 = new Date();
date5.setFullYear(2024);

console.log(date5); //Sat Jan 13 2024 20:50:56 GMT+0530 (India Standard Time)
//same like this for the other method

const date6 = new Date("2023-12-31");
const date7 = new Date("2024-01-01");

if (date7 > date6) {
  console.log("Happ New year");
}

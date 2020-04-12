// const now = new Date();
// console.log(now);
// console.log("getFullYear:", now.getFullYear());
// console.log("getMonth:", now.getMonth());
// console.log("getDate:", now.getDate());
// console.log("getDay:", now.getDay());

// //timestamp

// console.log("timestamp", now.getTime());

// //date strings

// console.log(now.toDateString());

// console.log(now.toTimeString());

// console.log(now.toLocaleString());

// const before = new Date("February 1 2019 7:30:59");
// const now = new Date();
// //console.log(before.getTime() - now.getTime());
// const diff = now.getTime() - before.getTime();
// console.log(diff);
// const mins = Math.round(diff / 1000 / 60);
// console.log(mins);
// const hours = Math.round(mins / 60);
// console.log(hours);
// const days = Math.round(hours / 24);
// console.log("the blog was written:", days + " ago");

// // converting timestamps into date objects

// const timestamp = before.getTime();
// console.log(new Date(timestamp));

const now = new Date();

// console.log(dateFns.isToday(now));

//formatting options

console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "dddd, Do, MMMM, YYYY"));

// comparing dates

const before = new Date("February 1 2019 12:00:00");
console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));

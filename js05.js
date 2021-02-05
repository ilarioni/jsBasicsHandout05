// Dates 
var d = new Date();
console.log(d);

var day = new Date(2021,01,02,12,50,30,0);
console.log(day);

console.log(d.toUTCString());

var dd = new Date("2021-02-25");
console.log(dd);

var ddd = new Date("2021/02/25");
console.log(ddd);

var dddd = new Date("Mar 31 2021");
console.log(dddd);

var a = new Date("January 25 2021");
console.log(a);

var b = new Date("Jan 05 2021");
console.log(b);

// Date Get and Set methods

var c = new Date();
console.log("This is time in mileseconds - " + c.getTime());
console.log("This time shows fullyear - " + c.getFullYear());
console.log("This time shows month - " + c.getMonth());
console.log("This time shows hours - " + c.getHours());
console.log("This time shows minutes - " + c.getMinutes());
console.log("This time shows seconds - " + c.getSeconds());
console.log("This time shows day - " + c.getDay());

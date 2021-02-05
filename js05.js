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

var f = new Date();
console.log("This Set method shows time " + f.setFullYear(2021));
console.log("This Set method shows month " + f.setMonth(2));
f.setDate(15);
console.log("This Set method shows date " + f);
f.setHours(22);
console.log("This Set method shows hours " + f);

// JavaScript Math Object
// Math.PI
// Math.round
// Math.pow()
// Math.sqrt()
// Math.abs()
// Math.ceil()
// Math.floor()
// Math.min()
// Math.max()
// Math.random()

var m1 = Math.PI;
console.log(m1);
console.log("This is pi - " + m1);
console.log(Math.round(4.7));
console.log(Math.round(4.4));

console.log(Math.pow(8,2));
console.log(Math.sqrt(64));
console.log(Math.abs(-33));

console.log(Math.ceil(31.2));
console.log(Math.floor(27.9));

console.log(Math.min(0,150,33,-200));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 11));

console.log(Math.floor(Math.random() * 100));

// JavaScript Booleans
// True - False 
// On - Off
// Yes - No
console.log(10 > 9);
console.log(10 == 9);

var bol1 = 1;
console.log(Boolean(bol1));

var bol2 = 0;
console.log(Boolean(bol2));

// Conditional (ternary) operator
var age = 16;
var voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable);

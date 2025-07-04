// Dates

// let myDate= new Date();
// console.log(myDate.toString());// returns the date in the format of Tue Jun 24 2025 12:27:18 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());// returns the date in the format of Tue Jun 24 2025
// console.log(myDate.toLocaleString()); // returns 24/6/2025, 12:27:18 pm
// console.log(typeof myDate); // returns object

let myCreateDate = new Date(2024,7,22)
// let myCreateDate = new Date(2024,7,22,5,3)
// let myCreateDate = new Date("01-15-2025")
// console.log(myCreateDate.toLocaleString()); // returns 22/8/2024, 05:03:00 pm

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(myTimeStamp==myCreateDate);
// console.log(Math.floor(Date.now()/1000));
let newDate=new Date();
// console.log(newDate);

// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())// 2--> Tuesday

date1= newDate.toLocaleString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    
})
console.log(date1);






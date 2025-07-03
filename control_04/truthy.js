const email = [];

// if (email) {
//   console.log("Got user email= ", email);
// } else {
//   console.log("No user email");
// }

// false values
// false , 0 ,-0 , BigInt,0n,null,undefined,NaN

// truthy values
// "0", 'false'," ",{},function(){}

// if(email.length===0){
//     console.log("Email is empty");
// }

// const emptyObje={};
// if(Object.keys(emptyObje).length===0){
//     console.log("Object is empty");
// }


//Nullish operator
// let val1;
// // val1=5 ?? 10; // 5

// // val1=null ?? 10; // 10
// val1=undefined ?? 15 ?? 20; // 15

// console.log(val1);

// Terniary Operator

// condtion ? true : false

const iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("Price greater than 80") : console.log("Price less than 80");

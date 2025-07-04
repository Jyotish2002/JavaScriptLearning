// # Primitive DataType

// 7 types : String, Number, boolean, Null, undefined,Symbol,BigInt

const score= 100;
const scoreValue=100.3
const isLoggedIn =false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id===anotherId); //false
const bigNumber= 3454154545678785646545645n

// reference (Non primitive)
 //Array, Objects, Functions

const heros =["shaktiman","naagraj","doga"];//array
let obj= {
    name:"Jyotish",
    age:21,

} // object
// console.log(obj.name);//Jyotish
// const myFunction= function(){
//     console.log("Hello World this is function");
// } // function
// myFunction();

// console.log(typeof anotherId);



//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap(Non-Primitive)

let myYoutubename="codewithus"

let anotherName=myYoutubename;
anotherName="mathematics"
console.log(myYoutubename);

console.log(anotherName)

let user1={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let user2=user1;

user2.email="Jyotish@gmail.com"
console.log(user1.email)
console.log(user2.email)
 // Singleton is made from constructor -----> Object.create

 //object literals


// const mySym = Symbol("key1");


const JsUser={
    name:"Jyotish",
    "full name":"Jyotish Yadav",
    // [mySym]: "myKey1",
    age:22,
    location:"Naihati",
    email:"jyotish@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]); // more favourable to use because we can't access it using dot notation
// console.log(typeof mySym); // symbol

// JsUser.email = "jyotishyadavcse@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser); // now it is freeze no one can change the detail of object
// JsUser.email="jyotish232@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello JS usesr, ${this.name}`);
}
console.log(JsUser.greetingTwo());


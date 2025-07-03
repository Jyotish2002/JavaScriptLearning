// if
// const isUerLoggin=true;
// if(isUerLoggin){

// }

// const score=200

// if(score==200){
//     let power="fly";
//     console.log(`User can ${power}`);
// }
// else{
//     console.log("User can't fly");
// }
// console.log("Ya toh run hoga hi")

// const balance=1000

// // if(balance>500) console.log("test");
//  if(balance<500){
//     console.log("low balance");
//  }else if(balance<750){
//     console.log("medium balance");
//  }
//  else if (balance<900){
//     console.log("high balance");
//  }
//  else {
//     console.log("less than 1000")
//  }

const userLoggedIn=true;
const debitcard=true;
const userLoggedInFromGoogle=true;
const userLoggedInFromEmail=true;
if(userLoggedIn && debitcard){
   if(userLoggedInFromGoogle || userLoggedInFromEmail){
      console.log("You login from google or email");
      console.log("user can pay");
   }
   else {
      console.log("First login through email or google");
   }
}
else {
   console.log("user can't pay");
}
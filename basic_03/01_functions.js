function sayMyName() {
  console.log("J");
  console.log("Y");
  console.log("O");
  console.log("T");
  console.log("I");
  console.log("S");
  console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1+number2);

// }

function addTwoNumbers(number1, number2) {
  // let result=number1+number2;
  // return result;
  return number1 + number2;
}

const result = addTwoNumbers(7, 45);
// console.log("Result: ", result);


function loginUserMessage(username="Rohan"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just loggedIn`;
}

let a=loginUserMessage("Sumit");
// console.log(a);


function calculateCartPrice(...num1){
  return num1;
}

// console.log(calculateCartPrice(200,400,500,2000)) // basically ...num1 will take all number

const user={
  username:"Jyotish",
  price:1999
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

const myNewArray=[200,400,100,600];

function returnSecondValue(getArray){
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
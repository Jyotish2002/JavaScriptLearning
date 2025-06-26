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
console.log(a);
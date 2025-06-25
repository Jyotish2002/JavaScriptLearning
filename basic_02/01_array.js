// array method

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes=["Shanktiman","nagaraj"];
const myName= new Array("Jyotish","Rohit","Rohan");
// console.log(myArr[2]);
// console.log(myName[2])
// myArr.push(6);
// myArr.push(7);
// myArr.pop()// remove the last element
// myArr.unshift(9) // insert it into first position
myArr.shift();// remove element from first position

// console.log(myArr.includes(9)); // true or false return boolean type
// console.log(myArr.indexOf(9)); // if not present then return -1
// const newArr= myArr.join();
// console.log(myArr)
// console.log(newArr); // it become string
// console.log(typeof newArr); // string type


// slice , splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr); // [1,5] because splice change the array



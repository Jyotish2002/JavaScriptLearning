// //Interview wala acha question
const desc = Object.getOwnPropertyDescriptor(Math,"PI") // We can't change the value of PI becoz it is unwritable,unconfigurable

const chai={
    name:"giner chai",
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log("Chai nhi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// Object.defineProperty(chai,'name',{
//     writable:false,
//     configurable:false
// }) // Here we change the property of our chai

// console.log(chai)
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [key,value] of Object.entries(chai)){
    if(typeof value!=='function')
    console.log(`${key}:${value}`)
}


// console.log(desc);

// console.log(Math.PI)
const user = {
    username:"Jyotish",
    price:9000,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
    }
}
// user.welcomeMessage("Jyotish")
// user.username="Sam"
// user.welcomeMessage()

// console.log(this)// {}

// function chai(){
//     let username="Jyotish"
//     console.log(this.username)
// }
// chai()

// const chai =  function(){
//     let username="Jyotish"
//     console.log(this.username)
// }
// chai()

// Arrow function

const chai =()=>{
    let username="Jyotish"
    console.log(this.username)
}
chai();

const addTwo =(num1,num2)=>{
    return num1+num2
}
// console.log(addTwo(145,458));

// const addsum=(n1,n2)=>(n1+n2) // no return requires
// console.log(addsum(40,20))

const twoFriend=()=>({ username:"Jyotish"})
// console.log(twoFriend())

// const myArray=[2,5,6,7,8,9]

// myArray.forEach(()=>{

// })
   

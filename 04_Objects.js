// const tinderUser = new Object(); // singleton object
const tinderUser = {};

tinderUser.id="1234"
tinderUser.name="Pratham"
tinderUser.isLoggedIn=false;

// console.log(tinderUser)

const regularUser ={
    email:"someone@gmail.com",
    fullname:{
        username:{
            firstname:"Jyotish",
            lastname:"Yadav"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={...obj1,...obj2} // spread operator
const obj3= Object.assign({},obj1,obj2) // combining object to single object
// console.log(obj3)

const users=[
    {
        id:1,
        email:"jyotish@gmail.com",
    },
    {
        id:2,
        email:"jyotishcse@gmail.com",
    },
]

console.log(users[1].email);
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')); // false

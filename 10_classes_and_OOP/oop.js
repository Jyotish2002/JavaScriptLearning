const user = {
    username:"Jyotish",
    loginCount:1,
    signedIn:true,

    getUserDetail:function(){
       // console.log("Got user details from the database");
    //    console.log(`Username:${this.username}`);
    console.log(this)
    }

}

console.log(user.username)
// console.log(user.getUserDetail())
console.log(this) //Gives empty

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const user1 =new User("Jyotish",1,true); // We use new because if we don't use new then it will overwrite the details
const user2= new User("Sumit",2,false);
console.log(user1)
console.log(user2.greeting())
//When we write new first it create an empty object and then it calls the function with that object as this
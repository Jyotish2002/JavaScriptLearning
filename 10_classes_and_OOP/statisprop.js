class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const Jyotish=new User("Jyotish");
// console.log(Jyotish.createId())

class Teacher extends User{
    constructor(username,email){
        
        super(username);
        this.email=email;
    }
}

const Iphone = new Teacher("Iphone","Iphone@gmail.com");

console.log(Iphone.logMe())
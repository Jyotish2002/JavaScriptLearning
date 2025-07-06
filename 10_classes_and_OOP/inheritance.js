class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai=new Teacher("Jyotish","jyotish@google.com","123456");
chai.addCourse();
const masalaChai = new User("Jyotish new");
// masalaChai.addCourse(); No any accesss
masalaChai.logMe();
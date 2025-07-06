class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `The email is ${(this._email).toUpperCase()} of Jyotish`
    }
//Bina set ka get ka use nhi kr skta nhi toh error dega
    set email(value){
        return this._email=value
    }

    get password(){
        return `${this._password}Jyotish`
    }
//Bina set ka get ka use nhi kr skta nhi toh error dega
    set password(value){
      return  this._password=value
    }
}
const jyotish=new User("jyotish@google.com","abc")

console.log(jyotish.password);
console.log(jyotish.email)
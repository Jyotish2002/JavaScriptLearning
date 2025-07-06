const user={
_email:"Jyotish@google.com",
_password:"abcde",


get email(){
    return this._email.toUpperCase();
},

set email(value){
    this._email=value.toUpperCase();
}
}
// console.log(user.email)

const tea= Object.create(user);
console.log(tea.email);
// let myName="Jyotish     "

// console.log(myName.truelength);

let myHeroes=["Thro","spiderman"]

let heroPower={
    thor:"hammar",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.jyotish = function(){
    console.log(`Jyotish is present in all objects`);
}



Array.prototype.heyjyotish = function(){
    console.log(`Jyotish say hello`); //--> this show that the array don't allow prototype in that
}
// heroPower.jyotish();
myHeroes.jyotish();
// heroPower.heyjyotish();// No power

//Inheritance

const user={
    name:"Jyotish",
    email:"jyotish@google.com"
}

const Teacher={
    makevideo:true
}

const TeachingSupport ={
    isAvailable:true
}

const TASupport={
    makeAssignment:true,
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername="Jyotish         ";
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"chai aur code ".trueLength();
"Ice cream".trueLength();
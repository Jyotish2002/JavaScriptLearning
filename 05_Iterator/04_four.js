const myObj={
    js:'Javascrip',
    cpp:'C++',
    rb:'Ruby',
    swift:'swift by apple'
}
for(const i in myObj){
    console.log(`Full form of ${i} is ${myObj[i]}`);
}

const programming=["js","python","Java","C++"];

for(const i in programming){
        console.log(programming[i]);
}


//In map we can iterate so we can't use for in we have to use for of
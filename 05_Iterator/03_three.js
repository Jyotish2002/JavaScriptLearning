// for of

const arr = [1, 2, 3, 4];

// for (const i of arr) {
//     console.log(i);
// }

// const gretting="Hello world";
// for(const i of gretting) {
//     console.log(`Each char is ${i}`);
// }

// Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United State Of America");
map.set("Fr", "France");

console.log(map);

for (const [key,value] of map) {
  console.log(`Key is ${key} and value is ${value}`);
}

const myObj={
    'game1':'NFS',
    'game2':'GTA'
}

// for(const [key,value] of myObj){
//     console.log(key,"->",value);
// } //Kam nhi karaga
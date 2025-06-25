const marvel_heros=["thor","IronMan","SpiderMan"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros[3][0])

// const allHeros=marvel_heros.concat(dc_heros); // it combine the whole array
// console.log(allHeros);
// console.log(allHeros[4]); // it will print the 5th element of the array which is "flash"

// const all_new_heros=[...marvel_heros,...dc_heros] // spread method easy way to combine arrays

// console.log(all_new_heros);

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array=another_array.flat(Infinity);// it will convert into one array

// console.log(real_another_array)

console.log(Array.isArray("Jyotish")); // checking for array
console.log(Array.from("Jyotish"));
console.log(Array.from({name:"Jyotish"})); //Interesting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)); // convert into array



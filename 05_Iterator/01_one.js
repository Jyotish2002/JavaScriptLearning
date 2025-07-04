// For

// for (let i = 0; i <= 10; i++) {
//     if(i==5){
//         console.log("5 is the best number");
//     }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("See table of ", +i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + " = " + i * j);
//   }
// }

let myarray=['Flash','Batman','Superman'];
// console.log(myarray.length); //There is no any use of size() in javascript only there is lenght

for(let i=0;i<myarray.length;i++){
    const element=myarray[i];
    // console.log(element);
}

// break and continue

// for(let i =1;i<=20;i++){
//     if(i==5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log("value of i is ",+i);
// }

for(let i =1;i<=20;i++){
    if(i==5){
        console.log("Detected 5");
        continue; // bas 5 ko maff kr do and leave 5
    }
    console.log("value of i is ",+i);
}
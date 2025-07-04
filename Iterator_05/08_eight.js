const Mynums = [1, 2, 3];

// const myTotal=Mynums.reduce(function(acc,currVal){
//     console.log(`acc:${acc} and currVal : ${currVal}`);
//     return acc+currVal;
// },0)

const myTotal = Mynums.reduce((acc, currVal) => acc + currVal, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemsName: "JS Course",
    price: 2999,
  },
  {
    itemsName: "Python Course",
    price: 3499,
  },
  {
    itemsName: "Web Development Bootcamp",
    price: 4999,
  },
  {
    itemsName: "Data Structures & Algorithms",
    price: 3999,
  },
  {
    itemsName: "React Masterclass",
    price: 4499,
  },
];

const Total = shoppingCart.reduce((acc, iteam) => acc + iteam.price, 0);
console.log(Total);


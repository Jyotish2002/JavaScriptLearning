// const coding=["js","ruby","java","python"];

// const values=coding.forEach((items)=>{
//     console.log(items);
//     return items;
// })

// console.log(values);

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const newnums=nums.filter((item)=>{
//     if(item%2==0){
//         return item;
//     }
// })

// console.log(newnums);

// const newNums = [];

// nums.forEach((num) => {
//   if (num > 5) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'Science', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'History', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Fantasy', publish: 2005, edition: 2015 },
    { title: 'Book Six', genre: 'Fiction', publish: 1981, edition: 2001 },
    { title: 'Book Seven', genre: 'Science', publish: 1999, edition: 2005 },
    { title: 'Book Eight', genre: 'Non-Fiction', publish: 1992, edition: 2012 },
    { title: 'Book Nine', genre: 'Fantasy', publish: 2005, edition: 2018 },
    { title: 'Book Ten', genre: 'History', publish: 1989, edition: 2009 }
  ];
  

let UserBooks= books.filter((bk)=>
    bk.genre==='History'
)

UserBooks=books.filter((bk)=>{
   return bk.publish<=2000 && bk.genre==="History";
})

console.log(UserBooks);
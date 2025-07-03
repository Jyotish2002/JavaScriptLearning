const coding=['Java','Python','Ruby','Cpp','Ruby'];

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach((items)=>{
//     console.log(items);
// })

// function printMe(items){
//     console.log(items);
// }

// coding.forEach(printMe);

// coding.forEach((items,index,arr)=>{
//     console.log(items,index,arr);
// })


const myCoding=[
    {
        languageName:"Javascript",
        LanguageFileName:"java"
    },
    {
        languageName:"Python",
        LanguageFileName:"python"
    },
    {
        languageName:"Ruby",
        LanguageFileName:"ruby"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
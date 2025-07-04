const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// newNums=myNums.map( (nums)=>nums+10); //agar scope open krna ha toh return likhna hi paraga

const newNums = myNums
                        .map((nums) => nums * 10)
                        .map((nums) => nums + 1)
                        .filter((nums)=>nums>=40);

                        
console.log(newNums);

 const accountId = 144553; //Const means it can't be changed
 let accountEmail = "jyotishyadav09@gmail.com"
 var accountPassword="123456"
 accountCity="Jaipur"
 let accountState;

//  accountId=2; not allowed
accountEmail="hc@gmail.com"
accountPassword="147852369";

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);


const accountId = 123456
let accountEmail = "sarreshma@gmail.com"
var accountPassword = 789456
accountCity = "Hyderabad"
let accountState;

//accountId = 2// not allowed

/*prefer not to use var because of issue 
in block scope and functional scope*/


accountEmail = "Kainu@gmail.com"
accountPassword = "555555"
accountCity = "Ongole"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
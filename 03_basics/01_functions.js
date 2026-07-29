
function sayMyName(){
console.log("K");
console.log("A");
console.log("I");
console.log("N");
console.log("A");
console.log("A");
console.log("T");
}

//sayMyName()

//function addTwoNumbers(number1, number2){ //parameters
 //   console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){ //parameters
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // arguments

// console.log("Result:", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Kainaat"));
//console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "kainaat",
    price: 166
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user)
handleObject({username: "reshma",
    price: 555
})

const myNewArray = [200, 400, 100, 600]

function returnsecondValue(getArray){
    return getArray[2]
}

//console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200, 400, 500, 1000]));

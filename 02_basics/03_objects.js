// singleton----when we use constructer the singleton is an object... if we use another then singleton will not work
// when we declare like as literals then it cant be singleton


// boject literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Kainaat",
    "full name": "Kainaat Nazeem", 
    [mySym]: "mykey1",
    age: 2,
    location: "Hyderabad",
    email: "kainaat@gmail.com",
    isLoggedIn: false,
    lastLogingDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.emial = "Kainaat@micron.com"
//Object.freeze(JsUser)
JsUser.email = "Kainaat@yahoo.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
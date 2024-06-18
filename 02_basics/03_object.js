// singleton

// obj literals:

const mySymbol = Symbol("key1")

const JsUser = {
    name : "Shrestha",
    "full name" : "Shrestha Mukherjee",
    [mySymbol] : "mykey1", //symbol is used as a key with [], or else it is stored as string
    age : 20,
    location : "Kolkata",
    email : "shrestha@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.age);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySymbol]);

JsUser.greeting = function () {
    console.log("Hello JS users!");
}

JsUser.greeting2 = function () {
    console.log(`Hello JS users!, ${this.name}`);
}

console.log(JsUser.greeting());

console.log(JsUser.greeting2());
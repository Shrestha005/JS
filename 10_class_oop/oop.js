const user = {
    username: "shres",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
    //return is not required it returns the values implicitly
}
const userOne = new User("shres", 12, true)
const userTwo = new User("shres005", 11, false)
//if new keyword isnot used then values are overwritten
console.log(userOne);
// console.log(userOne.constructor);

//console.log(userTwo);
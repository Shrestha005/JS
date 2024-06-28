function multiplyby5 (num) {
    return num * 5;
}
multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);


function createUser(username , score) {
    // username = username //this creates confusion so this keyword is used with the variable name
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)


chai.printMe()


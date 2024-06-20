// function sum(num1 , num2) { //parameters
//     console.log(num1 + num2)
// }
// sum("3" , 4) //arguments


// function sum(num1 , num2) {
//     let result = num1 + num2
//     return result
// }
// const result = sum(9 , 3)
// console.log("Result is :" , result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter an username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());
// console.log(loginUserMessage("Shrestha005"));

function 
calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200 , 400 , 500))

const user = {
    username : "shrestha005",
    price : 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

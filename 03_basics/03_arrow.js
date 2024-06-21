const user = {
    username : "shres",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
    }
}
// user.welcomeMessage()
// user.username = "piggy"
// user.welcomeMessage()

// const chai = function () {
//     let username = "shres"
//    console.log(this);
// } 

//arrow function below:
// const chai =  () => {
//     let username = "shres"
//     console.log(this);
// } 
// chai()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
//another arrow method
const addTwo = (num1 , num2) => (num1 + num2)

console.log(addTwo(3 , 4));








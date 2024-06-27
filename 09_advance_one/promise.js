// fetch('https://something.com').then().catch().finally()
const promise1 = new Promise(function(resolve , reject) {
    //do async task
    //DB calls , cryptography , network call
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})
promise1.then(() => {
    console.log("Promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
})


const promise3 = new Promise(function(resolve , reject) {
    setTimeout(() => {
        resolve({username : "shrestha005" , email : "shrestha@005"})
    }, 1000);
})
promise3.then((user) => {
    console.log(user);
})
//
const promise4 = new Promise(function(resolve , reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username : "Shrestha" , password : "shres"})
        }
        else {
            reject('ERROR : Something went wrong')
        }
    }, 1000);
})
promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))

const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "js" ,  password : "123"})
        }
        else {
            reject('ERROR : js went wrong')
        }
        } , 1000)
});

async function consumePromise5(){
    try {const response = await promise5
    console.log(response);
} catch (error){
    console.log(error);
}
}
consumePromise5()

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
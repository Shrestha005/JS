//Question- the pi value in math library in js which is equal to 3.14. Can it be converted to 4? If yes how and if no why?

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

// console.log(descriptor);

// console.log(Math.PI);

const coffee = {
    name : 'icedcoffee',
    price : 100,
    isavailable : true,

    orderCoffee : function(){
        console.log("Cannot make coffee today");
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee , "name"));

// Object.defineProperty(coffee , 'name' , {
//     writable : false,
//     enumerable : false
// })
// console.log(Object.getOwnPropertyDescriptor(coffee , "name"))

for (let [key , value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);  
    }
}
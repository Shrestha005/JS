//reduced array method
// Array.reduce()
const mynum = [1,2,3]
// const mytotal = mynum.reduce(function(accumulator , currentvalue) {
//     console.log(`acc: ${accumulator} and currentvalue: ${currentvalue}`);
//     return accumulator + currentvalue
// } , 0) 

const mytotal = mynum.reduce((acc , curr)=> acc+curr , 0)


// console.log(mytotal);




//courses buying EXAMPLE
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
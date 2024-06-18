//array

const myArr = [9 , 1 , 2 , 3 , 4 , 5 , true , "shres"]
const myArr2 = new Array(10 , 20 , 30 , 40 , 50 , 60 , 70)

// console.log(myArr2[0]);

//methods
myArr2.push(5)
myArr2.pop()
myArr2.unshift(11)
myArr2.shift()
// console.log(myArr2);
// console.log(myArr2.includes(21));
// console.log(myArr2.indexOf(40));

const newArr = myArr2.join()

console.log(myArr2);
console.log(newArr);


//slice and splice operation on array
//slice - does not include range values and does not change original array
//splice - includes range values and manipulates the original array
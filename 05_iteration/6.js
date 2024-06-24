const coding = ["js","rb","py","java","cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
});

// console.log(values);

const mynum = [1,2,3,4,5,6,7,8,9,10]
//filter method
const newNum = mynum.filter((num) => num>4)
//or
// const newnum = mynum.filter((num) => {return num>4})
//because if scope is opened return must be used
console.log(newNum);

//foreach method
const newnum= []

mynum.forEach((num) => {
    if (num>4) {
        newnum.push(num)
    }
});





//05_iteration/6.js
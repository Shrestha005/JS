const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({} , obj1 , obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

//destructure:
const course = {
    courseName : "Js",
    price : 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor : instructor} = course
console.log(instructor);


//JSON
{
    "name" : "Shrestha",
    "course" : "dbms",
    "price" : "free"
}











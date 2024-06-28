// let myName = "shres     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.shres = function(){
    console.log(`shres is present in all objects`);
}

Array.prototype.heyshres = function(){
    console.log(`shres says hiiiiii!!!`);
}

// heroPower.shres()
// myHeros.shres()
// myHeros.heyshres()
// heroPower.heyshres()

// inheritance

const User = {
    name: "shresss",
    email: "shres@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "shres005     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shres".trueLength()
"shres005".trueLength()
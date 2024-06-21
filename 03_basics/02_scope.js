// let a = 10
// const b = 20
// var c = 30


function one(){
    const username = "shres"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "shres"
    if (username === "shres") {
        const website = " youtube"
        // console.log(username + website);
    }
}

//---------concept----------

// addOne()------> correct
function addOne(num) {
    return num + 1
}
addOne(5)


// addTwo() ------> wrong
const addTwo = function (num) {
    return num + 2
}
addTwo(5)







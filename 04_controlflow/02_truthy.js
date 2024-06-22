const email = "shres@ai"

if (email) {
    console.log("got user email");
}
else {
    console.log("don't have user email");
}


// falsy : false , 0 , -0 , bigint , "" , null , undefined , NaN
// truthy : "0" , 'false , " " , [] , {} , function(){}

//nullish coalescing operator (??): null undefined


//ternary ops ?? :
let val1;
// val1 = 5??10
val1 = null??10

console.log(val1);
//immediately invoked function expressions (iife)
(function chai() {
    console.log(`DB CONNECTED`);
})();
//this type of function call need ; to end

//type2
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('shres')
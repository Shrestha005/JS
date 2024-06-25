const clock = document.getElementById('clock')
//or
// const clock = document.querySelector('#clock')

//to continuously run time and update clock time setInterval method id used

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
} , 1000);
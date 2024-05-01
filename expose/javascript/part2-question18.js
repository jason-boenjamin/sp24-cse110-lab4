//Given
// let d = new Date();
// let time = d.toLocaleTimeString();
// console.log(time);

//modified code
function printDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printDate, 1000);

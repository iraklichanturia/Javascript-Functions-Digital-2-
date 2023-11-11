//create a function which takes from user 2 arguments number of numbers and  range of random numbers (start,end) and return 
//an array of in which will be numbers as user entered and random numbers in range (start,end)

// function createArray(num, start, end) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(Math.floor(Math.random() * (end - start + 1) + start));
//     }
//     return arr;
// }
// console.log(createArray(5, 1, 10));

function createArray(num, start, end) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push(Math.floor(Math.random() * (end - start + 1) + start));
    }
    return arr;
}

let startNumber = Number(prompt("Enter start number"));
let endNumber = Number(prompt("Enter end number"));
let numberOfNumbers = Number(prompt("Enter number of numbers"));

console.log(createArray(numberOfNumbers, startNumber, endNumber));

//create function to which takes two arguments, array with random numbers from 0 to 100 and second argument array with
// numbers [2,3,5,11]. function should return array with numbers from first array which are divisible at least by one number of
//second array. If there is no such numbers return empty array.

function getDivisible(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] % arr2[j] === 0) {
        result.push(arr1[i]);
        break;
      }
    }
  }
  return result;
}

let divisorsArray = [2, 3, 5, 11];
let randomArray = [];
for (let i = 0; i < 20; i++) {
  randomArray.push(Math.floor(Math.random() * 100) +1);
}
console.log(randomArray);
console.log(getDivisible(randomArray, divisorsArray));

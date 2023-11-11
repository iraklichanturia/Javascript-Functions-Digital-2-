//create a function which takes a parameter random numbers array. sort the array from smallest to largest and return the sorted array.
//use the for loop
//use the if statement

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {

            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            i = -1;
        }
    }
    return arr;
}

console.log(sortArray([1, 5, 3, 7, 2, 9, 4, 6, 8, 0]));
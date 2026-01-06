//Write a code in front of array
//given arr = [10,15,20,60]
// number = 5
//output = [5,10,15,20,60]
let arr = [10, 15, 20, 60];
let number = 5;

let newArr = [];

newArr[0] = number;

for (let i = 0; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
}

console.log(newArr);

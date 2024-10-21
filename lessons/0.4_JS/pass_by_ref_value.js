const str = "hello";

let word = str;

// console.log(word);

word = "banana";

// console.log(word);

const arr = [1, 2, 3];

const arr2 = arr;

console.log(arr2); // [1,2,3]
console.log(arr); // [1,2,3]

arr2.pop();

console.log(arr2); // [1,2]
console.log(arr); // [1,2]

const arr3 = [1, 2, 3];

arr3.pop();

arr3[4] = "a";

arr3 = [];

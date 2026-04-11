// // 1. Arrays - 
// // i. is a variable that has multiple values. It is a data structure that can hold multiple values of different data types. It is denoted by square brackets [] and the values are separated by commas.
// let fruits = ["apple", "banana", "orange"];
// let mixedArray = [1, "hello", true, null, undefined];

// console.log(fruits);

// // ii. we can access the values in an array using their index, which starts from 0. For example, fruits[0] will give us "apple", fruits[1] will give us "banana", and fruits[2] will give us "orange".

// // console.log(fruits[0]); // "apple"
// // console.log(fruits[-1]); // 

// // iii, Arrays have various methods/functions that can be used to manipulate the values in the array. Some of the common methods include:

// // - push(): adds a new value to the end of the array
// fruits.push("grape");
// console.log(fruits); // ["apple", "banana", "orange", "grape"]

// // - pop(): removes the last value from the array
// fruits.pop();
// console.log(fruits); // ["apple", "banana", "orange"]

// // - shift(): removes the first value from the array
// fruits.shift();
// console.log(fruits); // ["banana", "orange"]

// // - unshift(): adds a new value to the beginning of the array
// fruits.unshift("apple");
// console.log(fruits); // ["apple", "banana", "orange"]

// // - indexOf(): returns the index of the first occurrence of a value in the array
// console.log(fruits.indexOf("banana")); // 1

// // - length: returns the number of values in the array
// console.log(fruits.length); // 3

// // map, filter, find, 
// // - map(): creates a new array by applying a function to each value in the array
// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// // 2. if/else
// let num = -10;

// if (num > 0) {
//   console.log("The number is positive.");
// } else {
//     console.log("The number is not positive.");
// }

// let day = "Friday";

// if (day === "Monday") {
//     console.log("Today is Monday.");    
// } else if (day === "Tuesday") {
//     console.log("Today is Tuesday.");
// } else {
//     console.log("Today is not Monday or Tuesday.");
// }

// // 3. switch statement

// array methods
// filter, map, find, sort

let numbers = [5, 2, 9, 1, 5, 6, 3];

// filter() - creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers1 = numbers.filter(function(number) {
    return number % 2 === 0;        // modulus operator - gives the remainder of the division of two numbers
});

// console.log(numbers); // [5, 2, 9, 1, 5, 6, 3]
// console.log(evenNumbers); // [2, 6]

const evenNumbers = numbers.filter(number => number % 2 === 0); 

// map() - creates a new array by applying a function to each element of the original array

console.log("Original array", numbers); // [5, 2, 9, 1, 5, 6, 3]

const numbersPlusTwo = numbers.map(number => number + 2); // [7, 4, 11, 3, 7, 8, 5]

console.log("array items plus 2", numbersPlusTwo); // [7, 4, 11, 3, 7, 8, 5]
// 1. comment - anything written after the double slash is regarded as comment
// let studentName = 'John Doe';
// console.log(studentName);

// 2. variable - a container for storing data values
// let myName = 'Alice';
// myName = 'Bob'; // This will cause an error because myName is a constant
// console.log(myName);

// with const
// const myEmail = "alice@mail.com"
// console.log(myEmail) 

// we were able to reassign the value of myName because it was declared with let, but we cannot reassign the value of myEmail because it was declared with const.
// studentName = "Jane Doe";
// console.log(studentName);

// 3. data types - JavaScript has several data types, including:
// - String: a sequence of characters enclosed in quotes - single or double
let city = "New York";
// console.log(city);

// - Number: a numeric value, which can be an integer or a floating-point number
let age = 30;
let price = 19.99;

// - Boolean: a logical value that can be either true or false
let isStudent = true;
let isEmployed = false;

// - Null: a special value that represents the absence of any object value
let emptyValue = null   // null means empty
// setting the value later
// emptyValue = "Now it has a value"; // or the one below
// emptyValue = 5

// - Undefined: a variable that has been declared but has not been assigned a value
let undefinedValue;
let studAge;

// 4. checking data types
console.log(typeof city);
console.log(typeof age);
console.log(typeof isStudent);
// console.log(typeof isEmployed);
console.log(typeof emptyValue);
console.log(typeof undefinedValue);
// console.log(typeof studAge);

// 5. operators - JavaScript has various operators for performing operations on variables and values, including:
// i. assignment operators: used to assign values to variables: =, +=, -=, *=, /=, %=
// ii. arithmetic operators: used to perform mathematical operations: +, -, *, /, %, ++, --
// iii. comparison operators: used to compare values: ==, ===, !=, !==, >, <, >=, <=
// iv. logical operators: used to combine multiple conditions: &&, ||, !
// v. bitwise operators: used to perform bitwise operations on integers: &, |, ^, ~, <<, >>
// TODO vi. ternary operator: (future class)

// TODO 6. template literals: (future class)
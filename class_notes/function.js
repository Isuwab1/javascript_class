// function - a block of code designed to perform a particular task, and is executed when "something" invokes it (calls it).

// 1. function declaration
// function greet() {
//     console.log("Hello, World!");
// }

// a function will never run until it is called/invoked
// greet(); // calling the function - don't forget the parentheses!

// 2. parameters and arguments
// function greetPerson(name) {        // name is a parameter - a variable that is used to store the value that is passed to the function when it is called
//     console.log(`Hello, ${name}!`);     //using template literals to include the name parameter in the greeting
// }

// greetPerson("Alice"); // calling the function with an argument
// greetPerson("Bawa"); // calling the function with an argument
// greetPerson("Charlie"); // calling the function with an argument

// 3. return statement - a function can return a value using the return statement. This allows us to use the result of the function in other parts of our code.
export function add(a, b) {
    return a + b; // the function will return the sum of a and b
}

// let result = add(5, 10); // calling the function with arguments - this will return 15
// console.log(result); // output the result

// arrow function
export const addArrow = (a, b) => a + b; // arrow function (fat arrow) with implicit return

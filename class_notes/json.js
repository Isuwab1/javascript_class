// monolith and microservices
// FRONTEND => API => BACKEND (DATABASE, SERVER)

// json - javascript object notation
// json is a format for storing and transporting data
// json is often used when data is sent from a server to a web page

let jsonSample = {
    "name": "John",
    "age": 30,
    "car": null
}

console.log(jsonSample); // { name: 'John', age: 30, car: null }

// parse() - convert js json string to js object (data collected from api then converted to js object)
let convertedJson = JSON.parse('{"name": "John", "age": 30, "car": null}');
console.log(convertedJson); // { name: 'John', age: 30, car: null }

// stringify() - convert js object to json string (when we want to send data to api then we convert js object to json string)
let jsonString = JSON.stringify(jsonSample);
console.log(jsonString); // {"name":"John","age":30,"car":null}
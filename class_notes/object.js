// objects
// Object is a data structure that can store multiple values in a single variable. It is a collection of properties, where each property is defined as a key-value pair. The key is a string that represents the name of the property, and the value can be any data type, including other objects.

let person = {
    name: "Bawa",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        street: {
            number: 123,
            streetName: "Main Street"
        },
        city: "Lagos",
        country: "Nigeria"  //
    }
};

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    features: ["Bluetooth", "Backup Camera", "Cruise Control"],
    owner: {
        name: "Alice",
        age: 30,
    }
};

// accessing object properties
// we can access the properties of an object using dot notation or bracket notation. For example, person.name will give us "Bawa", person.age will give us 20, and person.hobbies will give us ["reading", "coding", "gaming"].

// console.log("Before adding gender", person);

// i. dot notation
// console.log(person.hobbies[2]);

// console.log(person.address.street.streetName)

// ii. bracket notation
// console.log(person["address"]["street"]["streetName"]);

// adding new properties to an object
person.gender = "male";
// console.log("After adding gender", person);

// console.log(car.owner.name);

console.log(car);
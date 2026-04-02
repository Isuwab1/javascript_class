//1. Create variables weightKg and heightM.
//2. Calculate BMI using the formula: weight / (height * height).
//3. Log a sentence using Template Literals: With a weight of ${weightKg}kg and height of ${heightM}m, the BMI is ${bmi}
const weightKg = 50; // constant weight with assigned value
const heightM = 1.70; // height with assigned value

const bmi = weightKg / (heightM * heightM); // calculate bmi

console.log(`With a weight of ${weightKg}kg and height of ${heightM}m, the BMI is ${bmi}`);
console.log("Alice");
let score = 30;

if (score > 30) {
    console.log("You passed the exam.");
} else {
    console.log("You failed the exam.");
}

// ternary operator - a shorthand way of writing an if/else statement
score > 30 ? console.log("You passed the exam.") : console.log("You failed the exam.");

// condition ? expressionIfTrue : expressionIfFalse

// if (day === "Sunday") {
//     console.log("Tomorrow is Monday.");    
// } else if (day === "Monday") {
//     console.log("Today is Tuesday.");
// } else if (day === "Tuesday") {
//     console.log("Today is not Monday or Tuesday.");
// } else if (day === "Wednesday") {
//     console.log("Today is Wednesday.");
// }   else if (day === "Thursday") {
//     console.log("Today is Thursday.");
// } else if (day === "Friday") {
//     console.log("Today is Friday.");
// } else if (day === "Saturday") {
//     console.log("Today is Saturday.");
// }else {
//     console.log("Invalid day.");
// }

let day = "monday";

day === " tuesday" ? console.log("today is tuesday.")
    : day === "Monday" ? console.log("Tomorrow is Tuesday.")
        : console.log("Tomorrow is not Monday or Tuesday.");
let day = "Friday";

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

switch (day) {
    case "Sunday":
        console.log("Tomorrow is Monday.");
        break;
    case "Monday":
        console.log("Tomorrow is Tuesday.");
        break;
    default:
        console.log("Tomorrow is not Monday or Tuesday.");
        break;
}
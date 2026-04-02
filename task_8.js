// Step 1: Define the student score
let studentScore = 85; // This value can change hence I used let

// Step 2: Apply the grading logic
if (studentScore >= 90 && studentScore <= 100) {
    console.log("Grade: A - Excellent! Scholarship granted.");
} else if (studentScore >= 80 && studentScore <= 89) {
    console.log("Grade: B - Very Good! Keep it up.");
} else if (studentScore >= 70 && studentScore <= 79) {
    console.log("Grade: C - Good, but try harder.");
} else if (studentScore >= 60 && studentScore <= 69) {
    console.log("Grade: D - Credit. You passed.");
} else if (studentScore >= 50 && studentScore <= 59) {
    console.log("Grade: E - Pass. Barely made it.");
} else if (studentScore >= 0 && studentScore <= 49) {
    console.log("Grade: F - Fail. See the Principal.");
} else {
    console.log("Invalid Score.");
}
// Well, this code take about 19 lines looks clean in terms of readability but consist of repition (else if)
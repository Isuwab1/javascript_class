

const examResults = [
  { student: "Chidi", score: 88 },
  { student: "Bisi", score: 42 },
  { student: "Amina", score: 75 },
  { student: "Tunde", score: 55 }
];
    const passStudents = examResults.filter (result=> result.score >= 50)
    const listOfStd = passStudents.map (result => {
    let status;

    if (result.score >= 80){
  status ="Distinction";
}
  else if (result.score>=50) {
       status = "Pass";
  }
  else {
      status = "Failed"
      }
return {
         student: result.student,
        status: status
}

});
    const honorsRoll = [];
    for (let student of listOfStd){
  if (student.status === "Distinction"){
    honorsRoll.push (student.student)
  }
}
    const totalPassed = listOfStd.filter (s => s.status !== "Failed").length
    const totalFailed = listOfStd.filter (s => s.status === "Failed").length

    console.log (`Total number of students who passed is: ${totalPassed} and Total number of students who failed is: ${totalFailed}`)
  // The Logical Challenge:

// The "Pass" List: Create a list of students who scored 50 or above.

// The Grade Map: The principal wants a new list where each student's name is paired with a "status" instead of a score.

// If score is 80+, status is "Distinction".

// If score is 50-79, status is "Pass".

// If score is below 50, status is "Fail".

// The Reward System: Use a loop to iterate through your "Pass" list. If a student got a "Distinction", push their name into a special honorsRoll array.

// The Final Report: Log a single message using template literals showing the total number of students who passed vs. those who failed.
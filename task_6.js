const age = 45;
const yearsOfExperience = 10;
const hasDegree = true;

const requirementsMet = [];

if (age < 18) {
  console.log("Too young to apply.");
}

else if (age >= 18 && age <= 25) {

  if (hasDegree === true) {
    requirementsMet.push("Young Graduate");
  } else {
    requirementsMet.push("Junior Applicant");
  }

}

else if (age >= 26 && age <= 40) {

  if (yearsOfExperience > 5) {
    requirementsMet.push("Senior Specialist");
  } else {
    requirementsMet.push("Mid-level Applicant");
  }

}

else if (age > 40) {
  console.log("Special Consultant Path.");
  requirementsMet.push("Special Consultant");
}

console.log(`Requirements Met: ${requirementsMet}`);
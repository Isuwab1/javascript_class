// Task 4: (New) The Logical Gatekeeper

// 1. Create two boolean variables: hasPassport and hasVisa.
// 2. Create a third variable canTravel that uses the && (AND) operator to check if both are true.
// 3. Log a message: Travel Eligibility: ${canTravel}.
// two boolean variables
const hasPassport = true;
const hasVisa = false;
// checking the eligibility
const canTravel = hasPassport && hasVisa;
console.log (`Travel Eligibility: ${canTravel}`);
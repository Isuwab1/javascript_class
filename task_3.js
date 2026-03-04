//Task 3: (New) The Discount Calculator (Operators Practice)

//1. Create variables for originalPrice and discountPercentage.
// 2. Calculate the savings and the finalPrice.
// 3. Use a Comparison Operator to check if the finalPrice is less than 5000 and log the result (true/false).
// create variables 
const originalPrice = 4500;
const discountPercentage = 5;

// calculate the savings and final price
const savings = (discountPercentage / 100) * originalPrice;
const finalPrice = originalPrice - savings;

// Comparison operation
const isLessThan5000 = finalPrice < 5000;
//produce output
console.log(`Original Price: ${originalPrice}`);
console.log(`Discount Percentage: ${discountPercentage}`);
console.log(`Savings: ${savings}`);
console.log(`Final Price: ${finalPrice}`);
console.log(`Is final price less than 5000? ${isLessThan5000}`);
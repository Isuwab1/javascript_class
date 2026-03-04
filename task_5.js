// Task 5: The Personal Finance Snapshot

// 1. Part A: Create a script that stores your monthlyIncome, rentExpense, and foodExpense.
// 2. Part B: Calculate totalExpenses and remainingBalance.
// 3. Part C: Create a boolean variable isSavingEnough that checks if the remainingBalance is greater than 20% of the monthlyIncome.
// 4. Part D: Print a full report to the console using Template Literals and Multi-line Comments at the top of the file explaining what the script does.
//script that stores my monthly income,and expenses
const monthlyIncome = 30000;
const rentExpense = 1500;
const foodExpense = 10000;

const totalExpenses = rentExpense + foodExpense;
// total expenses and remaining balance 
const remainingBalance = monthlyIncome - totalExpenses;

// checking savings condition
const isSavingEnough = remainingBalance > (0.2 * monthlyIncome);

console.log(`---- Monthly Finance Report ----
Monthly Income: ${monthlyIncome}
Rent Expense: ${rentExpense}
Food Expense: ${foodExpense}
Total Expenses: ${totalExpenses}
Remaining Balance: ${remainingBalance}
Saving More Than 20%? ${isSavingEnough}
----------------------------------`);
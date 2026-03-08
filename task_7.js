let recentTransactions = [5000, 2000, 15000];

// Step A
recentTransactions.push(3000);

// Step B
recentTransactions.unshift(-1000);

// Step C
recentTransactions.shift();

// Step D
let totalBalance = 0;
//Please, I'm finding it difficult to add the elements in the array as instructed

// Step E
if (totalBalance > 10000) {
  console.log("Status: Wealthy Mode");
} else {
  console.log("Status: Budget Mode");
}

console.log("Transactions:", recentTransactions);
console.log("Total Balance:", totalBalance);
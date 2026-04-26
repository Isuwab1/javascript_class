//The array 
const priceInDollars =  [10, 50, 100, 5, 200]
//Map dollars to naira price
const priceInNaira = priceInDollars.map (price=>price * 1200)
//filter the expensive items
const expensiveItems = priceInNaira.filter (price => price > 50000)
//Display the Expensive price only (in Naira)
console.log(expensiveItems)
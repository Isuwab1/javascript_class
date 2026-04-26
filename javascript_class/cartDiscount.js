const cart = [
  { name: "Phone", price: 200000 },
  { name: "Case", price: 5000 },
  { name: "Charger", price: 10000 }
];

function applyDiscount(items) {
  // Calculate total cart value
  const total = items.reduce((sum, item) => sum + item.price, 0);

  // Check condition
  if (total > 100000) {
    // Apply 10% discount
    return items.map(item => {
      return {
        ...item,
        price: item.price * 0.9
      };
    });
  }

  // No discount
  return items;
}

// Run function
const updatedCart = applyDiscount(cart);

//Display result
console.log(updatedCart);
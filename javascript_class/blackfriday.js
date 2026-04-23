const inventory = [
  { name: "Laptop", price: 500000, category: "Electronics", stock: 5 },
  { name: "Chair", price: 25000, category: "Furniture", stock: 0 },
  { name: "Mouse", price: 5000, category: "Electronics", stock: 12 },
  { name: "Table", price: 4500, category: "Furniture", stock: 7 }
];
    const availableItems =inventory.filter (item => item.stock>0);
        const announcements = availableItems.map(item => {
            let finalPrice = item.price;
                
            if (item.category ==="Electronics")  {
                finalPrice = item.price * 0.85;
            }
                    let message = `The ${item.name} is now ${finalPrice}`;
                        if (finalPrice < 10000) {
                            message += " - MEGA DEAL!";
                    }
                return message
                });
                console.log (announcements)
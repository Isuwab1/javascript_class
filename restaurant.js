let customerOrder = [
    {name: "Pizza 1", price: 2000},
    {name: "Pizza 2", price: 5000},
    {name: "Pizza 3", price: 2000}
]
function processOrder (customerOrder){
    const pizzaName = customerOrder.map (order =>order.name)
    
    let totalPrice = 0
    for (let i = 0; i < customerOrder.length; i++) {
totalPrice += customerOrder [i].price
    }
    setTimeout (()=>{
        console.log (`Your order of ${pizzaName.join (", ")} is ready. Total Amount: ₦${totalPrice}`);
        },
         3000);
    }
processOrder(customerOrder);

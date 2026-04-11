let hubItems = [
    {
        Name: "Fan",
        Category: "Electronics",
        Price: 30000,
    },
    {
        Name: "Cushion",
        Category: "Furniture",
        Price: 300000,
    },
    {
        Name: "FootBall",
        Category: "Sport",
        Price: 30000,
    }
];
for (let i = 0; i < hubItems.length; i++) {
    let item = hubItems[i];
    let finalPrice = item.Price;

    switch (item.Category) {
        case "Electronics":
            finalPrice += item.Price * 0.10
            break;

        case "Furniture":
            finalPrice += item.Price * 0.05
            break;

        case "Sport":
            finalPrice += item.Price * 0.02

            break;

        default:
            break;
    }
    console.log(`Item: ${item.Name} | Final Price: ₦ ${finalPrice}`)
}
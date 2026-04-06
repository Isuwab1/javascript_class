let weatherSequence =["Sunny", "Rainy", "Cloudy", "Sunny", "Rainy", "Stormy"]

let i=0;
let countRainy = 0;
while (i < weatherSequence.length)
{
    let weather = weatherSequence [i];
    
        switch (weather) {
            case "Sunny":
            console.log(`Enjoy the sun! 😎`);
            break;
            case "Rainy":
            console.log(`Take an umbrella! ☔`); 
            countRainy++;
            break;
            case "Cloudy":
                console.log(`Might need a jacket! 🧥`);
                break;
                case "Stormy":
                console.log(`Stay indoors! ⚡`) ;
                break;
                default:
                console.log(`Unknown weather!`)
                break;
                }
                i++
                }
console.log (`Rainy appear ${countRainy} time(s)`)
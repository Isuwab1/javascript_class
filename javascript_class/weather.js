let weatherSequence = ["Sunny", "Rainy", "Cloudy", "Sunny", "Rainy", "Stormy"]
let i =0;
let countRainy = 0;
while (i<weatherSequence.length)
{
let weather = weatherSequence [i]

    switch (weather) {
    case "Sunny":
        console.log (`Wear normal cloth`);
        break;

    case "Rainy":
        console.log (`Umbrella is needed oh my guy`);
        countRainy++
        break;

    case "Cloudy":
        console.log (`It might rain and the weather might be cold, so let's get sweater and umbrella`);
        break;

        case "Stormy":
            console.log(`let's stay indoor for safety purpose`);
            break;

            default:
                console.log (`the weather is not predictable`);
                break;

            }

    i++
        }
    
console.log(`Rainy weather appeared ${countRainy} time(s)`)
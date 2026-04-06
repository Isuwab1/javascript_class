let trafficSequence = [
    "Red","Green", "Yellow", "Red", "Green"
]
let i = 0;
let countYellow = 0;
while (i < trafficSequence.length) {
let light = trafficSequence [i]
{
    switch (light) 
    {
        case "Red":
        console.log ("STOP! 🛑");
        break;
        
        case "Green":
            console.log ("GO!🟢");
            break;

            case "Yellow":
                console.log("SLOW DOWN!🟡");
                countYellow++;
                break;

                default:
                    console.log(`Traffic Error`)
                    break;

    }
    i++
}
}
console.log (`Yellow appeared ${countYellow} time(s)`)
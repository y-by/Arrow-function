// const speedWarning =  speed => {
//   return `You are going at ${speed} mph!`
// }

// console.log(speedWarning(40))

/*
Challenge
1. Refactor this function to use an arrow function.
2. Make sure you write the least code possible.
*/












// const speedWarning = (speedLimit, speed) => {
//   if (speed > speedLimit) {
//     return `⚠️You are going at ${speed} mph!⚠️`
//   } else {
//     return `Nothing to see here...😗`
//   }
// }
// console.log(speedWarning(30, 40))


/*
Challenge
1. Refactor this function so it only warns drivers 
   who are going over the speed limit.
2. The function now needs to take in two parameters. 
   The first is the speed limit, the second is the 
   driver's actual speed.
*/












const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map( distance => Math.round(distance * 1.6) )

console.log(distanceTraveledKm)

/*
Challenge
1. Refactor this .map method so the inline function is
   an arrow function. 
2. Write the least amount of code possible.
*/
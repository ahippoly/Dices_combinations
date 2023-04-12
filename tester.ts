import getTotalPossibleConfigurations from "./getPossibleConfigurations"

const numberOfDices = Number(process.argv[2]) 
const numberOfFaces = Number(process.argv[3]) 
const total = Number(process.argv[4])

const start = performance.now();
const possibilities = getTotalPossibleConfigurations(total, numberOfDices, numberOfFaces)
const end = performance.now();

console.log(`Execution time: ${end - start} ms`);
console.log(`number of possibilities of [${numberOfDices}] dices of [${numberOfFaces}] faces for a total of [${total}] is ${possibilities}`)

// console.log("process argv = ", process.argv)

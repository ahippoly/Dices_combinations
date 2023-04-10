class DicePossibilities
{
    diceArray: number[]
    total: number
    numberOfDices: number
    numberOfFace: number
    possibilities: number
    numOfCheck: number

    constructor(total: number, numberOfDices: number, numberOfFace: number)
    {
        this.total = total
        this.numberOfDices = numberOfDices
        this.numberOfFace = numberOfFace
        
        this.diceArray = new Array(numberOfDices).fill(1)
        this.possibilities = 0
        this.numOfCheck = 0
    }

    traversePossibilities(cumulatedValue: number, diceIndex: number)
    {
        if (diceIndex >= this.numberOfDices)
        {
            // console.log("array possibility checked = ", this.diceArray)
            this.numOfCheck++
            if (cumulatedValue === this.total)
            {
                // console.log("array possibility added = ", this.diceArray)
                this.possibilities++
            }
            return
        }
        const remainingToTotal = this.total - cumulatedValue
        const maxIteration = Math.min(remainingToTotal, this.numberOfFace)
        const minIteration = Math.max(remainingToTotal - (this.diceArray.length - diceIndex - 1) * this.numberOfFace, 1)
        for (let diceValue = minIteration; diceValue <= maxIteration; diceValue++)
        {
            // console.log(`calc interval for dice index ${diceIndex}, maxIter: ${maxIteration}, minIter: ${minIteration}, interval: ${maxIteration- minIteration}`)
            this.diceArray[diceIndex] = diceValue
            this.traversePossibilities(cumulatedValue + diceValue, diceIndex + 1)
        }
    }
}



function getTotalPossibleConfigurations(total: number, numberOfDices: number, numberOfFace: number): number
{
    const dicePoss = new DicePossibilities(total, numberOfDices, numberOfFace)

    dicePoss.traversePossibilities(0, 0)
    console.log("total possibilities = ", dicePoss.possibilities)
    console.log("total check = ", dicePoss.numOfCheck)

    return 1
}



const numberOfDices = Number(process.argv[2]) 
const numberOfFaces = Number(process.argv[3]) 
const total = Number(process.argv[4])


getTotalPossibleConfigurations(total, numberOfDices, numberOfFaces)
console.log("process argv = ", process.argv)



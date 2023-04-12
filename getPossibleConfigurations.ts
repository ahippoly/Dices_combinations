class DicePossibilities
{
    diceArray: number[]
    total: number
    numberOfDices: number
    numberOfFace: number
    possibilities: number

    constructor(total: number, numberOfDices: number, numberOfFace: number)
    {
        this.total = total
        this.numberOfDices = numberOfDices
        this.numberOfFace = numberOfFace
        
        this.diceArray = new Array(numberOfDices).fill(1)
        this.possibilities = 0
    }

    traversePossibilities(cumulatedValue: number, diceIndex: number)
    {
        const remainingToTotal = this.total - cumulatedValue
        const maxIteration = Math.min(remainingToTotal, this.numberOfFace)
        const minIteration = Math.max(remainingToTotal - (this.diceArray.length - diceIndex - 1) * this.numberOfFace, 1)
        if (diceIndex === this.numberOfDices - 1)
        {
            this.possibilities += maxIteration - minIteration + 1
            return
        }
        for (let diceValue = minIteration; diceValue <= maxIteration; diceValue++)
            this.traversePossibilities(cumulatedValue + diceValue, diceIndex + 1)
    }
}

export default function getTotalPossibleConfigurations(total: number, numberOfDices: number, numberOfFace: number): number
{
    const dicePoss = new DicePossibilities(total, numberOfDices, numberOfFace)

    dicePoss.traversePossibilities(0, 0)

    return dicePoss.possibilities
}





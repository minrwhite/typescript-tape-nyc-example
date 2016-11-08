export class Widget {
    multiplicand: number

    constructor(multiplicand: number) {
        this.multiplicand = multiplicand
    }

    multiply(multiplier: number) : number {
        return multiplier * this.multiplicand
    }
}

export default class Model{
    private min: number
    private max: number
    constructor(min: number, max: number) {
        this.min = min
        this.max = max
        console.log(this.min)
        console.log(this.max)
    }
}

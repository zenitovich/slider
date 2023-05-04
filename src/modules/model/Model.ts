export default class Model{
    private min: number
    private max: number
    private initValue: number
    constructor(min: number, max: number, initValue: number) {
        this.min = min
        this.max = max
        this.initValue = initValue
        console.log(this.min)
        console.log(this.max)
        console.log(this.initValue)
    }
    getValues = (min: number = this.min, max: number = this.max, initValue: number = this.initValue) => {
        const arrOfValues: number[] = []
        const  range = max - min
        const interval = range / (initValue + 1)
        for (let i = 1; i <= initValue; i+= 1) {
            const split = Math.round(min + (interval * i))
            arrOfValues.push(split)
        }
        return console.log(arrOfValues)
    }

    // setValue(value: number) {
    //   this.value = value
    //
    //   this.$emitter.dispatch('update:rice', value)
    // }

  // setMin(value: number) {
  //     this.min = value
  // }

  // getValue() {
  //     return this.value
  // }
}

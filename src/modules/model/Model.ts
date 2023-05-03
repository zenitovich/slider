export default class Model{
    private min: number
    private max: number
    firstEl: number
    secondEl: number
    thirdEl: number
    fourthEl: number

    // private value: number
    constructor(min: number, max: number) {
        this.min = min
        this.max = max
        this.firstEl = Math.round(0.2 * (max - min) + min)
        this.secondEl = Math.round(0.4 * (max - min) + min)
        this.thirdEl = Math.round(0.6 * (max - min) + min)
        this.fourthEl = Math.round(0.8 * (max - min) + min)
        console.log(this.min)
        console.log(this.max)
    }

    // setValue(value: number) {
    //   this.value = value
    //
    //   this.$emitter.dispatch('update:rice', value)
    // }

  setMin(value: number) {
      this.min = value
  }

  // getValue() {
  //     return this.value
  // }
}

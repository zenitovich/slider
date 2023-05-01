export default class Model{
    private min: number
    private max: number
    // private value: number
    constructor(min: number, max: number) {
        this.min = min
        this.max = max
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

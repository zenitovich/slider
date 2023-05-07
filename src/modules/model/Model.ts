import {IOptions} from "../../interfaces.ts";
import Emitter from "../../core/Emitter.ts";

export default class Model{

    // @ts-ignore
    private _min: number

    private max: number
    private initValue: number
    private emitter: Emitter
    public arrOfValues: number[]
    constructor(options: IOptions, emitter: Emitter) {
        this.emitter = emitter
        this.min = options.min
        console.log(this.min)
        this.max = options.max
        this.initValue = options.initValue
        console.log(this.max)
        console.log(this.initValue)
        this.arrOfValues = [this.min]
    }
    getValues = (min: number = this.min, max: number = this.max, initValue: number = this.initValue) => {
        const  range = max - min
        const interval = range / (initValue + 1)
        for (let i = 1; i <= initValue; i+= 1) {
            const split = Math.round(min + (interval * i))
            this.arrOfValues.push(split)
        }
        this.arrOfValues.push(this.max)
        return console.log(this.arrOfValues)
    }

    set min(min: number) {
        this._min = min
        this.emitter.emit('update:min', this.min)
    }
    get min() {
        return this._min
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

import {IOptions, IOptionValues} from "../../interfaces.ts";
import Emitter from "../../core/Emitter.ts";

export default class Model{
    // get optionValues(): IOptionValues {
    //     return this._optionValues;
    // }
    //
    // set optionValues(value: IOptionValues) {
    //     this._optionValues = value;
    // }

    private _optionValues: IOptionValues
    // private _min: number
    // private _max: number
    // private _initValue: number
    private emitter: Emitter
    public arrOfValues: number[]
    constructor(options: IOptions, emitter: Emitter) {
        this.emitter = emitter
        this._optionValues = options.values
        // this._optionValues.min = options.min
        // this._optionValues.max = options.max
        // this._optionValues.initValue = options.initValue
        // this.min = options.min
        // console.log(this.min)
        // this.max = options.max
        // this.initValue = options.initValue
        // console.log(this.max)
        // console.log(this.initValue)
        this.arrOfValues = [this._optionValues.min]
    }
    getValues = (min: number = this._optionValues.min, max: number = this._optionValues.max,
                 initValue: number = this._optionValues.initValue) => {
        const  range = max - min
        const interval = range / (initValue + 1)
        for (let i = 1; i <= initValue; i+= 1) {
            const split = Math.round(min + (interval * i))
            this.arrOfValues.push(split)
        }
        this.arrOfValues.push(this._optionValues.max)
        return console.log(this.arrOfValues)
    }

    // set min(min: number) {
    //     this._min = min
    //     this.emitter.emit('update:min', this.min)
    // }
    // get min() {
    //     return this._min
    // }
    set optionValues(optionValues: IOptionValues) {
        this._optionValues = optionValues
        this.emitter.emit('update:optionValues', this._optionValues)
    }
    get optionValues() {
        return this._optionValues
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

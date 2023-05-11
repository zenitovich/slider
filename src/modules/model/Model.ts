import {IOptions, IOptionValues} from "../../interfaces.ts";
import Emitter from "../../core/Emitter.ts";

export default class Model{
    set optionValues(optionValues: IOptionValues) {
        this._optionValues = optionValues
        this.emitter.emit('update:optionValues', this.optionValues)
    }
    get optionValues() {
        return this._optionValues
    }
    // @ts-ignore
    private _optionValues: IOptionValues
    private emitter: Emitter
    public arrOfValues: number[]
    constructor(options: IOptions, emitter: Emitter) {
        this.emitter = emitter
        this.optionValues = options.values
        this.arrOfValues = [this.optionValues.min]
    }
    getValues = (min: number = this.optionValues.min, max: number = this.optionValues.max,
                 initValue: number = this.optionValues.initValue) => {
        const  range = max - min
        const interval = range / (initValue + 1)
        for (let i = 1; i <= initValue; i+= 1) {
            const split = Math.round(min + (interval * i))
            this.arrOfValues.push(split)
        }
        this.arrOfValues.push(this.optionValues.max)
        return console.log(this.arrOfValues)
    }
}

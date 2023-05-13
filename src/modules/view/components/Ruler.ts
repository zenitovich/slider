import Emitter from "../../../core/Emitter.ts";
import {IOptionValues} from "../../../interfaces.ts";

export default class Ruler {
    private emitter: Emitter
    stringOfValues: string
    constructor(emitter: Emitter) {
        this.emitter = emitter
        this.stringOfValues = ''
        this.emitter.subscribe('update:optionValues',  (optionValues: IOptionValues) => {
            function rulerToString(min: number = optionValues.min, max: number = optionValues.max,
                       initValue: number = optionValues.initValue)  {
                const arr: number[] = [optionValues.min]
                const  range = max - min
                const interval = range / (initValue + 1)
                let str: string = ''
                for (let i = 1; i <= initValue; i+= 1) {
                    const split = Math.round(min + (interval * i))
                    arr.push(split)
                }
                arr.push(optionValues.max)
                arr.forEach((el) => {
                    str += `<div class="slider__ruler-value--item">${el}</div>`
                })
                return str
            }
            this.stringOfValues = `${rulerToString()}`
        })
    }
}

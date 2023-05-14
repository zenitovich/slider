import Emitter from "../../../core/Emitter.ts";
import {IScaleData} from "../../../interfaces.ts";

export default class Ruler {
    private emitter: Emitter
    stringOfValues: string

    constructor(emitter: Emitter) {
        this.emitter = emitter
        this.stringOfValues = ''
        this.emitter.subscribe('update:optionValues',  (scaleData: IScaleData) => {
            this.stringOfValues = `${this.rulerToString(scaleData.min, scaleData.max, scaleData.initValue)}`
        })
    }

    rulerToString(min: number , max: number, initValue: number)  {

        const arr: number[] = [min]
        const  range = max - min
        const interval = range / (initValue + 1)

        let str: string = ''

        for (let i = 1; i <= initValue; i+= 1) {
            const split = Math.round(min + (interval * i))
            arr.push(split)
        }

        arr.push(max)
        arr.forEach((el) => {
            str += `<div class="slider__ruler-value--item">${el}</div>`
        })

        return str
    }
}





// function rulerToString(min: number = scaleData.min, max: number = scaleData.max,
//            initValue: number = scaleData.initValue)  {
//
//     const arr: number[] = [scaleData.min]
//     const  range = max - min
//     const interval = range / (initValue + 1)
//
//     let str: string = ''
//
//     for (let i = 1; i <= initValue; i+= 1) {
//         const split = Math.round(min + (interval * i))
//         arr.push(split)
//     }
//
//     arr.push(scaleData.max)
//     arr.forEach((el) => {
//         str += `<div class="slider__ruler-value--item">${el}</div>`
//     })
//
//     return str
// }

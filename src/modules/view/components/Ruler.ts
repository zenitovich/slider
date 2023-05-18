import Emitter from "../../../core/Emitter.ts";
import {IComponent, IScaleData} from "../../../interfaces.ts";
import {SliderComponent} from "../../../core/SliderComponent.ts";

export default class Ruler extends SliderComponent implements IComponent{
    static className: string = 'slider__ruler'

    private emitter: Emitter
    stringOfValues: string

    constructor(emitter: Emitter) {
        super(Ruler.className)
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

    toHTML(): string {
        return `
            <div class="slider__ruler-value">${this.rulerToString(1, 15, 5)}</div>
        `;
    }
}

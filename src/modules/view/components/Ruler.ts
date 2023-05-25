import Emitter from "../../../core/Emitter";
import {IComponent, IScaleData} from "../../../interfaces";
import {SliderComponent} from "../../../core/SliderComponent";
import {Dom} from "../../../core/dom";

export default class Ruler extends SliderComponent implements IComponent{
    static className: string = 'slider__ruler'

    private emitter: Emitter
    stringOfValues: string

    constructor(emitter: Emitter, $root: Dom) {
        super($root, {
            name: 'Ruler',
            listeners: ['click']
        })
        this.emitter = emitter
        this.stringOfValues = ''
        this.emitter.subscribe('update:optionValues',  (scaleData: IScaleData) => this.changeRuler(scaleData))
    }

    onClick(event: Event) {
        console.log('Ruler onClick', event)
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
            <div class="slider__ruler-value">${this.stringOfValues}</div>
        `;
    }

    //временный метод
    changeRuler(scaleData: IScaleData) {
        this.stringOfValues = this.rulerToString(scaleData.min, scaleData.max, scaleData.initValue)
        this.changeHtml(this.toHTML())
    }
}

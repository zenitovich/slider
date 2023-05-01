import {IPresenter} from "../../interfaces";
import Model from "../model/Model.ts";
export default class Presenter implements IPresenter {
    private model: Model
    public min: number
    public max: number
    firstEl: number
    secondEl: number
    thirdEl: number
    fourthEl: number
    constructor(min: number, max: number) {
        this.min = min
        this.max = max
        this.model = new Model(this.min, this.max)
        this.firstEl = Math.round(0.2 * (max - min) + min)
        this.secondEl = Math.round(0.4 * (max - min) + min)
        this.thirdEl = Math.round(0.6 * (max - min) + min)
        this.fourthEl = Math.round(0.8 * (max - min) + min)
        console.log(this.min)
        console.log(this.model)
    }
}

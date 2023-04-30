import {IPresenter} from "../../interfaces.ts";
export default class Presenter implements IPresenter {
    public min: number
    public max: number
    firstEl: number
    secondEl: number
    thirdEl: number
    fourthEl: number
    constructor(min: number, max: number) {
        this.min = min
        this.max = max
        this.firstEl = 0.2 * (max - min) + min
        this.secondEl = 0.4 * (max - min) + min
        this.thirdEl = 0.6 * (max - min) + min
        this.fourthEl = 0.8 * (max - min) + min
    }
}

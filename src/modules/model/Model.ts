import {IOptions, IScaleData} from "../../interfaces.ts";
import Emitter from "../../core/Emitter.ts";

export default class Model{

    private _scaleData: IScaleData
    private emitter: Emitter

    constructor(options: IOptions, emitter: Emitter) {
        this.emitter = emitter
        this.scaleData = options.scaleData
        console.log(this.emitter)
        setTimeout(() => {this.scaleData= {min: 1, max: 66, initValue: 6}}, 5000)
    }

    set scaleData(scaleData: IScaleData) {
        this._scaleData = scaleData
        this.emitter.emit('update:optionValues', this.scaleData)
    }

    get scaleData() {
        return this._scaleData
    }

}

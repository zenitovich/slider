import {IOptions, IScaleData} from "../../interfaces.ts";
import Emitter from "../../core/Emitter.ts";

export default class Model{

    set scaleData(scaleData: IScaleData) {
        this._scaleData = scaleData
        this.emitter.emit('update:optionValues', this.scaleData)
    }

    get scaleData() {
        return this._scaleData
    }

    private _scaleData: IScaleData
    private emitter: Emitter

    constructor(options: IOptions, emitter: Emitter) {
        this.emitter = emitter
        this.scaleData = options.scaleData
    }

}

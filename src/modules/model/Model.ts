import { IOptions, IScaleData } from '../../interfaces.ts';
import Emitter from '../../core/Emitter.ts';

export default class Model {
  private _scaleData: IScaleData;

  private emitter: Emitter;

  constructor(emitter: Emitter) {
    this.emitter = emitter;
    // this.scaleData = options.scaleData;
    console.log(this.emitter);
  }

  setInitData(options: IOptions) {
    this.scaleData = options.scaleData;
  }

  set scaleData(scaleData: IScaleData) {
    // eslint-disable-next-line no-underscore-dangle
    this._scaleData = scaleData;
    this.emitter.emit('update:optionValues', this.scaleData);
  }

  get scaleData() {
    // eslint-disable-next-line no-underscore-dangle
    return this._scaleData;
  }
}

import { IOptions, IPointData, IScaleData } from '../../interfaces.ts';
import Emitter from '../../core/Emitter.ts';

export default class Model {
  private _scaleData: IScaleData;

  private _pointData: IPointData | undefined;

  private emitter: Emitter;

  constructor(emitter: Emitter) {
    this.emitter = emitter;
  }

  setInitData(options: IOptions) {
    this.scaleData = options.scaleData;
    this.pointData = options.pointData;
  }

  set scaleData(scaleData: IScaleData) {
    // eslint-disable-next-line no-underscore-dangle
    this._scaleData = scaleData;
    this.emitter.emit('update:optionValues', this.scaleData);
  }

  get scaleData() {
    return this._scaleData;
  }

  set pointData(pointData: IPointData | undefined) {
    this._pointData = pointData;
    this.emitter.emit('update:pointData', this.pointData);
    console.log('pointData from Model', this.pointData);
  }

  get pointData() {
    return this._pointData;
  }
}

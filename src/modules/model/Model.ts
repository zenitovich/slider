import Emitter from '@core/Emitter.ts';
import { IOptions, IScaleData } from '@/interfaces.ts';

export default class Model {
  private _scaleData: IScaleData;

  private value = 0;

  private pointPositionPercent: number;

  private emitter: Emitter;

  constructor(emitter: Emitter) {
    this.emitter = emitter;
  }

  setValue(value: number) {
    this.value = value;
    this.emitter.emit('update:pointData', { value: this.value, pointPositionPercent: this.pointPositionPercent });
  }

  setPointPositionPercent(pointPositionPercent: number) {
    this.pointPositionPercent = pointPositionPercent;
    this.emitter.emit('update:pointData', { value: this.value, pointPositionPercent: this.pointPositionPercent });
  }

  setInitData(options: IOptions) {
    this.scaleData = options.scaleData;
  }

  getInitData() {
    return this.scaleData;
  }

  set scaleData(scaleData: IScaleData) {
    this._scaleData = scaleData;
    this.emitter.emit('update:optionValues', this.scaleData);
  }

  get scaleData() {
    return this._scaleData;
  }
}

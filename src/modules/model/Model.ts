import Emitter from '@core/Emitter.ts';
import { IOptions, IScaleData } from '@/interfaces.ts';

export default class Model {
  private _scaleData: IScaleData;

  private value = 0;

  private secondValue = 1000000;

  private pointPositionPercent = 0;

  private secondPointPositionPercent = 100;

  private emitter: Emitter;

  constructor(emitter: Emitter) {
    this.emitter = emitter;
  }

  setValue(value: number) {
    this.value = value;
    this.emitter.emit('update:pointData', {
      value: this.value,
      pointPositionPercent: this.pointPositionPercent,
      secondValue: this.secondValue,
      secondPointPositionPercent: this.secondPointPositionPercent,
    });
  }

  getValue() {
    return this.value;
  }

  setSecondValue(secondValue: number) {
    this.secondValue = secondValue;
    this.emitter.emit('update:secondPointData', {
      secondValue: this.secondValue,
      secondPointPositionPercent: this.secondPointPositionPercent,
      value: this.value,
      pointPositionPercent: this.pointPositionPercent,
    });
  }

  getSecondValue() {
    return this.secondValue;
  }

  setPointPositionPercent(pointPositionPercent: number) {
    this.pointPositionPercent = pointPositionPercent;
    this.emitter.emit('update:pointData', { value: this.value, pointPositionPercent: this.pointPositionPercent });
  }

  getPointPositionPercent() {
    return this.pointPositionPercent;
  }

  setSecondPointPositionPercent(secondPointPositionPercent: number) {
    this.secondPointPositionPercent = secondPointPositionPercent;
    this.emitter.emit('update:secondPointData', { secondValue: this.secondValue, secondPointPositionPercent: this.secondPointPositionPercent });
  }

  getSecondPointPositionPercent() {
    return this.secondPointPositionPercent;
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

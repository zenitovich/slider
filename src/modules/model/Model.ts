import { IOptions, IScaleData } from '../../interfaces.ts';
import Emitter from '../../core/Emitter.ts';

export default class Model {
  private _scaleData: IScaleData;

  private value = 0;

  private pointPositionPX: number;

  private emitter: Emitter;

  constructor(emitter: Emitter) {
    this.emitter = emitter;
  }

  setValue(value: number) {
    this.value = value;
    this.emitter.emit('update:pointData', { value: this.value, pointPositionPX: this.pointPositionPX });
  }

  getValue() {
    return this.value;
  }

  setPointPositionPX(pointPositionPX: number) {
    this.pointPositionPX = pointPositionPX;
    this.emitter.emit('update:pointData', { value: this.value, pointPositionPX: this.pointPositionPX });
  }

  getPointPositionPX() {
    return this.pointPositionPX;
  }

  setInitData(options: IOptions) {
    this.scaleData = options.scaleData;
    // this.pointData = options.pointData;
  }

  set scaleData(scaleData: IScaleData) {
    // eslint-disable-next-line no-underscore-dangle
    this._scaleData = scaleData;
    this.emitter.emit('update:optionValues', this.scaleData);
  }

  get scaleData() {
    return this._scaleData;
  }

  // set value(value: number) {
  //   this._value = value;
  //   this.emitter.emit('update:pointData', this.value);
  // }
  //
  // get value() {
  //   return this._value;
  // }
  //
  // set pointPositionPX(pointPositionPX: string) {
  //   this._pointPositionPX = pointPositionPX;
  //   this.emitter.emit('update:pointData', this.pointPositionPX);
  // }
  //
  // get pointPositionPX() {
  //   return this._pointPositionPX;
  // }

  // set pointData(pointData: IPointData | undefined) {
  //   this._pointData = pointData;
  //   this.emitter.emit('update:pointData', this.pointData);
  // }
  //
  // get pointData() {
  //   return this._pointData;
  // }
}

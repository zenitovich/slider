import Model from '@modules/model/Model.ts';
import { HALF_POINT_WIDTH } from '@constants/index.ts';

export default class Presenter {
  private model: Model;

  length: number;

  coordsX: number;

  pointCoordsX: number;

  coordsRight: number;

  constructor(model: Model) {
    this.model = model;
  }

  method(length: number, coordsX: number, coordsRight: number) {
    this.length = length;
    this.coordsX = coordsX;
    this.coordsRight = coordsRight;
  }

  method2(pointCoordsX: number) {
    this.pointCoordsX = pointCoordsX;
  }

  public coordsCounter(eventPageX: number, isSecondPointMove?: boolean) {
    const halfPointPercent = (HALF_POINT_WIDTH / this.length) * 100;

    const { min, max } = this.model.getInitData();

    const scaleRange: number = max - min;

    const percent = ((eventPageX - this.coordsX) / this.length) * 100;

    if (eventPageX >= this.coordsX && eventPageX <= this.coordsRight) {
      const pointValue: number = Math.round((scaleRange / 100) * percent + min);
      const pointPositionPercent = percent - halfPointPercent;

      if (isSecondPointMove === true) {
        this.model.setSecondPointPositionPercent(pointPositionPercent * 0.75 + 11.75);
        this.model.setSecondValue(pointValue);
        console.log('привет я лог из второго пойнта', this.pointCoordsX);
      } else if (eventPageX < this.pointCoordsX) {
        console.log(this.pointCoordsX, 'координаты понйта второго');
        console.log(eventPageX, 'координаты мыши');
        this.model.setPointPositionPercent(pointPositionPercent * 0.75 + 11.75);
        this.model.setValue(pointValue);
      }
    }
  }
}

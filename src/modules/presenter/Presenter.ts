import Model from '@modules/model/Model.ts';
import { HALF_POINT_WIDTH } from '@constants/index.ts';

export default class Presenter {
  private model: Model;

  private rulerLength: number;

  private rulerCoordsX: number;

  private pointCoordsX = 1;

  private secondPointCoordsX = 10000000;

  private rulerCoordsRight: number;

  constructor(model: Model) {
    this.model = model;
  }

  rulerCounter(length: number, coordsX: number, coordsRight: number) {
    this.rulerLength = length;
    this.rulerCoordsX = coordsX;
    this.rulerCoordsRight = coordsRight;
  }

  pointCoordsXCounter(pointCoordsX: number) {
    this.pointCoordsX = pointCoordsX;
  }

  secondPointCoordsXCounter(pointCoordsX: number) {
    this.secondPointCoordsX = pointCoordsX;
  }

  public coordsCounter(eventPageX: number, isSecondPointMove?: boolean) {
    const halfPointPercent = (HALF_POINT_WIDTH / this.rulerLength) * 100;

    const { min, max } = this.model.getInitData();

    const scaleRange: number = max - min;

    const percent = ((eventPageX - this.rulerCoordsX) / this.rulerLength) * 100;

    if (eventPageX >= this.rulerCoordsX && eventPageX <= this.rulerCoordsRight) {
      const pointValue: number = Math.round((scaleRange / 100) * percent + min);

      const pointPositionPercent = percent - halfPointPercent;

      if (isSecondPointMove === true && eventPageX > this.pointCoordsX) {
        this.model.setSecondPointPositionPercent(pointPositionPercent * 0.75 + 11.75);
        this.model.setSecondValue(pointValue);
      } else if (eventPageX < this.secondPointCoordsX) {
        this.model.setPointPositionPercent(pointPositionPercent * 0.75 + 11.75);
        this.model.setValue(pointValue);
      }
    }
  }
}

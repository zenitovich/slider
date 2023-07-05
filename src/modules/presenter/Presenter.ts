import Model from '@modules/model/Model.ts';
import { HALF_POINT_WIDTH } from '@constants/index.ts';

export default class Presenter {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public coordsCounter(pointCoordsX: number, pointCoordsRight: number, eventPageX: number, isSecondPointMove?: boolean) {
    const scaleLength: number = pointCoordsRight - pointCoordsX;

    const halfPointPercent = (HALF_POINT_WIDTH / scaleLength) * 100;

    const { min, max } = this.model.getInitData();

    const scaleRange: number = max - min;

    const percent = ((eventPageX - pointCoordsX) / scaleLength) * 100;

    if (eventPageX >= pointCoordsX && eventPageX <= pointCoordsRight) {
      const pointValue: number = Math.round((scaleRange / 100) * percent + min);
      const pointPositionPercent = percent - halfPointPercent;

      if (isSecondPointMove === true) {
        this.model.setSecondPointPositionPercent(pointPositionPercent);
        this.model.setSecondValue(pointValue);
      } else {
        this.model.setPointPositionPercent(pointPositionPercent);
        this.model.setValue(pointValue);
      }
    }
  }
}

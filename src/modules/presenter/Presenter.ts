import Model from '@modules/model/Model.ts';
import { HALF_POINT_WIDTH } from '@constants/index.ts';

export default class Presenter {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  rulerCounter(length: number, coordsX: number, coordsRight: number) {
    this.model.setRulerData({
      length,
      coordsX,
      coordsRight,
    });
  }

  public coordsCounter(eventPageX: number, isSecondPointMove?: boolean) {
    const { length, coordsX, coordsRight } = this.model.getRulerData();

    const halfPointPercent = (HALF_POINT_WIDTH / length) * 100;

    const { min, max } = this.model.getInitData();

    const scaleRange: number = max - min;

    const percent = ((eventPageX - coordsX) / length) * 100;

    if (eventPageX >= coordsX && eventPageX <= coordsRight) {
      const pointValue: number = Math.round((scaleRange / 100) * percent + min);

      const pointPositionPercent = percent - halfPointPercent;
      if (isSecondPointMove) {
        if (pointPositionPercent <= this.model.getPointPositionPercent()) {
          this.model.setSecondPointPositionPercent(this.model.getPointPositionPercent());
          this.model.setSecondValue(this.model.getValue());
          return;
        }
        this.model.setSecondPointPositionPercent(pointPositionPercent);
        this.model.setSecondValue(pointValue);
        return;
      }
      if (pointPositionPercent >= this.model.getSecondPointPositionPercent()) {
        this.model.setPointPositionPercent(this.model.getSecondPointPositionPercent());
        this.model.setValue(this.model.getSecondValue());
        return;
      }
      this.model.setPointPositionPercent(pointPositionPercent);
      this.model.setValue(pointValue);
    }
  }
}

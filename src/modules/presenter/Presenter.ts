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

  pointZIndexCalc() {
    this.model.setPointZIndex(this.model.getSecondPointZIndex() + 1);
  }

  secondPointZIndexCalc() {
    this.model.setSecondPointZIndex(this.model.getPointZIndex() + 1);
  }

  mousePositionCalc(eventPageX: number) {
    const { length, coordsX } = this.model.getRulerData();
    const percent = ((eventPageX - coordsX) / length) * 100;
    const halfPointPercent = (HALF_POINT_WIDTH / length) * 100;
    const pointPositionPercent = percent - halfPointPercent;
    if (pointPositionPercent - this.model.getPointPositionPercent() < this.model.getSecondPointPositionPercent() - pointPositionPercent) {
      console.log(this.model.getPointPositionPercent());
      this.coordsCounter(eventPageX, false);
    } else {
      this.coordsCounter(eventPageX, true);
    }
  }

  public coordsCounter(eventPageX: number, isSecondPointMove?: boolean) {
    const { length, coordsX, coordsRight } = this.model.getRulerData();
    const halfPointPercent = (HALF_POINT_WIDTH / length) * 100;
    const { min, max } = this.model.getInitData();
    const scaleRange: number = max - min;
    const percent = ((eventPageX - coordsX) / length) * 100;
    const pointValue: number = Math.round((scaleRange / 100) * percent + min);
    const pointPositionPercent = percent - halfPointPercent;

    if (eventPageX >= coordsX && eventPageX <= coordsRight) {
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

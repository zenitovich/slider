import Model from '@modules/model/Model.ts';
import { HALF_POINT_WIDTH, POINT_WIDTH, POINT_WIDTH_IN_PERCENT } from '@constants/index.ts';

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

  getPositionByCoords(eventPageX: number) {
    const { length, coordsX, coordsRight } = this.model.getRulerData();
    const percent = ((eventPageX - coordsX) / length) * POINT_WIDTH_IN_PERCENT;
    const halfPointPercent = (HALF_POINT_WIDTH / length) * POINT_WIDTH_IN_PERCENT;
    const pointPositionPercent = percent - halfPointPercent;
    const currentPointPositionPercent = this.model.getPointPositionPercent();
    const currentSecondPointPositionPercent = this.model.getSecondPointPositionPercent();
    return {
      pointPositionPercent,
      currentPointPositionPercent,
      currentSecondPointPositionPercent,
      percent,
      coordsRight,
      coordsX,
    };
  }

  getValueByCoords(percent: number) {
    const { min, max } = this.model.getInitData();
    const scaleRange: number = max - min;
    const pointValue: number = Math.round((scaleRange / POINT_WIDTH_IN_PERCENT) * percent + min);
    return pointValue;
  }

  mousePositionCalc(eventPageX: number) {
    const { pointPositionPercent, currentPointPositionPercent, currentSecondPointPositionPercent } = this.getPositionByCoords(eventPageX);
    if (this.model.getSecondValueInit()) {
      const isSecondPoint = pointPositionPercent - currentPointPositionPercent > currentSecondPointPositionPercent - pointPositionPercent;
      this.coordsCounter(eventPageX, isSecondPoint);
    } else {
      this.coordsCounter(eventPageX);
    }
  }

  getPointPercentAndValue(percent: number, value: number, secondPoint?: boolean) {
    if (secondPoint) {
      this.model.setSecondPointPositionPercent(percent);
      this.model.setSecondValue(value);
    } else {
      this.model.setPointPositionPercent(percent);
      this.model.setValue(value);
    }
  }

  public coordsCounter(eventPageX: number, isSecondPointMove?: boolean) {
    const { pointPositionPercent, currentPointPositionPercent, currentSecondPointPositionPercent, percent, coordsRight, coordsX } =
      this.getPositionByCoords(eventPageX);
    const pointValue = this.getValueByCoords(percent);

    if (eventPageX >= coordsX && eventPageX <= coordsRight) {
      if (isSecondPointMove) {
        if (pointPositionPercent <= currentPointPositionPercent) {
          this.getPointPercentAndValue(currentPointPositionPercent, this.model.getValue(), true);
          return;
        }
        this.getPointPercentAndValue(pointPositionPercent, pointValue, true);
        return;
      }
      if (pointPositionPercent >= currentSecondPointPositionPercent && this.model.getSecondValueInit()) {
        this.getPointPercentAndValue(currentSecondPointPositionPercent, this.model.getSecondValue());
        return;
      }
      this.getPointPercentAndValue(pointPositionPercent, pointValue);
    }
  }

  valueCheck(check: boolean) {
    this.model.setValueButtonChecked(check);
  }

  menuCheck(check: boolean) {
    this.model.setRangeButtonChecked(check);
  }

  secondValueInit(secondValueInit: boolean) {
    this.model.setSecondValueInit(secondValueInit);
  }

  selectValue(selectedValue: number) {
    this.model.setSelectedValue(selectedValue);
    const currentSelectedValue = this.model.getSelectedValue();
    const { min, max } = this.model.getInitData();
    const { length } = this.model.getRulerData();
    if (currentSelectedValue >= min && currentSelectedValue <= max) {
      const selectedValuePercent = ((currentSelectedValue - min) / (max - min)) * POINT_WIDTH_IN_PERCENT - (POINT_WIDTH / length) * POINT_WIDTH_IN_PERCENT;
      if (max - currentSelectedValue > currentSelectedValue - min || !this.model.getSecondValueInit()) {
        this.getPointPercentAndValue(selectedValuePercent, currentSelectedValue);
      } else {
        this.getPointPercentAndValue(selectedValuePercent, currentSelectedValue, true);
      }
    }
  }
}

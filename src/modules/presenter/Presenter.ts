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
          this.model.setSecondProgressBarWidth(POINT_WIDTH_IN_PERCENT - this.model.getSecondPointPositionPercent());
          return;
        }
        this.getPointPercentAndValue(pointPositionPercent, pointValue, true);
        this.model.setSecondProgressBarWidth(POINT_WIDTH_IN_PERCENT - this.model.getSecondPointPositionPercent());
        return;
      }
      if (pointPositionPercent >= currentSecondPointPositionPercent && this.model.getSecondValueInit()) {
        this.getPointPercentAndValue(currentSecondPointPositionPercent, this.model.getSecondValue());
        return;
      }
      this.getPointPercentAndValue(pointPositionPercent, pointValue);
    }

    this.model.setProgressBarWidth(this.model.getPointPositionPercent());
  }

  valueCheck(check: boolean) {
    this.model.setValueButtonChecked(check);
  }

  rangeCheck(check: boolean) {
    this.model.setRangeButtonChecked(check);
    if (this.model.getValue() > this.model.getSecondValue()) {
      const firstValue = this.model.getValue();
      const firstValuePosition = this.model.getPointPositionPercent();
      this.model.setValue(this.model.getSecondValue());
      this.model.setPointPositionPercent(this.model.getSecondPointPositionPercent());
      this.model.setSecondValue(firstValue);
      this.model.setSecondPointPositionPercent(firstValuePosition);
    }
  }

  secondValueInit(secondValueInit: boolean) {
    this.model.setSecondValueInit(secondValueInit);
  }

  selectValue(selectedValue: number, secondValue?: boolean) {
    this.model.setSelectedValue(selectedValue);
    const currentSecondValue = this.model.getSecondValue();
    const currentFirstValue = this.model.getValue();
    const currentSelectedValue = this.model.getSelectedValue();
    const { min, max } = this.model.getInitData();
    const { length } = this.model.getRulerData();

    if (currentSelectedValue >= min && currentSelectedValue <= max) {
      const selectedValuePercent = ((currentSelectedValue - min) / (max - min)) * POINT_WIDTH_IN_PERCENT - (POINT_WIDTH / length) * POINT_WIDTH_IN_PERCENT;

      if ((!secondValue && currentSelectedValue <= currentSecondValue) || !this.model.getSecondValueInit()) {
        this.getPointPercentAndValue(selectedValuePercent, currentSelectedValue);
        this.model.setProgressBarWidth(this.model.getPointPositionPercent());
      } else if (currentSelectedValue >= currentFirstValue && secondValue) {
        this.getPointPercentAndValue(selectedValuePercent, currentSelectedValue, true);
        this.model.setSecondProgressBarWidth(POINT_WIDTH_IN_PERCENT - this.model.getSecondPointPositionPercent());
      }
    }
  }
}

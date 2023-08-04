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

  scaleClickHandler(eventPageX: number) {
    const { pointPositionPercent, currentPointPositionPercent, currentSecondPointPositionPercent } = this.getPositionByCoords(eventPageX);
    const secondValueInit = this.model.getSecondValueInit();

    if (secondValueInit) {
      const isSecondPoint = pointPositionPercent - currentPointPositionPercent > currentSecondPointPositionPercent - pointPositionPercent;
      this.coordsCounter(eventPageX, isSecondPoint);
    } else {
      this.coordsCounter(eventPageX, false);
    }
  }

  setPointPercentAndValue(percent: number, value: number, secondPoint?: boolean) {
    if (secondPoint) {
      this.model.setSecondPointPositionPercent(percent);
      this.model.setSecondValue(value);
    } else {
      this.model.setPointPositionPercent(percent);
      this.model.setValue(value);
    }
  }

  applyValues(eventPageX: number, isSecondPointMove: boolean | undefined) {
    const { pointPositionPercent, currentPointPositionPercent, currentSecondPointPositionPercent, percent } = this.getPositionByCoords(eventPageX);
    const pointValue = this.getValueByCoords(percent);

    if (isSecondPointMove) {
      if (pointPositionPercent <= currentPointPositionPercent) {
        this.setPointPercentAndValue(currentPointPositionPercent, this.model.getValue(), true);
        this.model.setSecondProgressBarWidth(POINT_WIDTH_IN_PERCENT - this.model.getSecondPointPositionPercent());
        return;
      }
      this.setPointPercentAndValue(pointPositionPercent, pointValue, true);
      this.model.setSecondProgressBarWidth(POINT_WIDTH_IN_PERCENT - this.model.getSecondPointPositionPercent());
      return;
    }
    if (pointPositionPercent >= currentSecondPointPositionPercent && this.model.getSecondValueInit()) {
      this.setPointPercentAndValue(currentSecondPointPositionPercent, this.model.getSecondValue());
      return;
    }
    this.setPointPercentAndValue(pointPositionPercent, pointValue);
  }

  public coordsCounter(eventPageX: number, isSecondPointMove?: boolean) {
    const { percent, coordsRight, coordsX } = this.getPositionByCoords(eventPageX);
    const pointValue = this.getValueByCoords(percent);
    const stepValue = this.model.getStepValue();

    if (eventPageX >= coordsX && eventPageX <= coordsRight) {
      if (stepValue) {
        if (pointValue % stepValue === 0) {
          this.applyValues(eventPageX, isSecondPointMove);
        }
      } else {
        this.applyValues(eventPageX, isSecondPointMove);
      }
    }

    this.model.setProgressBarWidth(this.model.getPointPositionPercent());
  }

  valueCheck(check: boolean) {
    this.model.setValueButtonChecked(check);
  }

  setRangeCheck(check: boolean) {
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

  stepValueCounter(value: number) {
    const { min, max } = this.model.getInitData();

    if (value < max - min && value > 0) {
      this.model.setStepValue(value);
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
        this.setPointPercentAndValue(selectedValuePercent, currentSelectedValue);
        this.model.setProgressBarWidth(this.model.getPointPositionPercent());
      } else if (currentSelectedValue >= currentFirstValue && secondValue) {
        this.setPointPercentAndValue(selectedValuePercent, currentSelectedValue, true);
        this.model.setSecondProgressBarWidth(POINT_WIDTH_IN_PERCENT - this.model.getSecondPointPositionPercent());
      }
    }
  }

  getValue() {
    return this.model.getValue();
  }
}

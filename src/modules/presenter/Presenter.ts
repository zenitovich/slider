import Model from '../model/Model.ts';

export default class Presenter {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public method(pointCoordsX: number, pointCoordsRight: number, eventPageX: number) {
    const pointLength: number = pointCoordsRight - pointCoordsX;
    const halfPoint = (9 / pointLength) * 100;
    const scaleData = this.model.getInitData();
    const pointRange: number = scaleData.max - scaleData.min;
    const percent = ((eventPageX - pointCoordsX) / pointLength) * 100;
    if (eventPageX >= pointCoordsX && eventPageX <= pointCoordsRight) {
      const pointValue: number = Math.round((pointRange / 100) * percent);
      console.log(((eventPageX - pointCoordsX) / pointLength) * 100, 'отношение');
      this.model.setPointPositionPercent(percent - halfPoint);
      this.model.setValue(pointValue);
    }
  }
}

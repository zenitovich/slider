import Model from '../model/Model.ts';

export default class Presenter {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public method(pointCoordsX: number, pointCoordsRight: number, eventPageX: number) {
    const pointLength: number = pointCoordsRight - pointCoordsX;
    const scaleData = this.model.getIninData();
    const pointRange: number = scaleData.max - scaleData.min;
    // const pointRange: number = this.model.scaleData.max - this.model.scaleData.min;
    const pointStep: number = pointRange / pointLength;
    if (eventPageX >= pointCoordsX && eventPageX <= pointCoordsRight) {
      const pointValue: number = Math.round((eventPageX - pointCoordsX) * pointStep) + scaleData.min;
      // const pointValue: number = Math.round((eventPageX - pointCoordsX) * pointStep) + this.model.scaleData.min;
      console.log(pointValue);
      this.model.setPointPositionPX(eventPageX - pointCoordsX - 11);
      this.model.setValue(pointValue);
    }
  }
}

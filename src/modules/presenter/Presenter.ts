import Model from '../model/Model.ts';

export default class Presenter {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public method(pointCoordsX: number, pointCoordsRight: number, eventPageX: number) {
    const pointLength: number = pointCoordsRight - pointCoordsX;
    const pointRange: number = this.model.scaleData.max - this.model.scaleData.min;
    const pointStep: number = pointRange / pointLength;
    if (eventPageX >= pointCoordsX && eventPageX <= pointCoordsRight) {
      const pointValue: number = Math.round((eventPageX - pointCoordsX) * pointStep) + this.model.scaleData.min;
      this.model.pointData = {
        valueElemHtml: `${pointValue}`,
        pointButtonPosition: `${eventPageX - pointCoordsX - 11}px`,
        valueElemPosition: `${eventPageX - pointCoordsX - 11}px`,
      };
    }
  }
}

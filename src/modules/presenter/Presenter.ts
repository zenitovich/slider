import Model from '../model/Model.ts';

export default class Presenter {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public method(pointCoords: DOMRect, eventPageX: number) {
    const pointLength: number = pointCoords.right - pointCoords.x;
    const pointRange: number =
      this.model.scaleData.max - this.model.scaleData.min;
    const pointStep: number = pointRange / pointLength;
    if (eventPageX >= pointCoords.x && eventPageX <= pointCoords.right) {
      const pointValue: number =
        Math.round((eventPageX - pointCoords.x) * pointStep) +
        this.model.scaleData.min;
      this.model.pointData = {
        valueElemHtml: `${pointValue}`,
        pointButtonPosition: `${eventPageX - pointCoords.x - 11}px`,
        valueElemPosition: `${eventPageX - pointCoords.x - 11}px`,
      };
    }
  }
}

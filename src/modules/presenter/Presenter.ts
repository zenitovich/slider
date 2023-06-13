import Model from '../model/Model.ts';

export default class Presenter {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public method(pointCoords: DOMRect) {
    const pointLength: number = pointCoords.right - pointCoords.x;
    const pointRange = this.model.scaleData.max - this.model.scaleData.min;
    const pointStep: number = pointRange / pointLength;
    document.onmousemove = (e: MouseEvent) => {
      if (e.pageX >= pointCoords.x && e.pageX <= pointCoords.right) {
        const pointValue: number =
          Math.round((e.pageX - pointCoords.x) * pointStep) +
          this.model.scaleData.min;
        this.model.pointData = {
          valueElemHtml: `${pointValue}`,
          pointButtonPosition: `${e.pageX - pointCoords.x}px`,
          valueElemPosition: `${e.pageX - pointCoords.x}px`,
        };
      }
    };
  }
}

import Model from '../model/Model.ts';

export default class Presenter {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public method(pointCoords: DOMRect, event: MouseEvent) {
    const pointLength: number = pointCoords.right - pointCoords.x;
    const pointRange: number =
      this.model.scaleData.max - this.model.scaleData.min;
    const pointStep: number = pointRange / pointLength;
    if (event.pageX >= pointCoords.x && event.pageX <= pointCoords.right) {
      // pageX x
      const pointValue: number =
        Math.round((event.pageX - pointCoords.x) * pointStep) +
        this.model.scaleData.min;
      this.model.pointData = {
        valueElemHtml: `${pointValue}`,
        // position
        pointButtonPosition: `${event.pageX - pointCoords.x - 11}px`,
        valueElemPosition: `${event.pageX - pointCoords.x - 11}px`,
      };
    }
  }
}

// вариант с this без констант
// import Model from '../model/Model.ts';
//
// export default class Presenter {
//   model: Model;
//
//   pointRange: number;
//
//   pointLength: number;
//
//   pointStep: number;
//
//   pointValue: number;
//
//   constructor(model: Model) {
//     this.model = model;
//     this.pointRange = this.model.scaleData.max - this.model.scaleData.min;
//   }
//
//   public method(pointCoords: DOMRect, event: MouseEvent) {
//     this.pointLength = pointCoords.right - pointCoords.x;
//     this.pointStep = this.pointRange / this.pointLength;
//     if (event.pageX >= pointCoords.x && event.pageX <= pointCoords.right) {
//       this.pointValue = Math.round((event.pageX - pointCoords.x) * this.pointStep)
//         + this.model.scaleData.min;
//       this.model.pointData = {
//         valueElemHtml: `${this.pointValue}`,
//         pointButtonPosition: `${event.pageX - pointCoords.x}px`,
//         valueElemPosition: `${event.pageX - pointCoords.x}px`,
//       };
//     }
//   }
// }

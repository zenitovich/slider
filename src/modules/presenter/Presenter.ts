import Model from '../model/Model.ts';

export default class Presenter {
  model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public method(
    point: HTMLElement | null,
    button: HTMLElement | null,
    valueElem: HTMLElement | null
  ) {
    if (point !== null && button !== null && valueElem !== null) {
      const pointCoords: DOMRect = point.getBoundingClientRect();
      const pointLength: number = pointCoords.right - pointCoords.x;
      const pointRange: number =
        this.model.scaleData.max - this.model.scaleData.min;
      const pointStep: number = pointRange / pointLength;
      document.onmousemove = (e: MouseEvent) => {
        if (e.pageX >= pointCoords.x && e.pageX <= pointCoords.right) {
          button.style.left = `${e.pageX - pointCoords.x}px`;
          valueElem.style.left = `${e.pageX - pointCoords.x}px`;
          const pointValue: number =
            Math.round((e.pageX - pointCoords.x) * pointStep) +
            this.model.scaleData.min;
          valueElem.innerHTML = `${pointValue}`;
        }
      };
    }
  }
}

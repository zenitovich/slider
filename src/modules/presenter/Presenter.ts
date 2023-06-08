import Model from '../model/Model.ts';

export default class Presenter {
  model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public method() {
    console.log('Mousedown from Presenter');
    // const point: HTMLElement = document.querySelector('.slider__point');
    // const pointCoords: DOMRect | undefined = point.getBoundingClientRect();
    // const pointButton: HTMLElement | null = document.querySelector(
    //   '.slider__point--button',
    // );
    // const pointLength: number | undefined = pointCoords.right - pointCoords.x;
    // const pointRange: number = this.model.scaleData.max - this.model.scaleData.min;
    // const pointStep: number = pointRange / pointLength;
    // if (pointButton !== null && pointCoords !== undefined) {
    //   document.onmousemove = (e) => {
    //     if (e.pageX >= pointCoords.x && e.pageX <= pointCoords.right) {
    //       pointButton.style.left = `${e.pageX - pointCoords.x}px`;
    //       const pointValue: number = Math.round((e.pageX - pointCoords.x) * pointStep) + this.model.scaleData.min;
    //       console.log('Pointvalue', pointValue);
    //       console.log(pointButton.style.left);
    //       console.log('PointStep', pointStep);
    //       document.querySelector(
    //         '.slider__point--value',
    //       ).innerHTML = `${pointValue}`;
    //     }
    //   };
    // }
  }
}

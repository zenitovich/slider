import { SliderComponent } from '../../../core/SliderComponent.ts';
import Emitter from '../../../core/Emitter.ts';
import { Dom } from '../../../core/dom.ts';
import { IScaleData } from '../../../interfaces.ts';
import Presenter from '../../presenter/Presenter.ts';

export default class Point extends SliderComponent {
  static className = 'slider__point';

  private emitter: Emitter;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super(
      $root,
      {
        name: 'Point',
        listeners: ['click', 'mousedown'],
      },
      presenter
    );
    this.emitter = emitter;
    this.emitter.subscribe('update:optionValues', (scaleData: IScaleData) =>
      console.log(scaleData)
    );
  }

  onClick(event: Event) {
    console.log('Point onClick', event);
  }

  onMousedown() {
    console.log(this);
    console.log('mousedown from point');
    this.presenter.method();
    // console.log('Mousedown');
    // const point: HTMLElement = document.querySelector('.slider__point');
    // const pointCoords: DOMRect | undefined = point.getBoundingClientRect();
    // const pointButton: HTMLElement | null = document.querySelector(
    //   '.slider__point--button',
    // );
    // const pointLength: number | undefined = pointCoords.right - pointCoords.x;
    // const pointRange: number = 100 - 10;
    // const pointStep: number = pointRange / pointLength;
    // if (pointButton !== null && pointCoords !== undefined) {
    //   document.onmousemove = (e) => {
    //     if (e.pageX >= pointCoords.x && e.pageX <= pointCoords.right) {
    //       pointButton.style.left = `${e.pageX - pointCoords.x}px`;
    //       const pointValue: number = Math.round((e.pageX - pointCoords.x) * pointStep) + 10;
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

  toHTML(): string {
    return `
            <div class="slider__point--button"></div>
            <div class="slider__point--value"></div>
        `;
  }
}

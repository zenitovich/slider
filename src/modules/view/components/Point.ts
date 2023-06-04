import { SliderComponent } from '../../../core/SliderComponent.ts';
import Emitter from '../../../core/Emitter.ts';
import { Dom } from '../../../core/dom.ts';

export default class Point extends SliderComponent {
  static className = 'slider__point';

  private emitter: Emitter;

  constructor(emitter: Emitter, $root: Dom) {
    super($root, {
      name: 'Point',
      listeners: ['click', 'mousedown'],
    });
    this.emitter = emitter;
    console.log(this.emitter);
  }

  onClick(event: Event) {
    console.log('Point onClick', event);
  }

  onMousedown() {
    console.log('Mousedown');
    const point: HTMLElement | null = document.querySelector('.slider__point');
    const pointButton: HTMLElement | null = document.querySelector(
      '.slider__point--button'
    );
    if (point !== null && pointButton !== null) {
      point.onmousemove = (e) => {
        console.log(e.pageX, e.pageY);
        pointButton.style.left = `${e.pageX}px`;
      };
    }
    // document.onmousemove = (e) => {
    //   console.log(e.pageX, e.pageY);
    //   if (point !== null) {
    //     point.style.left = `${e.pageX}px`;
    //   }
    // };
  }

  toHTML(): string {
    return `
            <div class="slider__point--button"></div>
        `;
  }
}

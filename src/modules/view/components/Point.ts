import { SliderComponent } from '../../../core/SliderComponent.ts';
import Emitter from '../../../core/Emitter.ts';
import { Dom } from '../../../core/dom.ts';
import Presenter from '../../presenter/Presenter.ts';
import { IPointData } from '../../../interfaces.ts';

export default class Point extends SliderComponent {
  static className = 'slider__point';

  private emitter: Emitter;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super(
      $root,
      { name: 'Point', listeners: ['click', 'mousedown'] },
      presenter
    );
    this.emitter = emitter;
    this.emitter.subscribe('update:pointData', (pointData: IPointData) =>
      this.changePoint(pointData)
    );
  }

  onClick(event: Event) {
    console.log('Point onClick', event);
  }

  onMousedown() {
    const pointButton: HTMLElement | null = document.querySelector(
      '.slider__point--button'
    );
    const pointValue: HTMLElement | null = document.querySelector<HTMLElement>(
      '.slider__point--value'
    );
    this.presenter.method(this.$root.$el, pointButton, pointValue);
    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }

  toHTML(): string {
    return `
            <div class="slider__point--button"></div>
            <div class="slider__point--value"></div>
        `;
  }

  changePoint(pointData: IPointData) {
    console.log('pointData from Point', pointData);
    this.changeHtml(this.toHTML());
  }
}

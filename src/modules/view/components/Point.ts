import { SliderComponent } from '../../../core/SliderComponent.ts';
import Emitter from '../../../core/Emitter.ts';
import { Dom } from '../../../core/dom.ts';
import Presenter from '../../presenter/Presenter.ts';
import { IPointData } from '../../../interfaces.ts';

export default class Point extends SliderComponent {
  static className = 'slider__point';

  private emitter: Emitter;

  point: HTMLElement | null;

  pointButton: HTMLElement | null;

  pointValue: HTMLElement | null;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super(
      $root,
      { name: 'Point', listeners: ['click', 'mousedown'] },
      presenter
    );
    this.emitter = emitter;
    this.point = this.$root.$el;
    this.pointButton = document.querySelector('.slider__point--button');
    this.pointValue = document.querySelector<HTMLElement>(
      '.slider__point--value'
    );
    this.emitter.subscribe('update:pointData', (pointData: IPointData) =>
      this.changePoint(pointData, this.point, this.pointButton, this.pointValue)
    );
  }

  onClick(event: Event) {
    console.log('Point onClick', event);
  }

  onMousedown() {
    if (
      this.point !== null &&
      this.pointButton !== null &&
      this.pointValue !== null
    ) {
      const pointCoords: DOMRect = this.point.getBoundingClientRect();
      console.log(this.pointValue, pointCoords, this.pointButton);
      this.presenter.method(pointCoords);
    }
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

  changePoint(
    pointData: IPointData,
    point: HTMLElement | null,
    pointButton: HTMLElement | null,
    pointValue: HTMLElement | null
  ) {
    if (point !== null && pointButton !== null && pointValue !== null) {
      pointButton.style.left = pointData.pointButtonPosition;
      pointValue.style.left = pointData.valueElemPosition;
      point.innerHTML = pointData.valueElemHtml;
    }
    console.log(pointData.pointButtonPosition);
    this.changeHtml(this.toHTML());
  }
}

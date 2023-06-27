import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IPointData } from '@/interfaces.ts';

export default class PointTwo extends SliderComponent {
  static className = 'slider__pointTwo';

  private emitter: Emitter;

  pointElement: HTMLElement | null;

  pointElementInitWidth: number;

  pointButton: HTMLElement | null;

  pointValue: HTMLElement | null;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super($root, { name: 'PointTwo', listeners: ['click', 'mousedown'] }, presenter);
    this.emitter = emitter;
    this.pointElement = this.$root.$el;
    this.emitter.subscribe('update:pointTwoData', (pointData: IPointData) => this.changePoint(pointData));
  }

  init() {
    super.init();
    this.pointButton = this.pointElement?.querySelector('.slider__pointTwo--button') || null;
    this.pointValue = this.pointElement?.querySelector('.slider__pointTwo--value') || null;
  }

  changePoint(pointData: IPointData) {
    if (this?.pointValue && this?.pointButton) {
      this.pointButton.style.left = `${pointData.pointTwoPositionPercent}%`;
      this.pointValue.style.left = `${pointData.pointTwoPositionPercent}%`;
      console.log(this.pointButton.style.left);
      this.pointValue.innerHTML = pointData.valueTwo.toString();
    }
  }

  resize() {}

  onClick(event: MouseEvent) {
    console.log('pointTwo');
    if (this.pointElement !== null) {
      this.pointElementInitWidth = this.pointElement.offsetWidth;

      const pointCoords: DOMRect = this.pointElement.getBoundingClientRect();

      const pointCoordsX: number = pointCoords.x;

      const pointCoordsRight: number = pointCoords.right;

      const eventPageX: number = event.pageX;

      console.log(pointCoords, eventPageX);

      this.presenter.coordsCounterTwo(pointCoordsX, pointCoordsRight, eventPageX);
    }
  }

  onMousedown() {
    if (this.pointElement !== null) {
      this.pointElementInitWidth = this.pointElement.offsetWidth;

      const pointCoords: DOMRect = this.pointElement.getBoundingClientRect();

      const pointCoordsX: number = pointCoords.x;

      const pointCoordsRight: number = pointCoords.right;

      document.onmousemove = (event: MouseEvent) => {
        const eventPageX: number = event.pageX;
        this.presenter.coordsCounterTwo(pointCoordsX, pointCoordsRight, eventPageX);
      };
    }
    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }

  toHTML(): string {
    return `
            <div class="slider__pointTwo--button"></div>
            <div class="slider__pointTwo--value"></div>
        `;
  }
}

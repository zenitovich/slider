import { SliderComponent } from '../../../core/SliderComponent.ts';
import Emitter from '../../../core/Emitter.ts';
import { Dom } from '../../../core/dom.ts';
import Presenter from '../../presenter/Presenter.ts';
import { IPointData } from '../../../interfaces.ts';
// import { IPointData } from '../../../interfaces.ts';

export default class Point extends SliderComponent {
  static className = 'slider__point';

  private emitter: Emitter;

  pointElement: HTMLElement | null;

  pointButton: HTMLElement | null;

  pointValue: HTMLElement | null;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super($root, { name: 'Point', listeners: ['click', 'mousedown'] }, presenter);
    this.emitter = emitter;
    this.pointElement = this.$root.$el;
    this.emitter.subscribe('update:pointData', (pointData: IPointData) => this.changePoint(pointData));
  }

  onClick(event: Event) {
    console.log('Point onClick', event);
  }

  onMousedown() {
    if (this.pointElement !== null) {
      const pointCoords: DOMRect = this.pointElement.getBoundingClientRect();
      const pointCoordsX: number = pointCoords.x;
      const pointCoordsRight: number = pointCoords.right;
      document.onmousemove = (event: MouseEvent) => {
        const eventPageX: number = event.pageX;
        this.presenter.method(pointCoordsX, pointCoordsRight, eventPageX);
      };
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

  init() {
    super.init();
    this.pointButton = this.pointElement?.querySelector('.slider__point--button') || null;
    this.pointValue = this.pointElement?.querySelector('.slider__point--value') || null;
  }

  changePoint(pointData: IPointData) {
    if (this?.pointValue && this?.pointButton) {
      this.pointButton.style.left = `${pointData.pointPositionPX}px`;
      this.pointValue.style.left = `${pointData.pointPositionPX}px`;
      console.log(pointData);
      this.pointValue.innerHTML = pointData.value.toString();
    }
  }
}

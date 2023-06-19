import { SliderComponent } from '../../../core/SliderComponent.ts';
import Emitter from '../../../core/Emitter.ts';
import { Dom } from '../../../core/dom.ts';
import Presenter from '../../presenter/Presenter.ts';
import { IPointData } from '../../../interfaces.ts';

export default class Point extends SliderComponent {
  static className = 'slider__point';

  private emitter: Emitter;

  pointElement: HTMLElement | null;

  pointElementInitWidth: number;

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
      this.pointElementInitWidth = this.pointElement.offsetWidth;
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
      this.pointButton.style.left = `${pointData.pointPositionPercent}%`;
      this.pointValue.style.left = `${pointData.pointPositionPercent}%`;
      this.pointValue.innerHTML = pointData.value.toString();
    }
  }

  resize() {
    // if (this?.pointElement && this?.pointElementInitWidth && this?.pointButton && this?.pointValue) {
    //   const denis = this.pointElement.offsetWidth;
    //   const radar = this.pointElementInitWidth / denis;
    //   this.pointButton.style.left = `${parseInt(this.pointButton.style.left, 10) * radar}px`;
    //   this.pointValue.style.left = `${parseInt(this.pointButton.style.left, 10) * radar}px`;
    // }
    // if (this.$root.$el?.style !== undefined && this?.pointValue && this?.initWidth) {
    //   const width: string = this.$root.$el?.style.width;
    //   const operation = parseInt(this.pointValue.style.left, 10) * (this.initWidth / width);
    //   this.pointValue.style.left = `${this.pointValue.style.left * (this.initWidth / width)}px`;
    // }
  }
}

import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IPointData } from '@/interfaces.ts';

export default class Point extends SliderComponent {
  static className = 'slider__point';

  private emitter: Emitter;

  pointElement: HTMLElement | null;

  private pointValue: HTMLElement | null;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super($root, { name: 'Point', listeners: ['click', 'mousedown'] }, presenter);
    this.emitter = emitter;
    this.pointElement = this.$root.$el;
    this.emitter.subscribe('update:pointData', (pointData: IPointData) => this.changePoint(pointData));
  }

  init() {
    super.init();
    this.pointValue = this.pointElement?.querySelector('.slider__point--value') || null;
  }

  changePoint(pointData: IPointData) {
    if (this?.pointValue && pointData.value < pointData.secondValue && this.pointElement) {
      this.pointElement.style.left = `${pointData.pointPositionPercent}%`;
      this.pointValue.style.left = `${pointData.pointPositionPercent}%`;
      this.pointValue.innerHTML = pointData.value.toString();
    }
  }

  resize() {}

  // onClick(event: MouseEvent) {
  //   if (this.pointElement !== null) {
  //     this.pointElementInitWidth = this.pointElement.offsetWidth;
  //
  //     const pointCoords: DOMRect = this.pointElement.getBoundingClientRect();
  //
  //     const pointCoordsX: number = pointCoords.x;
  //
  //     const pointCoordsRight: number = pointCoords.right;
  //
  //     const eventPageX: number = event.pageX;
  //
  //     this.presenter.coordsCounter(pointCoordsX, pointCoordsRight, eventPageX);
  //   }
  // }

  onMousedown() {
    if (this.pointElement !== null) {
      document.onmousemove = (event: MouseEvent) => {
        const eventPageX: number = event.pageX;
        this.presenter.coordsCounter(eventPageX, false);
      };
    }
    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }

  toHTML(): string {
    return `
            <div class="slider__point--value"></div>
        `;
  }
}

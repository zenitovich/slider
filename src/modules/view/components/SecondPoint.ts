import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IPointData } from '@/interfaces.ts';

export default class SecondPoint extends SliderComponent {
  static className = 'slider__secondPoint';

  private emitter: Emitter;

  pointElement: HTMLElement | null;

  private pointValue: HTMLElement | null;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super($root, { name: 'SecondPoint', listeners: ['click', 'mousedown'] }, presenter);
    this.emitter = emitter;
    this.pointElement = this.$root.$el;
    this.emitter.subscribe('update:secondPointData', (pointData: IPointData) => this.changePoint(pointData));
  }

  init() {
    super.init();
    this.pointValue = this.pointElement?.querySelector('.slider__secondPoint--value') || null;
  }

  changePoint(pointData: IPointData) {
    if (this?.pointValue && pointData.value < pointData.secondValue && this.pointElement) {
      this.pointElement.style.left = `${pointData.secondPointPositionPercent}%`;
      this.pointValue.style.left = `${pointData.secondPointPositionPercent}%`;
      this.pointValue.innerHTML = pointData.secondValue.toString();
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
  //     this.presenter.coordsCounter(pointCoordsX, pointCoordsRight, eventPageX, true);
  //   }
  // }

  onMousedown() {
    document.onmousemove = (event: MouseEvent) => {
      if (this.pointElement !== null) {
        const pointCoords: DOMRect = this.pointElement.getBoundingClientRect();
        const pointCoordsX: number = pointCoords.x;
        this.presenter.method2(pointCoordsX);
        const eventPageX: number = event.pageX;
        this.presenter.coordsCounter(eventPageX, true);
      }
    };

    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }

  toHTML(): string {
    return `
            <div class="slider__secondPoint--value"></div>
        `;
  }
}

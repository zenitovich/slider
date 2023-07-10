import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IPointData } from '@/interfaces.ts';

export default class Point extends SliderComponent {
  static className = 'slider__point';

  private emitter: Emitter;

  pointElement: HTMLElement;

  private pointValueElement: HTMLElement | null;

  private zIndex: number;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super($root, { name: 'Point', listeners: ['click', 'mousedown'] }, presenter);
    this.emitter = emitter;
    this.pointElement = this.$root.$el;
    this.emitter.subscribe('update:pointData', (pointData: IPointData) => this.changePoint(pointData));
    this.emitter.subscribe('update:pointZIndex', (zIndex: number) => this.zIndexChange(zIndex));
  }

  init() {
    super.init();
    this.pointValueElement = this.pointElement.querySelector('.slider__point--value');
  }

  zIndexChange(pointZIndex: number) {
    this.zIndex = pointZIndex;
    this.pointElement.style.zIndex = this.zIndex.toString();
  }

  changePoint(pointData: IPointData) {
    if (this?.pointValueElement) {
      this.pointElement.style.left = `${pointData.pointPositionPercent}%`;
      this.pointValueElement.style.left = `${pointData.pointPositionPercent}%`;
      this.pointValueElement.innerHTML = pointData.value.toString();
    }
  }

  resize() {}

  // onClick(event: Event) {
  //
  // }

  onMousedown() {
    this.presenter.pointZIndexCalc();
    document.onmousemove = (event: MouseEvent) => {
      this.presenter.coordsCounter(event.pageX, false);
    };
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

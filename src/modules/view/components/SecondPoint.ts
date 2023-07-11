import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IPointData, IScaleData } from '@/interfaces.ts';

export default class SecondPoint extends SliderComponent {
  static className = 'slider__secondPoint';

  private emitter: Emitter;

  pointElement: HTMLElement;

  private pointValueElement: HTMLElement | null;

  private zIndex: number;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super($root, { name: 'SecondPoint', listeners: ['click', 'mousedown'] }, presenter);
    this.emitter = emitter;
    this.pointElement = this.$root.$el;
    this.emitter.subscribe('update:secondPointData', (pointData: IPointData) => this.changePoint(pointData));
    this.emitter.subscribe('update:secondPointZIndex', (zIndex: number) => this.zIndexChange(zIndex));
    this.emitter.subscribe('update:optionValues', (scaleData: IScaleData) => this.showInitValue(scaleData));
  }

  init() {
    super.init();
    this.pointValueElement = this.pointElement?.querySelector('.slider__secondPoint--value') || null;
  }

  showInitValue(scaleData: IScaleData) {
    if (this.pointValueElement) {
      this.pointValueElement.innerHTML = `${scaleData.max}`;
    }
  }

  zIndexChange(pointZIndex: number) {
    this.zIndex = pointZIndex;
    this.pointElement.style.zIndex = this.zIndex.toString();
  }

  changePoint(pointData: IPointData) {
    this.presenter.secondPointPositionCalc(this.pointElement.getBoundingClientRect().x);
    if (this?.pointValueElement) {
      this.pointElement.style.left = `${pointData.secondPointPositionPercent}%`;
      this.pointValueElement.style.left = `${pointData.secondPointPositionPercent}%`;
      this.pointValueElement.innerHTML = pointData.secondValue.toString();
    }
  }

  resize() {}

  onClick() {
    document.onclick = (event: MouseEvent) => this.presenter.coordsCounter(event.pageX, true, true);
  }

  onMousedown() {
    this.presenter.secondPointZIndexCalc();
    document.onmousemove = (event: MouseEvent) => {
      this.presenter.coordsCounter(event.pageX, true);
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
